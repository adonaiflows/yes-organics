"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { pointer } from "./pointer";

const BotanicalScene = dynamic(() => import("./BotanicalScene"), { ssr: false });

// Desktops with headroom get the live scene; phones, reduced motion and low-power devices keep the poster.
function canRun3D() {
  if (window.matchMedia("(max-width: 1023px), (pointer: coarse), (prefers-reduced-motion: reduce)").matches) return false;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  if (nav.connection?.saveData) return false;
  if ((nav.deviceMemory ?? 8) < 4 || (navigator.hardwareConcurrency ?? 8) < 4) return false;
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const wrap = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el || !canRun3D()) return;
    // Wait for the page to settle so the scene never competes with first paint.
    const start = () => setEnabled(true);
    const idle = window.requestIdleCallback?.(start, { timeout: 1500 }) ?? window.setTimeout(start, 800);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={wrap} className="pointer-events-none relative h-full w-full">
      <Image
        src="/posters/botanical-drop.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 80vw"
        className={`object-contain transition-opacity duration-1000 ${ready ? "opacity-0" : "opacity-100 motion-safe:animate-[float_8s_ease-in-out_infinite]"}`}
      />
      {enabled && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}>
          <BotanicalScene active={visible} onReady={() => setReady(true)} />
        </div>
      )}
    </div>
  );
}
