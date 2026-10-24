"use client";
import Link from "@/components/LegacyLink";
import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, CalendarCheck, ChevronDown, Download, Eye, Flame, GitCommitHorizontal, Github, Linkedin, Mail, Medal, Shirt, Star, Trophy } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ThemeToggle } from "@/components/ThemeToggle";
import awardPhoto from "@/assets/cricket-award.jpg.asset.json";
import pressClippings from "@/assets/press-clippings.jpg.asset.json";
import amanPortrait from "@/assets/aman-portrait.jpg.asset.json";
import corporateLeague from "@/assets/corporate-league.jpg.asset.json";
import deloitteTrophy from "@/assets/deloitte-trophy.jpg.asset.json";
import mastercardLogo from "@/assets/mastercard.png.asset.json";
import deloitteLogo from "@/assets/deloitte.png.asset.json";
import cognizantLogo from "@/assets/cognizant.png.asset.json";
import cvResume from "@/assets/cv-resume.pdf.asset.json";

const SUBTITLE = "Senior Product Manager and Product Builder · Payments Intelligence and Analytics";
const TITLE = `Aman Raj — ${SUBTITLE}`;
const DESC =
  "7+ years turning data into revenue-critical product decisions across fintech and enterprise data products. I also build the tools: automation, analytics and AI-powered products.";


const EMAIL_ADDRESS = "amanraj.du.or.19@gmail.com";

const LINKS = {
  resume: cvResume.url,
  topmate: "https://topmate.io/aman_raj10",
  linkedin: "https://www.linkedin.com/in/helloamanraj/",
  github: "https://github.com/helloamanraj",
  email: `mailto:${EMAIL_ADDRESS}`,
  x: "https://x.com/helloamanraj",
};

const LOGOS: Record<string, string> = {
  Mastercard: mastercardLogo.url,
  "American Express": "/amex-logo.png",
  "Deloitte USI": deloitteLogo.url,
  Cognizant: cognizantLogo.url,
};

