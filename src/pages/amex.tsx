"use client";
import Link from "@/components/LegacyLink";
import {
  ArrowRight,
  BadgeCheck,
  Database,
  Filter,
  Layers,
  Lock,
  Network,
  Scale,
  SearchCheck,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { CaseStudyBlock as Block } from "@/components/CaseStudyBlock";
import { ThemeToggle } from "@/components/ThemeToggle";

const TITLE = "Can we see operational risk before it happens? — Aman Raj";
const DESC =
  "Mapping two years of operational-risk events at American Express to data failures, finding the gaps in early-warning coverage, and getting new data governance metrics approved.";


const tags = ["Product Analytics", "Data Governance", "Operational Risk", "Strategy"];

const steps = [
  {
    icon: Database,
    title: "Collect",
    text: "Two years of operational-risk events that occurred and were reported.",
  },
  { icon: Filter, title: "Filter", text: "Down to the events that were data-related." },
  {
    icon: Layers,
    title: "Map",
    text: "Each event to a pillar of the data taxonomy: stewardship, quality, fit for purpose, sensitivity, architecture.",
  },
  {
    icon: SearchCheck,
    title: "Check",
    text: "Whether a metric already existed to detect and report that risk.",
  },
  {
    icon: Scale,
    title: "Decide",
    text: "Where no metric existed, size the potential damage and decide whether to build one.",
  },
];

const pillars = [
  {
    icon: Users,
    name: "Data Stewardship",
    text: "Nobody clearly owns the dataset, so nobody answers for it or fixes it when it breaks.",
  },
  {
    icon: BadgeCheck,
    name: "Data Quality",
    text: "Records that are incomplete, duplicated, stale or simply wrong at the point of use.",
  },
  {
    icon: Target,
    name: "Fit for Purpose",
    text: "Data that exists, but cannot support the report, model or submission it is used for.",
  },
  {
    icon: Lock,
    name: "Data Sensitivity",
    text: "Personal or restricted data exposed, over-shared or handled outside policy.",
  },
  {
    icon: Network,
    name: "Data Architecture",
    text: "Fragile pipelines and undocumented dependencies that fail quietly downstream.",
  },
];

const branches = [
  { q: "Metric exists?", yes: "No action.", no: "Assess the impact." },
  {
    q: "Thresholds breached?",
    yes: "Design the new metric and take it to leadership.",
    no: "Monitor.",
  },
];

const bands = [
  { range: "95 and above", tone: "success", label: "Within appetite" },
  { range: "Below 95", tone: "warning", label: "Regulatory scrutiny risk" },
  { range: "Below 90", tone: "warningStrong", label: "Remediation program" },
  { range: "Below 85", tone: "destructive", label: "Possible penalties" },
] as const;

const bandStyles: Record<(typeof bands)[number]["tone"], string> = {
  success: "border-success/30 bg-success/10 text-success",
  warning: "border-warning/30 bg-warning/10 text-warning",
  warningStrong: "border-warning/50 bg-warning/20 text-warning",
  destructive: "border-destructive/30 bg-destructive/10 text-destructive",
};

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 overflow-x-auto rounded-xl border border-border bg-secondary px-4 py-3 font-mono text-sm text-secondary-foreground">
      {children}
    </p>
  );
}

function Pillar({ name }: { name: string }) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
      {name}
    </span>
  );
}

