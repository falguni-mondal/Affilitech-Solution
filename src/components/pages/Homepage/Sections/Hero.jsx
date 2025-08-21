import { useEffect, useRef } from 'react';

import { Navigation, EffectCreative, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import lead_min from "../../../../assets/3d/lead_min.png";
import web_min from "../../../../assets/3d/web_min.png";
import adv from "../../../../assets/3d/marketing3.png";
import {gsap} from 'gsap';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Hero = () => {

    const swiperRef = useRef(null);
    const firstTime = useRef(true);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;

            swiper.params.autoplay.delay = 8300;

            swiper.on("slideChange", () => {
                if (firstTime.current) {
                    swiper.params.autoplay.delay = 5000;
                    firstTime.current = false;
                }
            });

            gsap.from(swiperRef.current, {
                y: "100vh",
                duration: 1,
                delay: 3.3,
                ease: "power4.inOut"
            })
        }
    }, []);

    return (
        <section className='w-full block mt-1 relative' id='hero-section'>
            <Swiper
                modules={[Navigation, EffectCreative, Autoplay]}
                slidesPerView={1}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                loop={true}
                speed={500}
                autoplay={{
                    delay: 8300,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                ref={swiperRef}
                className='rounded-3xl w-full h-[80vh] lg:h-[83vh] lg:max-h-[1000px] relative'
            >
                <SwiperSlide className='hero-slide w-full h-full rounded-3xl bg-[#fffac7] px-5 lg:px-10 flex-col-reverse justify-end lg:flex-row' style={{ display: "flex" }}>
                    <div className="left-slide w-full lg:w-[60%] lg:h-full flex flex-col justify-center shrink-0">
                        <h1 className='prime-txt text-[2.3rem] lg:text-[4.5rem] leading-[2.1rem] lg:leading-[4.2rem] tracking-tight font-bold'><span className='block prime-txt text-[5rem] lg:text-[12rem] leading-none tracking-tighter font-bold text-[#ff7221] mb-2 lg:mb-0'>Leading</span> Digital Marketing Agency.</h1>
                        <p className='text-[1.1rem] leading-none tracking-tight font-semibold mt-5'>We Provide Cutting Edge Business Solution In Digital & Performance Marketing.</p>
                    </div>
                    <div className="right-slide w-full lg:w-[40%] flex justify-center items-center">
                        <img className='w-full object-cover' src={lead_min} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='hero-slide w-full h-full rounded-3xl bg-[#adebb3] px-5 lg:px-10 flex-col-reverse justify-end lg:flex-row' style={{ display: "flex" }}>
                    <div className="left-slide w-full lg:w-[60%] lg:h-full flex flex-col justify-center shrink-0">
                        <h1 className='prime-txt text-[2.5rem] lg:text-[4.5rem] leading-[2.2rem] lg:leading-[4.2rem] tracking-tight font-bold'><span className='block prime-txt text-[5rem] lg:text-[12rem] leading-none tracking-tighter font-bold text-[#28c22f]'>Website</span> Development Services.</h1>
                        <p className='text-[1.1rem] leading-none tracking-tight font-semibold mt-5'>Foremost Web Application Building, Focus on Unique Ideas.</p>
                    </div>
                    <div className="right-slide w-full lg:w-[40%] flex justify-center items-center">
                        <img className='w-full object-cover' src={web_min} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='hero-slide w-full h-full rounded-3xl bg-[#d0d5ff] px-5 lg:px-10 flex-col-reverse justify-end lg:flex-row' style={{ display: "flex" }}>
                    <div className="left-slide w-full lg:w-[60%] lg:h-full flex flex-col justify-center shrink-0">
                        <h1 className='prime-txt text-[2.5rem] lg:text-[4.5rem] leading-[2.2rem] lg:leading-[4.2rem] tracking-tight font-bold'><span className='block prime-txt text-[5rem] lg:text-[12rem] leading-none tracking-tighter font-bold text-[#6625ff]'>Mobile</span> Advertising Sollutions.</h1>
                        <p className='text-[1.050rem] leading-none tracking-tight font-semibold mt-5'>Deliver Quality Impression & Engagement With World Class Technology Resources.</p>
                    </div>
                    <div className="right-slide w-full lg:w-[40%] flex justify-center items-center">
                        <img className='w-full object-cover' src={adv} alt="" />
                    </div>
                </SwiperSlide>

                <div className="navigations w-full absolute bottom-0 left-0 pb-10 lg:pb-5 z-[999] flex justify-center gap-5">
                    <span ref={prevRef} className='w-[3rem] h-[3rem] rounded-full bg-white hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-[#00000054] flex justify-center items-center cursor-pointer'><IoIosArrowBack className='text-[1.4rem]'/></span>
                    <span ref={nextRef} className='w-[3rem] h-[3rem] rounded-full bg-white hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-[#00000054] flex justify-center items-center cursor-pointer'><IoIosArrowForward className='text-[1.4rem]'/></span>
                </div>
            </Swiper>
        </section>
    )
}

export default Hero