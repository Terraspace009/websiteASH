import type { Metadata } from "next";
import Image from "next/image";
import MediaSurface from "../../components/MediaSurface";
import { materialModes, galleryProjects } from "../portfolio-data";
export const metadata: Metadata = { title: "Semantic Segmentation Visual Lab" };
export default function SemanticLabPage() {
  const project = galleryProjects.find((p) => p.slug === "semantic-lab")!;
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">Computer vision / Desktop application</p>
        <h1>
          Semantic Segmentation
          <br />
          Visual Lab
        </h1>
        <p>
          A desktop tool that assigns visual materials to semantic classes in
          images, video and webcam input. Built with PyTorch, SegFormer, OpenCV
          and PySide6.
        </p>
        <a
          className="text-link"
          href="https://github.com/Terraspace009/terra-semantic-canvas"
          target="_blank"
          rel="noreferrer"
        >
          Source code ↗
        </a>
      </section>
      <figure className="case-image">
        <MediaSurface project={project} detail>
          <Image
            src="/semantic-lab/semantic-preview.png"
            alt="Semantic Lab material rendering output"
            width={1600}
            height={900}
            priority
          />
        </MediaSurface>
        <figcaption>
          Visual output / Materials applied to segmented regions.
        </figcaption>
      </figure>
      <section className="case-section">
        <h2>Overview</h2>
        <div>
          <p>
            Segmentation identifies regions in an image. This application uses
            those regions as separate material layers, with controls for the
            appearance of each class.
          </p>
          <p>
            The original image, segmentation mask, composite and material render
            can be inspected as different outputs.
          </p>
        </div>
      </section>
      <section className="case-section">
        <h2>Process</h2>
        <div>
          <ol className="process-list">
            <li>Load an image, video or webcam source.</li>
            <li>Run SegFormer inference to produce a class mask.</li>
            <li>Assign materials to the detected classes.</li>
            <li>Compare the mask, composite and rendered image.</li>
          </ol>
        </div>
      </section>
      <figure className="case-image">
        <Image
          src="/semantic-lab/semantic-ui-shot.png"
          alt="PySide6 interface showing source selection, render controls and material settings"
          width={1600}
          height={900}
        />
        <figcaption>
          Interface / Source selection, class controls and material settings.
        </figcaption>
      </figure>
      <section className="case-section">
        <h2>System & technology</h2>
        <div>
          <p>
            PySide6 provides the desktop interface. OpenCV handles image inputs,
            while PyTorch and Hugging Face SegFormer provide semantic
            segmentation.
          </p>
          <div className="material-list">
            {materialModes.map((m) => (
              <div key={m.name}>
                <h3>{m.name}</h3>
                <p>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="case-section">
        <h2>Tools</h2>
        <p>Python · PySide6 · OpenCV · PyTorch · SegFormer</p>
      </section>
    </main>
  );
}
