import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen({ onComplete }) {
  const topAnim = useRef(null);
  const bottomAnim = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          y: "-100%",
          duration: 1.2,
          ease: "power4.inOut",
        });
        if (onComplete) onComplete();
      },
    });

    // Animate both arcs simultaneously
    tl.to([topAnim.current, bottomAnim.current], {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power4.inOut",
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center bg-zinc-200 z-[9999]"
    >
      <div className="relative w-[30vw] h-[30vw] flex flex-col items-center justify-center">
        {/* --- TOP HALF (separate SVG) --- */}
        <svg
          className="w-full h-1/2"
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base arc */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            stroke="#a1a1aa"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Overlay arc (animated) */}
          <path
            ref={topAnim}
            d="M 30 100 A 70 70 0 0 1 170 100"
            stroke="#f97316"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="220"
            strokeDashoffset="220"
          />
        </svg>

        {/* GAP between circles */}
        <div className="h-4" /> {/* <-- adjust this value to control gap */}

        {/* --- BOTTOM HALF (separate SVG) --- */}
        <svg
          className="w-full h-1/2"
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base arc */}
          <path
            d="M 170 0 A 70 70 0 0 1 30 0"
            stroke="#a1a1aa"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Overlay arc (animated) */}
          <path
            ref={bottomAnim}
            d="M 170 0 A 70 70 0 0 1 30 0"
            stroke="#f97316"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="220"
            strokeDashoffset="220"
          />
        </svg>

        {/* Center Text (absolute in parent) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black font-bold prime-txt text-[2.5rem] w-[12ch] tracking-tight leading-[2.2rem] text-center">
            Affilitech Solutions
          </h1>
        </div>
      </div>
    </div>
  );
}
