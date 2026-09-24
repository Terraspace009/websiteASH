"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function InteractionLayer() {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    const cursor = cursorRef.current!;
    const routeChanged = previousPath.current !== pathname;
    previousPath.current = pathname;
    const routeAnimation =
      routeChanged && !reduced.matches
        ? document.querySelector("main")?.animate(
            [
              { opacity: 0.96, transform: "translateY(3px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 180, easing: "ease-out" },
          )
        : undefined;
    let dispose = () => {};

    function install() {
      const abort = new AbortController();
      const signal = abort.signal;
      const media = [
        ...document.querySelectorAll<HTMLElement>(".motion-media"),
      ];
      const maskAnimations: Animation[] = [];
      const enabled = !reduced.matches && fine.matches;
      let observer: IntersectionObserver | undefined;
      if (!reduced.matches && "IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const surface = entry.target as HTMLElement;
              if (!surface.dataset.revealed) {
                surface.dataset.revealed = "1";
                const mask = surface.querySelector(".media-reveal-mask");
                if (mask)
                  maskAnimations.push(
                    mask.animate(
                      [
                        { transform: "translateY(0)" },
                        { transform: "translateY(-101%)" },
                      ],
                      { duration: 380, easing: "cubic-bezier(.22,.61,.36,1)" },
                    ),
                  );
              }
              observer?.unobserve(surface);
            }
          },
          { threshold: 0.12 },
        );
        media.forEach((el) => observer!.observe(el));
      }

      // No pointer handlers or animation loop are installed on touch/reduced-motion devices.
      if (!enabled)
        return () => {
          abort.abort();
          observer?.disconnect();
          maskAnimations.forEach((a) => a.cancel());
        };
      document.documentElement.dataset.precision = "true";
      let active: HTMLElement | null = null;
      let magnet: HTMLElement | null = null;
      let bounds: DOMRect | null = null;
      let magnetBounds: DOMRect | null = null;
      let frame = 0;
      let idle = 0;
      let x = 0,
        y = 0;
      let targetX = 0,
        targetY = 0,
        currentX = 0,
        currentY = 0;
      let lastTime = 0;
      let heroX = 0,
        heroY = 0,
        heroTargetX = 0,
        heroTargetY = 0;
      const hero = document.querySelector<HTMLElement>(".hero-points");
      const identity = document.querySelector<HTMLElement>(".identity");
      let heroBounds = identity?.getBoundingClientRect();

      function resetSurface() {
        if (active) {
          active.dataset.active = "false";
          active.style.removeProperty("--mx");
          active.style.removeProperty("--my");
        }
        if (magnet) magnet.style.removeProperty("translate");
        active = null;
        magnet = null;
        bounds = null;
        magnetBounds = null;
        currentX = currentY = targetX = targetY = 0;
      }
      function hide() {
        delete document.documentElement.dataset.pointerVisible;
        cursor.dataset.visible = "false";
        cursor.dataset.label = "";
        resetSurface();
        if (hero) {
          hero.dataset.active = "false";
          hero.style.removeProperty("transform");
        }
        heroTargetX = heroTargetY = heroX = heroY = 0;
        cancelAnimationFrame(frame);
        frame = 0;
        lastTime = 0;
        clearTimeout(idle);
      }
      function draw(now: number) {
        frame = 0;
        // Time-based damping stays consistent on both 60Hz and high-refresh displays.
        const dt = lastTime ? Math.min(now - lastTime, 40) : 16;
        lastTime = now;
        const blend = 1 - Math.exp(-dt / 70);
        currentX += (targetX - currentX) * blend;
        currentY += (targetY - currentY) * blend;
        cursor.style.transform = "translate3d(" + x + "px," + y + "px,0)";
        if (active) {
          active.style.setProperty("--mx", currentX.toFixed(2) + "px");
          active.style.setProperty("--my", currentY.toFixed(2) + "px");
        }
        if (magnet && magnetBounds) {
          const dx = Math.max(
            -2,
            Math.min(
              2,
              (x - magnetBounds.left - magnetBounds.width / 2) * 0.045,
            ),
          );
          const dy = Math.max(
            -2,
            Math.min(
              2,
              (y - magnetBounds.top - magnetBounds.height / 2) * 0.045,
            ),
          );
          magnet.style.translate = dx + "px " + dy + "px";
        }
        heroX += (heroTargetX - heroX) * (1 - Math.exp(-dt / 220));
        heroY += (heroTargetY - heroY) * (1 - Math.exp(-dt / 220));
        if (hero)
          hero.style.transform =
            "translate3d(" +
            heroX.toFixed(2) +
            "px," +
            heroY.toFixed(2) +
            "px,0)";
        if (
          Math.abs(targetX - currentX) +
            Math.abs(targetY - currentY) +
            Math.abs(heroTargetX - heroX) +
            Math.abs(heroTargetY - heroY) >
          0.04
        )
          frame = requestAnimationFrame(draw);
      }
      function schedule() {
        if (!frame) frame = requestAnimationFrame(draw);
      }
      function move(event: PointerEvent) {
        if (event.pointerType !== "mouse") {
          hide();
          return;
        }
        x = event.clientX;
        y = event.clientY;
        const target = event.target instanceof Element ? event.target : null;
        if (
          !target ||
          target.closest(
            "input,textarea,select,video,iframe,[contenteditable=true]",
          )
        ) {
          hide();
          return;
        }
        cursor.dataset.visible = "true";
        document.documentElement.dataset.pointerVisible = "true";
        const next = target.closest<HTMLElement>(".motion-media");
        const nextMagnet = target.closest<HTMLElement>(
          ".text-link,.header-contact",
        );
        if (next !== active || nextMagnet !== magnet) {
          resetSurface();
          active = next;
          magnet = nextMagnet;
          bounds = active?.getBoundingClientRect() || null;
          magnetBounds = magnet?.getBoundingClientRect() || null;
        }
        const label = active?.dataset.cursor || "";
        cursor.dataset.label = label;
        const labelNode = cursor.querySelector("span")!;
        if (labelNode.textContent !== label) labelNode.textContent = label;
        if (active && bounds) {
          active.dataset.active = "true";
          const strength =
            active.dataset.response === "depth"
              ? 4
              : active.dataset.response === "film"
                ? 2
                : 3;
          targetX = ((x - bounds.left) / bounds.width - 0.5) * strength * 2;
          targetY = ((y - bounds.top) / bounds.height - 0.5) * strength * 2;
        }
        if (hero && heroBounds) {
          const inside =
            y >= heroBounds.top &&
            y <= heroBounds.bottom &&
            x > heroBounds.left + heroBounds.width * 0.66;
          hero.dataset.active = String(inside);
          heroTargetX = inside
            ? ((x - heroBounds.left) / heroBounds.width - 0.5) * 8
            : 0;
          heroTargetY = inside
            ? ((y - heroBounds.top) / heroBounds.height - 0.5) * 6
            : 0;
        }
        clearTimeout(idle);
        idle = window.setTimeout(hide, 1100);
        schedule();
      }
      function resize() {
        hide();
        heroBounds = identity?.getBoundingClientRect();
      }
      document.addEventListener("pointermove", move, { passive: true, signal });
      document.addEventListener("pointerleave", hide, { signal });
      document.addEventListener("pointerdown", hide, { signal });
      document.addEventListener("keydown", hide, { signal });
      document.addEventListener("visibilitychange", hide, { signal });
      window.addEventListener("blur", hide, { signal });
      window.addEventListener("scroll", resize, { passive: true, signal });
      window.addEventListener("resize", resize, { passive: true, signal });
      return () => {
        hide();
        abort.abort();
        observer?.disconnect();
        maskAnimations.forEach((a) => a.cancel());
        delete document.documentElement.dataset.precision;
      };
    }
    const update = () => {
      dispose();
      dispose = install();
    };
    update();
    reduced.addEventListener("change", update);
    fine.addEventListener("change", update);
    return () => {
      dispose();
      routeAnimation?.cancel();
      reduced.removeEventListener("change", update);
      fine.removeEventListener("change", update);
    };
  }, [pathname]);

  return (
    <div ref={cursorRef} className="precision-cursor" aria-hidden="true">
      <i />
      <span />
    </div>
  );
}
