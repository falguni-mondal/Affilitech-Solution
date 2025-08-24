import React, { useEffect } from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";

import { gsap } from 'gsap';


const Footer = () => {

  useEffect(() => {
    // Select all wrappers
    const wrappers = document.querySelectorAll(".double-txt-wraper");

    wrappers.forEach((wrap) => {
      const container = wrap.querySelector(".double-txt-container");

      wrap.addEventListener("mouseenter", () => {
        gsap.to(container, {
          y: "-2.55rem",
          duration: 0.5,
          ease: "power2.out",
        });
      });

      wrap.addEventListener("mouseleave", () => {
        gsap.to(container, {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section className='mt-[15vh] bg-black px-10 lg:px-20 pt-10 lg:pt-20 pb-24 lg:pb-16 rounded-t-3xl text-zinc-200' id='footer-section'>
      <footer className='flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between'>
        <div className="footer-line">
          <h1 className='text-[2.5rem] font-semibold leading-none text-orange-500'>Affilitech Solutions</h1>
          <p className="address w-[30ch] mt-5 lg:mt-10 text-[0.9rem] lg:text-[1rem]">
            CT Building, 1st Floor, Bhiringi More, near Bus Stand, Benachity, Durgapur-713213, West Bengal.
          </p>

          <div className="contact-dets mt-3">
            <div className="mail-link-container flex items-center gap-2">
              <MdMailOutline className='text-[1.1rem] lg:text-[1.3rem]' />
              <a className='flex items-center gap-1 text-[0.9rem] lg:text-[1rem]' href="mailto:info@affilitechsolutions.com">info@affilitechsolutions.com <FiExternalLink /></a>
            </div>
            <div className="mail-link-container flex items-center gap-2">
              <MdSmartphone className='text-[1.1rem] lg:text-[1.3rem]' />
              <span className='text-[0.9rem] lg:text-[1rem]'>+91 6295255260</span>
            </div>
          </div>

          <div className="contact-links-container flex gap-2 mt-5">
            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="https://www.facebook.com/affilitechsolutions" target='_blank'>
              <FaFacebookF className='text-[1.2rem]' />
            </a>
            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="https://x.com/Affilitech_AS?t=6eu8A8o3ur95Sub6xCCmTA&s=08" target='_blank'>
              <FaXTwitter className='text-[1.2rem]' />
            </a>
            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="https://www.linkedin.com/company/affilitechsolutions/" target='_blank'>
              <FaLinkedinIn className='text-[1.2rem]' />
            </a>
            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="https://www.instagram.com/affilitechsolutions?igsh=MWdoc245aWE4bDF3aA==" target='_blank'>
              <FaInstagram className='text-[1.2rem]' />
            </a>
          </div>
        </div>

        <div className="footer-line lg:pt-3">
          <h2 className='text-[1.4rem] lg:text-[1.8rem] font-semibold leading-none'>Company</h2>
          <div className="links-container mt-5 flex flex-col gap-3">
            <div className="double-txt-wraper w-fit h-[1.1rem] lg:h-[1.5rem] overflow-hidden">
              <a href="#" className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>Home</span>
                <span>Home</span>
              </a>
            </div>

            <div className="double-txt-wraper w-fit h-[1.1rem] lg:h-[1.5rem] overflow-hidden">
              <a href="#about-section" className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>About</span>
                <span>About</span>
              </a>
            </div>

            <div className="double-txt-wraper w-fit h-[1.1rem] lg:h-[1.5rem] overflow-hidden">
              <a href="http://affilitechsolutions.offer18.com/m/signup_self_aff" className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>Publisher</span>
                <span>Publisher</span>
              </a>
            </div>

            <div className="double-txt-wraper w-fit h-[1.1rem] lg:h-[1.5rem] overflow-hidden">
              <a href="https://affilitechsolutions.offer18.com/m/signup_self_adv" className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>Advertiser</span>
                <span>Advertiser</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-line lg:pt-3">
          <h2 className='text-[1.4rem] lg:text-[1.8rem] font-semibold leading-none'>Our Services</h2>
          <div className="text-list-container mt-5 flex flex-col gap-3 select-none">
            <div className="double-txt-wraper w-fit h-[1.2rem] lg:h-[1.6rem] overflow-hidden">
              <div className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>Affiliate Marketing</span>
                <span>Affiliate Marketing</span>
              </div>
            </div>

            <div className="double-txt-wraper w-fit h-[1.1rem] lg:h-[1.5rem] overflow-hidden">
              <div className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>Web Development</span>
                <span>Web Development</span>
              </div>
            </div>

            <div className="double-txt-wraper w-fit h-[1.1rem] lg:h-[1.5rem] overflow-hidden">
              <div className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>SEO Optimization</span>
                <span>SEO Optimization</span>
              </div>
            </div>

            <div className="double-txt-wraper w-fit h-[1.2rem] lg:h-[1.6rem] overflow-hidden">
              <div className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>Email Marketing</span>
                <span>Email Marketing</span>
              </div>
            </div>

            <div className="double-txt-wraper w-fit h-[1.1rem] lg:h-[1.5rem] overflow-hidden">
              <div className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>ORM Provider</span>
                <span>ORM Provider</span>
              </div>
            </div>

            <div className="double-txt-wraper w-fit h-[1.1rem] lg:h-[1.5rem] overflow-hidden">
              <div className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>Creative Assistance</span>
                <span>Creative Assistance</span>
              </div>
            </div>

            <div className="double-txt-wraper w-fit h-[1.1rem] lg:h-[1.5rem] overflow-hidden">
              <div className="double-txt-container w-fit flex flex-col gap-3 lg:text-[1.2rem]">
                <span>SEM & SMO</span>
                <span>SEM & SMO</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright mt-10 lg:mt-0 flex gap-1 items-center">
        <FaRegCopyright /> Copyright 2025 Affilitech Solutions
      </div>
    </section>
  )
}

export default Footer