import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { hackathons } from "@/data/hackathons";
import { ExternalLink, Clock, Calendar, Trophy, Users } from "lucide-react";

export const Route = createFileRoute("/resources/hackathons")({
  head: () => ({
    meta: [
      { title: "Hackathons — Girls Leading Tech" },
      { name: "description", content: "Curated hackathons and coding challenges for women in tech." },
    ],
  }),
  component: HackathonsPage,
});

function HackathonsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources / Hackathons"
        title="Build. Win. Repeat."
        description={`${hackathons.length} hackathons and coding challenges hand-picked for women in tech.`}
      />
      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((h, i) => (
            <a
              key={h.id}
              href={h.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block animate-fade-up"
              style={{ animationDelay: `${(i % 6) * 0.05}s` }}
            >
              <GlassCard glow className="h-full p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg leading-snug">{h.name}</h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
                </div>
                <span className="mt-2 inline-block rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                  {h.organisedBy}
                </span>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/80">{h.benefit}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-muted-foreground">{h.eligibility}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1 text-xs">
                      <Clock className="h-3 w-3" /> {h.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1 text-xs">
                      <Calendar className="h-3 w-3" /> {h.openDate}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
