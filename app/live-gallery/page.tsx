import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import SystemBackground from "../../components/SystemBackground";
import { filmArchive } from "../portfolio-data";

export default function LiveGalleryPage() {
  const featuredFilms = filmArchive.filter((film) => film.featured);
  const archiveFilms = filmArchive.filter((film) => !film.featured);

  return (
    <main className="lab-page lab-subpage film-archive-page">
      <SystemBackground />
      <header className="lab-nav">
        <Link href="/" className="lab-mark">Aishwarya S</Link>
        <nav className="lab-nav__links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/semantic-lab">Semantic Lab</Link>
          <Link href="/terra-systems">TERRA Systems</Link>
          <Link href="/selected-work">Index</Link>
        </nav>
      </header>

      <section className="subpage-hero film-archive-hero">
        <div className="section-intro section-intro--wide">
          <span className="section-kicker">Live Gallery</span>
          <h1 className="subpage-title">AI Film / Music Visuals / Realtime Experiments</h1>
          <p>Moving-image works created across generative AI, realtime graphics, experimental animation, image synthesis, editing, and audiovisual systems.</p>
        </div>
      </section>

      <section className="film-section subpage-section">
        <div className="film-section__heading">
          <span className="section-kicker">Featured films</span>
          <p>Selected works at the intersection of music, generative image, and realtime visual systems.</p>
        </div>
        <div className="film-grid film-grid--featured">
          {featuredFilms.map((film) => <FilmCard key={film.youtubeId} film={film} />)}
        </div>
      </section>

      <section className="film-section subpage-section">
        <div className="film-section__heading">
          <span className="section-kicker">Archive / 001–008</span>
          <p>Music videos, experimental film, audiovisual studies, and live visual documentation.</p>
        </div>
        <div className="film-grid">
          {archiveFilms.map((film) => <FilmCard key={film.youtubeId} film={film} />)}
        </div>
      </section>
    </main>
  );
}

function FilmCard({ film }: { film: (typeof filmArchive)[number] }) {
  const filmUrl = `https://www.youtube.com/watch?v=${film.youtubeId}`;

  return (
    <article className={film.featured ? "film-card film-card--featured" : "film-card"}>
      <a href={filmUrl} target="_blank" rel="noreferrer" className="film-card__poster" aria-label={`Watch ${film.title}`}>
        <img src={`https://i.ytimg.com/vi/${film.youtubeId}/maxresdefault.jpg`} alt={`${film.artist} — ${film.title}`} />
        <span className="film-card__scan" aria-hidden="true" />
        <span className="film-card__watch">Watch film <FaArrowUpRightFromSquare size={12} /></span>
      </a>
      <div className="film-card__content">
        <span className="film-card__number">{film.number} / Film</span>
        <h2>{film.title}</h2>
        <p className="film-card__artist">{film.artist}</p>
        <p className="film-card__note">{film.note}</p>
        <div className="film-card__tags">
          {film.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
