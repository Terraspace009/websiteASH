import Link from "next/link";
import WorkCard from "../components/WorkCard";
import { galleryProjects } from "./portfolio-data";
export default function Home() {
  const selected = [
    "semantic-lab",
    "alien-kaerlighed",
    "terra-hand-performer",
    "terra-cypher",
    "pointcloud-studies",
    "codex-beverage-prediction",
  ];
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="identity">
        <p className="eyebrow">AI engineer + creative technologist</p>
        <h1>
          Aishwarya Shukla<span className="identity-dot">.</span>
        </h1>
        <p className="identity-description">
          Machine learning, computer vision
          <br className="desktop-break" /> and real-time visual systems.
        </p>
      </section>
      <section
        className="section selected-section"
        aria-labelledby="selected-heading"
      >
        <div className="section-heading">
          <h2 id="selected-heading">Selected work</h2>
          <Link className="text-link" href="/selected-work">
            All projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="work-grid">
          {selected.map((slug, i) => (
            <WorkCard
              key={slug}
              project={galleryProjects.find((p) => p.slug === slug)!}
              priority={i < 2}
            />
          ))}
        </div>
      </section>
      <section className="practice-band">
        <p className="eyebrow">The practice</p>
        <div>
          <h2>
            From machine perception
            <br />
            to moving image.
          </h2>
          <p>
            I build models and interfaces, then explore how their outputs can
            become images, sound and interaction. My work moves between Python,
            computer vision and TouchDesigner.
          </p>
          <Link className="text-link" href="/about">
            About my practice ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
