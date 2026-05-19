import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { RoadmapVisualizer } from "@/components/site/RoadmapVisualizer";
import { programs } from "@/data/resources";

export const Route = createFileRoute("/resources/programs")({
  head: () => ({ meta: [{ title: "Programs — Girls Leading Tech" }, { name: "description", content: "Fellowships, cohorts and structured programs for women in tech." }] }),
  component: () => (
    <>
      <PageHeader 
        eyebrow="Resources / Programs" 
        title="Programs to apply to." 
        description="Fellowships, cohorts and structured programs that have launched careers for women in tech." 
      />
      <section className="container mx-auto max-w-5xl px-6 pb-24">
        <RoadmapVisualizer items={programs} />
      </section>
    </>
  ),
});
