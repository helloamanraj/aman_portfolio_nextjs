import type { ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn";

export function CaseStudyBlock({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="scroll-mt-20 border-t border-border py-16 md:py-20">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mb-8 mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{title}</h2>
        {children}
      </FadeIn>
    </section>
  );
}