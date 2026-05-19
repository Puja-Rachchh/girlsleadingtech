import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { BookCarousel } from "@/components/site/BookCarousel";
import { books } from "@/data/resources";

export const Route = createFileRoute("/resources/books")({
  head: () => ({ meta: [{ title: "Books — Girls Leading Tech" }, { name: "description", content: "Books that shaped our community of women in tech." }] }),
  component: () => (
    <>
      <PageHeader 
        eyebrow="Resources / Books" 
        title="The shelf we recommend." 
        description="Books that shape how we think about code, careers, leadership and life." 
      />
      <section className="container mx-auto max-w-6xl px-6 pb-24">
        <BookCarousel items={books} />
      </section>
    </>
  ),
});
