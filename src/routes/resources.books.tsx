import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonResource } from "@/components/site/ComingSoonResource";

export const Route = createFileRoute("/resources/books")({
  head: () => ({ meta: [{ title: "Books — Girls Leading Tech" }] }),
  component: () => <ComingSoonResource category="Books" title="Books on our nightstand." description="The reading list every woman in tech should keep close." />,
});
