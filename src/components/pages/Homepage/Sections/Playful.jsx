import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Playful = () => {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const faceRef = useRef(null);

  useEffect(() => {
    gsap.to("#playful-section", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#playful-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    const face = faceRef.current;
    const leftPupil = leftPupilRef.current;
    const rightPupil = rightPupilRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = face.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

      const offset = 40; // pupil move distance
      const x = Math.cos(angle) * offset;
      const y = Math.sin(angle) * offset;

      gsap.to([leftPupil, rightPupil], {
        x,
        y,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    face.addEventListener("mousemove", handleMouseMove);

    return () => {
      face.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full mt-[20vh]" id="playful-section">
      <div className="playful-header flex gap-4 items-center">
        <h2 className="text-[3rem] font-semibold leading-none tracking-tight">
          Little
          <span className="block p-0 m-0 text-[5rem] font-semibold leading-[5rem] tracking-tight prime-txt">
            #Playful
          </span>
        </h2>

        {/* Hover Badge */}
        <div className="bg-black text-orange-400 px-8 py-8 rounded-full rounded-br-none font-bold text-[1.1rem] shadow-md select-none">
          Hover
        </div>
      </div>

      <div
        className="face-container w-full min-h-screen flex flex-col items-center justify-center relative bg-yellow-200"
        ref={faceRef}
      >
        {/* Eyes */}
        <div className="flex gap-20">
          {/* Left Eye */}
          <div className="w-48 h-60 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
            <span
              ref={leftPupilRef}
              className="w-20 h-20 bg-black rounded-full flex items-start justify-start relative"
            >
              {/* Reflection dot */}
              <span className="w-8 h-8 bg-white rounded-full absolute top-1 left-1"></span>
            </span>
          </div>

          {/* Right Eye */}
          <div className="w-48 h-60 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
            <span
              ref={rightPupilRef}
              className="w-20 h-20 bg-black rounded-full flex items-start justify-start relative"
            >
              {/* Reflection dot */}
              <span className="w-8 h-8 bg-white rounded-full absolute top-1 left-1"></span>
            </span>
          </div>
        </div>

        {/* Smile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 100"
          className="mt-12 w-96 h-32"
        >
          <path
            d="M 30 40 Q 100 100 170 40"
            stroke="black"
            strokeWidth="6"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Playful;
