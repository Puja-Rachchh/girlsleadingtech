import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonResource } from "@/components/site/ComingSoonResource";

export const Route = createFileRoute("/resources/interview-prep")({
  head: () => ({ meta: [{ title: "Interview Prep — Girls Leading Tech" }] }),
  component: () => <ComingSoonResource category="Interview Prep" title="Walk in. Own it." description="DSA, system design and behavioural prep — without the noise." />,
});
