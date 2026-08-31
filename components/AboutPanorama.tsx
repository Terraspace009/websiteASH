"use client";

const hudPanels = [
  {
    kicker: "Practice",
    title: "Visual systems laboratory",
    body: "I build interfaces and image tools that feel cinematic, responsive, and alive instead of purely utilitarian.",
    className: "about-hud__panel about-hud__panel--primary",
  },
  {
    kicker: "Focus",
    title: "Computer vision / TouchDesigner / realtime visuals",
    body: "The work moves between machine perception, performance visuals, and responsive screen-based systems.",
    className: "about-hud__panel about-hud__panel--focus",
  },
  {
    kicker: "Method",
    title: "Engineering shaped into atmosphere",
    body: "Projects often start as technical systems and end as visual instruments with rhythm, texture, and staging.",
    className: "about-hud__panel about-hud__panel--method",
  },
  {
    kicker: "Tools",
    title: "Python / OpenCV / PyTorch / React",
    body: "I prototype quickly, then art-direct the interaction layer until the technology feels precise and intentional.",
    className: "about-hud__panel about-hud__panel--tools",
  },
];

const factTrail = [
  "Data Science x Creative Technology",
  "Realtime visual systems",
  "Responsive visual interfaces",
  "Live performance visuals",
];

export default function AboutPanorama() {
  return (
    <div className="about-hud">
      <div className="about-hud__copy">
        <span className="section-kicker">About</span>
        <h2>A creative-technology practice with a sci-fi control-room feel.</h2>
        <p className="about-hud__lead">
          I&apos;m Aishwarya S, building machine-learning systems that do more than infer. They
          perform, react, render, and become part of a visual language.
        </p>
        <p>
          My interest is in systems that can sense, translate, and stage information as moving
          image, interaction, and atmosphere.
        </p>
        <div className="about-hud__trail">
          {factTrail.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
      </div>

      <div className="about-hud__board">
        <div className="about-hud__scanline" />
        <div className="about-hud__core">
          <span>Signal core</span>
          <strong>Artist x engineer</strong>
        </div>
        <div className="about-hud__grid">
          {hudPanels.map((panel) => (
            <article key={panel.title} className={panel.className}>
              <span>{panel.kicker}</span>
              <h3>{panel.title}</h3>
              <p>{panel.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
