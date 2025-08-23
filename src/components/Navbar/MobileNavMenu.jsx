import gsap from 'gsap'
import React, { useEffect } from 'react'

const MobileNavMenu = ({ navReveal, setNavReveal }) => {

    const links = [
        {
            title: "Home",
            link: "#"
        },
        {
            title: "About",
            link: "#about-section"
        },
        {
            title: "Publisher",
            link: "http://affilitechsolutions.offer18.com/m/signup_self_aff",
            target: "_blank"
        },
        {
            title: "Advertiser",
            link: "https://affilitechsolutions.offer18.com/m/signup_self_adv",
            target: "_blank"
        },
        {
            title: "Contact Us",
            link: "#contact-section"
        }
    ]

    useEffect(() => {
        if (navReveal) {
            gsap.to("#mobile-nav-menu-wrapper", {
                x: "0vw",
                duration: 1,
                ease: "power2.inOut"
            })
            gsap.from(".nav-option", {
                y: "3rem",
                delay: 0.6,
                duration: 0.5,
                ease: "power.inOut"
            })
        }
        else {
            gsap.to("#mobile-nav-menu-wrapper", {
                x: "100vw",
                duration: 1,
                ease: "power2.inOut"
            })
        }
    }, [navReveal])

    return (
        <div className={`fixed inset-0 bg-[#f8f8f8ea] backdrop-blur-[10px] z-[999] translate-x-[100vw]`} id="mobile-nav-menu-wrapper">
            <ul className='h-full m-0 pl-10 flex flex-col justify-center pb-[30vh]' id="mobile-nav-list-wrapper">
                {
                    links.map(({ title, link, target }) => (
                        <li key={`${title}-mobile-link`} className='h-fit overflow-hidden'>
                            <a onClick={() => setNavReveal(false)} href={link} target={target} className='nav-option block text-[2.5rem] w-fit'>{title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MobileNavMenu