import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { partners } from "@/data/community";

export const Route = createFileRoute("/partners")({
  head: () => ({ meta: [{ title: "Partners — Girls Leading Tech" }, { name: "description", content: "Community partners powering Girls Leading Tech." }] }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Better, together."
        description="The communities and companies who believe in what we're building."
      />
      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <GlassCard key={p.id} glow className="flex h-32 items-center justify-center p-6 text-center">
              <div>
                <div className="font-display text-lg">{p.name}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.type}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
