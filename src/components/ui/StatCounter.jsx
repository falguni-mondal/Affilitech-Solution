import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatCounter = ({
  target,
  duration,
  label,
  suffix,
  radius = 100,
  strokeWidth = 10,
  color = "#E85D04",
  trackColor = "#e5e7eb",
  end = "bottom 60%",
  start = "top bottom",
  once = true,
}) => {
  const wrapperRef = useRef(null);
  const numberRef = useRef(null);
  const progressRef = useRef(null);

  const circumference = 2 * Math.PI * radius;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(progressRef.current, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
        rotate: -90,
        transformOrigin: "50% 50%",
      });

      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start,
          end,
          once,
        },
        onUpdate: () => {
          const current = Math.floor(obj.val);
          if (numberRef.current) {
            numberRef.current.textContent = current.toLocaleString();
          }

          // circle progress logic
          let progress;
          if (target >= 100) {
            progress = current / target; // normal behavior
          } else {
            progress = current / 100; // % of 100
          }

          const dash = circumference * (1 - progress);
          if (progressRef.current) {
            progressRef.current.style.strokeDashoffset = dash;
          }
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [circumference, duration, end, once, start, target]);

  const size = (radius + strokeWidth) * 2;

  return (
    <div
      ref={wrapperRef}
      className="flex flex-col items-center justify-center gap-3 p-4"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="block"
        >
          {/* Track ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          {/* Progress ring */}
          <circle
            ref={progressRef}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>

        {/* Number in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl md:text-4xl font-extrabold leading-none">
            <span ref={numberRef}>0</span>
            {suffix && <span className="ml-1">{suffix}</span>}
          </div>
          <div className="font-medium opacity-70 mt-1 text-center">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCounter;
