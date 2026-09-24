import type { Metadata } from "next";
import Image from "next/image";
import { credentials } from "../portfolio-data";
export const metadata: Metadata = { title: "About" };
export default function AboutPage() {
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro about-intro">
        <div>
          <p className="eyebrow">About</p>
          <h1>Aishwarya Shukla</h1>
          <p className="intro-role">
            AI engineer, creative technologist
            <br />
            and visual systems artist.
          </p>
          <p>
            I’m a data science graduate working with machine learning, computer
            vision and real-time graphics. Under the name TerraSpace, I also
            make music visuals and interactive experiments.
          </p>
          <p>
            I’m interested in what happens after a model produces an output: how
            a tracked gesture controls sound, how segmentation changes an image,
            and how data becomes a visual system.
          </p>
          <a
            className="text-link"
            href="/selected-work"
          >
            View selected work ↗
          </a>
        </div>
        <figure className="portrait">
          <Image
            src="/gallery/portrait.jpg"
            alt="Aishwarya Shukla"
            fill
            sizes="(max-width: 700px) 100vw, 40vw"
            priority
          />
        </figure>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>Tools & approach</h2>
        </div>
        <div className="prose-grid">
          <article>
            <h3>Machine learning</h3>
            <p>
              Python, PyTorch and TensorFlow for models and inference. Streamlit
              for application interfaces.
            </p>
          </article>
          <article>
            <h3>Computer vision</h3>
            <p>
              OpenCV, MediaPipe and SegFormer for image processing, hand
              tracking and semantic segmentation.
            </p>
          </article>
          <article>
            <h3>Visual systems</h3>
            <p>
              TouchDesigner, GLSL and POPs for real-time graphics. React and
              Tone.js for browser interactions and sound.
            </p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>Training</h2>
          <span>The NODE Institute</span>
        </div>
        <div className="link-list">
          {credentials.map((c) => (
            <a key={c.title} href={c.href} target="_blank" rel="noreferrer">
              <span>
                {c.title}
                <small>{c.org}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
