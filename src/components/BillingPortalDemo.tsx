import {
  createContext, useContext, useEffect, useMemo, useReducer, useState, type ReactNode,
} from "react";
import {
  Activity, BarChart3, CheckCircle2, FileText, Loader2, Lock, RotateCcw, Search, Send, Users, X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  canGenerateBilling, canReviewRequests, canSubmitRequest, demoClients, filterClients,
  products, reviewStatuses, validateRequest, type DemoRole, type ReviewStatus,
} from "@/lib/billing-demo";

type BillingRow = { id: string; product: string; period: string; status: string };
type RequestRow = { id: string; clientId: string; product: string; type: string; date: string; status: ReviewStatus };
type ActivityRow = { id: number; type: "Billing" | "Request" | "Status" | "Role" | "System"; text: string };

type State = {
  role: DemoRole;
  history: BillingRow[];
  requests: RequestRow[];
  activity: ActivityRow[];
};
type Action =
  | { type: "role"; role: DemoRole }
  | { type: "billing"; row: BillingRow; note: string }
  | { type: "request"; row: RequestRow; note: string }
  | { type: "status"; id: string; status: ReviewStatus }
  | { type: "reset" };

const initialState: State = {
  role: "billing",
  history: [{ id: "BL-0041", product: "TI", period: "2026-08", status: "Completed" }],
  requests: [
    { id: "RQ-1017", clientId: "CL-1003", product: "TIP", type: "Opt-out", date: "2026-09-14", status: "In Review" },
    { id: "RQ-1016", clientId: "CL-1001", product: "MEDI", type: "Opt-in", date: "2026-09-12", status: "Approved" },
  ],
  activity: [{ id: 0, type: "System", text: "Demo initialized — fictional records loaded." }],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "role":
      return {
        ...state, role: action.role,
        activity: [{ id: Date.now(), type: "Role", text: `Switched to ${action.role === "billing" ? "Billing" : "Commercial"} user.` }, ...state.activity],
      };
    case "billing":
      return {
        ...state, history: [action.row, ...state.history],
        activity: [{ id: Date.now(), type: "Billing", text: action.note }, ...state.activity],
      };
    case "request":
      return {
        ...state, requests: [action.row, ...state.requests],
        activity: [{ id: Date.now(), type: "Request", text: action.note }, ...state.activity],
      };
    case "status": {
      const target = state.requests.find((r) => r.id === action.id);
      return {
        ...state,
        requests: state.requests.map((r) => (r.id === action.id ? { ...r, status: action.status } : r)),
        activity: target
          ? [{ id: Date.now(), type: "Status", text: `Request ${action.id} set to ${action.status}.` }, ...state.activity]
          : state.activity,
      };
    }
    case "reset":
      return { ...initialState, role: state.role };
  }
}

const DemoContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);
function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("DemoContext missing");
  return ctx;
}

const sections = [
  { id: "Overview", icon: BarChart3 }, { id: "Generate Billing", icon: FileText },
  { id: "Client Insights", icon: Users }, { id: "Customer Requests", icon: Send }, { id: "Activity History", icon: Activity },
];
const billingSteps = ["Validating inputs", "Preparing files", "Generating output", "Running checks"];

