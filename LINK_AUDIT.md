# Project destination audit

## Corrected mappings

| Previous entry | Finding | Correction |
| --- | --- | --- |
| TERRA Studio | Opened an older personal portfolio, not the pictured visual project | Removed the misleading project card |
| TERRA Visual / TERRA Visuals | Linked to Terra1, a starter repository; used an unrelated point-cloud screenshot | Replaced with documented TERRA 2.0, verified at https://terra20.vercel.app/ and https://github.com/Terraspace009/terra2; captured the actual interface |
| TERRA-Cypher | Screenshot explicitly shows TERRA Emotion UI / MobileNetV2, while Cypher source uses another model | One Emotion UI project page identifies the pictured version and labels the Cypher variant separately |
| Live TouchDesigner Visual Systems / Live Performance Archive | Same image and destination presented as two works | One Live Performance Archive entry and a specific gallery section |
| Gesture Music Instrument | Opened the top of the film gallery | Dedicated project documentation |
| Point Cloud / Kinect Studies | Opened the top of the film gallery | Dedicated documentation containing the original spatial images |
| Alien Kaerlighed | Opened the gallery instead of its film | Exact YouTube video; title checked through YouTube oEmbed |
| Perpetual Existence | Parallel watch and project cards | One canonical project entry leading to the existing embedded-film case study |
| Machine Learning | No source access | Added the verified beverage-model application repository |
| LinkedIn | URL used aishwarya instead of aeshwarya | Matched the URL embedded in the local resume PDF |

## Organization

Project records are defined once in app/portfolio-data.ts. Home is a four-project selection; Work is a compact, complete index rather than a second wall of repeated cards. Experiments selects three distinct projects from the same records. Films uses the canonical film entries. Each page renders a project no more than once.

The old TERRA Studio link was an earlier portfolio, not an additional artwork. The unrelated Terra1 repository is no longer presented as a visual application. Original working portfolio routes and the Hand Performer files remain intact.

## External checks

- All eight YouTube video IDs returned matching titles through oEmbed.
- TERRA 2.0 returned its expected title and nine shader-mode controls in Chromium.
- Azure Computer Vision, ByteMe and Hotel Booking Prediction returned Streamlit sleep pages. Their dedicated pages provide verified project source links and explain that demos may need waking.
- The Cypher endpoint responded, but its interface did not complete loading. Its link is labeled as the Cypher variant, not the pictured Emotion UI.
- Semantic Canvas, Emotion UI, Cypher, beverage prediction, Azure, ByteMe, hotel prediction and TERRA 2.0 repositories were inspected. The hotel repository has an unrelated README, so its link points directly to the verified application source.
- Instagram returned the matching profile title.
- LinkedIn restricted automated access. The corrected address comes directly from the resume.
- All five NODE course names and URLs match the provider's indexed pages. Direct automation received HTTP 403; those responses are not evidence that the course URLs are wrong.

No third-party uptime or application functionality is guaranteed by this audit.

## Regression check

Run: node scripts/check-portfolio.cjs

Checks unique project IDs and destinations, curated lists, matching film thumbnails/video IDs, local media existence, case-study routes, the resume's LinkedIn URL, and removal of misleading collection/starter-repository destinations.

Browser verification additionally checks internal destinations and anchor targets, project-title matches, image loading, per-page duplicate entries, keyboard skip navigation and responsive overflow at 1440, 768, 390 and 320 pixels. Detailed evidence is stored in the task workspace under outputs/link-audit.
