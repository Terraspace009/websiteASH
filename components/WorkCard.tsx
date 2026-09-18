import Image from "next/image";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { GalleryProject } from "../app/portfolio-data";
export default function WorkCard({
  project,
  priority = false,
}: {
  project: GalleryProject;
  priority?: boolean;
}) {
  const Icon = project.external ? FaArrowUpRightFromSquare : FaArrowRight;
  return (
    <article className="work-card" data-project={project.slug}>
      <a
        href={project.href}
        target={project.external ? "_blank" : undefined}
        rel={project.external ? "noreferrer" : undefined}
        className="work-card-link"
      >
        {project.media && (
          <div className="work-media">
            {project.media.type === "image" ? (
              <Image
                src={project.media.src}
                alt={project.title + " project output"}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                priority={priority}
              />
            ) : (
              <Image
                src={project.media.poster}
                alt={project.title + " performance"}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                priority={priority}
              />
            )}
          </div>
        )}
        <div className="work-meta">
          <span>{project.discipline}</span>
          {project.year && <span>{project.year}</span>}
        </div>
        <div className="work-title">
          <h3>{project.title}</h3>
          <Icon aria-hidden="true" />
        </div>
        {project.subtitle && (
          <p className="work-subtitle">{project.subtitle}</p>
        )}
        <p>{project.blurb}</p>
        <div className="work-tools">{project.tags.join(" · ")}</div>
        <span className="work-cta">{project.cta || "View project"}</span>
      </a>
    </article>
  );
}
