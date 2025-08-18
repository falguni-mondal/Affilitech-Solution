import { Navigation, EffectCreative, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import lead_min from "../../../../assets/3d/lead_min.png";
import web_min from "../../../../assets/3d/web_min.png";
import adv_min from "../../../../assets/3d/adv_min.png";

const Hero = () => {
    return (
        <section className='w-full block mt-1 relative' id='hero-section'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, EffectCreative, Autoplay]}
                slidesPerView={1}
                navigation
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
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className='rounded-3xl w-full h-[83vh]'
            >
                <SwiperSlide className='hero-slide w-full h-full rounded-3xl bg-[#fffac7] px-10' style={{display: "flex"}}>
                    <div className="left-slide w-[60%] h-full flex flex-col justify-center shrink-0">
                        <h1 className='prime-txt text-[4.5rem] leading-none tracking-tight font-bold'><span className='block prime-txt text-[12rem] leading-none tracking-tighter font-bold text-[#ff7221]'>Leading</span> Digital Marketing Agency.</h1>
                        <p className='text-[1.1rem] leading-none tracking-tight font-semibold mt-5'>We Provide Cutting Edge Business Solution In Digital & Performance Marketing.</p>
                    </div>
                    <div className="right-slide w-[40%] flex justify-center items-center">
                        <img className='w-full object-cover' src={lead_min} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='hero-slide w-full h-full rounded-3xl bg-[#adebb3] px-10' style={{display: "flex"}}>
                    <div className="left-slide w-[60%] h-full flex flex-col justify-center shrink-0">
                        <h1 className='prime-txt text-[4.5rem] leading-none tracking-tight font-bold'><span className='block prime-txt text-[10rem] leading-none tracking-tighter font-bold text-[#28c22f]'>App & Web</span> Development.</h1>
                        <p className='text-[1.1rem] leading-none tracking-tight font-semibold mt-5'>Foremost Application Building, Focus on Unique Ideas.</p>
                    </div>
                    <div className="right-slide w-[40%] flex justify-center items-center">
                        <img className='w-full object-cover' src={web_min} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='hero-slide w-full h-full rounded-3xl bg-[#d0d5ff] px-10' style={{display: "flex"}}>
                    <div className="left-slide w-[60%] h-full flex flex-col justify-center shrink-0">
                        <h1 className='prime-txt text-[4.5rem] leading-none tracking-tight font-bold'><span className='block prime-txt text-[12rem] leading-none tracking-tighter font-bold text-[#6625ff]'>Mobile</span> Advertising Sollutions.</h1>
                        <p className='text-[1.050rem] leading-none tracking-tight font-semibold mt-5'>Deliver Quality Impression & Engagement With World Class Technology Resources.</p>
                    </div>
                    <div className="right-slide w-[40%] flex justify-center items-center">
                        <img className='w-full object-cover' src={adv_min} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Hero