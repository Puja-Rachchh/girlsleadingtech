import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { StatCounter } from "@/components/site/StatCounter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { stats } from "@/data/stats";
import { testimonials } from "@/data/community";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Girls Leading Tech" },
      { name: "description", content: "The numbers, stories and reach behind Girls Leading Tech." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our impact"
        title="The numbers tell a story."
        description="But the women behind them are the real headline."
      />

      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <GlassCard strong className="p-10 md:p-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <SectionHeading eyebrow="Stories" title="Real glow-ups, real careers." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <GlassCard key={t.id} glow className="p-8">
              <div className="text-4xl text-primary/40 font-display leading-none">"</div>
              <p className="text-base text-foreground/85">{t.quote}</p>
              <div className="mt-6 border-t border-primary/10 pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
