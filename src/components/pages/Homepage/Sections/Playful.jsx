import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Playful = () => {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const faceRef = useRef(null);

  const screenX = window.innerWidth;

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

      const offset = screenX >= 1024 ? 40 : 18; // pupil move distance
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
      <div className="playful-header flex gap-1 lg:gap-4 items-center">
        <h2 className="text-[1.3rem] lg:text-[3rem] font-semibold leading-none tracking-tight">
          Little
          <span className="block p-0 m-0 text-[2.5rem] lg:text-[5rem] font-semibold lg:leading-[5rem] tracking-tight prime-txt">
            #Playful
          </span>
        </h2>

        <div className="bg-black text-orange-400 px-4 lg:px-8 py-4 lg:py-8 rounded-full rounded-br-none font-bold text-[0.8rem] lg:text-[1.1rem] shadow-md select-none">
          {screenX >= 1024 ? "Hover" : "Tap"}
        </div>
      </div>

      <div
        className="face-container w-full min-h-[60vh] lg:min-h-screen flex flex-col items-center justify-center relative bg-yellow-200"
        ref={faceRef}
      >
        {/* Eyes */}
        <div className="flex gap-20">
          {/* Left Eye */}
          <div className="w-20 lg:w-48 h-24 lg:h-60 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
            <span
              ref={leftPupilRef}
              className="w-11 lg:w-20 h-11 lg:h-20 bg-black rounded-full flex items-start justify-start relative"
            >
              {/* Reflection dot */}
              <span className="w-4 lg:w-8 h-4 lg:h-8 bg-white rounded-full absolute top-1 left-1"></span>
            </span>
          </div>

          {/* Right Eye */}
          <div className="w-20 lg:w-48 h-24 lg:h-60 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
            <span
              ref={rightPupilRef}
              className="w-11 lg:w-20 h-11 lg:h-20 bg-black rounded-full flex items-start justify-start relative"
            >
              {/* Reflection dot */}
              <span className="w-4 lg:w-8 h-4 lg:h-8 bg-white rounded-full absolute top-1 left-1"></span>
            </span>
          </div>
        </div>

        {/* Smile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 100"
          className="mt-5 lg:mt-12 w-60 lg:w-96 h-24 lg:h-32"
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
