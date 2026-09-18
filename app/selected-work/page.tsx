import type { Metadata } from "next";
import { galleryProjects } from "../portfolio-data";
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
        <p className="eyebrow">Project index</p>
        <h1>All work</h1>
        <p>Applications, films and visual studies, each listed once.</p>
        <nav className="category-links" aria-label="Work categories">
          {groups.map((g, i) => (
            <a href={"#area-" + i} key={g}>
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
          <div className="project-index">
            {galleryProjects
              .filter((p) => p.discipline === group)
              .map((p) => (
                <a
                  key={p.slug}
                  data-project={p.slug}
                  href={p.href}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noreferrer" : undefined}
                >
                  <div>
                    <h3>{p.title}</h3>
                    {p.subtitle && <small>{p.subtitle}</small>}
                  </div>
                  <p>{p.blurb}</p>
                  <span className="index-action">
                    {p.cta || "View project"}{" "}
                    <span aria-hidden="true">{p.external ? "↗" : "→"}</span>
                  </span>
                </a>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
