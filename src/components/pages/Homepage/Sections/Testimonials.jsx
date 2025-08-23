import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { Autoplay, EffectCards } from 'swiper/modules';
import { useEffect } from 'react';
import { gsap } from 'gsap';


const Testimonials = () => {
    const screenX = window.innerWidth;

    const texts = [
        {
            text: '" Working with this team has been a game-changer for our business. We were struggling to reach the right audience, but their strategies not only improved our online visibility, they also boosted engagement beyond our expectations. The results were consistent, measurable, and most importantly sustainable. "',
            bg: "bg-[#fff8b08a]"
        },
        {
            text: '" I had doubts in the beginning because I had tried multiple agencies before, but the way they approached our challenges was refreshing. They really listened to our goals, customized solutions, and kept us in the loop throughout the process. The attention to detail and dedication stood out from day one. "',
            bg: "bg-[#ffcac498]"
        },
        {
            text: '" What impressed me the most was their creativity and professionalism. Instead of offering generic campaigns, they focused on building meaningful connections with our audience. Within months, we saw significant growth in our reach and conversions, and it felt like a true partnership rather than just a service. "',
            bg: "bg-[#dbc7ff94]"
        },
        {
            text: '" The team’s ability to combine innovation with execution is remarkable. Every strategy they delivered was backed by data, creativity, and an understanding of our market. They went above and beyond to ensure results, and the outcome was beyond what we had hoped for. "',
            bg: "bg-[#b6f0ff91]"
        },
        {
            text: '" From the very beginning, the experience felt effortless. Everything was handled so smoothly that we barely had to worry about the technicalities. Their clarity, transparency, and commitment made us trust the process completely, and the outcomes spoke for themselves."',
            bg: "bg-[#ffabbc8e]"
        },
        {
            text: '" I was genuinely surprised by how quickly we started seeing results. What stood out was not just the numbers, but also the way they built a strategy around our brand’s unique identity. It felt tailored, personal, and yet scalable for growth. "',
            bg: "bg-[#adebb398]"
        },
    ]

    useEffect(() => {
        if(screenX >= 1024){
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
        }
    }, [])

    return (
        <section className='w-full mt-[-20vh] lg:mt-[-5vh] px-3 lg:px-10 py-10 lg:py-20 rounded-3xl overflow-hidden bg-zinc-200' id='testimonials-section'>
            <h2 className='text-[1.3rem] lg:text-[3rem] font-semibold leading-none tracking-tight'><span className='block p-0 m-0 text-[2.5rem] lg:text-[5rem] font-semibold leading-[2.5rem] lg:leading-[5rem] tracking-tight prime-txt'>#Testimonials</span>that Define Our Credibility.</h2>

            <div className="testimonials w-full mt-10">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    className="w-[80%] lg:w-[70%] h-[40vh]"
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {
                        texts.map(({ text, bg }) => (
                            <SwiperSlide className={`${bg} backdrop-blur-lg p-5 lg:p-10 rounded-3xl lg:text-[1.5rem] leading-tight`}>
                                {text}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials