import React, { useEffect } from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

import { Link } from 'react-router-dom';
import {gsap} from 'gsap';


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
    <section className='mt-[15vh] bg-black px-20 pt-20 pb-16 rounded-t-3xl text-zinc-200' id='footer-section'>
      <footer className='flex justify-between'>
        <div className="footer-line">
          <h1 className='text-[2.5rem] font-semibold leading-none text-orange-500'>Affilitect Solutions</h1>
          <p className="address w-[30ch] mt-10">
            Raghunathpur, Madhupally More, Durgapur-713204, Paschim Bardhamaan, West Bengal.
          </p>
          <div className="contact-links-container flex gap-2 mt-5">
            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="#" target='_blank'>
              <FaFacebookF className='text-[1.2rem]' />
            </a>
            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="#" target='_blank'>
              <FaXTwitter className='text-[1.2rem]' />
            </a>
            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="#" target='_blank'>
              <FaLinkedinIn className='text-[1.2rem]' />
            </a>
            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="#" target='_blank'>
              <FaInstagram className='text-[1.2rem]' />
            </a>
          </div>
        </div>

        <div className="footer-line pt-3">
          <h2 className='text-[1.8rem] font-semibold leading-none'>Company</h2>
          <div className="links-container mt-5 flex flex-col gap-3">
            <div className="double-txt-wraper h-[1.5rem] overflow-hidden">
              <Link to="/" className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>Home</span>
                <span>Home</span>
              </Link>
            </div>

            <div className="double-txt-wraper h-[1.5rem] overflow-hidden">
              <Link to="/about" className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>About</span>
                <span>About</span>
              </Link>
            </div>

            <div className="double-txt-wraper h-[1.5rem] overflow-hidden">
              <Link to="/publisher" className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>Publisher</span>
                <span>Publisher</span>
              </Link>
            </div>

            <div className="double-txt-wraper h-[1.5rem] overflow-hidden">
              <Link to="/advertiser" className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>Advertiser</span>
                <span>Advertiser</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-line pt-3">
          <h2 className='text-[1.8rem] font-semibold leading-none'>Our Solutions</h2>
          <div className="text-list-container mt-5 flex flex-col gap-3 select-none">
            <div className="double-txt-wraper h-[1.6rem] overflow-hidden">
              <div className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>Affiliate Marketing</span>
                <span>Affiliate Marketing</span>
              </div>
            </div>

            <div className="double-txt-wraper h-[1.5rem] overflow-hidden">
              <div className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>Web Development</span>
                <span>Web Development</span>
              </div>
            </div>

            <div className="double-txt-wraper h-[1.5rem] overflow-hidden">
              <div className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>SEO Optimization</span>
                <span>SEO Optimization</span>
              </div>
            </div>

            <div className="double-txt-wraper h-[1.6rem] overflow-hidden">
              <div className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>Email Marketing</span>
                <span>Email Marketing</span>
              </div>
            </div>

            <div className="double-txt-wraper h-[1.5rem] overflow-hidden">
              <div className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>ORM Provider</span>
                <span>ORM Provider</span>
              </div>
            </div>

            <div className="double-txt-wraper h-[1.5rem] overflow-hidden">
              <div className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>Creative Assistance</span>
                <span>Creative Assistance</span>
              </div>
            </div>

            <div className="double-txt-wraper h-[1.5rem] overflow-hidden">
              <div className="double-txt-container flex flex-col gap-3 text-[1.2rem]">
                <span>SEM & SMO</span>
                <span>SEM & SMO</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright flex gap-1 items-center">
        <FaRegCopyright /> Copyright 2025 Affilitech Solution
      </div>
      <div className="creator mt-2 flex gap-1">
        Visit the 
        <a href='https://falguni.netlify.app' target='_blank' className='text-orange-500 underline flex gap-1 items-center'>
          Site Developer 
          <FiExternalLink/>
        </a>
      </div>
    </section>
  )
}

export default Footer