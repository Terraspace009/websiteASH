import type { Metadata } from "next";
import WorkCard from "../../components/WorkCard";
import { galleryProjects, selectedIndex } from "../portfolio-data";
export const metadata: Metadata = { title: "Work" };
const groups = [
  "AI / Machine Learning",
  "Computer Vision",
  "Interactive Systems",
  "TouchDesigner / Live Visuals",
  "Film / Generative Visuals",
  "Spatial / Point Cloud",
];
export default function SelectedWorkPage() {
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">Projects & studies</p>
        <h1>Selected work</h1>
        <p>
          Models, interfaces and visual experiments. Each project approaches a
          different way of working with data, images or interaction.
        </p>
        <nav className="category-links" aria-label="Work categories">
          {groups.map((g, i) => (
            <a key={g} href={"#area-" + i}>
              {g}
            </a>
          ))}
        </nav>
      </section>
      {groups.map((group, i) => (
        <section className="section" id={"area-" + i} key={group}>
          <div className="section-heading">
            <h2>{group}</h2>
          </div>
          <div className="work-grid">
            {galleryProjects
              .filter((p) => p.discipline === group)
              .map((p) => (
                <WorkCard key={p.slug} project={p} />
              ))}
          </div>
        </section>
      ))}
      <section className="section">
        <div className="section-heading">
          <h2>More applications</h2>
          <span>Live projects</span>
        </div>
        <div className="link-list">
          {selectedIndex
            .filter((p) => p.link === "external")
            .map((p) => (
              <a href={p.href} key={p.title} target="_blank" rel="noreferrer">
                <span>{p.title}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}
