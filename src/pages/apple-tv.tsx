"use client";
import Link from "@/components/LegacyLink";
import { ArrowDown, ArrowRight, BarChart3, CheckCheck, Clock, Code, Database, FileSpreadsheet, FileText, Layers, ShieldCheck, TriangleAlert } from "lucide-react";
import { CaseStudyBlock as Block } from "@/components/CaseStudyBlock";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TITLE = "Automating revenue and production data extraction for Apple TV";
const DESC = "How Aman Raj built a Python and SQL pipeline in 2021 to turn inconsistent Apple TV production PDFs into validated data and live Tableau executive dashboards.";
const BADGE = "Built in 2021: dynamic text parsing before the generative AI boom";


const challenges = [
  { icon: Layers, title: "Unstructured and inconsistent", text: "Every show, series or film submitted cast, crew, producers, directors, episodic fee breakdowns and contract details in different PDF layouts." },
  { icon: Clock, title: "Manual bottlenecks", text: "Revenue and operations teams reviewed every PDF by hand and typed metrics into separate database files and dashboards." },
  { icon: TriangleAlert, title: "Scalability risk", text: "As the original content library grew, manual entry caused reporting delays and raised the risk of errors in key financial calculations." },
];
const pipeline = [
  { icon: FileText, title: "Diverse PDF production files" },
  { icon: Code, title: "Dynamic Python extraction engine" },
  { icon: Database, title: "Automated SQL validation and staging" },
  { icon: BarChart3, title: "Live Tableau executive dashboard" },
];
const workings = [
  { id: "extraction", label: "Python extraction", icon: Code, title: "Dynamic PDF extraction engine", text: "I built a Python model that parses PDFs with varying schemas, column structures and text ordering. It extracts cast, crew, production credits, episode counts and financial figures." },
  { id: "validation", label: "SQL validation", icon: ShieldCheck, title: "SQL validation and integration", text: "I automated scripts to cross-check extracted numbers against baseline rules and logic before anything is written to the database. Anomalies are flagged automatically for review so financial reporting stays audit-ready." },
  { id: "dashboard", label: "Tableau dashboard", icon: BarChart3, title: "Executive dashboard in Tableau", text: "The validated database feeds an interactive dashboard showing production budgets, talent expenses and revenue per title. It updates as new PDFs are uploaded." },
];
const decisions = [
  "Validate before load, never after: bad numbers never reach the dashboard.",
  "Build for layout variety, not one template: the parser adapts to schema differences.",
  "Make anomalies visible: exceptions are flagged for a human instead of being silently fixed.",
];
const impacts = [
  { icon: CheckCheck, title: "End-to-end automation", text: "Manual data entry replaced by ingestion-to-visualization." },
  { icon: Clock, title: "Faster decisions", text: "Reporting turnaround cut from days to near real-time on upload." },
  { icon: ShieldCheck, title: "Higher accuracy", text: "Automated validation checks supported clean financial reporting." },
];

