import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { RoadmapVisualizer } from "@/components/site/RoadmapVisualizer";
import { courses } from "@/data/resources";

export const Route = createFileRoute("/resources/courses")({
  head: () => ({ meta: [{ title: "Courses — Girls Leading Tech" }, { name: "description", content: "The best free and paid courses to level up your tech skills." }] }),
  component: () => (
    <>
      <PageHeader 
        eyebrow="Resources / Courses" 
        title="Curated learning paths." 
        description="Free and paid courses we've vetted to help you go from beginner to job-ready." 
      />
      <section className="container mx-auto max-w-5xl px-6 pb-24">
        <RoadmapVisualizer items={courses} />
      </section>
    </>
  ),
});
