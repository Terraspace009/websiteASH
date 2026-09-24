import type { GalleryProject } from "../app/portfolio-data";

export type MediaResponse =
  | "segmentation"
  | "region"
  | "tracking"
  | "depth"
  | "render"
  | "film"
  | "quiet";

const responses: Record<string, MediaResponse> = {
  "semantic-lab": "segmentation",
  "terra-cypher": "region",
  "terra-hand-performer": "tracking",
  "gesture-instrument": "tracking",
  "pointcloud-studies": "depth",
  "terra-visuals": "render",
  "performance-archive": "film",
  "perpetual-existence": "film",
  "codex-beverage-prediction": "quiet",
  "azure-computer-vision": "quiet",
  byteme: "quiet",
  "hotel-booking-prediction": "quiet",
};

export function mediaResponse(project: GalleryProject): MediaResponse {
  if (project.discipline === "Film / Generative Visuals") return "film";
  return responses[project.slug] || "quiet";
}

// Only identical source/destination images participate in shared-image transitions.
const sharedMedia = new Set([
  "terra-cypher",
  "terra-visuals",
  "gesture-instrument",
  "pointcloud-studies",
  "codex-beverage-prediction",
]);
export function transitionName(slug: string) {
  return sharedMedia.has(slug) ? "project-" + slug : undefined;
}

export function mediaAction(project: GalleryProject) {
  if (project.cta === "Watch film" || project.slug === "perpetual-existence")
    return "PLAY";
  return project.cta === "Open instrument" ? "OPEN" : "VIEW";
}
