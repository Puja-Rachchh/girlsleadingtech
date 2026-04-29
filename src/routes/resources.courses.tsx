import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonResource } from "@/components/site/ComingSoonResource";

export const Route = createFileRoute("/resources/courses")({
  head: () => ({ meta: [{ title: "Courses — Girls Leading Tech" }] }),
  component: () => <ComingSoonResource category="Courses" title="Learning paths, curated." description="The courses we'd recommend to a younger sister." />,
});