function Field({ label, id, children }: { label: string; id: string; children: ReactNode }) {
  return <div className="space-y-2"><Label htmlFor={id}>{label}</Label>{children}</div>;
}
const selectClass = "h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function BillingPortalDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [section, setSection] = useState("Overview");

  function switchRole(role: DemoRole) {
    if (role === state.role) return;
    dispatch({ type: "role", role });
    toast(`Now viewing as ${role === "billing" ? "Billing User" : "Commercial User"}`, {
      description: role === "billing" ? "You can generate billing and review requests." : "You can view clients and submit requests.",
    });
  }

  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="flex flex-col gap-4 border-b border-border bg-secondary/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <p className="font-bold">Product operations portal</p>
            <p className="mt-1 text-xs text-muted-foreground">Demonstration using fictional data. Not connected to any Mastercard system.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Tabs value={state.role} onValueChange={(v) => switchRole(v as DemoRole)}>
              <TabsList aria-label="Demo user role">
                <TabsTrigger value="billing">Billing User</TabsTrigger>
                <TabsTrigger value="commercial">Commercial User</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" size="sm" onClick={() => { dispatch({ type: "reset" }); setSection("Overview"); toast("Demo reset", { description: "All fictional records restored to their initial state." }); }}>
              <RotateCcw />Reset demo
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-[200px_1fr]">
          <nav aria-label="Portal sections" className="hidden border-r border-border bg-secondary/30 p-3 md:flex md:flex-col md:gap-1">
            {sections.map((item) => (
              <Button key={item.id} variant={section === item.id ? "secondary" : "ghost"} onClick={() => setSection(item.id)} aria-current={section === item.id ? "page" : undefined} className="justify-start text-xs">
                <item.icon />{item.id}
              </Button>
            ))}
          </nav>
          <div className="min-w-0 p-4 pb-24 sm:p-7 md:pb-7">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold">{section}</h3>
              <span className="text-xs font-medium text-muted-foreground">{state.role === "billing" ? "Billing team" : "Commercial team"}</span>
            </div>
            {section === "Overview" && <Overview go={setSection} />}
            {section === "Generate Billing" && <GenerateBilling />}
            {section === "Client Insights" && <ClientInsights />}
            {section === "Customer Requests" && <CustomerRequests />}
            {section === "Activity History" && <ActivityHistory />}
          </div>
        </div>
        <nav aria-label="Portal sections" className="fixed inset-x-0 bottom-0 z-10 flex justify-around border-t border-border bg-card/95 p-2 backdrop-blur md:hidden">
          {sections.map((item) => (
            <button key={item.id} onClick={() => setSection(item.id)} aria-current={section === item.id ? "page" : undefined} aria-label={item.id}
              className={`flex flex-col items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${section === item.id ? "text-primary" : "text-muted-foreground"}`}>
              <item.icon className="h-4 w-4" />{item.id.split(" ")[0]}
            </button>
          ))}
        </nav>
      </div>
    </DemoContext.Provider>
  );
}

function Overview({ go }: { go: (s: string) => void }) {
  const { state } = useDemo();
  return (
    <>
      <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        One portal for billing generation, client insights and customer requests across MEDI, TI and TIP. Everything here is simulated with fictional data.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[{ label: "Fictional clients", value: demoClients.length }, { label: "Billing runs", value: state.history.length }, { label: "Customer requests", value: state.requests.length }].map((item) => (
          <div key={item.label} className="rounded-lg border border-border p-4"><p className="text-2xl font-bold text-primary">{item.value}</p><p className="mt-1 text-xs text-muted-foreground">{item.label}</p></div>
        ))}
      </div>
      <div className="my-6 flex flex-wrap gap-3">
        <Button onClick={() => go(state.role === "billing" ? "Generate Billing" : "Customer Requests")}>
          {state.role === "billing" ? <FileText /> : <Send />}{state.role === "billing" ? "Generate billing" : "Submit a request"}
        </Button>
        <Button variant="outline" onClick={() => go("Client Insights")}><Users />View clients</Button>
      </div>
      <h4 className="mb-3 text-sm font-semibold">Recent activity</h4>
      <ol className="space-y-3">
        {state.activity.slice(0, 4).map((row) => (
          <li key={row.id} className="flex gap-3 border-b border-border pb-3 text-sm text-muted-foreground"><Activity aria-hidden className="h-4 w-4 shrink-0 text-primary" />{row.text}</li>
        ))}
      </ol>
    </>
  );
}

