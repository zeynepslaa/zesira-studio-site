import type { ContentStatus } from "@/content/types";

/** Short tape copy — lipstick-ink on archival bandage tape */
export function tapeLabel(status: ContentStatus): string {
  switch (status) {
    case "live":
      return "ON VIEW";
    case "beta":
      return "LATE ACCESS";
    case "in-development":
      return "IN PROGRESS";
    case "coming-soon":
      return "COMING SOON";
    default:
      return "";
  }
}
