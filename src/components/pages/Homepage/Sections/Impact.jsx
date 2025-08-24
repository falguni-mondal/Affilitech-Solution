import React, { useEffect } from 'react'
import StatCounter from '../../../ui/StatCounter'
import {gsap} from 'gsap'

const Impact = () => {
    const impacts = [
        {
            target: 4,
            label: "Years of Experience.",
            suffix: "+",
            duration: 0.8
        },
        {
            target: 4652,
            label: "Daily Conversions",
            suffix: "+",
            duration: 2
        },
        {
            target: 730,
            label: "Projects Completed",
            suffix: "+",
            duration: 2
        },
        {
            target: 486,
            label: "Happy Clients",
            suffix: "+",
            duration: 1
        }
    ]

    useEffect(() => {
        gsap.to("#impact-section", {
            yPercent: -40,
            ease: "none",
            scrollTrigger: {
                trigger: "#impact-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });
    }, [])

    return (
        <section className=' mt-[25vh] lg:mt-[20vh] px-3 lg:p-10 rounded-3xl' id='impact-section'>
            <h2 className='text-[1.3rem] lg:text-[3rem] font-semibold leading-[1.1rem] lg:leading-none tracking-tight'><span className='block p-0 m-0 text-[2.5rem] lg:text-[5rem] font-semibold lg:leading-[3rem] tracking-tight prime-txt'>#Numbers</span> <span className='block leading-none mt-3'>that reflect our true</span> impact.</h2>

            <div className="impacts w-full flex flex-col lg:flex-row gap-3 lg:justify-between mt-[3vh] lg:mt-[5vh]">
                {
                    impacts.map(({ target, label, suffix, duration }) => (
                        <StatCounter key={`${label}-key`} target={target} label={label} suffix={suffix} duration={duration} />
                    ))
                }
            </div>
        </section>
    )
}

export default Impact