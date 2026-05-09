import type { ContentStatus } from "@/content/types";
import { EditorialTapeLabel } from "@/components/cards/EditorialTapeLabel";

export function StatusPill({ status }: { status: ContentStatus }) {
  return <EditorialTapeLabel status={status} />;
}
