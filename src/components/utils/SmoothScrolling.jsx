"use client";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function SmoothScrolling ({ children }) {
  const lenis = useRef(null);
  useEffect(() => {
    lenis.current = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smooth: true,
    });
    function raf(time){
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return ()=> lenis.current.destroy();
  },[])

  useEffect(()=>{
    const onScroll = ()=>{
      ScrollTrigger.update();
    };
    lenis.current.on('scroll', onScroll);
    return ()=> lenis.current.off('scroll', onScroll);
  },[]);
  // lenis options for configuration
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
