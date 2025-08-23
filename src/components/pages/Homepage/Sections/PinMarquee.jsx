import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PinMarquee = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const screenX = window.innerWidth;

  useEffect(() => {
    const textEl = textRef.current;
    const containerEl = containerRef.current;
    if (!textEl || !containerEl) return;

    const textWidth = textEl.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.fromTo(
      textEl,
      { x: (viewportWidth / 6) },
      {
        x: () => `-${textWidth - (viewportWidth / 1.2)}`,
        ease: "linear",
        scrollTrigger: {
          trigger: containerEl,
          start: () => screenX >= 1024 ? "top 10%" : "top 5%",
          end: () => screenX >= 1024 ? "top -400%" : "top -300%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      }
    );

    window.addEventListener("load", () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-[80vh] bg-black overflow-hidden flex items-center justify-start mt-[10vh] lg:mt-[15vh]"
    >
      <h1
        ref={textRef}
        className="text-[#ff6411] font-bold whitespace-nowrap text-[6rem] lg:text-[25rem]"
      >
        Build. Grow. Succeed.
      </h1>
    </section>
  );
};

export default PinMarquee;
