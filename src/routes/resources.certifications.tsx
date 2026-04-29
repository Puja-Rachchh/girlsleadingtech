import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonResource } from "@/components/site/ComingSoonResource";

export const Route = createFileRoute("/resources/certifications")({
  head: () => ({ meta: [{ title: "Certifications — Girls Leading Tech" }] }),
  component: () => <ComingSoonResource category="Certifications" title="Credentials that matter." description="The certifications worth your time and money." />,
});
