import React, { useEffect } from 'react'
import {gsap} from 'gsap';
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Quote = () => {

  useEffect(() => {
    gsap.from(".quote-line", {
            y: "8rem",
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".quote-line",
                start: "top 75%",
                end: "bottom 70%",
            }
        });
  }, [])
  return (
    <p className='about-quote w-full text-center font-bold text-[7.5rem]'>
      <span className="quote-line-container block h-fit overflow-hidden">
        <span className='quote-line flex justify-center leading-none tracking-tight prime-txt'>
          <RiDoubleQuotesL className='text-[4rem]' />We only build
        </span>
      </span>
      <span className="quote-line-container block h-fit overflow-hidden">
        <span className='quote-line block leading-none tracking-tight prime-txt'>
          what we are really
        </span>
      </span>
      <span className="quote-line-container block h-fit overflow-hidden">
        <span className='quote-line flex justify-center leading-none tracking-tight prime-txt pb-2'>
          really <span className='text-[#e94a00] mx-4 italic'>good</span> at.<RiDoubleQuotesR className='text-[4rem]' />
        </span>
      </span>
    </p>
  )
}

export default Quote