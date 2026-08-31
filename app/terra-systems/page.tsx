import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SystemBackground from "../../components/SystemBackground";
import { terraSystems } from "../portfolio-data";

export default function TerraSystemsPage() {
  return (
    <main className="lab-page lab-subpage">
      <SystemBackground />
      <header className="lab-nav">
        <Link href="/" className="lab-mark">
          Aishwarya S
        </Link>
        <nav className="lab-nav__links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/semantic-lab">Semantic Lab</Link>
          <Link href="/live-gallery">Live Gallery</Link>
          <Link href="/selected-work">Index</Link>
        </nav>
      </header>

      <section className="subpage-hero">
        <div className="section-intro section-intro--wide">
          <span className="section-kicker">TERRA Visual Systems</span>
          <h1 className="subpage-title">Visual apps and browser experiments, each with room to breathe.</h1>
          <p>
            The TERRA work now sits away from the hero so the archive, GitHub branch, and live app
            can each be opened cleanly.
          </p>
        </div>
      </section>

      <section className="terra-lab subpage-section">
        <div className="terra-rail terra-rail--stacked" aria-label="TERRA Visual Systems collection">
          {terraSystems.map((system, index) => (
            <article key={system.title} className="terra-slide">
              <div className="terra-slide__index">0{index + 1}</div>
              <div className="terra-slide__surface" />
              <div className="terra-slide__copy">
                <h3>{system.title}</h3>
                <p>{system.concept}</p>
                <span>{system.accent}</span>
                <a href={system.href} target="_blank" rel="noreferrer">
                  {system.cta}
                  <FaArrowUpRightFromSquare size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="subpage-footer-link">
        <Link href="/live-gallery" className="signal-button">
          Next: Live Gallery
          <FaArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}
