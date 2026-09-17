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
      "A webcam-controlled synthesizer built with MediaPipe Hands and Tone.js. Hand position changes pitch and filter; gestures trigger or sustain sound.",
    href: "/experiments/terra-hand-performer/",
    accent: "MediaPipe Hands / Tone.js synth",
    cta: "Open instrument",
  },
  {
    title: "TERRA Studio",
    concept:
      "An archive of TERRA visual experiments, interface studies and compositions.",
    href: "https://aeshwarya-portfolio.vercel.app/",
    accent: "Visual studies / Archive",
    cta: "View archive",
  },
  {
    title: "TERRA Visual",
    concept: "Source repository for TERRA visual and interface experiments.",
    href: "https://github.com/Terraspace009/Terra1",
    accent: "Visual systems / Source code",
    cta: "View GitHub",
  },
  {
    title: "TERRA Cypher",
    concept:
      "A Streamlit webcam application displaying facial-expression predictions alongside the camera input.",
    href: "https://terra-cypherweb-b8yxnpeu9rjnwikjcf45jy.streamlit.app/",
    accent: "Computer vision / Streamlit",
    cta: "Open application",
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
    note: "An audiovisual work developed with Morphinx using TouchDesigner.",
    frame: "full",
    href: "/projects/perpetual-existence",
  },
  {
    title: "Live Laser + Visual Set",

    poster: "/gallery/live-performance.jpg",
    note: "Documentation of a live laser and projection setup.",
    frame: "full",
  },
  {
    title: "Live Capture Study",
    src: "/live-systems/PXL_20260403_230034557.mp4",
    poster: "/live-systems/6237937903338196662.jpg",
    note: "A recorded study of movement and live visual response.",
    frame: "compact",
  },
  {
    title: "Temple Signal Study",
    src: "/live-systems/temmple.mp4",
    poster: "/live-systems/6237937903338196684.jpg",
    note: "A moving-image study of architecture, light and pacing.",
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
  {
    number: "001",
    title: "Safe And Sound",
    artist: "Psykovsky",
    youtubeId: "lvllqpqg1yA",
    tags: ["AI Film", "Music Visual", "Generative"],
    note: "Generative moving image for Psykovsky.",
  },
  {
    number: "002",
    title: "Alien Kaerlighed",
    artist: "Psykovsky feat. Kaerlighed",
    youtubeId: "H0GoE1uUFRo",
    tags: ["AI Film", "Generative Visuals", "Music Video"],
    featured: true,
    note: "AI-generated moving image for Psykovsky feat. Kaerlighed.",
  },
  {
    number: "003",
    title: "Polenta",
    artist: "Psykovsky feat. Terra Fiamma",
    youtubeId: "YbCklNNRX7E",
    tags: ["AI Visuals", "Music Video", "Experimental"],
    note: "An experimental music video using image synthesis.",
  },
  {
    number: "004",
    title: "PSYSTREAM 3.0",
    artist: "Psykovsky",
    youtubeId: "VWCsCrquIKw",
    tags: ["Live Visuals", "Psychedelic", "Audiovisual"],
    note: "Long-form audiovisual archive and live visual documentation.",
  },
  {
    number: "005",
    title: "f02(3 24(3",
    artist: "Psykovsky",
    youtubeId: "19YwpmAHECw",
    tags: ["Experimental Film", "Generative", "Visual Art"],
    note: "A generative moving-image work set to music.",
  },
  {
    number: "006",
    title: "Alien Love Song — Episode 1 / 156 BPM",
    artist: "外星人的情歌 第 1 集",
    youtubeId: "GxZC0o-BH4Q",
    tags: ["AI Film", "Experimental", "Audiovisual"],
    note: "An experimental AI film and music-visual episode.",
  },
  {
    number: "007",
    title: "Extra Pearl / 225 BPM",
    artist: "Psykovsky feat. QQ IDOL",
    youtubeId: "ZUNjXrBHikg",
    tags: ["Generative Visuals", "Music Video", "AI"],
    note: "Generative music visuals for Psykovsky feat. QQ IDOL.",
  },
  {
    number: "008",
    title: "Perpetual Existence",
    artist: "Morphinx & Krishpill",
    youtubeId: "DV08JyKTwFw",
    tags: ["TouchDesigner", "Realtime Visuals", "Generative"],
    featured: true,
    note: "Official video by Terra Space, developed with Morphinx using TouchDesigner.",
  },
];

