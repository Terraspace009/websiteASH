export const materialModes = [
  { name: "Matrix", detail: "ASCII, Bayer, halftone, blue-noise." },
  { name: "Wire", detail: "Grid, contours, topology, flow-mesh." },
  { name: "Chrome", detail: "Liquid, glass, pearl, mercury." },
  { name: "Particles", detail: "Point-cloud, stipple, plexus, gaussian." },
];

export const terraSystems = [
  {
    title: "TERRA Hand Performer",
    concept:
      "A browser-based gesture synth that turns webcam hand pose into pitch, filter brightness, pads, and note triggers.",
    href: "/experiments/terra-hand-performer/",
    accent: "MediaPipe Hands / Tone.js synth",
    cta: "Open Instrument",
  },
  {
    title: "TERRA Studio",
    concept:
      "The original TERRA identity space for visual experiments, interface studies, and performance-led composition.",
    href: "https://aeshwarya-portfolio.vercel.app/",
    accent: "studio world / live archive",
    cta: "Open Archive",
  },
  {
    title: "TERRA Visual",
    concept:
      "A visual-machine language exploring screen choreography, interface rhythm, and dark realtime aesthetics.",
    href: "https://github.com/Terraspace009/Terra1",
    accent: "visual machine language",
    cta: "View GitHub",
  },
  {
    title: "TERRA Cypher",
    concept:
      "Emotion and webcam inference translated into a cinematic HUD with a performance-facing visual readout.",
    href: "https://terra-cypherweb-b8yxnpeu9rjnwikjcf45jy.streamlit.app/",
    accent: "emotion HUD / webcam AI",
    cta: "Open Experience",
  },
];

export type LiveGalleryItem = {
  title: string;
  artist?: string;
  src?: string;
  youtubeId?: string;
  poster: string;
  note: string;
  frame: "full" | "compact";
  href?: string;
};

export const liveGallery: LiveGalleryItem[] = [
  {
    title: "Perpetual Existence",
    artist: "Morphinx & Krishpill",
    youtubeId: "DV08JyKTwFw",
    poster: "https://i.ytimg.com/vi/DV08JyKTwFw/hqdefault.jpg",
    note: "A realtime audiovisual work developed with Morphinx using TouchDesigner.",
    frame: "full",
    href: "/projects/perpetual-existence",
  },
  {
    title: "Live Laser + Visual Set",
    src: "/live-systems/venue-laser-set.mp4",
    poster: "/live-systems/venue-laser-set-poster.jpg",
    note: "Laser and projection system running live at a club date — full rig, real room.",
    frame: "full",
  },
  {
    title: "Live Capture Study",
    src: "/live-systems/PXL_20260403_230034557.mp4",
    poster: "/live-systems/6237937903338196662.jpg",
    note: "Embodied movement, live response, and performance texture.",
    frame: "compact",
  },
  {
    title: "Temple Signal Study",
    src: "/live-systems/temmple.mp4",
    poster: "/live-systems/6237937903338196684.jpg",
    note: "Architectural glow, ritual pacing, and spatial atmosphere.",
    frame: "compact",
  },
];

export type FilmArchiveItem = {
  number: string;
  title: string;
  artist: string;
  youtubeId: string;
  tags: string[];
  featured?: boolean;
  note: string;
};

export const filmArchive: FilmArchiveItem[] = [
  { number: "001", title: "Safe And Sound", artist: "Psykovsky", youtubeId: "lvllqpqg1yA", tags: ["AI Film", "Music Visual", "Generative"], note: "Generative moving image for Psykovsky." },
  { number: "002", title: "Alien Kaerlighed", artist: "Psykovsky feat. Kaerlighed", youtubeId: "H0GoE1uUFRo", tags: ["AI Film", "Generative Visuals", "Music Video"], featured: true, note: "A primary work in the AI film and music-visual archive." },
  { number: "003", title: "Polenta", artist: "Psykovsky feat. Terra Fiamma", youtubeId: "YbCklNNRX7E", tags: ["AI Visuals", "Music Video", "Experimental"], note: "Experimental image synthesis for a high-velocity music video." },
  { number: "004", title: "PSYSTREAM 3.0", artist: "Psykovsky", youtubeId: "VWCsCrquIKw", tags: ["Live Visuals", "Psychedelic", "Audiovisual"], note: "Long-form audiovisual archive and live visual documentation." },
  { number: "005", title: "f02(3 24(3", artist: "Psykovsky", youtubeId: "19YwpmAHECw", tags: ["Experimental Film", "Generative", "Visual Art"], note: "Generative visual art for sound-driven moving image." },
  { number: "006", title: "Alien Love Song — Episode 1 / 156 BPM", artist: "外星人的情歌 第 1 集", youtubeId: "GxZC0o-BH4Q", tags: ["AI Film", "Experimental", "Audiovisual"], note: "An experimental AI-film episode moving through rhythm, image, and narrative texture." },
  { number: "007", title: "Extra Pearl / 225 BPM", artist: "Psykovsky feat. QQ IDOL", youtubeId: "ZUNjXrBHikg", tags: ["Generative Visuals", "Music Video", "AI"], note: "A fast-tempo generative visual work for Psykovsky and QQ IDOL." },
  { number: "008", title: "Perpetual Existence", artist: "Morphinx & Krishpill", youtubeId: "DV08JyKTwFw", tags: ["TouchDesigner", "Realtime Visuals", "Generative"], featured: true, note: "Official video by Terra Space, developed with Morphinx using TouchDesigner." },
];

