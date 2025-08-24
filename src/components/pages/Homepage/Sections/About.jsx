import React, { useEffect } from 'react'

import services from "../../../../assets/Icons/services.png";
import campaigns from "../../../../assets/Icons/campaigns.png";
import years from "../../../../assets/Icons/years.png";
import office from "../../../../assets/office_min.webp"
import office2 from "../../../../assets/office2_min.webp"
import { Link } from 'react-router-dom';

import { MdArrowOutward } from "react-icons/md";
import {gsap} from 'gsap';


const About = () => {

    const screenX = window.innerWidth;

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
            yPercent: () => screenX >= 1024 ? 40 : 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-img",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        gsap.to(".parallax-img2", {
            yPercent: () => screenX >= 1024 ? -40 : -20,
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
        <section className='w-full mt-20 px-3 lg:px-10 scroll-mt-30' id='about-section'>
            <div className="top-about w-full flex flex-col lg:flex-row justify-between">
                <h2 className='text-[1.3rem] lg:text-[3rem] font-semibold leading-none tracking-tight'><span className='block p-0 m-0 text-[2.5rem] lg:text-[5rem] font-semibold leading-[2rem] tracking-tight prime-txt'>#About</span> our company.</h2>
                <div className="about-text w-full lg:w-1/2 mt-5 lg:mt-0 text-zinc-700 lg:text-[1.1rem] font-medium">
                    {
                        screenX >= 1024 ?
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
                            :
                            <p className='text-[0.9rem] mb-3 leading-tight'>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        We help businesses grow smarter with modern
                                    </span>
                                </span>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        affiliate strategies and digital solutions. From lead
                                    </span>
                                </span>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        generation and web development to mobile
                                    </span>
                                </span>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        advertisements, our focus is on delivering measurable results and long-term value.
                                    </span>
                                </span>
                            </p>
                    }
                    {
                        screenX >= 1024 ?
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
                            :
                            <p className='text-[0.9rem] leading-tight'>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        We believe in quality, transparency, and
                                    </span>
                                </span>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        innovation — ensuring that every campaign not
                                    </span>
                                </span>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        only boosts visibility but also builds trust with
                                    </span>
                                </span>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        your audience. Whether you are a startup or an
                                    </span>
                                </span>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        established brand, our tailored services are
                                    </span>
                                </span>
                                <span className="about-line-container block h-fit overflow-hidden">
                                    <span className="block about-text-line">
                                        designed to take your business to the next level.
                                    </span>
                                </span>
                            </p>
                    }
                </div>
            </div>
            <div className="bottom-about mt-5 lg:mt-10 w-full flex lg:justify-between flex-col-reverse lg:flex-row">
                <ul className="overviews-container flex lg:flex-col justify-between flex-wrap lg:flex-nowrap w-full lg:w-[35%]">
                    <li className='flex gap-2 lg:gap-5 h-[60px] lg:h-[70px] w-[45%] lg:w-full mb-5 lg:mb-16'>
                        <img className='w-[60px] lg:w-[70px] aspect-auto object-cover' src={services} alt="" />
                        <div className="overview-ext flex flex-col h-full justify-between">
                            <h3 className="overview-heading text-[1.5rem] lg:text-[2rem] leading-none font-bold text-[#222]">
                                6+
                            </h3>
                            <p className="overview-body lg:text-[1.3rem] font-medium leading-none tracking-tight text-zinc-700">
                                Our Services
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-2 lg:gap-5 h-[60px] lg:h-[70px] w-[45%] lg:w-full mb-5 lg:mb-16'>
                        <img className='w-[60px] lg:w-[70px] aspect-auto object-cover' src={campaigns} alt="" />
                        <div className="overview-ext flex flex-col h-full justify-between w-[10ch]">
                            <h3 className="overview-heading text-[1.5rem] lg:text-[2rem] leading-none font-bold text-[#222]">
                                120+
                            </h3>
                            <p className="overview-body lg:text-[1.3rem] font-medium leading-none tracking-tight text-zinc-700">
                                Completed Campaigns
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-2 lg:gap-5 h-[60px] lg:h-[70px] w-[45%] lg:w-full'>
                        <img className='w-[60px] lg:w-[70px] aspect-auto object-cover' src={years} alt="" />
                        <div className="overview-ext flex flex-col h-full justify-between">
                            <h3 className="overview-heading text-[1.5rem] lg:text-[2rem] leading-none font-bold text-[#222]">
                                4+
                            </h3>
                            <p className="overview-body lg:text-[1.3rem] font-medium leading-none tracking-tight text-zinc-700">
                                Years of Experience
                            </p>
                        </div>
                    </li>
                    <li className='mt-8 lg:mt-14'>
                        <a href='#services-section' className='bg-magic-container  w-fit text-black text-[1.1rem] lg:text-[1.2rem] lg:tracking-tight font-semibold flex items-center gap-1'>
                            <p className='px-8 lg:px-10 hover:px-9 lg:hover:px-11 transition-all duration-500 h-[50px] lg:h-[55px] rounded-full bg-[#ff6411] flex items-center relative overflow-hidden text-[0.95rem] lg:text-[1rem]'><span className='relative bg-magic-txt z-[100]'>Affilitech Services</span><span className='bg-magic block absolute bg-black rounded-full w-[50px] h-[50px] top-[-10px] left-[-10px] -translate-x-[50%] -translate-y-[50%] z-[99]'></span></p>
                            <span className='w-[50px] lg:w-[55px] h-[50px] lg:h-[55px] rounded-full bg-[#ff6411] flex justify-center items-center magic-arrow'><MdArrowOutward className='text-[1.4rem] lg:text-[1.8rem]' /></span>
                        </a>
                    </li>
                </ul>
                <div className="image-container w-full lg:w-[65%] flex flex-col lg:flex-row justify-between">
                    <div className="magic-img-container w-[220px] lg:w-[350px] h-[220px] lg:h-[350px] self-start lg:self-auto overflow-hidden parallax-img mt-[-1rem] lg:mt-0">
                        <img className='w-full h-full object-cover hover:scale-[1.1] transition-all duration-500 ease-in-out' src={office2} alt="" />
                    </div>
                    <div className="magic-img-container w-[300px] lg:w-[400px] h-[350px] lg:h-[450px] self-end lg:self-auto overflow-hidden parallax-img2 relative mt-[-2rem]">
                        <img className='w-full h-full object-cover hover:scale-[1.1] transition-all duration-500 ease-in-out' src={office} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About