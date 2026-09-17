import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { filmArchive, liveGallery } from "../portfolio-data";
export const metadata: Metadata = { title: "Films & Visuals" };
export default function LiveGalleryPage() {
  const ordered = [
    ...filmArchive.filter((f) => f.featured),
    ...filmArchive.filter((f) => !f.featured),
  ];
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">Moving image</p>
        <h1>Films & live visuals</h1>
        <p>
          Music videos, generative films and performance documentation. Work
          made with generative image processes and real-time graphics.
        </p>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>Film archive</h2>
          <span>{filmArchive.length} works</span>
        </div>
        <div className="work-grid">
          {ordered.map((f) => (
            <article className="work-card" key={f.youtubeId}>
              <a
                className="work-card-link"
                href={"https://www.youtube.com/watch?v=" + f.youtubeId}
                target="_blank"
                rel="noreferrer"
              >
                <div className="work-media">
                  <Image
                    src={
                      "https://i.ytimg.com/vi/" + f.youtubeId + "/hqdefault.jpg"
                    }
                    alt={f.title + " film still"}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <div className="work-meta">{f.tags[0]}</div>
                <div className="work-title">
                  <h2>{f.title}</h2>
                  <span aria-hidden="true">↗</span>
                </div>
                <p className="work-subtitle">{f.artist}</p>
                <p>{f.note}</p>
                <span className="work-cta">Watch film</span>
              </a>
              {f.youtubeId === "DV08JyKTwFw" && (
                <Link
                  className="text-link case-link"
                  href="/projects/perpetual-existence"
                >
                  Project notes ↗
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="live">
        <div className="section-heading">
          <h2>Live & spatial studies</h2>
        </div>
        <div className="work-grid">
          {liveGallery
            .filter((v) => v.src)
            .map((v) => (
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
      <section className="section" id="spatial">
        <div className="section-heading">
          <h2>Point cloud & gesture studies</h2>
        </div>
        <div className="work-grid">
          {[
            {
              src: "/gallery/pointcloud-scan.jpg",
              title: "Point Cloud / Kinect Studies",
              note: "Depth capture represented as points in space.",
            },
            {
              src: "/gallery/gesture-instrument-td.jpg",
              title: "Gesture Music Instrument",
              note: "A hand-tracked particle instrument built with TouchDesigner and POPs.",
            },
          ].map((p) => (
            <figure className="work-card" key={p.title}>
              <div className="work-media">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <figcaption>
                <h3>{p.title}</h3>
                <p>{p.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
