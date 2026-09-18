export type GalleryProject = {
  title: string;
  slug: string;
  discipline: string;
  href: string;
  external?: boolean;
  subtitle?: string;
  year?: string;
  blurb: string;
  tags: string[];
  cta?: string;
  media?:
    | { type: "image"; src: string }
    | { type: "video"; src: string; poster: string };
};
export type ProjectDetail = {
  overview: string;
  caption?: string;
  availability?: string;
  additionalMedia?: { src: string; caption: string }[];
  links: { label: string; href: string }[];
};
export const materialModes = [
  {
    name: "Matrix",
    detail: "ASCII, Bayer, halftone, blue-noise.",
  },
  {
    name: "Wire",
    detail: "Grid, contours, topology, flow-mesh.",
  },
  {
    name: "Chrome",
    detail: "Liquid, glass, pearl, mercury.",
  },
  {
    name: "Particles",
    detail: "Point-cloud, stipple, plexus, gaussian.",
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
export const filmArchive = [
  {
    number: "001",
    title: "Safe And Sound",
    artist: "Psykovsky",
    youtubeId: "lvllqpqg1yA",
    tags: ["AI Film", "Music Visual", "Generative"],
    note: "Generative moving image for Psykovsky.",
    slug: "film-lvllqpqg1yA",
  },
  {
    number: "002",
    title: "Alien Kaerlighed",
    artist: "Psykovsky feat. Kaerlighed",
    youtubeId: "H0GoE1uUFRo",
    tags: ["AI Film", "Generative Visuals", "Music Video"],
    featured: true,
    note: "AI-generated moving image for Psykovsky feat. Kaerlighed.",
    slug: "alien-kaerlighed",
  },
  {
    number: "003",
    title: "Polenta",
    artist: "Psykovsky feat. Terra Fiamma",
    youtubeId: "YbCklNNRX7E",
    tags: ["AI Visuals", "Music Video", "Experimental"],
    note: "An experimental music video using image synthesis.",
    slug: "film-YbCklNNRX7E",
  },
  {
    number: "004",
    title: "PSYSTREAM 3.0",
    artist: "Psykovsky",
    youtubeId: "VWCsCrquIKw",
    tags: ["Live Visuals", "Psychedelic", "Audiovisual"],
    note: "Long-form audiovisual archive and live visual documentation.",
    slug: "film-VWCsCrquIKw",
  },
  {
    number: "005",
    title: "f02(3 24(3",
    artist: "Psykovsky",
    youtubeId: "19YwpmAHECw",
    tags: ["Experimental Film", "Generative", "Visual Art"],
    note: "A generative moving-image work set to music.",
    slug: "film-19YwpmAHECw",
  },
  {
    number: "006",
    title: "Alien Love Song — Episode 1 / 156 BPM",
    artist: "Psykovsky",
    youtubeId: "GxZC0o-BH4Q",
    tags: ["AI Film", "Experimental", "Audiovisual"],
    note: "An experimental AI film and music-visual episode.",
    slug: "film-GxZC0o-BH4Q",
  },
  {
    number: "007",
    title: "Extra Pearl / 225 BPM",
    artist: "Psykovsky feat. QQ IDOL",
    youtubeId: "ZUNjXrBHikg",
    tags: ["Generative Visuals", "Music Video", "AI"],
    note: "Generative music visuals for Psykovsky feat. QQ IDOL.",
    slug: "film-ZUNjXrBHikg",
  },
  {
    number: "008",
    title: "Perpetual Existence",
    artist: "Morphinx & Krishpill",
    youtubeId: "DV08JyKTwFw",
    tags: ["TouchDesigner", "Realtime Visuals", "Generative"],
    featured: true,
    note: "Official video by Terra Space, developed with Morphinx using TouchDesigner.",
    slug: "perpetual-existence",
  },
];
export const liveGallery = [
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
export const galleryProjects: GalleryProject[] = [
  {
    title: "Semantic Lab",
    slug: "semantic-lab",
    discipline: "Computer Vision",
    href: "/semantic-lab",
    blurb:
      "A SegFormer desktop application for image, video and webcam segmentation, built with PyTorch, OpenCV and PySide6.",
    tags: ["PyTorch", "SegFormer", "PySide6", "CUDA"],
    media: {
      type: "image",
      src: "/gallery/semantic-lab-cover.jpg",
    },
  },
  {
    title: "TERRA Hand Performer",
    slug: "terra-hand-performer",
    discipline: "Interactive Systems",
    href: "/experiments/terra-hand-performer/",
    blurb:
      "A webcam-controlled synthesizer built with MediaPipe Hands and Tone.js. Pinch and palm gestures trigger notes and sustained sound.",
    tags: ["MediaPipe", "Tone.js", "Gesture Synth"],
    media: {
      type: "image",
      src: "/gallery/terra-hand-performer.png",
    },
    cta: "Open instrument",
  },
  {
    title: "TERRA Emotion UI",
    slug: "terra-cypher",
    discipline: "Computer Vision",
    href: "/projects/terra-cypher",
    blurb:
      "Facial-expression classification and ASCII image rendering. The MobileNet-based Emotion UI and the Cypher variant are documented together.",
    tags: ["PyTorch", "MobileNetV2", "Streamlit"],
    media: {
      type: "image",
      src: "/gallery/terra-cypher-ui.png",
    },
  },
  {
    title: "TERRA 2.0",
    slug: "terra-visuals",
    discipline: "Interactive Systems",
    href: "/projects/terra-visuals",
    blurb:
      "A WebGL image and video processor with nine shader modes, webcam input and recording controls.",
    tags: ["JavaScript", "WebGL", "GLSL"],
    media: {
      type: "image",
      src: "/gallery/terra-2-interface.png",
    },
  },
  {
    title: "Gesture Music Instrument",
    slug: "gesture-instrument",
    discipline: "Interactive Systems",
    href: "/projects/gesture-instrument",
    blurb:
      "A TouchDesigner instrument using hand tracking and POPs to control particles from webcam input.",
    tags: ["TouchDesigner", "Hand Tracking", "POPs"],
    media: {
      type: "image",
      src: "/gallery/gesture-instrument-td.jpg",
    },
  },
  {
    title: "Point Cloud / Kinect Studies",
    slug: "pointcloud-studies",
    discipline: "Spatial / Point Cloud",
    href: "/projects/pointcloud-studies",
    blurb:
      "Kinect depth captures represented as point fields, exploring spatial form with POPs.",
    tags: ["Point Cloud", "Depth Scan", "POPs"],
    media: {
      type: "image",
      src: "/gallery/pointcloud-scan.jpg",
    },
  },
  {
    title: "Live Performance Archive",
    slug: "performance-archive",
    discipline: "TouchDesigner / Live Visuals",
    href: "/live-gallery#performance-archive",
    blurb:
      "Photographs and recordings of visual rigs and live performance setups.",
    tags: ["Live visuals", "Performance", "Documentation"],
    media: {
      type: "image",
      src: "/gallery/live-performance.jpg",
    },
  },
  {
    title: "Machine Learning",
    slug: "codex-beverage-prediction",
    discipline: "AI / Machine Learning",
    href: "/projects/machine-learning",
    blurb:
      "A machine-learning application predicting price ranges from beverage purchase data and customer inputs.",
    tags: ["Python", "Streamlit", "Machine learning"],
    media: {
      type: "image",
      src: "/gallery/codex-beverage-prediction.png",
    },
  },
  {
    title: "Azure Computer Vision",
    slug: "azure-computer-vision",
    discipline: "Computer Vision",
    href: "/projects/azure-computer-vision",
    blurb:
      "An image-upload application for captions, tags, object detection and OCR using Azure Computer Vision.",
    tags: ["Python", "Streamlit", "Azure Computer Vision"],
  },
  {
    title: "ByteMe",
    slug: "byteme",
    discipline: "AI / Machine Learning",
    href: "/projects/byteme",
    blurb:
      "A conversational interface using the OpenAI API with a deliberately sarcastic character and chat history.",
    tags: ["Python", "Streamlit", "OpenAI API"],
  },
  {
    title: "Hotel Booking Cancellation Predictor",
    slug: "hotel-booking-prediction",
    discipline: "AI / Machine Learning",
    href: "/projects/hotel-booking-prediction",
    blurb:
      "A model-backed form that predicts cancellation from booking lead time, party size, deposit type and previous cancellations.",
    tags: ["Python", "Streamlit", "pandas", "joblib"],
  },
  {
    title: "Safe And Sound",
    slug: "film-lvllqpqg1yA",
    subtitle: "Psykovsky",
    discipline: "Film / Generative Visuals",
    href: "https://www.youtube.com/watch?v=lvllqpqg1yA",
    external: true,
    blurb: "Generative moving image for Psykovsky.",
    tags: ["AI Film", "Music Visual", "Generative"],
    media: {
      type: "image",
      src: "https://i.ytimg.com/vi/lvllqpqg1yA/hqdefault.jpg",
    },
    cta: "Watch film",
  },
  {
    title: "Alien Kaerlighed",
    slug: "alien-kaerlighed",
    subtitle: "Psykovsky feat. Kaerlighed",
    discipline: "Film / Generative Visuals",
    href: "https://www.youtube.com/watch?v=H0GoE1uUFRo",
    external: true,
    blurb: "AI-generated moving image for Psykovsky feat. Kaerlighed.",
    tags: ["AI Film", "Generative Visuals", "Music Video"],
    media: {
      type: "image",
      src: "https://i.ytimg.com/vi/H0GoE1uUFRo/hqdefault.jpg",
    },
    cta: "Watch film",
  },
  {
    title: "Polenta",
    slug: "film-YbCklNNRX7E",
    subtitle: "Psykovsky feat. Terra Fiamma",
    discipline: "Film / Generative Visuals",
    href: "https://www.youtube.com/watch?v=YbCklNNRX7E",
    external: true,
    blurb: "An experimental music video using image synthesis.",
    tags: ["AI Visuals", "Music Video", "Experimental"],
    media: {
      type: "image",
      src: "https://i.ytimg.com/vi/YbCklNNRX7E/hqdefault.jpg",
    },
    cta: "Watch film",
  },
  {
    title: "PSYSTREAM 3.0",
    slug: "film-VWCsCrquIKw",
    subtitle: "Psykovsky",
    discipline: "Film / Generative Visuals",
    href: "https://www.youtube.com/watch?v=VWCsCrquIKw",
    external: true,
    blurb: "Long-form audiovisual archive and live visual documentation.",
    tags: ["Live Visuals", "Psychedelic", "Audiovisual"],
    media: {
      type: "image",
      src: "https://i.ytimg.com/vi/VWCsCrquIKw/hqdefault.jpg",
    },
    cta: "Watch film",
  },
  {
    title: "f02(3 24(3",
    slug: "film-19YwpmAHECw",
    subtitle: "Psykovsky",
    discipline: "Film / Generative Visuals",
    href: "https://www.youtube.com/watch?v=19YwpmAHECw",
    external: true,
    blurb: "A generative moving-image work set to music.",
    tags: ["Experimental Film", "Generative", "Visual Art"],
    media: {
      type: "image",
      src: "https://i.ytimg.com/vi/19YwpmAHECw/hqdefault.jpg",
    },
    cta: "Watch film",
  },
  {
    title: "Alien Love Song — Episode 1 / 156 BPM",
    slug: "film-GxZC0o-BH4Q",
    subtitle: "Psykovsky",
    discipline: "Film / Generative Visuals",
    href: "https://www.youtube.com/watch?v=GxZC0o-BH4Q",
    external: true,
    blurb: "An experimental AI film and music-visual episode.",
    tags: ["AI Film", "Experimental", "Audiovisual"],
    media: {
      type: "image",
      src: "https://i.ytimg.com/vi/GxZC0o-BH4Q/hqdefault.jpg",
    },
    cta: "Watch film",
  },
  {
    title: "Extra Pearl / 225 BPM",
    slug: "film-ZUNjXrBHikg",
    subtitle: "Psykovsky feat. QQ IDOL",
    discipline: "Film / Generative Visuals",
    href: "https://www.youtube.com/watch?v=ZUNjXrBHikg",
    external: true,
    blurb: "Generative music visuals for Psykovsky feat. QQ IDOL.",
    tags: ["Generative Visuals", "Music Video", "AI"],
    media: {
      type: "image",
      src: "https://i.ytimg.com/vi/ZUNjXrBHikg/hqdefault.jpg",
    },
    cta: "Watch film",
  },
  {
    title: "Perpetual Existence",
    slug: "perpetual-existence",
    subtitle: "Morphinx & Krishpill",
    discipline: "TouchDesigner / Live Visuals",
    href: "/projects/perpetual-existence",
    external: false,
    blurb:
      "Official video by Terra Space, developed with Morphinx using TouchDesigner.",
    tags: ["TouchDesigner", "Realtime Visuals", "Generative"],
    media: {
      type: "image",
      src: "https://i.ytimg.com/vi/DV08JyKTwFw/hqdefault.jpg",
    },
    cta: "View project",
  },
];
export const projectDetails: Record<string, ProjectDetail> = {
  "terra-cypher": {
    overview:
      "The pictured interface is TERRA Emotion UI, the MobileNet-based facial-expression project. TERRA-Cypher is a related variant using a different model and interface; its source is linked separately below.",
    caption:
      "TERRA Emotion UI / MobileNet interface. This is not a screenshot of the Cypher hosted demo.",
    links: [
      {
        label: "Emotion UI source",
        href: "https://github.com/Terraspace009/terra-emotion-ui",
      },
      {
        label: "Cypher variant source",
        href: "https://github.com/Terraspace009/terra-cypherweb",
      },
      {
        label: "Cypher hosted demo",
        href: "https://terra-cypherweb-b8yxnpeu9rjnwikjcf45jy.streamlit.app/",
      },
    ],
    availability:
      "The Cypher hosted endpoint responded, but the application interface did not finish loading during verification.",
  },
  "terra-visuals": {
    overview:
      "TERRA 2.0 applies WebGL fragment shaders to an image, video or webcam source. Controls adjust line density, threshold and speed; output can be recorded. The live tool and repository below are the verified TERRA 2.0 project.",
    caption: "TERRA 2.0 / Actual browser interface before loading media.",
    links: [
      {
        label: "Open TERRA 2.0",
        href: "https://terra20.vercel.app/",
      },
      {
        label: "View source",
        href: "https://github.com/Terraspace009/terra2",
      },
    ],
  },
  "gesture-instrument": {
    overview:
      "A TouchDesigner hand-tracking study that connects webcam gestures to particles and musical interaction. This is a separate desktop experiment from the browser-based TERRA Hand Performer.",
    caption: "TouchDesigner gesture instrument / Project documentation.",
    links: [],
  },
  "pointcloud-studies": {
    overview:
      "Spatial studies using depth capture and point-based rendering. These images document the visual work; they are not screenshots of a browser application.",
    caption: "Point-cloud study / Captured spatial form.",
    additionalMedia: [
      {
        src: "/gallery/terra-pointcloud-study.png",
        caption: "Point-cloud environment / Spatial visual study.",
      },
    ],
    links: [],
  },
  "azure-computer-vision": {
    overview:
      "Upload an image to request a caption, tags, detected objects and extracted text from Azure Computer Vision. The repository documents the Python and Streamlit implementation.",
    links: [
      {
        label: "View source",
        href: "https://github.com/Terraspace009/azure-cv-app",
      },
      {
        label: "Open hosted demo",
        href: "https://azure-cv-app-n7hamxehg76uncshsuvfea.streamlit.app/",
      },
    ],
    availability:
      "The hosted demo was sleeping at the last check. Streamlit may ask you to wake it before use.",
  },
  byteme: {
    overview:
      "A Streamlit chat interface with conversation history and a character prompt sent to the OpenAI API. The current implementation uses prompting rather than a separate emotion-classification model.",
    links: [
      {
        label: "View source",
        href: "https://github.com/Terraspace009/ByteMe",
      },
      {
        label: "Open hosted demo",
        href: "https://byteme-n6z2wt7c3gy5z3iyoisazl.streamlit.app/",
      },
    ],
    availability:
      "The hosted demo was sleeping at the last check. Streamlit may ask you to wake it before use.",
  },
  "hotel-booking-prediction": {
    overview:
      "A Streamlit form loads a saved prediction model with joblib. It constructs a pandas row from lead time, adults, children, previous cancellations and deposit type, then displays the model prediction.",
    links: [
      {
        label: "View application source",
        href: "https://github.com/Terraspace009/hotel-booking-prediction/blob/main/app/streamlit_app.py",
      },
      {
        label: "Open hosted demo",
        href: "https://hotel-booking-prediction-9p7h3dhndnzxq26btdeduu.streamlit.app",
      },
    ],
    availability:
      "The hosted demo was sleeping at the last check. Streamlit may ask you to wake it before use.",
  },
};
export const experimentSlugs = [
  "terra-hand-performer",
  "terra-visuals",
  "gesture-instrument",
];
export const featuredSlugs = [
  "semantic-lab",
  "alien-kaerlighed",
  "terra-hand-performer",
  "terra-cypher",
];