function GenerateBilling() {
  const { state, dispatch } = useDemo();
  const [product, setProduct] = useState("MEDI");
  const [period, setPeriod] = useState("2026-09");
  const [step, setStep] = useState(-1);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [simulateException, setSimulateException] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const allowed = canGenerateBilling(state.role);
  const processing = step >= 0;
  const duplicate = state.history.some((row) => row.product === product && row.period === period);

  async function runGeneration() {
    setError(""); setMessage("");
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(period)) { setError("Select a valid billing period."); return; }
    for (let i = 0; i < billingSteps.length; i++) {
      setStep(i);
      await new Promise((r) => setTimeout(r, 625));
      if (simulateException && i === 2) {
        setStep(-1);
        setError("Simulated exception: output validation failed while generating files. No billing was created.");
        return;
      }
    }
    const row = { id: `BL-${String(42 + state.history.length).padStart(4, "0")}`, product, period, status: "Completed" };
    dispatch({ type: "billing", row, note: `Billing completed: ${product} · ${period} · Billing User.` });
    setMessage(`${product} billing for ${period} generated. Simulated output: ${product.toLowerCase()}-billing-${period}.csv`);
    setStep(-1);
  }
  function onGenerate() {
    if (duplicate) { setConfirmOpen(true); return; }
    void runGeneration();
  }

  if (!allowed) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-border p-10 text-center">
        <Lock aria-hidden className="h-8 w-8 text-muted-foreground" />
        <p className="max-w-sm text-sm text-muted-foreground">Restricted to authorized billing users. Switch to the Billing User role to try generation.</p>
      </div>
    );
  }
  return (
    <>
      <form onSubmit={(e) => { e.preventDefault(); onGenerate(); }} className="space-y-5" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Product" id="billing-product">
            <select id="billing-product" value={product} onChange={(e) => setProduct(e.target.value)} className={selectClass} disabled={processing}>
              {products.map((v) => <option key={v}>{v}</option>)}
            </select>
          </Field>
          <Field label="Billing period" id="billing-period">
            <Input id="billing-period" type="month" value={period} onChange={(e) => setPeriod(e.target.value)} disabled={processing} />
          </Field>
        </div>
        <label htmlFor="simulate-exception" className="flex items-center gap-3 text-sm">
          <Switch id="simulate-exception" checked={simulateException} onCheckedChange={setSimulateException} disabled={processing} />
          Simulate exception
        </label>
        <Button type="submit" disabled={processing}>
          {processing ? <Loader2 className="animate-spin" /> : <FileText />}{processing ? "Generating…" : "Generate Billing"}
        </Button>
        {processing && (
          <ol aria-label="Generation progress" className="space-y-2 rounded-lg border border-border p-4">
            {billingSteps.map((label, i) => (
              <li key={label} className={`flex items-center gap-2 text-sm ${i < step ? "text-success" : i === step ? "font-medium" : "text-muted-foreground"}`}>
                {i < step ? <CheckCircle2 className="h-4 w-4" /> : i === step ? <Loader2 className="h-4 w-4 animate-spin" /> : <span className="h-4 w-4 rounded-full border border-border" />}
                {label}
              </li>
            ))}
          </ol>
        )}
        {error && (
          <div role="alert" className="flex flex-wrap items-center gap-3 border border-destructive/30 bg-destructive/10 p-4 text-sm">
            <span>{error}</span>
            <Button type="button" size="sm" variant="outline" onClick={() => { setError(""); void runGeneration(); }}>Retry</Button>
          </div>
        )}
        {message && <p role="status" className="flex gap-2 border border-success/30 bg-success/10 p-4 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-success" />{message}</p>}
      </form>
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate billing?</AlertDialogTitle>
            <AlertDialogDescription>{product} billing for {period} already exists in this demo. Regenerating will add another simulated run.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => void runGeneration()}>Regenerate anyway</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <h4 className="mb-3 mt-8 text-sm font-semibold">Recent billing history</h4>
      <BillingTable rows={state.history} />
    </>
  );
}

