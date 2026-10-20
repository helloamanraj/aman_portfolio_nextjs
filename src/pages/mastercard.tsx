"use client";
import Link from "@/components/LegacyLink";
import { ArrowRight, ClipboardCheck, FileSpreadsheet, FileText, Send, ShieldCheck, Users } from "lucide-react";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CaseStudyBlock as Block } from "@/components/CaseStudyBlock";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BillingPortalDemo } from "@/components/BillingPortalDemo";
import { Button } from "@/components/ui/button";

const TITLE = "From Manual Billing to End-to-End Product Automation";
const DESC = "Aman Raj’s Mastercard product transformation: unified billing, client insights and customer requests, reducing monthly manual billing effort by over 90%. Explore a fictional interactive portal.";

const problems = [
  { icon: FileText, title: "Billing was a manual process", text: "Teams updated and fixed code, prepared and renamed files, then manually ran the process to generate billing outputs." },
  { icon: FileSpreadsheet, title: "Client information was scattered", text: "Excel files and SQL queries held important billing and client details. Retrieving answers meant unnecessary back-and-forth." },
  { icon: Send, title: "Customer intake was disconnected", text: "The Commercial team collected customer opt-in and opt-out requests through separate Qualtrics forms, outside the product portal." },
];
const capabilities = [
  { icon: FileText, title: "Automated billing generation", text: "Authorized billing users generate MEDI, TI and TIP billing inside the product portal, without repetitive file preparation or manual process execution." },
  { icon: Users, title: "Centralized client insights", text: "Client, billing, subscription and opt-in/opt-out information come together in one searchable view, replacing fragmented lookups." },
  { icon: Send, title: "Integrated request management", text: "Commercial users submit customer requests inside the portal and track status in one shared history instead of a separate intake workflow." },
];
const lifecycle = [
  { title: "Discovery", text: "Gathered requirements across billing and Commercial workflows, focusing on where manual handoffs interrupted the experience." },
  { title: "Requirements", text: "Brought billing generation, client information and customer intake into a single product scope." },
  { title: "Prioritization", text: "Owned prioritization and stakeholder alignment across the three capabilities." },
  { title: "Design", text: "Embedded the workflows in the existing portal with clear actions, permissions and status visibility." },
  { title: "UAT", text: "Owned user acceptance testing to validate the workflows and coordinate feedback." },
  { title: "Delivery", text: "Led cross-functional delivery from requirements to the end-to-end experience." },
];
const impactData = [
  { name: "Before", hours: 200, label: "~200h" },
  { name: "After", hours: 10, label: "<10h · not to scale" },
];

function BeforeAfterDiagram() {
  const box = "rounded-lg border border-border bg-card px-3 py-2 text-center text-xs font-medium";
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <figure aria-label="Before: three fragmented manual workflows">
        <figcaption className="mb-4 text-sm font-semibold text-muted-foreground">Before · Fragmented workflows</figcaption>
        <div className="space-y-3">
          {["Code edits → file preparation → manual billing run", "Excel files → SQL queries → back-and-forth answers", "Qualtrics forms → separate intake → manual tracking"].map((text) => (
            <div key={text} className={box}>{text}</div>
          ))}
        </div>
        <svg aria-hidden viewBox="0 0 200 24" className="mt-3 w-full text-muted-foreground/50">
          <line x1="10" y1="12" x2="190" y2="12" stroke="currentColor" strokeDasharray="4 4" />
        </svg>
        <p className="mt-1 text-xs text-muted-foreground">Three disconnected paths, no shared visibility.</p>
      </figure>
      <figure aria-label="After: one integrated product portal">
        <figcaption className="mb-4 text-sm font-semibold text-primary">After · Integrated product portal</figcaption>
        <div className="space-y-3">
          {["Authorized user → generate billing → visible result", "Search client → subscription and billing insights", "Submit request → confirmation → tracked status"].map((text) => (
            <div key={text} className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 text-center text-xs font-medium">{text}</div>
          ))}
        </div>
        <svg aria-hidden viewBox="0 0 200 24" className="mt-3 w-full text-primary">
          <defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" /></marker></defs>
          <line x1="10" y1="12" x2="184" y2="12" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        </svg>
        <p className="mt-1 text-xs text-muted-foreground">One experience for billing, client information and requests.</p>
      </figure>
    </div>
  );
}

