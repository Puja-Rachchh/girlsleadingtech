import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonResource } from "@/components/site/ComingSoonResource";

export const Route = createFileRoute("/resources/articles")({
  head: () => ({ meta: [{ title: "Articles — Girls Leading Tech" }, { name: "description", content: "Curated articles for women in tech." }] }),
  component: () => <ComingSoonResource category="Articles" title="Reading worth your time." description="Curated essays, deep dives and tutorials from across the web." />,
});