function BillingTable({ rows }: { rows: BillingRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-96 text-left text-sm">
        <caption className="sr-only">Recent simulated billing history</caption>
        <thead className="border-b border-border text-muted-foreground"><tr>{["Reference", "Product", "Period", "Status"].map((t) => <th key={t} className="px-3 py-3 font-medium">{t}</th>)}</tr></thead>
        <tbody>{rows.map((row) => <tr key={row.id} className="border-b border-border"><td className="px-3 py-3">{row.id}</td><td className="px-3 py-3">{row.product}</td><td className="px-3 py-3">{row.period}</td><td className="px-3 py-3 text-success">{row.status}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

function ClientInsights() {
  const [query, setQuery] = useState("");
  const [productFilter, setProductFilter] = useState("All");
  const [subscriptionFilter, setSubscriptionFilter] = useState("All");
  const [optInFilter, setOptInFilter] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);
  const clients = useMemo(() => filterClients(query, productFilter, subscriptionFilter, optInFilter), [query, productFilter, subscriptionFilter, optInFilter]);
  const detail = demoClients.find((c) => c.id === selected);
  const active = demoClients.filter((c) => c.subscription === "Active").length;
  const optedIn = demoClients.filter((c) => c.optIn).length;

  return (
    <>
      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        {[{ label: "Total clients", value: demoClients.length }, { label: "Active subscriptions", value: active }, { label: "Opted in", value: optedIn }].map((item) => (
          <div key={item.label} className="rounded-lg border border-border p-4"><p className="text-2xl font-bold text-primary">{item.value}</p><p className="mt-1 text-xs text-muted-foreground">{item.label} · sample data</p></div>
        ))}
      </div>
      <div className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field id="client-search" label="Search clients">
          <div className="relative"><Search aria-hidden className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" /><Input id="client-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name or client ID" className="pl-9" /></div>
        </Field>
        <Field id="client-product-filter" label="Product">
          <select id="client-product-filter" className={selectClass} value={productFilter} onChange={(e) => setProductFilter(e.target.value)}>{["All", ...products].map((v) => <option key={v}>{v}</option>)}</select>
        </Field>
        <Field id="client-subscription-filter" label="Subscription">
          <select id="client-subscription-filter" className={selectClass} value={subscriptionFilter} onChange={(e) => setSubscriptionFilter(e.target.value)}>{["All", "Active", "Paused"].map((v) => <option key={v}>{v}</option>)}</select>
        </Field>
        <Field id="client-optin-filter" label="Opt-in status">
          <select id="client-optin-filter" className={selectClass} value={optInFilter} onChange={(e) => setOptInFilter(e.target.value)}>{["All", "Opted in", "Opted out"].map((v) => <option key={v}>{v}</option>)}</select>
        </Field>
      </div>
      <p className="mb-3 text-xs text-muted-foreground">{clients.length} matching fictional records</p>
      {loading ? (
        <div className="space-y-2" aria-label="Loading clients">{[0, 1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-11 w-full" />)}</div>
      ) : clients.length ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <caption className="sr-only">Fictional client records</caption>
            <thead className="border-b border-border text-muted-foreground"><tr>{["Client", "Region", "Products", "Subscription", "Opt-in", ""].map((l, i) => <th key={i} className="px-3 py-3 font-medium">{l}</th>)}</tr></thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="cursor-pointer border-b border-border transition-colors hover:bg-secondary/40" onClick={() => setSelected(client.id)}>
                  <td className="px-3 py-3"><p className="font-medium">{client.name}</p><p className="text-xs text-muted-foreground">{client.id}</p></td>
                  <td className="px-3 py-3">{client.region}</td>
                  <td className="px-3 py-3">{client.products.join(", ")}</td>
                  <td className="px-3 py-3">{client.subscription}</td>
                  <td className="px-3 py-3">{client.optIn ? "Opted in" : "Opted out"}</td>
                  <td><Button variant="link" onClick={(e) => { e.stopPropagation(); setSelected(client.id); }} aria-label={`View ${client.name}`}>View</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">No clients match these filters.</p>
          <Button variant="link" onClick={() => { setQuery(""); setProductFilter("All"); setSubscriptionFilter("All"); setOptInFilter("All"); }}>Clear filters</Button>
        </div>
      )}
      {detail && (
        <section aria-label={`Client record for ${detail.name}`} className="mt-6 rounded-lg border border-border bg-secondary/30 p-5">
          <div className="flex items-center justify-between">
            <h4 className="font-bold">{detail.name}</h4>
            <Button variant="ghost" size="sm" onClick={() => setSelected(null)} aria-label="Close client record"><X />Close</Button>
          </div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            {[["Client ID", detail.id], ["Region", detail.region], ["Products", detail.products.join(", ")], ["Subscription", detail.subscription], ["Opt-in status", detail.optIn ? "Opted in" : "Opted out"]].map(([label, value]) => (
              <div key={label}><dt className="text-xs text-muted-foreground">{label}</dt><dd className="mt-1 text-sm font-medium">{value}</dd></div>
            ))}
          </dl>
          <h5 className="mt-5 text-xs font-semibold uppercase text-muted-foreground">Billing history · sample data</h5>
          <ul className="mt-2 space-y-1 text-sm">
            {detail.billingHistory.map((row) => <li key={row.period} className="flex justify-between border-b border-border py-2"><span>{row.period}</span><span className="font-medium">{row.amount}</span></li>)}
          </ul>
        </section>
      )}
    </>
  );
}

function CustomerRequests() {
  const { state, dispatch } = useDemo();
  const [clientId, setClientId] = useState("");
  const [product, setProduct] = useState("MEDI");
  const [type, setType] = useState("Opt-in");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const today = new Date().toISOString().slice(0, 10);
  const allowed = canSubmitRequest(state.role);
  const rows = state.requests.filter((r) => statusFilter === "All" || r.status === statusFilter);

  function submit() {
    setMessage("");
    const err = validateRequest(state.role, clientId, product, state.requests);
    setError(err);
    if (err) return;
    const row: RequestRow = { id: `RQ-${1018 + state.requests.length}`, clientId, product, type, date: today, status: "Submitted" };
    dispatch({ type: "request", row, note: `${type} request ${row.id} submitted: ${clientId} · ${product} · Commercial User.` });
    setMessage(`Request ${row.id} submitted for ${clientId}. Status: Submitted.`);
    setClientId("");
  }

  return (
    <>
      {!allowed && <p role="status" className="mb-5 border-l-2 border-warning bg-warning/10 p-4 text-sm">Commercial users submit requests. As a Billing User you can review and set simulated statuses below.</p>}
      <form noValidate onSubmit={(e) => { e.preventDefault(); submit(); }} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Client ID" id="request-client">
            <select id="request-client" className={selectClass} value={clientId} onChange={(e) => setClientId(e.target.value)} disabled={!allowed}>
              <option value="">Select a client</option>
              {demoClients.map((c) => <option key={c.id} value={c.id}>{c.id} · {c.name}</option>)}
            </select>
          </Field>
          <Field label="Product" id="request-product">
            <select id="request-product" className={selectClass} value={product} onChange={(e) => setProduct(e.target.value)} disabled={!allowed}>{products.map((v) => <option key={v}>{v}</option>)}</select>
          </Field>
          <Field label="Request type" id="request-type">
            <select id="request-type" className={selectClass} value={type} onChange={(e) => setType(e.target.value)} disabled={!allowed}><option>Opt-in</option><option>Opt-out</option></select>
          </Field>
          <Field label="Submission date" id="request-date">
            <Input id="request-date" value={today} readOnly disabled aria-readonly />
          </Field>
        </div>
        <Button type="submit" disabled={!allowed}><Send />Submit request</Button>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        {message && <p role="status" className="border border-success/30 bg-success/10 p-4 text-sm">{message}</p>}
      </form>
      <div className="mb-3 mt-8 flex flex-wrap items-center justify-between gap-3">
        <h4 className="text-sm font-semibold">Request history</h4>
        <select aria-label="Filter by status" className={`${selectClass} w-auto`} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          {["All", ...reviewStatuses].map((v) => <option key={v}>{v}</option>)}
        </select>
      </div>
      {rows.length ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Fictional customer request history</caption>
            <thead className="border-b border-border text-muted-foreground"><tr>{["ID", "Client", "Product", "Request", "Submitted", "Status", ...(canReviewRequests(state.role) ? ["Set status"] : [])].map((l) => <th key={l} className="px-3 py-3 font-medium">{l}</th>)}</tr></thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-border">
                  <td className="px-3 py-3">{row.id}</td><td className="px-3 py-3">{row.clientId}</td><td className="px-3 py-3">{row.product}</td><td className="px-3 py-3">{row.type}</td><td className="px-3 py-3">{row.date}</td>
                  <td className="px-3 py-3"><span className={`rounded-full px-2 py-0.5 text-xs font-medium ${row.status === "Approved" ? "bg-success/15 text-success" : row.status === "Rejected" ? "bg-destructive/15 text-destructive" : "bg-secondary text-muted-foreground"}`}>{row.status}</span></td>
                  {canReviewRequests(state.role) && (
                    <td className="px-3 py-3">
                      <select aria-label={`Set status for ${row.id}`} className={`${selectClass} h-8 w-auto text-xs`} value={row.status} onChange={(e) => dispatch({ type: "status", id: row.id, status: e.target.value as ReviewStatus })}>
                        {reviewStatuses.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">No requests with this status.</p>
          <Button variant="link" onClick={() => setStatusFilter("All")}>Clear filter</Button>
        </div>
      )}
    </>
  );
}

function ActivityHistory() {
  const { state } = useDemo();
  const [typeFilter, setTypeFilter] = useState("All");
  const types = ["All", "Billing", "Request", "Status", "Role", "System"];
  const rows = state.activity.filter((a) => typeFilter === "All" || a.type === typeFilter);
  return (
    <>
      <div className="mb-4 flex justify-end">
        <select aria-label="Filter activity by type" className={`${selectClass} w-auto`} value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      {rows.length ? (
        <ol className="space-y-4">
          {rows.map((row) => (
            <li key={row.id} className="flex gap-3 border-b border-border pb-4 text-sm">
              <Activity aria-hidden className="h-4 w-4 shrink-0 text-primary" />
              <span><span className="mr-2 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">{row.type}</span>{row.text}</span>
            </li>
          ))}
        </ol>
      ) : (
        <div className="border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">No activity of this type yet.</p>
          <Button variant="link" onClick={() => setTypeFilter("All")}>Clear filter</Button>
        </div>
      )}
    </>
  );
}
