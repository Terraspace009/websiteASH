"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import SystemBackground from "../../components/SystemBackground";
import { liveGallery } from "../portfolio-data";

export default function LiveGalleryPage() {
  const [activeVideo, setActiveVideo] = useState(0);

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

      <section className="subpage-hero">
        <div className="section-intro section-intro--wide">
          <span className="section-kicker">TouchDesigner / Live Performance</span>
          <h1 className="subpage-title">Moving image gets its own dedicated page.</h1>
          <p>
            The gallery now opens away from the homepage so clips, posters, and playback controls
            are easier to handle without crowding the hero scene.
          </p>
        </div>
      </section>

      <section className="live-lab subpage-section">
        <div className="live-viewer live-viewer--wide">
          <div
            className={
              liveGallery[activeVideo].frame === "compact"
                ? "live-viewer__player live-viewer__player--compact"
                : "live-viewer__player"
            }
          >
            {liveGallery[activeVideo].youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${liveGallery[activeVideo].youtubeId}`}
                title={liveGallery[activeVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video
                key={activeVideo}
                src={liveGallery[activeVideo].src}
                poster={liveGallery[activeVideo].poster}
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            )}
            <div className="live-viewer__label">
              <span>{liveGallery[activeVideo].title}</span>
              {liveGallery[activeVideo].artist && <strong>{liveGallery[activeVideo].artist}</strong>}
              <p>{liveGallery[activeVideo].note}</p>
            </div>
          </div>

          <div className="live-viewer__selectors">
            {liveGallery.map((item, index) => (
              item.href ? (
                <Link key={item.title} href={item.href} className="live-thumb">
                  <img src={item.poster} alt={item.title} className="object-cover" />
                  <span>{item.title}</span>
                </Link>
              ) : <button
                key={item.title}
                type="button"
                className={index === activeVideo ? "live-thumb is-active" : "live-thumb"}
                onClick={() => setActiveVideo(index)}
              >
                <img src={item.poster} alt={item.title} className="object-cover" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="subpage-footer-link">
        <Link href="/about" className="signal-button">
          Next: About
          <FaArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}