export default function AppleTVCaseStudy() {
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
          <Button asChild variant="link" className="h-auto justify-start p-0">
            <Link to="/" hash="work"><ArrowRight className="rotate-180" /> All case studies</Link>
          </Button>
          <p className="mt-8 text-sm font-semibold text-muted-foreground">2021</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {["Data Engineering", "Automation", "Python", "SQL", "Tableau"].map(tag => (
              <li key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{tag}</li>
            ))}
          </ul>
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">{TITLE}</h1>
          <p className="mt-6 text-sm font-semibold text-primary">Associate, Analytics &amp; Insights, Cognizant</p>
          <span className="mt-5 inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold leading-relaxed text-primary">{BADGE}</span>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Before AI tools made unstructured data easy, this took custom engineering. I built the pipeline that turned inconsistent production PDFs into live leadership dashboards.</p>
        </section>
        <Block eyebrow="At a glance" title="Executive summary">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>In 2021 I built an end-to-end automated data pipeline for Apple TV.</p>
            <p>It converted multi-format PDF production reports into validated data and real-time executive dashboards.</p>
            <p>It eliminated manual data entry and streamlined revenue operations.</p>
          </div>
        </Block>
        <Block eyebrow="Where we started" title="The challenge">
          <div className="grid gap-4 md:grid-cols-3">
            {challenges.map(item => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <item.icon aria-hidden className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </Block>
        <Block eyebrow="What I built" title="The solution">
          <ol aria-label="Data automation pipeline" className="grid gap-8 md:grid-cols-4">
            {pipeline.map((stage, i) => (
              <li key={stage.title} className="relative rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between"><stage.icon aria-hidden className="h-5 w-5 text-primary" /><span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span></div>
                <h3 className="mt-4 text-sm font-bold leading-relaxed">{stage.title}</h3>
                {i < pipeline.length - 1 && <>
                  <ArrowRight aria-hidden className="absolute -right-6 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-primary motion-safe:animate-pulse md:block" />
                  <ArrowDown aria-hidden className="absolute -bottom-6 left-1/2 h-4 w-4 -translate-x-1/2 text-primary motion-safe:animate-pulse md:hidden" />
                </>}
              </li>
            ))}
          </ol>
        </Block>
        <Block eyebrow="Inside the pipeline" title="How it worked">
          <Tabs defaultValue="extraction">
            <TabsList aria-label="Pipeline stages" className="grid h-auto w-full grid-cols-1 gap-1 sm:grid-cols-3">
              {workings.map(item => <TabsTrigger key={item.id} value={item.id} className="gap-2 py-3"><item.icon aria-hidden className="h-4 w-4" />{item.label}</TabsTrigger>)}
            </TabsList>
            {workings.map(item => (
              <TabsContent key={item.id} value={item.id} className="min-h-48 border-b border-border py-6 sm:min-h-40">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </TabsContent>
            ))}
          </Tabs>
        </Block>
        <Block eyebrow="The principles" title="Key design decisions">
          <ul className="space-y-4 border-l-2 border-primary bg-secondary/50 p-6 text-sm leading-relaxed">
            {decisions.map(text => <li key={text} className="flex gap-3"><ShieldCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{text}</li>)}
          </ul>
        </Block>
        <Block eyebrow="What changed" title="Impact">
          <div className="grid gap-4 md:grid-cols-3">
            {impacts.map(item => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <item.icon aria-hidden className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 border border-dashed border-border px-6 py-5">
            <p className="text-sm font-semibold text-muted-foreground">Verified project metric — to be added</p>
            <p className="mt-1 text-xs text-muted-foreground">PDFs processed or hours saved per month</p>
          </div>
        </Block>
        <Block eyebrow="The tools" title="Tech stack">
          <ul className="flex flex-wrap gap-3">
            {[{ name: "Python", icon: Code }, { name: "SQL", icon: Database }, { name: "Tableau", icon: BarChart3 }, { name: "Advanced Excel", icon: FileSpreadsheet }].map(tool => (
              <li key={tool.name} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold"><tool.icon aria-hidden className="h-4 w-4 text-primary" />{tool.name}</li>
            ))}
          </ul>
        </Block>
        <Block eyebrow="Looking back" title="What I learned">
          <ul className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
            {["I learned that validation matters more than extraction.", "Leadership trusts dashboards only when the numbers are provably clean.", "Good automation removes the work people dislike and keeps humans on exceptions."].map(text => <li key={text} className="flex gap-3"><span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />{text}</li>)}
          </ul>
        </Block>
        <section className="border-t border-border py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild variant="outline" className="h-auto whitespace-normal rounded-full px-4 py-2 text-left">
              <Link to="/" hash="work"><ArrowRight className="rotate-180" />Back to all case studies</Link>
            </Button>
            <Button asChild variant="outline" className="h-auto whitespace-normal rounded-full px-4 py-2 text-left text-primary">
              <Link to="/case-studies/mastercard-billing-automation">Next: From Manual Billing to End-to-End Product Automation<ArrowRight /></Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t border-border bg-secondary"><div className="mx-auto max-w-5xl px-6 py-10"><p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Aman Raj</p></div></footer>
    </div>
  );
}