import React from 'react'
import Marquee from 'react-fast-marquee';
import { BsAsterisk } from "react-icons/bs";

const HomeMarquee = () => {
    const titles = [
        "Welcome to Affilitech Solutions",
        "Lead Generation",
        "Web Development",
        "SEO Optimization",
        "Mobile Advertisements",
        "Quality Services"
    ]
    return (
        <div className='w-full overflow-x-hidden uppercase font-semibold text-[1.4rem] bg-black text-zinc-300 mt-5 relative z-[99]' id='home-marquee'>
            <Marquee speed={60} pauseOnHover gradient={false}>
                {
                    titles.map(title => (
                        <div className='flex items-center mr-5 py-3'><BsAsterisk className='mr-5' /> {title}</div>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default HomeMarquee