export default function CaseStudyPage() {
  const chip =
    "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-bold">
            Aman Raj
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="py-16 md:py-24">
          <Link to="/" hash="work" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            <ArrowRight className="h-4 w-4 rotate-180" /> All case studies
          </Link>
          <ul className="mt-8 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Can we see operational risk before it happens?{" "}
            <span className="text-muted-foreground">
              Building data governance metrics at American Express
            </span>
          </h1>
          <p className="mt-6 text-sm font-semibold text-primary">
            Product Manager – Product Analytics &amp; Strategy, American Express
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Operational risk events are usually explained after the damage is done. We asked a
            different question: did our data governance metrics warn us in advance?
          </p>
        </section>

        <Block eyebrow="Where we started" title="The problem">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              American Express had reported operational-risk events, but there was no clear view of
              how many were caused by data issues, or whether existing governance metrics would have
              flagged them early.
            </p>
            <p>
              The goal was to find out if we had enough metrics to detect risk beforehand — not to
              explain it better after the fact.
            </p>
          </div>
        </Block>

        <Block eyebrow="How I got there" title="The approach">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center justify-between">
                  <s.icon className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wider">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground lg:block" />
                )}
              </li>
            ))}
          </ol>
        </Block>

        <Block eyebrow="What made it defensible" title="The decision rule">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="text-base font-semibold leading-relaxed">
              A gap became a “build a metric” candidate only if the estimated impact breached both
              thresholds:
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              <li className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground">
                More than 100 employees affected
              </li>
              <li className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground">
                Revenue impact above $10M
              </li>
            </ul>
            <div className="mt-8 space-y-4 border-t border-border pt-8">
              {branches.map((b) => (
                <div key={b.q} className="grid items-center gap-3 md:grid-cols-[240px_1fr]">
                  <p className="rounded-xl bg-primary/10 px-4 py-3 text-sm font-bold text-primary">
                    {b.q}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <p className="rounded-xl border border-primary/30 px-4 py-3 text-sm">
                      <span className="font-semibold text-primary">Yes → </span>
                      {b.yes}
                    </p>
                    <p className="rounded-xl border border-border px-4 py-3 text-sm text-muted-foreground">
                      <span className="font-semibold">No → </span>
                      {b.no}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Block>

        <Block eyebrow="The taxonomy" title="The five pillars">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <p.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 text-sm font-bold leading-snug">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block eyebrow="What we built" title="The metrics we created">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-bold leading-snug">
                  Transaction Data Completeness Score
                </h3>
                <Pillar name="Data Quality" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">What it measures: </span>
                completeness of mandatory fields in transaction records.
              </p>
              <Formula>(Complete transaction records / Total transaction records) × 100</Formula>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Mandatory fields
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {[
                  "Transaction ID",
                  "Amount",
                  "Currency",
                  "Transaction Type",
                  "Timestamp",
                  "Account Numbers",
                  "Authorization Codes",
                ].map((f) => (
                  <li
                    key={f}
                    className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm">
                <span className="font-semibold">Example: </span>500,000 daily transactions, 750
                incomplete → 99.85%
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Why it matters: </span>every
                incomplete record costs time to investigate, and completeness below 99.5% risks
                regulatory reporting failures.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-bold leading-snug">
                  Regulatory Reporting Fitness Score
                </h3>
                <Pillar name="Fit for Purpose" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">What it measures: </span>how well
                data meets regulatory reporting requirements.
              </p>
              <Formula>0.4 × Format Compliance + 0.3 × Timeliness + 0.3 × Accuracy</Formula>
              <p className="mt-4 rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm">
                <span className="font-semibold">Example (Basel III style): </span>98 / 100 / 95 →
                97.7
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Escalation bands
              </p>
              <ul className="mt-2 space-y-2">
                {bands.map((b) => (
                  <li
                    key={b.range}
                    className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-sm font-medium ${bandStyles[b.tone]}`}
                  >
                    <span className="font-mono">{b.range}</span>
                    <span>{b.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-6 text-xs italic text-muted-foreground">
            Figures shown are illustrative and do not represent actual American Express data.
          </p>
        </Block>

        <Block eyebrow="Getting it approved" title="Leadership buy-in">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              The metrics went to senior leadership with the evidence behind them: the two years of
              events, the gaps in early-warning coverage, and the impact sizing behind each
              threshold.
            </p>
            <p>
              Approval came from translating a data gap into the two things leadership weighs — money
              and people — rather than presenting a framework in the abstract. The metrics were
              approved before being put in place.
            </p>
          </div>
        </Block>

        <Block eyebrow="Looking back" title="Outcome and what I learned">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                <ShieldCheck className="h-4 w-4" /> Outcome
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {[
                  "Gaps in early-warning coverage were identified and closed.",
                  "Governance moved from reactive reporting to proactive detection.",
                  "The new metrics were approved and adopted.",
                ].map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                <BadgeCheck className="h-4 w-4" /> What I learned
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {[
                  "Start from real incidents, not a theoretical framework.",
                  "Thresholds make prioritisation defensible.",
                  "Leadership approval depends on translating data gaps into money and people impact.",
                ].map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Block>

        <section className="border-t border-border py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/" hash="work" className={chip}>
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to all case studies
            </Link>
            <Link to="/case-studies/apple-tv-data-automation" className={`${chip} text-primary`}>
              Next: Apple TV data automation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Aman Raj</p>
        </div>
      </footer>
    </div>
  );
}
