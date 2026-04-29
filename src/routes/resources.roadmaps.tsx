import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonResource } from "@/components/site/ComingSoonResource";

export const Route = createFileRoute("/resources/roadmaps")({
  head: () => ({ meta: [{ title: "Roadmaps — Girls Leading Tech" }] }),
  component: () => <ComingSoonResource category="Roadmaps" title="Your career, mapped." description="Step-by-step playbooks for the path you choose." />,
});
