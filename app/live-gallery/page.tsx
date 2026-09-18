import type { Metadata } from "next";
import Image from "next/image";
import WorkCard from "../../components/WorkCard";
import { filmArchive, galleryProjects, liveGallery } from "../portfolio-data";
export const metadata: Metadata = { title: "Films & Visuals" };
export default function LiveGalleryPage() {
  const films = [
    ...filmArchive.filter((f) => f.featured),
    ...filmArchive.filter((f) => !f.featured),
  ];
  const performance = galleryProjects.find(
    (p) => p.slug === "performance-archive",
  )!;
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">Moving image</p>
        <h1>Films & live visuals</h1>
        <p>
          Music videos, generative films and live performance documentation.
        </p>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>Film archive</h2>
          <span>{films.length} works</span>
        </div>
        <div className="work-grid">
          {films.map((f) => (
            <WorkCard
              key={f.slug}
              project={galleryProjects.find((p) => p.slug === f.slug)!}
            />
          ))}
        </div>
      </section>
      <section
        className="section"
        id="performance-archive"
        data-project="performance-archive"
      >
        <div className="section-heading">
          <h2>{performance.title}</h2>
        </div>
        <figure className="case-image">
          <Image
            src="/gallery/live-performance.jpg"
            alt="Live performance rig and venue documentation"
            width={1600}
            height={1000}
          />
          <figcaption>{performance.blurb}</figcaption>
        </figure>
        <div className="work-grid">
          {liveGallery.map((v) => (
            <article className="work-card" key={v.title}>
              <video
                className="study-video"
                src={v.src}
                poster={v.poster}
                controls
                playsInline
                preload="none"
                aria-label={v.title}
              />
              <h3>{v.title}</h3>
              <p>{v.note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
