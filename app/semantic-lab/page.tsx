import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare, FaFileArrowDown } from "react-icons/fa6";
import SystemBackground from "../../components/SystemBackground";
import { materialModes } from "../portfolio-data";

const semanticSteps = [
  "image/video/webcam",
  "SegFormer inference",
  "class-aware materials",
  "realtime output",
];

const caseStudyFacts = [
  {
    label: "Project type",
    value: "Desktop creative-vision tool",
  },
  {
    label: "Core stack",
    value: "PySide6 / OpenCV / PyTorch / Hugging Face SegFormer",
  },
  {
    label: "Output modes",
    value: "Original / mask / composite / material render",
  },
];

const caseStudyNotes = [
  {
    title: "What it does",
    body: "Turns semantic segmentation into a visual instrument, letting each detected class behave like a material layer instead of a flat mask.",
  },
  {
    title: "Why it matters",
    body: "The project sits between engineering and image-making: inference is only the start, and the interesting part is how perception becomes atmosphere.",
  },
  {
    title: "Share strategy",
    body: "The portfolio page acts as the public case study. The app itself can be uploaded to GitHub as a desktop code artifact instead of being forced into Vercel.",
  },
];

const semanticGallery = [
  {
    title: "Semantic control surface",
    src: "/semantic-lab/semantic-ui-shot.png",
    note: "Desktop UI with source controls, render modes, class panels, and material tuning.",
  },
  {
    title: "Material preview output",
    src: "/semantic-lab/semantic-preview.png",
    note: "Class-aware rendering where segmentation becomes a layered visual composition instead of a flat mask.",
  },
];

export default function SemanticLabPage() {
  return (
    <main className="lab-page lab-subpage">
      <SystemBackground />
      <header className="lab-nav">
        <Link href="/" className="lab-mark">
          Aishwarya S
        </Link>
        <nav className="lab-nav__links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/terra-systems">TERRA Systems</Link>
          <Link href="/live-gallery">Live Gallery</Link>
          <Link href="/selected-work">Index</Link>
        </nav>
      </header>

      <section className="subpage-hero">
        <div className="section-intro section-intro--wide">
          <span className="section-kicker">Featured Project</span>
          <h1 className="subpage-title">Semantic Segmentation Visual Lab</h1>
          <p>
            A modular semantic rendering instrument for image, video, and webcam inputs with
            per-class material assignment and realtime creative output.
          </p>
        </div>
      </section>

      <section className="semantic-lab subpage-section">
        <div className="semantic-stage">
          <div className="semantic-stage__visual">
            <div className="semantic-beam semantic-beam--one" />
            <div className="semantic-beam semantic-beam--two" />
            <div className="semantic-gridline" />
            <div className="semantic-gridline semantic-gridline--alt" />
            <div className="semantic-orb" />
            <div className="semantic-caption">
              <span>Pipeline</span>
              <strong>input -&gt; segmentation -&gt; class materials -&gt; realtime render -&gt; export</strong>
            </div>
          </div>

          <div className="semantic-stage__details">
            <div className="pipeline-strip">
              {semanticSteps.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>

            <div className="material-mode-list">
              {materialModes.map((mode) => (
                <article key={mode.name}>
                  <h3>{mode.name}</h3>
                  <p>{mode.detail}</p>
                </article>
              ))}
            </div>

            <div className="semantic-facts">
              <span>Built from real local source</span>
              <strong>PySide6 / OpenCV / PyTorch / Hugging Face SegFormer</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="semantic-case semantic-case--facts subpage-section">
        {caseStudyFacts.map((fact) => (
          <article key={fact.label} className="semantic-case__panel">
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </article>
        ))}
      </section>

      <section className="semantic-case subpage-section">
        <div className="section-intro">
          <span className="section-kicker">Case Study</span>
          <h2>Web page first, desktop code second.</h2>
          <p>
            This project is better shared as a polished case study page in the portfolio, with the
            source uploaded separately to GitHub, than forced into a fake live web deployment.
          </p>
        </div>

        <div className="semantic-case__grid">
          {caseStudyNotes.map((note) => (
            <article key={note.title} className="semantic-case__panel semantic-case__panel--story">
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="semantic-gallery subpage-section">
        <div className="section-intro">
          <span className="section-kicker">Process Frames</span>
          <h2>Interface and output, side by side.</h2>
        </div>

        <div className="semantic-gallery__grid">
          {semanticGallery.map((item) => (
            <figure key={item.title} className="semantic-gallery__card">
              <div className="semantic-gallery__media">
                <Image src={item.src} alt={item.title} fill sizes="(max-width: 1080px) 100vw, 50vw" />
              </div>
              <figcaption>
                <span>{item.title}</span>
                <p>{item.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="semantic-links subpage-section">
        <div className="semantic-links__card">
          <span className="section-kicker">Project Access</span>
          <h2>Code artifact and CV.</h2>
          <p>
            The desktop app now lives as a GitHub repository, while this page carries the public
            case-study story and visual evidence.
          </p>
          <div className="semantic-links__actions">
            <a
              href="https://github.com/Terraspace009/terra-semantic-canvas"
              target="_blank"
              rel="noreferrer"
              className="signal-button"
            >
              View GitHub Repo
              <FaArrowUpRightFromSquare size={14} />
            </a>
            <a href="/Aishwarya_Shukla_Final_CV.pdf" target="_blank" rel="noreferrer" className="signal-button signal-button--ghost">
              Open CV
              <FaFileArrowDown size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="subpage-footer-link">
        <Link href="/terra-systems" className="signal-button">
          Next: TERRA Systems
          <FaArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}
