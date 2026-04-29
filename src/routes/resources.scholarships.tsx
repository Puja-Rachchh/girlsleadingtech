import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { scholarships } from "@/data/scholarships";
import { ExternalLink, Calendar, Award, Users } from "lucide-react";

export const Route = createFileRoute("/resources/scholarships")({
  head: () => ({
    meta: [
      { title: "Scholarships — Girls Leading Tech" },
      { name: "description", content: "Hand-picked scholarships and funding opportunities for women in tech." },
    ],
  }),
  component: ScholarshipsPage,
});

function ScholarshipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources / Scholarships"
        title="Scholarships worth your shot."
        description={`${scholarships.length} curated programs across India and globally — opening doors with funding, mentorship and networks.`}
      />
      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {scholarships.map((s, i) => (
            <a
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block animate-fade-up"
              style={{ animationDelay: `${(i % 6) * 0.05}s` }}
            >
              <GlassCard glow className="h-full p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg leading-snug">{s.title}</h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
                </div>
                <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {s.provider}
                </span>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/80">{s.benefit}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-muted-foreground">{s.eligibility}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                    <span className="text-muted-foreground">{s.openDate}</span>
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
