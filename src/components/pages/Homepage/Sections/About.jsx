import React, { useEffect } from 'react'

import services from "../../../../assets/Icons/services.png";
import campaigns from "../../../../assets/Icons/campaigns.png";
import years from "../../../../assets/Icons/years.png";
import office from "../../../../assets/office_min.webp"
import office2 from "../../../../assets/office2_min.webp"
import { Link } from 'react-router-dom';

import { MdArrowOutward } from "react-icons/md";
import { gsap } from 'gsap';


const About = () => {

    useEffect(() => {
        // Image scale animation
        gsap.fromTo(
            ".magic-img-container",
            { translateY: "50%", opacity: 0 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".image-container",
                    start: "top 80%",
                    end: "bottom 60%",
                }
            }
        );

        // Text reveal line by line
        gsap.from(".about-text-line", {
            y: 50,
            duration: 0.7,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".about-text-line",
                start: "top 85%",
                end: "bottom 70%",
            }
        });

        gsap.to(".parallax-img", {
            yPercent: 40,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-img",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        gsap.to(".parallax-img2", {
            yPercent: -40,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-img2",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

    }, []);

    return (
        <section className='w-full mt-20 px-10' id='about-section'>
            <div className="top-about w-full flex justify-between">
                <h2 className='text-[3rem] font-semibold leading-none tracking-tight'><span className='block p-0 m-0 text-[5rem] font-semibold leading-[3rem] tracking-tight prime-txt'>#About</span> our company.</h2>
                <div className="about-text w-1/2 text-zinc-700 text-[1.1rem] font-medium">
                    <p className='mb-3'>
                        <span className="about-line-container block h-fit overflow-hidden">
                            <span className="block about-text-line">
                                We help businesses grow smarter with modern affiliate strategies and
                            </span>
                        </span>
                        <span className="about-line-container block h-fit overflow-hidden">
                            <span className="block about-text-line">
                                digital solutions. From lead generation and web development to mobile
                            </span>
                        </span>
                        <span className="about-line-container block h-fit overflow-hidden">
                            <span className="block about-text-line">
                                advertisements, our focus is on delivering measurable results and long-
                            </span>
                        </span>
                        <span className="about-line-container block h-fit overflow-hidden">
                            <span className="block about-text-line">
                                term value.
                            </span>
                        </span>
                    </p>
                    <p>
                        <span className="about-line-container block h-fit overflow-hidden">
                            <span className="block about-text-line">
                                We believe in quality, transparency, and innovation — ensuring that
                            </span>
                        </span>
                        <span className="about-line-container block h-fit overflow-hidden">
                            <span className="block about-text-line">
                                every campaign not only boosts visibility but also builds trust with your
                            </span>
                        </span>
                        <span className="about-line-container block h-fit overflow-hidden">
                            <span className="block about-text-line">
                                audience. Whether you are a startup or an established brand, our
                            </span>
                        </span>
                        <span className="about-line-container block h-fit overflow-hidden">
                            <span className="block about-text-line">
                                tailored services are designed to take your business to the next level.
                            </span>
                        </span>
                    </p>
                </div>
            </div>
            <div className="bottom-about mt-10 w-full flex justify-between">
                <ul className="overviews-container w-[35%]">
                    <li className='flex gap-5 h-[70px] mb-16'>
                        <img className='w-[70px] aspect-auto object-cover' src={services} alt="" />
                        <div className="overview-ext flex flex-col h-full justify-between">
                            <h3 className="overview-heading text-[2rem] leading-none font-bold text-[#222]">
                                5+
                            </h3>
                            <p className="overview-body text-[1.3rem] font-medium leading-none tracking-tight text-zinc-700">
                                Our Services
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-5 h-[70px] mb-16'>
                        <img className='w-[70px] aspect-auto object-cover' src={campaigns} alt="" />
                        <div className="overview-ext flex flex-col h-full justify-between w-[10ch]">
                            <h3 className="overview-heading text-[2rem] leading-none font-bold text-[#222]">
                                120+
                            </h3>
                            <p className="overview-body text-[1.3rem] font-medium leading-none tracking-tight text-zinc-700">
                                Completed Campaigns
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-5 h-[70px]'>
                        <img className='w-[70px] aspect-auto object-cover' src={years} alt="" />
                        <div className="overview-ext flex flex-col h-full justify-between">
                            <h3 className="overview-heading text-[2rem] leading-none font-bold text-[#222]">
                                3+
                            </h3>
                            <p className="overview-body text-[1.3rem] font-medium leading-none tracking-tight text-zinc-700">
                                Years of Experience
                            </p>
                        </div>
                    </li>
                    <li className='mt-14'>
                        <Link className='bg-magic-container w-fit text-zinc-900 text-[1.2rem] tracking-tight font-semibold flex items-center gap-1' to="/about">
                            <p className='px-10 hover:px-11 transition-all duration-500 h-[55px] rounded-full bg-[#f0550d] flex items-center relative overflow-hidden'><span className='relative bg-magic-txt z-[100]'>About Affilitech</span><span className='bg-magic block absolute bg-black rounded-full w-[50px] h-[50px] top-[-10px] left-[-10px] -translate-x-[50%] -translate-y-[50%] z-[99]'></span></p>
                            <span className='w-[55px] h-[55px] rounded-full bg-[#f0550d] flex justify-center items-center magic-arrow'><MdArrowOutward className='text-[1.8rem]' /></span>
                        </Link>
                    </li>
                </ul>
                <div className="image-container w-[65%] flex justify-between">
                    <div className="magic-img-container w-[350px] h-[350px] overflow-hidden parallax-img">
                        <img className='w-full h-full object-cover hover:scale-[1.1] transition-all duration-500 ease-in-out' src={office2} alt="" data-lenis-speed="5" />
                    </div>
                    <div className="magic-img-container w-[400px] h-[450px] overflow-hidden parallax-img2">
                        <img className='w-full h-full object-cover hover:scale-[1.1] transition-all duration-500 ease-in-out' src={office} alt="" data-lenis-speed="3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About