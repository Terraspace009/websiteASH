import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { galleryProjects, projectDetails } from "../../portfolio-data";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: galleryProjects.find((p) => p.slug === slug)?.title || "Project",
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = galleryProjects.find((p) => p.slug === slug);
  const detail = projectDetails[slug];
  if (!project || !detail) notFound();
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">{project.discipline}</p>
        <h1>{project.title}</h1>
        <p>{project.blurb}</p>
      </section>
      {project.media && (
        <figure className="case-image">
          <Image
            src={
              project.media.type === "image"
                ? project.media.src
                : project.media.poster
            }
            alt={detail.caption || project.title}
            width={1600}
            height={1000}
            priority
          />
          <figcaption>{detail.caption}</figcaption>
        </figure>
      )}
      <section className="case-section">
        <h2>Overview</h2>
        <p>{detail.overview}</p>
      </section>
      {detail.additionalMedia?.map((m) => (
        <figure className="case-image" key={m.src}>
          <Image src={m.src} alt={m.caption} width={1600} height={1000} />
          <figcaption>{m.caption}</figcaption>
        </figure>
      ))}
      <section className="case-section">
        <h2>Tools</h2>
        <p>{project.tags.join(" · ")}</p>
      </section>
      {detail.links.length > 0 && (
        <section className="case-section">
          <h2>Project access</h2>
          <div>
            <div className="project-access">
              {detail.links.map((l) => (
                <a
                  className="text-link"
                  href={l.href}
                  key={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
            {detail.availability && (
              <p className="availability-note">{detail.availability}</p>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
