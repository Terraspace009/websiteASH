import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import SystemBackground from "../../../components/SystemBackground";

export default function PerpetualExistencePage() {
  return (
    <main className="lab-page lab-subpage">
      <SystemBackground />
      <header className="lab-nav">
        <Link href="/" className="lab-mark">Aishwarya S</Link>
        <nav className="lab-nav__links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/live-gallery">Live Gallery</Link>
          <Link href="/terra-systems">TERRA Systems</Link>
        </nav>
      </header>

      <section className="subpage-hero">
        <div className="section-intro section-intro--wide">
          <span className="section-kicker">008 / TouchDesigner &amp; Realtime Graphics</span>
          <h1 className="subpage-title">Perpetual Existence</h1>
          <p>Morphinx &amp; Krishpill. Official video by Terra Space, created in collaboration with Morphinx using TouchDesigner.</p>
        </div>
      </section>

      <section className="subpage-section">
        <div className="live-viewer live-viewer--wide">
          <div className="live-viewer__player">
            <iframe
              src="https://www.youtube-nocookie.com/embed/DV08JyKTwFw"
              title="Morphinx & Krishpill - Perpetual Existence"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <p className="project-technical-note">
          A realtime audiovisual work developed with Morphinx using TouchDesigner, exploring generative visual systems and sound-driven moving image.
        </p>
      </section>

      <section className="subpage-footer-link">
        <Link href="/live-gallery" className="signal-button">Back to Live Gallery <FaArrowRight size={14} /></Link>
      </section>
    </main>
  );
}
