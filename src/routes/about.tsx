import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GlassCard } from "@/components/site/GlassCard";
import { Heart, Compass, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Girls Leading Tech" },
      { name: "description", content: "Our vision, mission and the story behind Girls Leading Tech." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Our story, in pink and lavender."
        description="From a tiny WhatsApp group to a movement of 4000+ women — here's how we got here, and where we're going."
      />
      <section className="container mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <GlassCard glow className="p-7">
            <Heart className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-xl">Our Vision</h3>
            <p className="mt-2 text-sm text-muted-foreground">A world where every girl who dreams in code has a community and a runway to lead.</p>
          </GlassCard>
          <GlassCard glow className="p-7">
            <Compass className="h-8 w-8 text-secondary" />
            <h3 className="mt-4 font-display text-xl">Our Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">Equip 100,000 women in tech across India with resources, mentors and the confidence to lead.</p>
          </GlassCard>
          <GlassCard glow className="p-7">
            <Sparkles className="h-8 w-8 text-accent-foreground" />
            <h3 className="mt-4 font-display text-xl">Our Values</h3>
            <p className="mt-2 text-sm text-muted-foreground">Radical kindness, ship-it energy, no gatekeeping, and lifting as we climb.</p>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
