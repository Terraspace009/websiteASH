# Interaction map

The existing layout, type, spacing, navigation, project destinations and media files are unchanged. Enhancements live in interactions.css and the shared controller, with server-rendered media surfaces.

| Work | Response | Metadata source |
| --- | --- | --- |
| Semantic Lab | Brief translucent region contours, shallow image parallax | Existing PyTorch / SegFormer tags |
| TERRA Emotion UI | Brief region-focus brackets | Existing PyTorch / MobileNetV2 tags |
| TERRA Hand Performer | Five minimal linked tracking points; no camera access | Existing MediaPipe / Tone.js tags |
| Gesture Music Instrument | Tracking-point response | Existing TouchDesigner / Hand Tracking tags |
| Point Cloud / Kinect Studies | Sparse point layer shifts opposite the image | Existing Point Cloud / Depth Scan tags |
| TERRA 2.0 | Brief offset rendering curves and restrained image movement | Existing JavaScript / WebGL tags |
| Machine Learning | Quiet image depth, no simulated model output | Existing Python / Streamlit tags |
| Azure Computer Vision, ByteMe, Hotel Booking Cancellation Predictor | Link microinteractions only; no fabricated media | Existing index content |
| Safe And Sound, Alien Kaerlighed, Polenta, PSYSTREAM 3.0, f02(3 24(3, Alien Love Song, Extra Pearl, Perpetual Existence | Slow, small horizontal reframing of the actual still; PLAY cursor | Existing film tags |
| Live Performance Archive | Film-style response wherever rendered as a card; native video controls remain untouched | Existing performance tags |

These overlays are visual references, not live inference, segmentation results or tracking detections. There are no invented measurements. YouTube stills are not presented as playable local previews.

## Behavior

- One delegated pointer controller; no React renders during movement.
- Maximum image movement: 4px per axis; scale 1.018, or 1.025 for films. No card tilt.
- Maximum magnetic link movement: 2px per axis.
- One-shot 380ms mask reveals through IntersectionObserver. Images remain visible without JavaScript.
- Pointer overlays and transient metadata settle after 1.1 seconds idle. No continuous idle animation loop.
- Hero: twenty 1px points confined to the empty right-hand region, maximum opacity 0.14, hidden at rest and below 1000px.
- Native same-origin document view transitions enhance supported browsers. Shared image names are assigned only to identical thumbnail/detail images. Unsupported browsers navigate normally.
- Client-side navigation receives a short 3px entry transition; link semantics and browser navigation are not intercepted.
- Fine-pointer detection gates pointer effects. Touch devices retain normal taps and only receive entry reveals. Reduced motion disables reveals, motion, cursor, ambience and view transitions.
- Preference changes, navigation, scrolling, blur and hidden tabs reset effects. Cleanup removes event listeners, timers, observers and animation frames.
- Form controls, native video, iframes and editable elements retain the normal cursor.
- Keyboard focus keeps the existing visible focus outline; project metadata is available without pointer movement.

## Verification

Compare measurements against the captured pre-change layout at desktop/mobile widths. Test pointer responses, idle reset, shared image names/navigation, keyboard navigation, touch and reduced-motion behavior, dynamic preference changes, console errors and overflow.