function CompanyLogo({ org }: { org: string }) {
  const [failed, setFailed] = useState(false);
  const src = LOGOS[org];
  if (!src || failed) {
    return (
      <span aria-hidden="true" className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-sm font-extrabold text-foreground/80">
        {org.charAt(0)}
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 shrink-0 items-center justify-center overflow-hidden">
      <img src={src} alt="" aria-hidden="true" loading="lazy" onError={() => setFailed(true)}
        className="h-7 w-auto object-contain" />
    </span>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const githubStats = [
  { icon: Star, value: "17", label: "stars earned" },
  { icon: BookOpen, value: "13", label: "public repositories" },
  { icon: GitCommitHorizontal, value: "399", label: "total contributions" },
  { icon: Flame, value: "41 days", label: "longest streak" },
  { icon: Eye, value: "~2K", label: "profile views" },
];

const builds = [
  {
    name: "ankit_youtube_sql",
    desc: "Solutions to a complex SQL interview question playlist.",
    stars: 7,
    url: "https://github.com/helloamanraj/ankit_youtube_sql",
  },
  {
    name: "danny-8-week-sql-challenge",
    desc: "Solutions for the 8 case studies in the #8WeekSQLChallenge.",
    stars: 4,
    url: "https://github.com/helloamanraj/danny-8-week-sql-challenge",
  },
  {
    name: "30DaySQLQueryChallengebyTechTFQ",
    desc: "One challenging SQL query solved per day for 30 days.",
    stars: 2,
    url: "https://github.com/helloamanraj/30DaySQLQueryChallengebyTechTFQ",
  },
  {
    name: "sql-leetcode",
    desc: "90+ SQL solutions to LeetCode database questions (work in progress).",
    stars: 1,
    url: "https://github.com/helloamanraj/sql-leetcode",
  },
];

const stats = [
  { value: "90%+", label: "less manual billing effort, from ~200 to under 10 hours a month, across a ~$100M product suite", source: "Mastercard billing automation", href: "/case-studies/mastercard-billing-automation" },
  { value: "10%", label: "contributed to a 10% reduction in operational risk events", source: "Amex data governance", href: "/case-studies/amex-data-governance-risk" },
  { value: "PDF → Dashboard", label: "manual production reviews replaced by an automated pipeline feeding live executive dashboards", source: "Apple TV data automation", href: "/case-studies/apple-tv-data-automation" },
];

const career = [
  {
    role: "Senior Product Manager, Technical (Payment Performance Intelligence)",
    org: "Mastercard",
    location: "Pune, India",
    dates: "Mar 2026 – Present",
    points: [
      "Led billing automation across MEDI, TI and TIP, cutting manual effort by 90%+.",
      "Built Mixpanel analytics from scratch with 300+ tracking tags, now used by product, commercial and leadership teams.",
      "Own monthly revenue and performance analytics for the PPI portfolio.",
      "Established automated controls, QA validations and reconciliation to improve billing accuracy.",
    ],
  },
  {
    role: "Product Manager, Product Analytics & Strategy",
    org: "American Express",
    location: "Gurugram, India",
    dates: "Jul 2024 – Mar 2025",
    points: [
      "Published monthly product health and release reporting for Credit & Fraud Risk digital products.",
      "Root-cause analysis of operational risk events, contributing to a 10% reduction.",
      "Prioritised 2025 NFRs with leadership and tracked roadmap delivery.",
      "Built a Power BI dashboard for compliance failures and escalation trends.",
    ],
  },
  {
    role: "Consultant, Product Analytics",
    org: "Deloitte USI",
    location: "Gurugram, India",
    dates: "May 2022 – Jun 2024",
    points: [
      "Worked with Meta on strategies to prevent third-party app vendor data breaches, ensuring data security and privacy protocols.",
      "Designed dashboards to monitor Key Control Indicators (KCIs); used SQL to assess KCI feasibility and worked with Data Engineers to optimize the methodology.",
      "Improved Internal Credit Rating (ICR) model accuracy by 8% by analyzing credit risk profiles and removing loss data points.",
      "Delivered projects 15% faster through Agile practices.",
    ],
  },
  {
    role: "Associate, Analytics & Insights",
    org: "Cognizant",
    location: "Gurugram, India",
    dates: "Jan 2020 – Apr 2022",
    points: [
      "Analyzed client business requirements and defined logic for data-driven functionalities aligned with client objectives.",
      "Built a Power BI dashboard for a US-based client, providing comprehensive ROI analytics and insights to drive informed decision-making.",
      "Finalized KPIs for performance measurement and created business documentation, rules, quality standards and metrics.",
      "Applied NLP to transform previously unusable text into annotated, machine-readable, standardized data formats.",
    ],
  },
];

const story = {
  label: "My story",
  title: "Before product, there was cricket",
  paragraphs: [
    "For 11 years, from 2003 to 2014, cricket was my life. I represented Bihar and Jharkhand at U-13, U-15 and U-17. In 2014, right after Class 12, I made a hard call: leave the game and bet on mathematics.",
    "That bet led to a B.Sc. Mathematics (Hons.) seat at Delhi University, which I completed with distinction. I then cracked an all-India entrance exam for M.Sc. Operational Research and earned a place at Hansraj College, finishing in First Division.",
    "Cricket taught me to practise deliberately, take feedback fast, and perform when it counts. Mathematics and Operational Research taught me to reason from data and optimise decisions. Product management is where the two meet: making calls under pressure, backed by numbers.",
  ],
  milestones: [
    { years: "2003-2014", text: "Cricket for Bihar and Jharkhand (U-13, U-15, U-17)", org: null, role: null },
    { years: "2014", text: "Left cricket after Class 12 to focus on studies", org: null, role: null },
    { years: "2014-2017", text: "B.Sc. Mathematics (Hons.), Delhi University, Distinction", org: null, role: null },
    { years: "2017-2019", text: "M.Sc. Operational Research, Hansraj College, First Division", org: null, role: null },
    { years: "2020-2022", text: null, org: "Cognizant", role: "Associate, Analytics & Insights" },
    { years: "2022-2024", text: null, org: "Deloitte USI", role: "Consultant, Product Analytics" },
    { years: "2024-2025", text: null, org: "American Express", role: "Product Manager, Product Analytics & Strategy" },
    { years: "2026-Present", text: null, org: "Mastercard", role: "Senior Product Manager, Payment Performance Intelligence" },
  ],
};

const storyGallery = [
  {
    src: awardPhoto.url,
    alt: "Aman Raj with teammates and the then Chief Minister of Bihar at a cricket camp felicitation",
    caption: "Awarded by Chief Minister of Bihar",
    icon: Trophy,
    w: 1920,
    h: 1253,
  },
  {
    src: pressClippings.url,
    alt: "Newspaper clippings covering Aman Raj's cricket successes",
    caption: "Newspaper clippings from my cricket years",
    icon: BookOpen,
    w: 1920,
    h: 1440,
  },
  {
    src: corporateLeague.url,
    alt: "Aman Raj in his Deloitte jersey at the Pro Corporate League",
    caption: "Pro Corporate League, in the Deloitte jersey",
    icon: Shirt,
    w: 748,
    h: 538,
  },
  {
    src: deloitteTrophy.url,
    alt: "Aman Raj holding the runners-up trophy at a Deloitte cricket tournament",
    caption: "Runners-up, Deloitte cricket tournament",
    icon: Medal,
    w: 624,
    h: 822,
  },
];

const linkedinStories = [
  {
    url: "https://www.linkedin.com/posts/helloamanraj_mondaythoughts-mondayvibes-share-6949586904153489408-Aua7/",
    title: "That morning I got a call from the Chief Minister's house",
    desc: "After a brilliant state season in August 2005, the whole team was invited for lunch with the Chief Minister. I was 10 years old — and those 11 years of cricket still shape how I work.",
  },
  {
    url: "https://www.linkedin.com/posts/helloamanraj_a-brilliant-product-feature-by-rapido-pm-share-7496122547835641856-8XRd/",
    title: "Rapido's 'Never Cancels' badge solves for anxiety",
    desc: "A brilliant product feature doesn't just solve an operational bottleneck — it solves a human emotion: the anxiety of time-critical moments.",
  },
];

const cases = [
  {
    title: "From Manual Billing to End-to-End Product Automation",
    summary:
      "I unified billing generation, client insights and customer requests in one product portal, reducing manual billing effort by over 90% — from ~200 to fewer than 10 hours per month.",
    problem: "Billing across the product suite relied on ~200 hours of manual work every month.",
    role: "Senior Product Manager, Technical — led billing automation across MEDI, TI and TIP.",
    actions:
      "Owned requirements, prioritization, stakeholder alignment, UAT and cross-functional delivery of billing generation, centralized client insights and integrated customer requests.",
    outcome: "Manual effort cut from ~200 hours to under 10 hours per month (90%+ reduction).",
    badge: "Built across MEDI, TI and TIP, a product suite with ~$100M annual revenue",
    href: "/case-studies/mastercard-billing-automation" as const,
  },
  {
    title:
      "Can we see operational risk before it happens? Building data governance metrics at American Express",
    summary:
      "I mapped two years of operational-risk events to data failures, found where we had no early-warning metrics, and got new governance metrics approved by senior leadership.",
    problem:
      "Operational-risk events were being reported, but there was no clear view of how many were caused by data issues, or whether existing governance metrics would have flagged them early.",
    role: "Product Manager – Product Analytics & Strategy, American Express.",
    actions:
      "Mapped two years of reported events to data-related failures, tagged each one to a pillar of the data taxonomy, checked whether a metric already existed to detect it, and sized the potential damage where none did.",
    outcome:
      "Gaps in early-warning coverage identified and closed; new governance metrics approved by senior leadership and adopted.",
    badge: "Led new metrics approved by leadership: Transaction Data Completeness Score",
    href: "/case-studies/amex-data-governance-risk" as const,
  },
  {
    title: "Automating revenue and production data extraction for Apple TV",
    summary: "I replaced manual review of messy production PDFs with an automated pipeline from PDF to validated database to live executive dashboard.",
    problem: "Inconsistent production PDF layouts required manual review and data entry, delaying reporting and increasing the risk of financial errors.",
    role: "Associate, Analytics & Insights, Cognizant · 2021.",
    actions: "Built dynamic Python extraction, automated SQL validation and staging, and a live Tableau executive dashboard.",
    outcome: "Eliminated manual data entry, brought reporting from days to near real-time on upload, and supported clean financial reporting through automated validation.",
    badge: "Built in 2021: dynamic text parsing before the generative AI boom",
    href: "/case-studies/apple-tv-data-automation" as const,
  },
];

const education = [
  {
    degree: "Master of Science in Operational Research",
    school: "Hansraj College, Delhi University",
    location: "Delhi, India",
    dates: "Jul 2017 – Jun 2019",
    honours: "First Division",
    subjects: [
      "Real & Complex Analysis",
      "Abstract Algebra",
      "Topology",
      "Ordinary & Partial Differential Equations",
      "Functional Analysis",
      "Numerical Methods",
      "Mathematical Programming & Optimization",
      "Operations Research",
    ],
  },
  {
    degree: "Bachelor of Science in Mathematics (Hons.)",
    school: "PGDAV College, Delhi University",
    location: "Delhi, India",
    dates: "Jul 2014 – Jun 2017",
    honours: "Distinction",
    subjects: [
      "Calculus & Multivariate Calculus",
      "Real Analysis",
      "Linear Algebra",
      "Group & Ring Theory",
      "Differential Equations",
      "Probability & Statistics",
      "Numerical Analysis",
      "Metric Spaces",
    ],
  },
];

const credentials = [
  { name: "Create Your First Gemini Enterprise Application", issuer: "Google" },
  { name: "Agentic AI Certified Foundations Associate", issuer: "Oracle" },
  { name: "AI for Product Management", issuer: "Pendo" },
  { name: "The Strategic Growth Framework", issuer: "Mixpanel" },
  { name: "Generative AI: Impact on Business and Society", issuer: "Coursera" },
  { name: "Enterprise Product Management", issuer: "Microsoft" },
  { name: "Summer Analytics 2023", issuer: "Indian Institute of Technology, Guwahati" },
  { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft" },
  { name: "Microsoft Certified: Azure Data Fundamentals", issuer: "Microsoft" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
  { name: "Microsoft Certified: Power BI Data Analyst Associate", issuer: "Microsoft" },
  { name: "Machine Learning", issuer: "Microsoft" },
];


function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <h2 className="mb-10 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{title}</h2>
      {children}
    </section>
  );
}


function CaseCard({ c, i }: { c: (typeof cases)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  const rows: [string, string][] = [
    ["Problem", c.problem],
    ["My role", c.role],
    ["What I did", c.actions],
    ["Outcome", c.outcome],
  ];
  return (
    <article id={`case-study-${i + 1}`} className="scroll-mt-24 flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-sm">
      <span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span>
      <h3 className="mt-3 text-lg font-bold leading-snug">{c.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
      {"badge" in c && c.badge && (
        <span className="mt-4 self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold leading-relaxed text-primary">{c.badge}</span>
      )}
      {open && (
        <dl className="mt-6 space-y-4 border-t border-border pt-6">
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-primary">{k}</dt>
              <dd className="mt-1 text-sm leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="mt-auto flex items-center gap-1 pt-6 text-sm font-semibold text-primary"
      >
        {open ? "Show less" : "Read case study"}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {c.href && (
        <Link
          to={c.href}
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          Open full case study <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </article>
  );
}

export default function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);
  const btn =
    "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-bold">Aman Raj</a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#career" className="hover:text-foreground">Career</a>
            <a href="#work" className="hover:text-foreground">Case studies</a>
            <a href="#story" className="hover:text-foreground">Story</a>
            <a href="#builds" className="hover:text-foreground">Builds</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        <section className="py-24 md:py-36">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">Aman Raj</h1>
          <p className="mt-5 text-lg font-semibold text-primary md:text-xl">
            {SUBTITLE}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{DESC}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={LINKS.resume} download="AmanRaj_Resume_SPM.pdf" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              <Download className="h-4 w-4" /> Download résumé
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className={btn}><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className={btn}><Github className="h-4 w-4" /> GitHub</a>
            <a href={LINKS.email} className={btn}><Mail className="h-4 w-4" /> Email</a>
          </div>
        </section>

        <section aria-label="Key stats" className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col bg-card p-6">
              <div className="text-3xl font-extrabold tracking-tight text-primary">{s.value}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              <a href={s.href} className="mt-auto inline-block whitespace-nowrap pt-4 text-xs font-semibold tracking-tight text-primary underline-offset-4 hover:underline">
                {s.source} →
              </a>
            </div>
          ))}
        </section>

        <div className="h-20" />

        <Section id="career" title="Career highlights">
          <ol className="relative space-y-8 border-l border-border pl-6 md:pl-10">
            {career.map((c) => (
              <li key={c.org} className="relative">
                <span className="absolute -left-[29px] top-7 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background md:-left-[45px]" />
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="flex flex-wrap items-center gap-x-3 text-lg font-bold">
                      <CompanyLogo org={c.org} />
                      {c.org}
                      <span className="text-sm font-medium text-muted-foreground">· {c.location}</span>
                    </h3>
                    <span className="text-sm text-muted-foreground">{c.dates}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">{c.role}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>


        <Section id="work" title="Featured case studies">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => <CaseCard key={c.title} c={c} i={i} />)}
          </div>
        </Section>

        <section id="story" className="scroll-mt-20 border-t border-border py-20 md:py-28">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{story.label}</p>
            <h2 className="mb-10 mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{story.title}</h2>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <img
                  src={amanPortrait.url}
                  alt="Aman Raj"
                  loading="lazy"
                  width={1920}
                  height={1760}
                  className="h-72 w-full max-w-sm rounded-2xl border border-border object-cover object-center md:h-80"
                />
                {story.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <ol className="relative space-y-6 border-l border-border pl-6">
                {story.milestones.map((m) => (
                  <li key={m.years} className="relative">
                    <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{m.years}</p>
                    {m.org ? (
                      <div className="mt-1.5 flex items-center gap-2">
                        <CompanyLogo org={m.org} />
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold">{m.org}</span>{" "}
                          <span className="text-muted-foreground">· {m.role}</span>
                        </p>
                      </div>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed">{m.text}</p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {storyGallery.map((g, i) => (
                <figure key={g.caption} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <button type="button" onClick={() => setLightbox(i)} aria-label={`Open photo: ${g.caption}`} className="block cursor-zoom-in">
                    <img
                      src={g.src}
                      alt={g.alt}
                      className="aspect-[4/3] w-full object-cover object-center"
                      loading="lazy"
                      width={g.w}
                      height={g.h}
                    />
                  </button>
                  <figcaption className="flex flex-1 items-center gap-3 border-t border-border px-5 py-4">
                    <g.icon aria-hidden className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-semibold">{g.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </FadeIn>
        </section>

        <Section id="builds" title="Personal builds">
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {githubStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center">
                <s.icon className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-2xl font-bold tracking-tight">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {builds.map((b) => (
              <a key={b.name} href={b.url} target="_blank" rel="noreferrer" className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold tracking-tight group-hover:text-primary">{b.name}</h3>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    <Star className="h-3 w-3" /> {b.stars}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{b.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View on GitHub <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            View all repositories <ArrowUpRight className="h-4 w-4" />
          </a>
        </Section>

        <Section id="linkedin" title="LinkedIn">
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Linkedin className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">Aman writes about product, data and payments on LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Follow along for lessons from building analytics-first products.</p>
                </div>
              </div>
              <span className="mt-2 inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:mt-0">
                Connect on LinkedIn <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-secondary/50 p-4">
                <p className="text-3xl font-bold tracking-tight text-primary">10K+</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">followers and growing</p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/50 p-4">
                <p className="text-3xl font-bold tracking-tight text-primary">536,619</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">impressions in the past 365 days</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cumulative impressions · last 365 days</p>
              <svg viewBox="0 0 600 140" className="mt-2 h-24 w-full" role="img" aria-label="Cumulative impressions rising from zero to 536,619 over the past year" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="li-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,138 L0,137 L60,136.5 L120,135 L200,131 L240,128 L300,124 L400,111 L450,108 L500,105 L540,100 L560,60 L575,35 L590,20 L600,16 L600,138 Z" className="fill-primary/10" fill="url(#li-fill)" />
                <path d="M0,137 L60,136.5 L120,135 L200,131 L240,128 L300,124 L400,111 L450,108 L500,105 L540,100 L560,60 L575,35 L590,20 L600,16" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary" strokeLinejoin="round" strokeLinecap="round" />
                <circle cx="600" cy="16" r="4" className="fill-primary" />
              </svg>
            </div>
          </a>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {linkedinStories.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noreferrer"
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                <h3 className="font-semibold leading-snug tracking-tight group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read on LinkedIn <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </Section>

        <Section id="credentials" title="Credentials">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((c) => (
              <div key={c.name} className="rounded-2xl border border-border bg-card p-4">
                <p className="text-sm font-semibold leading-snug">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((e) => (
              <div key={e.degree} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-bold leading-snug">{e.degree}</h3>
                  <span className="shrink-0 text-sm text-muted-foreground">{e.dates}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{e.school}</p>
                <p className="text-sm text-muted-foreground">{e.location}</p>
                <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{e.honours}</span>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key subjects</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {e.subjects.map((s) => (
                      <li key={s} className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

      </main>

      {lightbox !== null && storyGallery[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={storyGallery[lightbox].caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-6"
          onClick={() => setLightbox(null)}
        >
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={storyGallery[lightbox].src}
              alt={storyGallery[lightbox].alt}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl border border-border bg-card object-contain"
            />
            <figcaption className="mt-3 text-center text-sm italic text-background">
              {storyGallery[lightbox].caption}
            </figcaption>
          </figure>
        </div>
      )}

      <footer id="contact" className="border-t border-border bg-secondary">
        <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-10 sm:px-10 sm:py-20">
          <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-[18px] py-2.5 text-sm font-medium text-primary">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
            Open for collaboration
          </span>

          <h2 className="text-[44px] font-extrabold leading-[1.05] tracking-tight">Let&apos;s talk.</h2>

          <p className="text-[17px] leading-relaxed text-muted-foreground">
            Open to senior product roles and collaboration in payments, data and analytics. Best reached by email or LinkedIn.
          </p>

          <a
            href={LINKS.topmate}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a 1:1 session on Topmate"
            className="flex items-center gap-4 rounded-[20px] border border-primary/50 bg-card p-5 transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[14px] bg-primary text-primary-foreground">
              <CalendarCheck className="h-[26px] w-[26px]" aria-hidden="true" />
            </span>
            <span className="flex flex-1 flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                Book a 1:1
              </span>
              <span className="text-lg font-extrabold text-card-foreground">Talk to me on Topmate</span>
              <span className="text-sm leading-snug text-muted-foreground">
                Product, payments and analytics. Pick a slot that works for you.
              </span>
            </span>
            <ArrowUpRight className="h-[22px] w-[22px] flex-none text-primary" aria-hidden="true" />
          </a>

          <div className="flex items-center gap-3.5 text-[13px] tracking-wide text-muted-foreground">
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span>or reach out directly</span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={LINKS.email}
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-primary bg-primary px-6 text-[17px] font-semibold text-primary-foreground transition-opacity hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Email
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-border px-6 text-[17px] font-semibold transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-border px-6 text-[17px] font-semibold transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <XIcon className="h-[18px] w-[18px]" />
              X
            </a>
          </div>

          <p className="mt-8 text-base text-muted-foreground">© 2026 Aman Raj</p>
        </div>
      </footer>
    </div>
  );
}