export const pointCloudStudies = [
  {
    title: "Point Cloud / Kinect Studies",
    poster: "/gallery/pointcloud-scan.jpg",
    note: "Depth captures represented as points in space.",
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
  "Contact me about technical projects and visual collaborations.";

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
  discipline: string;
  year?: string;
  subtitle?: string;
  slug: string;
  href: string;
  external?: boolean;
  blurb: string;
  tags: string[];
  media:
    | { type: "image"; src: string }
    | { type: "video"; src: string; poster: string };
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
    discipline: "Interactive Systems",
    href: "/experiments/terra-hand-performer/",
    blurb:
      "A webcam-controlled synthesizer built with MediaPipe Hands and Tone.js. Pinch and palm gestures trigger notes and sustained sound.",
    tags: ["MediaPipe", "Tone.js", "Gesture Synth"],
    media: { type: "image", src: "/gallery/terra-hand-performer.png" },
    size: "large",
    featured: true,
    cta: "Open instrument",
    coord: "HAND / AUDIO / BROWSER",
  },
  {
    title: "Alien Kaerlighed",
    subtitle: "Psykovsky feat. Kaerlighed",
    slug: "alien-kaerlighed",
    discipline: "Film / Generative Visuals",
    href: "/live-gallery",
    blurb:
      "Generative moving image for Psykovsky feat. Kaerlighed, combining image synthesis with music-video composition.",
    tags: ["AI Film", "Generative Visuals", "Music Video"],
    media: {
      type: "image",
      src: "https://i.ytimg.com/vi/H0GoE1uUFRo/hqdefault.jpg",
    },
    size: "medium",
    cta: "View films",
    coord: "002 / FILM ARCHIVE",
  },
  {
    title: "Semantic Lab",
    slug: "semantic-lab",
    discipline: "Computer Vision",
    href: "/semantic-lab",
    blurb:
      "A desktop application using SegFormer to segment images, video and webcam input, with visual materials assigned to each class.",
    tags: ["PyTorch", "SegFormer", "PySide6", "CUDA"],
    media: { type: "image", src: "/gallery/semantic-lab-cover.jpg" },
    size: "large",
    coord: "Computer vision",
  },
  {
    title: "TERRA-Cypher",
    slug: "terra-cypher",
    discipline: "Computer Vision",
    href: "https://terra-cypherweb-b8yxnpeu9rjnwikjcf45jy.streamlit.app/",
    external: true,
    blurb:
      "A Streamlit interface displaying facial-expression predictions from webcam input.",
    tags: ["Computer Vision", "Streamlit", "Emotion AI"],
    media: { type: "image", src: "/gallery/terra-cypher-ui.png" },
    size: "medium",
    coord: "WEBCAM / HUD",
  },
  {
    title: "Live TouchDesigner Visual Systems",
    slug: "live-touchdesigner",
    discipline: "TouchDesigner / Live Visuals",
    href: "/live-gallery",
    blurb:
      "Documentation of live visual and laser setups made with TouchDesigner.",
    tags: ["TouchDesigner", "Laser", "Live Performance"],
    media: { type: "image", src: "/gallery/live-performance.jpg" },
    size: "large",
    home: false,
    coord: "CLUB / FESTIVAL",
  },
  {
    title: "TERRA Visuals",
    slug: "terra-visuals",
    discipline: "Interactive Systems",
    href: "/terra-systems",
    blurb:
      "Browser-based visual experiments with point clouds and real-time graphics.",
    tags: ["Realtime", "Browser", "Visual Systems"],
    media: { type: "image", src: "/gallery/terra-pointcloud-study.png" },
    size: "medium",
    coord: "BROWSER / REALTIME",
  },
  {
    title: "Gesture Music Instrument",
    slug: "gesture-instrument",
    discipline: "Interactive Systems",
    href: "/live-gallery",
    blurb:
      "A TouchDesigner instrument using hand tracking and POPs to control particles from webcam input.",
    tags: ["TouchDesigner", "Hand Tracking", "POPs"],
    media: { type: "image", src: "/gallery/gesture-instrument-td.jpg" },
    size: "medium",
    home: false,
    coord: "Hand tracking",
  },
  {
    title: "Point Cloud / Kinect Studies",
    slug: "pointcloud-studies",
    discipline: "Spatial / Point Cloud",
    href: "/live-gallery",
    blurb:
      "Kinect depth captures represented as point fields, exploring spatial form with POPs.",
    tags: ["Point Cloud", "Depth Scan", "POPs"],
    media: { type: "image", src: "/gallery/pointcloud-scan.jpg" },
    size: "small",
    home: false,
    coord: "DEPTH SCAN",
  },
  {
    title: "Live Performance Archive",
    slug: "performance-archive",
    discipline: "TouchDesigner / Live Visuals",
    href: "/live-gallery",
    blurb:
      "Photographs and recordings of visual rigs and live performance setups.",
    tags: ["Live visuals", "Performance", "Documentation"],
    media: { type: "image", src: "/gallery/live-performance.jpg" },
    size: "small",
    home: false,
    coord: "VENUE ARCHIVE",
  },
  {
    title: "Machine Learning",
    slug: "codex-beverage-prediction",
    discipline: "AI / Machine Learning",
    href: "/projects/machine-learning",
    blurb:
      "A machine-learning application predicting price ranges from beverage purchase data and customer inputs.",
    tags: ["Machine Learning", "Prediction", "Data"],
    media: { type: "image", src: "/gallery/codex-beverage-prediction.png" },
    size: "medium",
    coord: "INDEX / ML+CV",
  },
];