export const pointCloudStudies = [
  {
    title: "Point Cloud — Tree Study",
    src: "/live-systems/pointcloud-tree-study.mp4",
    poster: "/live-systems/pointcloud-tree-study-poster.jpg",
    note: "Scanned form rebuilt as a directional point field, framed by projected sightlines.",
  },
  {
    title: "Point Cloud — Mesh Study",
    src: "/live-systems/pointcloud-mesh-study.mp4",
    poster: "/live-systems/pointcloud-mesh-study-poster.jpg",
    note: "Figure dissolving into a moving stipple field with atmospheric color bleed.",
  },
  {
    title: "Point Cloud — Network Study",
    src: "/live-systems/pointcloud-network-study.mp4",
    poster: "/live-systems/pointcloud-network-study-poster.jpg",
    note: "Plexus-driven particle network, built for screen choreography and transitions.",
  },
];

export const credentials = [
  {
    title: "Interactive VR Experiences in TouchDesigner",
    org: "The NODE Institute — TD Professionals",
    href: "https://thenodeinstitute.org/courses/ss25-td-interactive-vr-experiences-in-touchdesigner/",
  },
  {
    title: "Advanced GLSL in TouchDesigner",
    org: "The NODE Institute — TD Professionals",
    href: "https://thenodeinstitute.org/courses/ss25-td-advanced-glsl-in-touchdesigner/",
  },
  {
    title: "Mastering Lasers with LA.laserchop",
    org: "The NODE Institute — TD Professionals",
    href: "https://thenodeinstitute.org/courses/mastering-lasers-with-la-laserchop/",
  },
  {
    title: "POPs Advanced",
    org: "The NODE Institute — TD Professionals",
    href: "https://thenodeinstitute.org/courses/pops-advanced/",
  },
  {
    title: "POPs Case Study — Procedural Locomotion",
    org: "The NODE Institute — TD Professionals",
    href: "https://thenodeinstitute.org/courses/procedural-locomotion-with-pops/",
  },
];

export const bookingNote =
  "Open for bookings — clubs, festivals, residencies, museums, and exhibitions.";

export const selectedIndex = [
  {
    title: "Semantic Segmentation Visual Lab",
    href: "/semantic-lab",
    link: "internal",
  },
  {
    title: "TERRA Systems",
    href: "/terra-systems",
    link: "internal",
  },
  {
    title: "Live Performance Gallery",
    href: "/live-gallery",
    link: "internal",
  },
  {
    title: "About Practice",
    href: "/about",
    link: "internal",
  },
  {
    title: "TERRA-Cypher",
    href: "https://terra-cypherweb-b8yxnpeu9rjnwikjcf45jy.streamlit.app/",
    link: "external",
  },
  {
    title: "Azure Computer Vision",
    href: "https://azure-cv-app-n7hamxehg76uncshsuvfea.streamlit.app/",
    link: "external",
  },
  {
    title: "ByteMe",
    href: "https://byteme-n6z2wt7c3gy5z3iyoisazl.streamlit.app/",
    link: "external",
  },
  {
    title: "Hotel Booking Prediction",
    href: "https://hotel-booking-prediction-9p7h3dhndnzxq26btdeduu.streamlit.app",
    link: "external",
  },
];

export const homeDestinations = [
  {
    title: "Live Systems",
    href: "/live-gallery",
    note: "TouchDesigner studies, performance visuals, and event work.",
    cta: "Open Live Systems",
    track: "visuals",
  },
  {
    title: "TERRA Visuals",
    href: "/terra-systems",
    note: "Browser-based visual experiments for image, video, webcam, and live input.",
    cta: "Open TERRA Visuals",
    track: "visuals",
  },
  {
    title: "Semantic Lab",
    href: "/semantic-lab",
    note: "AI segmentation for image, video, and webcam rendering.",
    cta: "Open Semantic Lab",
    track: "ai",
  },
  {
    title: "AI / ML Work",
    href: "/selected-work",
    note: "TERRA-Cypher, computer vision, finance analytics, and selected ML projects.",
    cta: "Open AI / ML Work",
    track: "ai",
  },
];

