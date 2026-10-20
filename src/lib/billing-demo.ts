export const products = ["MEDI", "TI", "TIP"] as const;
export type Product = (typeof products)[number];
export type DemoRole = "billing" | "commercial";
export type ReviewStatus = "Submitted" | "In Review" | "Approved" | "Rejected";
export const reviewStatuses: ReviewStatus[] = ["Submitted", "In Review", "Approved", "Rejected"];

export function canGenerateBilling(role: DemoRole) {
  return role === "billing";
}
export function canSubmitRequest(role: DemoRole) {
  return role === "commercial";
}
export function canReviewRequests(role: DemoRole) {
  return role === "billing";
}

export type DemoClient = {
  id: string;
  name: string;
  region: string;
  products: Product[];
  subscription: "Active" | "Paused";
  optIn: boolean;
  billingHistory: { period: string; amount: string }[];
};

const names = [
  "Northstar Bank", "Meridian Payments", "Harbor Financial", "Summit Credit",
  "Blue Ridge Capital", "Cobalt Card Services", "Fairwind Bank", "Ironbridge Finance",
  "Lakeshore Trust", "Maple Gate Payments", "Oakfield Bank", "Pinnacle Credit Union",
  "Quartzline Financial", "Riverstone Bank", "Silverpine Payments", "Stonehaven Capital",
  "Tidewater Bank", "Upland Financial", "Verdant Card Group", "Westbrook Trust",
  "Yellowbrick Payments", "Zephyr Credit", "Atlas Grove Bank", "Beacon Hill Finance",
];
const regions = ["North America", "Europe", "Asia Pacific", "Latin America", "Middle East & Africa"];

export const demoClients: DemoClient[] = names.map((name, i) => {
  const id = `CL-${1001 + i}`;
  const productSet: Product[] =
    i % 4 === 0 ? ["MEDI", "TI", "TIP"] : i % 4 === 1 ? ["MEDI", "TI"] : i % 4 === 2 ? ["TI", "TIP"] : [products[i % 3] as Product];
  const subscription = i % 5 === 2 ? "Paused" : "Active";
  const optIn = i % 3 !== 2;
  const base = 3200 + ((i * 1373) % 9800);
  return {
    id,
    name,
    region: regions[i % regions.length] as string,
    products: productSet,
    subscription,
    optIn,
    billingHistory: [
      { period: "2026-09", amount: subscription === "Active" ? `$${base.toLocaleString("en-US")}` : "$0" },
      { period: "2026-08", amount: `$${(base + 400).toLocaleString("en-US")}` },
      { period: "2026-07", amount: `$${(base - 250).toLocaleString("en-US")}` },
    ],
  };
});

export function filterClients(query: string, product: string, subscription: string, optIn: string) {
  const search = query.trim().toLowerCase();
  return demoClients.filter(
    (client) =>
      `${client.id} ${client.name}`.toLowerCase().includes(search) &&
      (product === "All" || client.products.includes(product as Product)) &&
      (subscription === "All" || client.subscription === subscription) &&
      (optIn === "All" || (optIn === "Opted in") === client.optIn),
  );
}

export function validateRequest(
  role: DemoRole,
  clientId: string,
  product: string,
  pending: { clientId: string; product: string; status: ReviewStatus }[],
) {
  if (!canSubmitRequest(role)) return "Only Commercial users can submit customer requests.";
  const client = demoClients.find((c) => c.id === clientId);
  if (!client) return "Select a valid fictional client.";
  if (!products.some((value) => value === product)) return "Select MEDI, TI or TIP.";
  if (!client.products.includes(product as Product))
    return `${client.name} is not subscribed to ${product} in this sample data.`;
  if (pending.some((r) => r.clientId === clientId && r.product === product && (r.status === "Submitted" || r.status === "In Review")))
    return "A pending request already exists for this client and product.";
  return "";
}
