import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowUp } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

import { gsap } from 'gsap';

const NavbarMobile = ({navReveal, setNavReveal}) => {

  const topLinkRef = useRef(null);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    if (topLinkRef.current && mobileNavRef.current) {
      gsap.from(topLinkRef.current, {
        y: 3,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: topLinkRef.current,
          start: "top 20%",
          end: "top 0%",
          scrub: 1,
        },
      })
      gsap.to(mobileNavRef.current, {
        width: "43vw",
        duration: 1,
        scrollTrigger: {
          trigger: mobileNavRef.current,
          start: "top 20%",
          end: "top 20%",
          scrub: 1,
        },
      })
    }
  }, [])
  return (
    <div ref={mobileNavRef} className='mobile-navbar-container lg:hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[40vw] p-1 rounded-full bg-[#5f5f5f38] backdrop-blur-[20px] flex justify-between items-center z-[999]'>
      <div className="mobile-logo h-[3rem] w-[3rem] shrink-0">
        <img className='w-full h-full object-cover' src="icon.png" alt="" />
      </div>
      <a href='#hero-section' ref={topLinkRef} className="top-btn h-[3rem] w-[3rem] rounded-full bg-black flex items-center justify-center shrink-0">
        <IoMdArrowUp className='text-[1.3rem] text-zinc-200' />
      </a>
      {
        navReveal ?
          <span onClick={() => setNavReveal(false)} className="hamburger-icon h-[3rem] w-[3rem] rounded-full bg-zinc-100 flex items-center justify-center shrink-0" id='nav-icon'>
            <GrClose className='text-[1.3rem]' />
          </span>
          :
          <span onClick={() => setNavReveal(true)} className="hamburger-icon h-[3rem] w-[3rem] rounded-full bg-zinc-100 flex items-center justify-center shrink-0" id='nav-icon'>
            <GrAppsRounded className='text-[1.3rem]' />
          </span>
      }
    </div>
  )
}

export default NavbarMobile