export type GalleryProject = {
  title: string;
  subtitle?: string;
  slug: string;
  href: string;
  external?: boolean;
  blurb: string;
  tags: string[];
  media: { type: "image"; src: string } | { type: "video"; src: string; poster: string };
  size: "large" | "medium" | "small";
  featured?: boolean;
  cta?: string;
  home?: boolean;
  coord: string;
};

export const galleryProjects: GalleryProject[] = [
  {
    title: "TERRA Hand Performer",
    slug: "terra-hand-performer",
    href: "/experiments/terra-hand-performer/",
    blurb: "Webcam hand tracking mapped into an expressive browser synth with glowing gesture trails.",
    tags: ["MediaPipe", "Tone.js", "Gesture Synth"],
    media: { type: "image", src: "/gallery/gesture-instrument-td.jpg" },
    size: "large",
    featured: true,
    cta: "Open instrument",
    coord: "HAND / AUDIO / BROWSER",
  },
  {
    title: "ALIEN KAERLIGHED",
    subtitle: "Psykovsky feat. Kaerlighed",
    slug: "alien-kaerlighed",
    href: "/live-gallery",
    blurb: "AI film and generative visuals for a Psykovsky collaboration.",
    tags: ["AI Film", "Generative Visuals", "Music Video"],
    media: { type: "image", src: "https://i.ytimg.com/vi/H0GoE1uUFRo/hqdefault.jpg" },
    size: "medium",
    cta: "Explore live gallery ↗",
    coord: "002 / FILM ARCHIVE",
  },
  {
    title: "Semantic Lab",
    slug: "semantic-lab",
    href: "/semantic-lab",
    blurb: "Realtime AI segmentation — image, video, and live camera.",
    tags: ["PyTorch", "SegFormer", "PySide6", "CUDA"],
    media: { type: "image", src: "/gallery/semantic-lab-cover.jpg" },
    size: "large",
    coord: "60 FPS · CONF 0.94",
  },
  {
    title: "TERRA-Cypher",
    slug: "terra-cypher",
    href: "https://terra-cypherweb-b8yxnpeu9rjnwikjcf45jy.streamlit.app/",
    external: true,
    blurb: "Webcam emotion inference as a cinematic HUD readout.",
    tags: ["Computer Vision", "Streamlit", "Emotion AI"],
    media: { type: "image", src: "/gallery/terra-cypher-ui.png" },
    size: "medium",
    coord: "WEBCAM / HUD",
  },
  {
    title: "Live TouchDesigner Visual Systems",
    slug: "live-touchdesigner",
    href: "/live-gallery",
    blurb: "Rig-built visual systems performed live at venue dates.",
    tags: ["TouchDesigner", "Laser", "Live Performance"],
    media: { type: "video", src: "/live-systems/venue-laser-set.mp4", poster: "/live-systems/venue-laser-set-poster.jpg" },
    size: "large",
    home: false,
    coord: "CLUB / FESTIVAL",
  },
  {
    title: "TERRA Visuals",
    slug: "terra-visuals",
    href: "/terra-systems",
    blurb: "Point-cloud environments and realtime visual studies.",
    tags: ["Realtime", "Browser", "Visual Systems"],
    media: { type: "image", src: "/gallery/terra-pointcloud-study.png" },
    size: "medium",
    coord: "BROWSER / REALTIME",
  },
  {
    title: "Gesture Music Instrument",
    slug: "gesture-instrument",
    href: "/live-gallery",
    blurb: "Hand-tracked particle instrument, driven by live webcam pose.",
    tags: ["TouchDesigner", "Hand Tracking", "POPs"],
    media: { type: "image", src: "/gallery/gesture-instrument-td.jpg" },
    size: "medium",
    home: false,
    coord: "POSE / 5-PT TRACK",
  },
  {
    title: "Point Cloud / Kinect Studies",
    slug: "pointcloud-studies",
    href: "/live-gallery",
    blurb: "Depth-scanned forms rebuilt as directional point fields.",
    tags: ["Point Cloud", "Depth Scan", "POPs"],
    media: { type: "image", src: "/gallery/pointcloud-scan.jpg" },
    size: "small",
    home: false,
    coord: "DEPTH SCAN",
  },
  {
    title: "Live Performance Archive",
    slug: "performance-archive",
    href: "/live-gallery",
    blurb: "Rig setups and gig documentation across venues.",
    tags: ["Live Rig", "Bookings", "Archive"],
    media: { type: "image", src: "/gallery/live-performance.jpg" },
    size: "small",
    home: false,
    coord: "VENUE ARCHIVE",
  },
  {
    title: "CodeX Beverage Prediction",
    slug: "codex-beverage-prediction",
    href: "/selected-work",
    blurb: "Price-range prediction interface trained on beverage purchase data.",
    tags: ["Machine Learning", "Prediction", "Data"],
    media: { type: "image", src: "/gallery/codex-beverage-prediction.png" },
    size: "medium",
    coord: "INDEX / ML+CV",
  },
];
