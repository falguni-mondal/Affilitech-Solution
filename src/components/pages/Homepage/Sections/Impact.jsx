import React, { useEffect } from 'react'
import StatCounter from '../../../ui/StatCounter'
import {gsap} from 'gsap'

const Impact = () => {
    const impacts = [
        {
            target: 3,
            label: "Years of Experience.",
            suffix: "+"
        },
        {
            target: 80,
            label: "Daily Conversions",
            suffix: "+"
        },
        {
            target: 1300,
            label: "Publishers",
            suffix: "+"
        },
        {
            target: 10,
            label: "Monthly Traffic",
            suffix: "M+"
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
        <section className='mt-[20vh] p-10 rounded-3xl' id='impact-section'>
            <h2 className='text-[3rem] font-semibold leading-none tracking-tight'><span className='block p-0 m-0 text-[5rem] font-semibold leading-[3rem] tracking-tight prime-txt'>#Numbers</span> <span className='block leading-none mt-3'>that reflect our true</span> impact.</h2>

            <div className="impacts w-full flex justify-between mt-[5vh]">
                {
                    impacts.map(({ target, label, suffix }) => (
                        <StatCounter target={target} label={label} suffix={suffix} />
                    ))
                }
            </div>
        </section>
    )
}

export default Impact