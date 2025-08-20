import Quote from './Quote'
import { MaskedDiv } from '../../../../ui/MaskedDiv'
import web from "../../../../../assets/3d/web_dev.png"
import seo from "../../../../../assets/3d/seo.png"
import marketing from "../../../../../assets/3d/marketing.png"
import email from "../../../../../assets/3d/email.png"
import orm from "../../../../../assets/3d/positive.png"
import creative from "../../../../../assets/3d/creative.png"
import marketing2 from "../../../../../assets/3d/marketing2.png"
import { useEffect } from 'react'
import { gsap } from 'gsap'

const Services = () => {

    useEffect(() => {
        gsap.from(".service-line", {
            width: 0,
            duration: 2,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: ".service-line",
                start: "top 80%",
                end: "bottom 70%",
            }
        });
        gsap.to(".parallax-txt", {
            yPercent: 40,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-txt",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });
        gsap.from(".service-line2", {
            width: 0,
            duration: 2,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: ".service-line2",
                start: "top 100%",
                end: "bottom 70%",
            }
        });
        gsap.from(".masked-div", {
            y: 150,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".masked-div",
                start: "top 95%",
                end: "bottom 70%",
            }
        });
        gsap.from(".masked-div2", {
            y: 150,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".masked-div2",
                start: "top 95%",
                end: "bottom 70%",
            }
        });
        gsap.from(".masked-div3", {
            y: 150,
            opacity: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: ".masked-div3",
                start: "top 95%",
                end: "bottom 70%",
            }
        });
        gsap.from(".masked-div4", {
            y: 150,
            opacity: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: ".masked-div4",
                start: "top 95%",
                end: "bottom 70%",
            }
        });
    }, [])

    return (
        <section className='px-10 mt-[20vh]' id='services-section'>
            <div className='service-line w-full h-[2px] bg-black mb-[5vh]'></div>
            <div className="services-quote-container mb-[30vh] parallax-txt">
                <Quote />
            </div>
            <div className='service-line2 w-full h-[2px] bg-black mb-[15vh]'></div>
            <h2 className='text-[3rem] font-semibold leading-none tracking-tight mb-10'>Our<span className='block p-0 m-0 text-[5rem] font-semibold leading-none tracking-tight prime-txt'>#Services</span></h2>
            <div className="services-list-container">
                <div className="service-list-line flex gap-10">
                    <MaskedDiv maskType="type-1" size={0.35} className='masked-div '>
                        <div className="service bg-[#DBC7FF] p-5 flex flex-col items-center">
                            <img className='w-[90%] object-cover' src={web} alt="" />
                            <h1 className="text-[2rem] font-bold tracking-tight leading-none">Web Development</h1>
                            <p className="mt-3 font-medium leading-tight">Get a user-friendly website design that creates a strong identity of your brand and meets search engine requirements.</p>
                        </div>
                    </MaskedDiv>
                    <MaskedDiv maskType="type-1" size={0.35} className='masked-div rotate-180'>
                        <div className="service flex flex-col items-center bg-[#FFF8B0] p-5 rotate-180">
                            <h1 className="text-[2rem] font-bold tracking-tight leading-none">Search engine Optimization</h1>
                            <p className="mt-3 font-medium leading-tight">With our SEO services, your brand gets to rank higher than your competitors on search engine results pages, drive traffic organically, generate leads, optimized content.</p>
                            <img className='w-[90%] object-cover' src={seo} alt="" />
                        </div>
                    </MaskedDiv>
                    <MaskedDiv maskType="type-1" size={0.35} className='masked-div '>
                        <div className="service bg-[#acbbff] p-5">
                            <img className='w-[90%] object-cover' src={marketing} alt="" />
                            <h1 className="text-[2rem] font-bold tracking-tight leading-none">Affiliate Marketing</h1>
                            <p className="mt-3 font-medium leading-tight">With our vast network and experience of running campaigns, you get new affiliates and new source of revenue.</p>
                        </div>
                    </MaskedDiv>
                </div>
                <div className="service-list-line flex justify-start mt-10 gap-10">
                    <MaskedDiv maskType="type-2" size={0.50} className='masked-div2 '>
                        <div className="service bg-[#ffd391] p-5 flex items-center">
                            <img className='w-[40%] object-cover' src={email} alt="" />
                            <div className="service-dets">
                                <h1 className="text-[2rem] font-bold tracking-tight leading-none">Email Marketing</h1>
                                <p className="mt-3 font-medium leading-tight">We make sure that your email marketing campaigns shows quantifiable results and reach target audience effectively.</p>
                            </div>
                        </div>
                    </MaskedDiv>
                    <MaskedDiv maskType="type-2" size={0.50} className='masked-div2 rotate-180'>
                        <div className="service bg-[#ADEBB3] p-5 flex items-center rotate-180">
                            <img className='w-[50%] object-cover' src={orm} alt="" />
                            <div className="service-dets">
                                <h1 className="text-[2rem] font-bold tracking-tight leading-none">ORM</h1>
                                <p className="mt-3 font-medium leading-tight">Get personalized strategy that creates a positive hype around your business on the internet.</p>
                            </div>
                        </div>
                    </MaskedDiv>
                </div>
                <div className="service-list-line mt-10">
                    <MaskedDiv maskType="type-4" size={0.80} className='masked-div3 '>
                        <div className="service bg-[#ffcdc4] p-5 flex items-center">
                            <img className='w-[40%] object-cover' src={creative} alt="" />
                            <div className="service-dets">
                                <h1 className="text-[2rem] font-bold tracking-tight leading-none">Creatives</h1>
                                <p className="mt-3 font-medium leading-tight">Level up your marketing strategies with our innovation, eye-catching and inventive creations that blend creativity, technology, and data-driven insights to deliver impactful campaigns, strengthen your digital presence, and position your brand as a leader in the marketplace.</p>
                            </div>
                        </div>
                    </MaskedDiv>
                </div>
                <div className='service-list-line mt-10'>
                    <MaskedDiv maskType="type-4" size={0.80} className='masked-div4 rotate-180'>
                        <div className="service bg-[#ffdfc4] p-5 flex items-center rotate-180">
                            <img className='w-[40%] object-cover' src={marketing2} alt="" />
                            <div className="service-dets">
                                <h1 className="text-[2rem] font-bold tracking-tight leading-none">SEM & SMO</h1>
                                <p className="mt-3 font-medium leading-tight">We help you grow your digital presence through Social Media Management, Paid Promotions, Page Optimization, Targeted Advertising, Creative Campaigns, Engaging Content, Infographics, and Videos — all tailored to achieve measurable results.</p>
                            </div>
                        </div>
                    </MaskedDiv>
                </div>
            </div>
        </section>
    )
}

export default Services