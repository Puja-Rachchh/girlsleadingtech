import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonResource } from "@/components/site/ComingSoonResource";

export const Route = createFileRoute("/resources/videos")({
  head: () => ({ meta: [{ title: "Videos — Girls Leading Tech" }] }),
  component: () => <ComingSoonResource category="Videos" title="Watch and level up." description="Talks, tutorials and stories worth pressing play on." />,
});
