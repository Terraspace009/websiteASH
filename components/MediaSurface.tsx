import type { ReactNode } from "react";
import type { GalleryProject } from "../app/portfolio-data";
import { mediaAction, mediaResponse, transitionName } from "./interaction-map";

export default function MediaSurface({
  project,
  children,
  detail = false,
}: {
  project: GalleryProject;
  children: ReactNode;
  detail?: boolean;
}) {
  const response = mediaResponse(project);
  return (
    <div
      className={detail ? "case-media motion-media" : "work-media motion-media"}
      data-response={response}
      data-cursor={detail ? undefined : mediaAction(project)}
      style={{ viewTransitionName: transitionName(project.slug) }}
    >
      <div className="media-image">{children}</div>
      <svg
        className={"media-response response-" + response}
        viewBox="0 0 400 250"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {response === "segmentation" && (
          <g>
            <path d="M76 190 88 113 133 77 169 102 167 179 139 215Z" />
            <path d="M181 200 185 87 221 56 252 68 269 127 254 200Z" />
            <path d="M285 198 280 136 313 108 345 122 354 198Z" />
          </g>
        )}
        {response === "region" && (
          <path d="M157 76h-13v18m99-18h13v18m0 62v18h-13m-86 0h-13v-18" />
        )}
        {response === "tracking" && (
          <g>
            <path d="m161 137 23-37 21-10 24 17 16 34" />
            <circle cx="161" cy="137" r="2" />
            <circle cx="184" cy="100" r="2" />
            <circle cx="205" cy="90" r="2" />
            <circle cx="229" cy="107" r="2" />
            <circle cx="245" cy="141" r="2" />
          </g>
        )}
        {response === "depth" && (
          <g>
            {Array.from({ length: 28 }, (_, i) => (
              <circle
                key={i}
                cx={45 + ((i * 67) % 310)}
                cy={32 + ((i * 43) % 182)}
                r={i % 3 === 0 ? 1.4 : 0.8}
              />
            ))}
          </g>
        )}
        {response === "render" && (
          <path d="M58 171 Q122 77 191 129 T342 103 M58 176 Q122 82 191 134 T342 108" />
        )}
      </svg>
      <span className="media-technical" aria-hidden="true">
        {project.tags.slice(0, 2).join(" · ")}
      </span>
      <span className="media-reveal-mask" aria-hidden="true" />
    </div>
  );
}
