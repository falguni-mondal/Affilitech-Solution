import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PinMarquee = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textEl = textRef.current;
    const containerEl = containerRef.current;
    if (!textEl || !containerEl) return;

    const textWidth = textEl.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.fromTo(
      textEl,
      { x: (viewportWidth/6) },
      {
        x: () => `-${textWidth - (viewportWidth/1.2)}`,
        ease: "linear",
        scrollTrigger: {
          trigger: containerEl,
          start: "top: 10%",
          end: "top: -400%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-[80vh] bg-black overflow-hidden flex items-center justify-start mt-[15vh]"
    >
      <h1
        ref={textRef}
        className="text-[#ff631a] font-bold whitespace-nowrap text-[25rem]"
      >
        Build. Grow. Succeed.
      </h1>
    </section>
  );
};

export default PinMarquee;
