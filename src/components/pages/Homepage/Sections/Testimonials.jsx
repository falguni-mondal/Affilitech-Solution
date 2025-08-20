import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { Autoplay, EffectCards } from 'swiper/modules';
import { useEffect } from 'react';
import {gsap} from 'gsap';


const Testimonials = () => {

    useEffect(() => {
        gsap.to("#testimonials-section", {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: "#testimonials-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });
    }, [])

    return (
        <section className='w-full mt-[-5vh] px-10 py-20 rounded-3xl overflow-hidden bg-zinc-200' id='testimonials-section'>
            <h2 className='text-[3rem] font-semibold leading-none tracking-tight'><span className='block p-0 m-0 text-[5rem] font-semibold leading-[5rem] tracking-tight prime-txt'>#Testimonials</span>that Define Our Credibility.</h2>

            <div className="testimonials w-full mt-10">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    className="w-[70%] h-[40vh]"
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className='bg-[#fff8b08a] backdrop-blur-lg px-10 py-5 rounded-3xl text-[1.5rem] leading-tight'>
                        " Working with this team has been a game-changer for our business. We were struggling to reach the right audience, but their strategies not only improved our online visibility, they also boosted engagement beyond our expectations. The results were consistent, measurable, and most importantly sustainable. "
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#ffcac498] backdrop-blur-lg px-10 py-5 rounded-3xl text-[1.5rem] leading-tight'>
                        " I had doubts in the beginning because I had tried multiple agencies before, but the way they approached our challenges was refreshing. They really listened to our goals, customized solutions, and kept us in the loop throughout the process. The attention to detail and dedication stood out from day one. "
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#dbc7ff94] backdrop-blur-lg px-10 py-5 rounded-3xl text-[1.5rem] leading-tight'>
                        " What impressed me the most was their creativity and professionalism. Instead of offering generic campaigns, they focused on building meaningful connections with our audience. Within months, we saw significant growth in our reach and conversions, and it felt like a true partnership rather than just a service. "
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#b6f0ff91] backdrop-blur-lg px-10 py-5 rounded-3xl text-[1.5rem] leading-tight'>
                        " The team’s ability to combine innovation with execution is remarkable. Every strategy they delivered was backed by data, creativity, and an understanding of our market. They went above and beyond to ensure results, and the outcome was beyond what we had hoped for. "
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#ffabbc8e] backdrop-blur-lg px-10 py-5 rounded-3xl text-[1.5rem] leading-tight'>
                        " From the very beginning, the experience felt effortless. Everything was handled so smoothly that we barely had to worry about the technicalities. Their clarity, transparency, and commitment made us trust the process completely, and the outcomes spoke for themselves."
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#adebb398] backdrop-blur-lg px-10 py-5 rounded-3xl text-[1.5rem] leading-tight'>
                        " I was genuinely surprised by how quickly we started seeing results. What stood out was not just the numbers, but also the way they built a strategy around our brand’s unique identity. It felt tailored, personal, and yet scalable for growth. "
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials