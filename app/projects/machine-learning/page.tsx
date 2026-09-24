import type { Metadata } from "next";
import Image from "next/image";
import MediaSurface from "../../../components/MediaSurface";
import { galleryProjects } from "../../portfolio-data";
export const metadata: Metadata = { title: "Machine Learning" };
export default function MachineLearningPage() {
  const project = galleryProjects.find(
    (p) => p.slug === "codex-beverage-prediction",
  )!;
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">Machine learning / Prediction</p>
        <h1>Machine Learning</h1>
        <p>
          A price-range prediction application trained on beverage purchase
          data. The interface combines customer information and purchase
          preferences to request a prediction.
        </p>
      </section>
      <figure className="case-image">
        <MediaSurface project={project} detail>
          <Image
            src="/gallery/codex-beverage-prediction.png"
            alt="Price prediction application with customer profile and purchase preference inputs"
            width={1600}
            height={900}
            priority
          />
        </MediaSurface>
        <figcaption>
          Application interface / Customer and purchase inputs.
        </figcaption>
      </figure>
      <section className="case-section">
        <h2>Overview</h2>
        <p>
          The project connects a trained model with an input form. Customer
          profile, consumption preferences and purchase context are used to
          predict a price range.
        </p>
      </section>
      <section className="case-section">
        <h2>Interaction</h2>
        <p>
          The interface groups inputs into profile, behavior, context and
          purchase sections. A prediction action submits the selected values to
          the model.
        </p>
      </section>
      <section className="case-section">
        <h2>Source code</h2>
        <a
          className="text-link"
          href="https://github.com/Terraspace009/codex-beverage-app"
          target="_blank"
          rel="noreferrer"
        >
          View application source ↗
        </a>
      </section>
    </main>
  );
}
