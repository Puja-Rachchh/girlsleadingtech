import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { StatCounter } from "@/components/site/StatCounter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { stats } from "@/data/stats";
import { testimonials } from "@/data/community";
import { InteractiveMap } from "@/components/site/InteractiveMap";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Girls Leading Tech" },
      { name: "description", content: "4000+ women, 1100+ colleges, 23+ states. The numbers, stories and reach behind Girls Leading Tech." },
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

      {/* Stats */}
      <section className="container mx-auto max-w-6xl px-6 pb-16">
        <GlassCard strong glow className="p-10 md:p-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Stories */}
      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <SectionHeading eyebrow="Stories" title="Real glow-ups, real careers." description="Words from members whose lives changed because of this community." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <GlassCard key={t.id} glow className="flex flex-col p-8 animate-fade-up transition-transform hover:-translate-y-1 hover:shadow-lavender" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="text-4xl text-primary/30 font-serif leading-none mb-2">"</div>
              <p className="text-sm text-foreground/85 flex-1">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-primary/10">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-primary font-medium">{t.role}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Colleges reached / Map */}
      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <SectionHeading eyebrow="Reach" title="A movement across India." description="1000+ campuses, 23+ states. See where our community is building and leading." />
        <div className="mt-14">
          <InteractiveMap />
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-5xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-primary p-12 text-center shadow-soft md:p-16">
          <h2 className="font-display text-4xl text-white md:text-5xl">Want to be on this list next?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">Join 4000+ women already leading tech across India.</p>
          <Link to="/join" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft hover:scale-105 transition">
            Join us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
