import type { Metadata } from "next";
import WorkCard from "../../components/WorkCard";
import { galleryProjects, experimentSlugs } from "../portfolio-data";
export const metadata: Metadata = { title: "TERRA Experiments" };
export default function TerraSystemsPage() {
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">Interactive systems</p>
        <h1>TERRA experiments</h1>
        <p>
          Browser instruments and a TouchDesigner gesture study. Each project
          links to its own instrument or documentation.
        </p>
      </section>
      <section className="section work-grid" aria-label="TERRA projects">
        {experimentSlugs.map((slug, i) => (
          <WorkCard
            key={slug}
            project={galleryProjects.find((p) => p.slug === slug)!}
            priority={i < 2}
          />
        ))}
      </section>
    </main>
  );
}