export default function MastercardCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-bold">Aman Raj</Link>
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-16 md:py-24">
          <Button asChild variant="link" className="h-auto p-0"><Link to="/" hash="work"><ArrowRight className="rotate-180" />All case studies</Link></Button>
          <p className="mt-8 text-xs font-semibold uppercase text-primary">Mastercard · Product transformation</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">{TITLE}</h1>
          <p className="mt-6 text-sm font-semibold text-primary">Senior Technical Product Manager, Payment Performance Intelligence</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I led billing automation across MEDI, TI and TIP — a product suite with a ~$100M annual revenue base — bringing billing, client information and customer requests into one portal experience.
          </p>
          <div className="mt-10 grid gap-6 border-y border-border py-6 sm:grid-cols-3">
            <div><p className="text-3xl font-extrabold text-primary">90%+</p><p className="mt-2 text-sm text-muted-foreground">Reduction in manual billing effort</p></div>
            <div><p className="text-3xl font-extrabold text-primary">~200 → &lt;10</p><p className="mt-2 text-sm text-muted-foreground">Hours of manual work per month</p></div>
            <div><p className="text-3xl font-extrabold text-primary">~$100M</p><p className="mt-2 text-sm text-muted-foreground">Annual product-suite revenue context — not revenue attributable to this initiative</p></div>
          </div>
        </section>

        <div id="overview" className="scroll-mt-24"><Block eyebrow="The scope" title="Project overview"><div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground"><p>I led end-to-end product management of billing automation across Mastercard Early Detect Indicator (MEDI), Transaction Investigator (TI), and Transaction Investigator Plus (TIP).</p><p>I owned requirements gathering, prioritization, UAT, stakeholder alignment and cross-functional delivery. This was not a script-automation exercise: it brought three fragmented workflows into one product portal.</p></div></Block></div>

        <div id="problem" className="scroll-mt-24"><Block eyebrow="Before the transformation" title="The problem"><div className="grid gap-4 md:grid-cols-3">{problems.map((item) => <article key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-sm"><item.icon aria-hidden className="h-5 w-5 text-primary" /><h3 className="mt-4 font-bold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div></Block></div>

        <div id="before-after" className="scroll-mt-24"><Block eyebrow="From handoffs to one experience" title="Before and after"><BeforeAfterDiagram /></Block></div>

        <div id="solution" className="scroll-mt-24"><Block eyebrow="Three capabilities, one portal" title="The solution"><div className="grid gap-6 md:grid-cols-3">{capabilities.map((item) => <article key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-sm"><item.icon aria-hidden className="h-5 w-5 text-primary" /><h3 className="mt-4 font-bold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div></Block></div>

        <section id="prototype" className="scroll-mt-24 border-t border-border py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Explore the experience</p>
          <h2 className="mb-3 mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Interactive portal prototype</h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">Demonstration using fictional data. Not connected to any Mastercard system. Nothing is sent anywhere; use “Reset demo” to restore the initial state.</p>
          <BillingPortalDemo />
        </section>

        <div id="lifecycle" className="scroll-mt-24"><Block eyebrow="My product ownership" title="Product management lifecycle">
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {lifecycle.map((step, i) => (
              <li key={step.title} className="relative border-t-2 border-primary/30 pt-5">
                <span className="text-xs font-semibold text-primary">0{i + 1}</span>
                <h3 className="mt-3 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Block></div>

        <div id="impact" className="scroll-mt-24"><Block eyebrow="The operational outcome" title="Business impact">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold">Over 90% less manual billing effort</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">The initiative reduced manual billing work from approximately 200 hours to fewer than 10 hours per month. Teams gained one place to generate billing, find client information and manage customer requests — fewer manual steps, less back-and-forth.</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">The approximately $100M annual revenue figure describes the product suite’s scale, not incremental revenue generated by this initiative.</p>
            </div>
            <figure aria-label="Manual billing effort: approximately 200 hours before, fewer than 10 hours after" className="rounded-xl border border-border bg-card p-6">
              <figcaption className="mb-4 text-sm font-semibold">Monthly manual billing effort (hours)</figcaption>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impactData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                    <YAxis hide domain={[0, 220]} />
                    <Bar dataKey="hours" radius={[6, 6, 0, 0]} label={{ position: "top", fontSize: 12, formatter: (v: unknown, entry: unknown) => (entry as { label?: string })?.label ?? "" }}>
                      {impactData.map((entry) => <Cell key={entry.name} fill={entry.name === "After" ? "var(--primary)" : "var(--muted-foreground)"} opacity={entry.name === "After" ? 1 : 0.35} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">After value shown as &lt;10, not to scale.</p>
            </figure>
          </div>
        </Block></div>

        <div id="tradeoffs" className="scroll-mt-24"><Block eyebrow="Balancing simplicity with control" title="Product trade-offs"><dl className="grid gap-6 sm:grid-cols-2">{[
          ["Access control", "A one-click workflow should not mean unrestricted access. Billing generation is reserved for authorized billing users; customer intake belongs to Commercial users."],
          ["Validation", "Convenience needs safeguards. The workflow checks required inputs and flags duplicate billing runs for the same product and period before regenerating."],
          ["Exception handling", "Clear errors are preferable to silent failures. Failures stay visible with a retry path, without creating a misleading success state."],
          ["Operational oversight", "History and visible statuses preserve context after an action. Review statuses are explicit human decisions; the portal does not automate approvals."],
        ].map(([title, text]) => <div key={title} className="border-t border-border pt-5"><dt className="flex items-center gap-2 font-bold"><ShieldCheck aria-hidden className="h-4 w-4 text-primary" />{title}</dt><dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</dd></div>)}</dl></Block></div>

        <div id="learnings" className="scroll-mt-24"><Block eyebrow="Final reflection" title="Key learnings"><ul className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">{["I see automation as a product transformation when it removes fragmented handoffs, not just repetitive execution.", "Requirements, stakeholder alignment and UAT matter as much as the final interface.", "A simple operational experience still needs clear ownership, permissions, validation and visibility."].map((text) => <li key={text} className="flex gap-3"><ClipboardCheck aria-hidden className="mt-1 h-4 w-4 shrink-0 text-primary" />{text}</li>)}</ul></Block></div>

        <section className="flex flex-col gap-4 border-t border-border py-14 sm:flex-row sm:justify-between">
          <Button asChild variant="outline" className="h-auto whitespace-normal py-3"><Link to="/" hash="work"><ArrowRight className="rotate-180" />Back to all case studies</Link></Button>
          <Button asChild variant="outline" className="h-auto whitespace-normal py-3 text-primary"><Link to="/case-studies/amex-data-governance-risk">Next: Data governance at Amex<ArrowRight /></Link></Button>
        </section>
      </main>
      <footer className="border-t border-border bg-secondary"><div className="mx-auto max-w-5xl px-6 py-10 text-sm text-muted-foreground">© {new Date().getFullYear()} Aman Raj</div></footer>
    </div>
  );
}
