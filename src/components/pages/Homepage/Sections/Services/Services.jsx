import Quote from './Quote'
import { MaskedDiv } from '../../../../ui/MaskedDiv'
import web from "../../../../../assets/3d/web_dev.png"
import seo from "../../../../../assets/3d/seo.png"
import marketing from "../../../../../assets/3d/marketing.png"
import email from "../../../../../assets/3d/email.png"
import ads from "../../../../../assets/3d/speaker1.png"
import creative from "../../../../../assets/3d/creative.png"
import marketing2 from "../../../../../assets/3d/marketing2.png"
import { useEffect } from 'react'
import { gsap } from 'gsap'

const Services = () => {
    const screenX = window.innerWidth;

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
            yPercent: () => screenX >= 1024 ? 40 : 60,
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
        if (screenX >= 1024) {
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
        }
        else {
            const maskedCard = document.querySelectorAll(".masked-card");
            maskedCard.forEach(card => {
                gsap.from(card, {
                    y: 150,
                    opacity: 0,
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 75%",
                    }
                })
            })
        }

    }, [])

    return (
        <section className='w-full px-3 lg:px-10 mt-[10vh] lg:mt-[20vh] scroll-mt-[-50vh]' id='services-section'>
            <div className='service-line w-full h-[2px] bg-black mb-[5vh] lg:mb-[5vh]'></div>
            <div className="services-quote-container mb-[25vh] lg:mb-[30vh] parallax-txt">
                <Quote />
            </div>
            <div className='service-line2 w-full h-[2px] bg-black mb-[10vh] lg:mb-[15vh]'></div>
            <h2 className='text-[1.3rem] lg:text-[3rem] font-semibold leading-none tracking-tight mb-5 lg:mb-10'>Our<span className='block p-0 m-0 text-[2.5rem] lg:text-[5rem] font-semibold leading-none tracking-tight prime-txt'>#Services</span></h2>
            <div className="services-list-container w-full">
                <div className="service-list-line w-full flex flex-col lg:flex-row gap-5 lg:gap-10">
                    <MaskedDiv maskType="type-1" size={screenX >= 1024 ? 0.35 : 0.90} className='masked-div masked-card h-[48vh] lg:h-fit'>
                        <div className="service bg-[#acbbff] p-5">
                            <img className='w-[85%] lg:w-[90%] object-cover' src={marketing} alt="" />
                            <h1 className="text-[1.4rem] lg:text-[2rem] font-bold tracking-tight leading-none">Affiliate Marketing</h1>
                            <p className="text-[0.95rem] lg:text-[1rem] mt-3 font-medium leading-tight">With our vast network and experience of running campaigns, you get new affiliates and new source of revenue.</p>
                        </div>
                    </MaskedDiv>
                    <MaskedDiv maskType="type-1" size={screenX >= 1024 ? 0.35 : 0.90} className='masked-div masked-card h-[48vh] lg:h-fit lg:rotate-180'>
                        <div className="service bg-[#DBC7FF] p-5 pt-7 flex flex-col-reverse lg:flex-col items-start lg:items-center justify-between lg:rotate-180">
                            <div className="service-dets">
                                <h1 className="text-[1.4rem] lg:text-[2rem] font-bold tracking-tight leading-none">Web Development</h1>
                                <p className="text-[0.95rem] lg:text-[1rem] mt-3 font-medium leading-tight">Get a user-friendly website design that creates a strong identity of your brand and meets search engine requirements.</p>
                            </div>
                            <img className='w-[85%] lg:w-[90%] object-cover' src={web} alt="" />
                        </div>
                    </MaskedDiv>
                    <MaskedDiv maskType="type-1" size={screenX >= 1024 ? 0.35 : 0.90} className='masked-div masked-card h-[48vh] lg:h-fit'>
                        <div className="service flex flex-col items-start lg:items-center bg-[#FFF8B0] p-5">
                            <img className='w-[80%] object-cover' src={seo} alt="" />
                            <div className="service-dets">
                                <h1 className="text-[1.4rem] lg:text-[2rem] font-bold tracking-tight leading-none">Search engine Optimization</h1>
                                <p className="text-[0.95rem] lg:text-[1rem] mt-3 font-medium leading-tight">With our SEO services, your brand gets to rank higher than your competitors on search engine results pages, drive traffic organically.</p>
                            </div>
                        </div>
                    </MaskedDiv>
                </div>
                <div className="service-list-line flex flex-col lg:flex-row justify-between mt-5 lg:mt-10 gap-5 lg:gap-10">
                    <MaskedDiv maskType={screenX >= 1024 ? "type-2" : "type-1"} size={screenX >= 1024 ? 0.50 : 0.90} className='masked-div2 masked-card h-[48vh] lg:h-fit'>
                        <div className="service bg-[#ffd391] p-5 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center">
                            <img className='w-[70%] lg:w-[40%] object-cover' src={email} alt="" />
                            <div className="service-dets">
                                <h1 className="text-[1.4rem] lg:text-[2rem] font-bold tracking-tight leading-none">Email Marketing</h1>
                                <p className="text-[0.95rem] lg:text-[1rem] mt-3 font-medium leading-tight">We make sure that your email marketing campaigns shows quantifiable results and reach target audience effectively.</p>
                            </div>
                        </div>
                    </MaskedDiv>
                    <MaskedDiv maskType={screenX >= 1024 ? "type-2" : "type-1"} size={screenX >= 1024 ? 0.50 : 0.90} className='masked-div2 masked-card lg:rotate-180'>
                        <div className="service bg-[#ADEBB3] p-5 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center lg:rotate-180">
                            <img className='w-[70%] lg:w-[40%] object-cover' src={ads} alt="" />
                            <div className="service-dets">
                                <h1 className="text-[1.4rem] lg:text-[2rem] font-bold tracking-tight leading-none">Google Ads</h1>
                                <p className="text-[0.95rem] lg:text-[1rem] mt-3 font-medium leading-tight">Reach the right audience at the right time with impactful Google Ads campaigns that boost your business growth.</p>
                            </div>
                        </div>
                    </MaskedDiv>
                </div>
                <div className="service-list-line lg:flex justify-center mt-5 lg:mt-10">
                    <MaskedDiv maskType={screenX >= 1024 ? "type-4" : "type-1"} size={screenX >= 1024 ? 0.80 : 0.90} className='masked-div3 masked-card'>
                        <div className="service bg-[#ffcdc4] p-5 flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center">
                            <img className='w-[80%] lg:w-[40%] object-cover' src={creative} alt="" />
                            <div className="service-dets lg:w-[57%]">
                                <h1 className="text-[1.4rem] lg:text-[2rem] font-bold tracking-tight leading-none">Creatives</h1>
                                <p className="text-[0.95rem] lg:text-[1rem] mt-3 font-medium leading-tight">Level up your marketing strategies with our innovation, creativity, and technology. Strengthen your digital presence, and position your brand as a leader in the marketplace.</p>
                            </div>
                        </div>
                    </MaskedDiv>
                </div>
                <div className='service-list-line lg:flex justify-center mt-5 lg:mt-10'>
                    <MaskedDiv maskType={screenX >= 1024 ? "type-4" : "type-1"} size={screenX >= 1024 ? 0.80 : 0.90} className='masked-div4 masked-card lg:rotate-180'>
                        <div className="service bg-[#ffdfc4] p-5 flex flex-col lg:flex-row justify-start lg:justify-center items-start lg:items-center lg:rotate-180">
                            <img className='w-[80%] lg:w-[40%] object-cover' src={marketing2} alt="" />
                            <div className="service-dets lg:w-[57%]">
                                <h1 className="text-[1.4rem] lg:text-[2rem] font-bold tracking-tight leading-none">SEM & SMO</h1>
                                <p className="text-[0.95rem] lg:text-[1rem] mt-3 font-medium leading-tight">Grow your digital presence through Paid Promotions, Page Optimization, Targeted Advertising, Creative Campaigns, and Engaging Content.</p>
                            </div>
                        </div>
                    </MaskedDiv>
                </div>
            </div>
        </section>
    )
}

export default Services