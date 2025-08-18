import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import {gsap} from 'gsap';

const Navbar = () => {

    const navlinks = [
        {
            title: "home",
            link: "/"
        },
        {
            title: "about",
            link: "/about"
        },
        {
            title: "publisher",
            link: "/publisher"
        },
        {
            title: "advertiser",
            link: "/advertiser"
        },
        {
            title: "contact us",
            link: "/contactus"
        }
    ]

    useEffect(() => {
        const links = document.querySelectorAll(".navlink-list-item");

        links.forEach(link => {
            const underline = document.createElement("span");
            underline.classList.add("navlink-underline-span");
            link.appendChild(underline);

            // Hover enter
            link.addEventListener("mouseenter", () => {
                gsap.to(underline, {
                    width: "100%",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            // Hover leave
            link.addEventListener("mouseleave", () => {
                gsap.to(underline, {
                    width: "0%",
                    duration: 0.3,
                    ease: "power2.in"
                });
            });
        });

    }, []);

    return (
        <div className='w-full h-[15vh] flex justify-between items-center backdrop-blur-md bg-[#ffffff17] sticky top-0 left-0 z-[999] px-10' id='Navbar'>
            <div className='w-[250px]' id="logo">
                <img className='w-full object-cover' src={logo} alt="" />
            </div>
            <nav id='navlink-container'>
                <ul className='flex gap-10' id='navlink-list-container'>
                    {
                        navlinks.map(navlink => (
                            <li key={`${navlink.title}-key`} className='navlink-list-item relative capitalize text-[0.9rem] text-[#000] font-medium hover:text-[#E85D04] transition-all duration-200 leading-none' id='navlink-list-item'>
                                <Link to={navlink.link}>{navlink.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar