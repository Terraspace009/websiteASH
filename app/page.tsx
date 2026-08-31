"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { bookingNote, galleryProjects } from "./portfolio-data";

function TileInner({ project }: { project: (typeof galleryProjects)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      el.play().catch(() => {});
    }
  }, []);

  return (
    <>
      <div className="gallery-tile__coord" aria-hidden="true">
        {project.coord}
      </div>
      <div className="gallery-tile__media">
        {project.media.type === "video" ? (
          <video
            ref={videoRef}
            src={project.media.src}
            poster={project.media.poster}
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img src={project.media.src} alt={project.title} loading="lazy" />
        )}
        <div className="gallery-tile__grid" aria-hidden="true" />
      </div>
      <div className="gallery-tile__info">
        <h2>{project.title}</h2>
        {project.subtitle && <span className="gallery-tile__subtitle">{project.subtitle}</span>}
        <p>{project.blurb}</p>
        <div className="gallery-tile__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="gallery-tag">
              {tag}
            </span>
          ))}
        </div>
        {project.cta && <span className="gallery-tile__cta">{project.cta}</span>}
      </div>
    </>
  );
}

function GalleryTile({ project }: { project: (typeof galleryProjects)[number] }) {
  const className = `gallery-tile gallery-tile--${project.size}${project.featured ? " gallery-tile--featured" : ""}`;

  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className={className}>
        <TileInner project={project} />
      </a>
    );
  }

  return (
    <Link href={project.href} className={className}>
      <TileInner project={project} />
    </Link>
  );
}

export default function Home() {
  return (
    <main className="gallery-page">
      <header className="lab-nav gallery-nav">
        <a href="#top" className="lab-mark">
          Aishwarya S <span className="lab-mark__sub">TerraSpace</span>
        </a>
        <nav className="lab-nav__links" aria-label="Primary">
          <Link href="/about">About</Link>
          <a href="mailto:aeshu009@gmail.com?subject=Booking%20inquiry">Book</a>
        </nav>
      </header>

      <section className="gallery-intro" id="top">
        <span className="meta-tag">AI × COMPUTER VISION × TOUCHDESIGNER</span>
        <h1>Realtime visual systems, machine perception, and live performance.</h1>
        <p className="gallery-intro__booking">{bookingNote}</p>
      </section>

      <section className="gallery-grid" aria-label="Selected work">
        {galleryProjects.map((project) => (
          <GalleryTile key={project.slug} project={project} />
        ))}
      </section>

      <footer className="lab-footer">
        <p>Selected work across AI, live visuals, browser tools, and digital art systems.</p>
        <div className="lab-footer__links">
          <a href="https://www.instagram.com/aeshy.terraspace/" target="_blank" rel="noreferrer">
            <FaInstagram size={14} />
            Instagram
          </a>
          <a href="https://github.com/Terraspace009" target="_blank" rel="noreferrer">
            <FaGithub size={14} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aishwarya-shukla-90835b57/" target="_blank" rel="noreferrer">
            <FaLinkedin size={14} />
            LinkedIn
          </a>
          <a href="mailto:aeshu009@gmail.com?subject=Booking%20inquiry">
            <FaEnvelope size={14} />
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
