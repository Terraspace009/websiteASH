import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SystemBackground from "../../components/SystemBackground";
import { selectedIndex } from "../portfolio-data";

export default function SelectedWorkPage() {
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
          <Link href="/live-gallery">Live Gallery</Link>
        </nav>
      </header>

      <section className="subpage-hero">
        <div className="index-lab__head">
          <span className="section-kicker">Selected Index</span>
          <h1 className="subpage-title">A compact route through the work.</h1>
        </div>
      </section>

      <section className="index-lab subpage-section">
        <div className="index-list">
          {selectedIndex.map((item) =>
            item.link === "external" ? (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="index-link">
                <span>{item.title}</span>
                <FaArrowUpRightFromSquare size={12} />
              </a>
            ) : (
              <Link key={item.title} href={item.href} className="index-link">
                <span>{item.title}</span>
                <FaArrowRight size={12} />
              </Link>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
