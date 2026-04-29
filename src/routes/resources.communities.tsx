import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonResource } from "@/components/site/ComingSoonResource";

export const Route = createFileRoute("/resources/communities")({
  head: () => ({ meta: [{ title: "Communities — Girls Leading Tech" }] }),
  component: () => <ComingSoonResource category="Communities" title="Find your tribe." description="The Discords, Slacks and meetups where the magic happens." />,
});
