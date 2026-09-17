import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Perpetual Existence" };
export default function PerpetualExistencePage() {
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">TouchDesigner / Music video</p>
        <h1>Perpetual Existence</h1>
        <p>
          Morphinx & Krishpill. Official video by Terra Space, developed with
          Morphinx using TouchDesigner.
        </p>
      </section>
      <div className="film-player">
        <iframe
          src="https://www.youtube-nocookie.com/embed/DV08JyKTwFw"
          title="Morphinx & Krishpill — Perpetual Existence"
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <section className="case-section">
        <h2>Overview</h2>
        <p>
          A music video using real-time generative graphics. The work brings
          TouchDesigner’s visual systems into a finished audiovisual piece.
        </p>
      </section>
      <section className="case-section">
        <h2>Process & visual output</h2>
        <p>
          Developed in collaboration with Morphinx. The finished film documents
          the visual compositions and their relationship to the music.
        </p>
      </section>
      <section className="case-section">
        <h2>Tools & credits</h2>
        <div>
          <p>
            Visual system: TouchDesigner
            <br />
            Video: Terra Space, with Morphinx
            <br />
            Music: Morphinx & Krishpill
          </p>
          <Link className="text-link" href="/live-gallery">
            More films & visuals ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
