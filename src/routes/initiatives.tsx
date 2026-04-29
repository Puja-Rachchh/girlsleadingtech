import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { initiatives } from "@/data/initiatives";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/initiatives")({
  head: () => ({ meta: [{ title: "Initiatives — Girls Leading Tech" }, { name: "description", content: "Programs and initiatives by Girls Leading Tech." }] }),
  component: InitiativesPage,
});

const colorMap: Record<string, string> = {
  pink: "from-pink-300/60 to-pink-200/30",
  lavender: "from-violet-300/60 to-violet-200/30",
  peach: "from-orange-300/60 to-orange-200/30",
  rose: "from-rose-300/60 to-rose-200/30",
  violet: "from-purple-400/60 to-violet-200/30",
};

function InitiativesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Initiatives"
        title="Programs powering the movement."
        description="Flagship summits, hackathons, fellowships and seasonal celebrations — all under one roof."
      />
      <section className="container mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((i) => (
            <Link key={i.slug} to="/initiatives/$slug" params={{ slug: i.slug }} className="group block">
              <GlassCard glow className="relative h-full overflow-hidden p-7">
                <div className={`absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${colorMap[i.color]} blur-2xl`} />
                <div className="relative">
                  <h3 className="font-display text-2xl">{i.name}</h3>
                  <p className="mt-2 text-sm font-medium text-primary">{i.tagline}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{i.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
