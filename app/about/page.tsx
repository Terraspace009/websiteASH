import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import AboutPanorama from "../../components/AboutPanorama";
import SystemBackground from "../../components/SystemBackground";
import CertificationCard from "../../components/CertificationCard";
import { credentials } from "../portfolio-data";

export default function AboutPage() {
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
          <Link href="/terra-systems">TERRA Systems</Link>
          <Link href="/selected-work">Index</Link>
        </nav>
      </header>

      <section className="subpage-hero about-hero--portrait">
        <div className="section-intro section-intro--wide about-hero__row">
          <div>
            <span className="section-kicker">About</span>
            <h1 className="subpage-title">Practice notes in a dedicated HUD page.</h1>
            <p>
              The artist-engineer statement now has its own page instead of competing with the hero,
              projects, and video system on the same scroll.
            </p>
          </div>
          <img src="/gallery/portrait.jpg" alt="Aishwarya S" className="about-hero__portrait" />
        </div>
      </section>

      <section className="about-lab subpage-section">
        <AboutPanorama />
      </section>

      <section className="subpage-section credentials-section">
        <span className="section-kicker">Training / credentials</span>
        <div className="credentials-grid">
          {credentials.map((item) => (
            <CertificationCard key={item.title} title={item.title} org={item.org} href={item.href} />
          ))}
        </div>
      </section>

      <section className="subpage-footer-link">
        <Link href="/selected-work" className="signal-button">
          Next: Selected Work
          <FaArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}
