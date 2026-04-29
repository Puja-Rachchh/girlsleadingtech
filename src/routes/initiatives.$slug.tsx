import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GlassCard } from "@/components/site/GlassCard";
import { GradientMesh } from "@/components/site/GradientMesh";
import { getInitiative } from "@/data/initiatives";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/initiatives/$slug")({
  loader: ({ params }) => {
    const initiative = getInitiative(params.slug);
    if (!initiative) throw notFound();
    return { initiative };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.initiative.name ?? "Initiative"} — Girls Leading Tech` },
      { name: "description", content: loaderData?.initiative.tagline ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <section className="container mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Initiative not found</h1>
      <Link to="/initiatives" className="mt-6 inline-block text-primary underline">All initiatives</Link>
    </section>
  ),
  errorComponent: ({ error }) => (
    <section className="container mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </section>
  ),
  component: InitiativeDetail,
});

function InitiativeDetail() {
  const { initiative } = Route.useLoaderData();

  return (
    <section className="relative pt-32 pb-24">
      <GradientMesh />
      <div className="container mx-auto max-w-3xl px-6">
        <Link to="/initiatives" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All initiatives
        </Link>
        <GlassCard strong glow className="mt-6 p-10 md:p-14">
          <h1 className="font-display text-4xl md:text-6xl">
            <span className="text-gradient">{initiative.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-primary">{initiative.tagline}</p>
          <p className="mt-6 text-base text-foreground/80">{initiative.description}</p>
          {initiative.url && (
            <a
              href={initiative.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3 text-sm font-semibold text-white shadow-glow"
            >
              Visit program site <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
