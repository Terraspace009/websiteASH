import type { Metadata } from "next";
import Image from "next/image";
import { terraSystems } from "../portfolio-data";
export const metadata: Metadata = { title: "TERRA Experiments" };
const media = [
  "/gallery/terra-hand-performer.png",
  "/gallery/generative-study.jpg",
  "/gallery/terra-pointcloud-study.png",
  "/gallery/terra-cypher-ui.png",
];
export default function TerraSystemsPage() {
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">Interactive systems</p>
        <h1>TERRA experiments</h1>
        <p>
          Browser instruments, webcam interfaces and visual studies. Working
          prototypes for exploring how images and sound respond to input.
        </p>
      </section>
      <section className="section work-grid" aria-label="TERRA projects">
        {terraSystems.map((s, i) => (
          <article className="work-card" key={s.title}>
            <a
              className="work-card-link"
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <div className="work-media">
                <Image
                  src={media[i]}
                  alt={s.title + " interface"}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  priority={i < 2}
                />
              </div>
              <div className="work-meta">{s.accent}</div>
              <div className="work-title">
                <h2>{s.title}</h2>
                <span aria-hidden="true">↗</span>
              </div>
              <p>{s.concept}</p>
              <span className="work-cta">{s.cta}</span>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
