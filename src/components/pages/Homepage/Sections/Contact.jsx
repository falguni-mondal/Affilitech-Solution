import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";


const Contact = () => {
    return (
        <section className='w-full mt-[20vh] bg-zinc-200 p-5 lg:p-10 py-10 lg:py-14 rounded-3xl scroll-mt-30' id='contact-section'>
            <div className="flex flex-col lg:flex-row gap-14 lg:gap-0 lg:justify-between w-full">
                <div className="left-contact lg:w-[40%]">
                    <h2 className='text-[1.3rem] lg:text-[3rem] font-semibold leading-none tracking-tight mb-3'>Lets<span className='block p-0 m-0 text-[2.5rem] lg:text-[5rem] font-semibold lg:leading-[5rem] tracking-tight prime-txt'>#Talk</span></h2>
                    <div className="contact-txt mb-3 text-[0.9rem] lg:text-[1rem]">
                        feel free to connect with us. We believe that
                        communication always leads to better outcomes and
                        that is all we wish and work for our clients.
                    </div>
                    <div className="contact-links flex items-center gap-5">
                        <p className='flex items-center gap-2 lg:text-[1.3rem] font-semibold'>Contact Us <HiArrowLongRight className='text-[1.3rem] lg:text-[2rem] text-[#f0550d]' /></p>
                        <div className="contact-links-container flex gap-2">
                            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="https://www.facebook.com/affilitechsolutions" target='_blank'>
                                <FaFacebookF className='text-[1.2rem]' />
                            </a>
                            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="https://x.com/Affilitech_AS?t=6eu8A8o3ur95Sub6xCCmTA&s=08" target='_blank'>
                                <FaXTwitter className='text-[1.2rem]' />
                            </a>
                            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="https://www.linkedin.com/company/affilitechsolutions/" target='_blank'>
                                <FaLinkedinIn className='text-[1.2rem]' />
                            </a>
                            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="https://www.instagram.com/affilitechsolutions?igsh=MWdoc245aWE4bDF3aA==" target='_blank'>
                                <FaInstagram className='text-[1.2rem]' />
                            </a>
                        </div>
                    </div>
                    <div className="contact-dets font-semibold text-[0.9rem] mt-3">
                        <div className="mail-link-container flex items-center gap-2">
                            <MdMailOutline className='text-[1.1rem]' />
                            <a className='text-orange-600 flex items-center gap-1' href="mailto:info@affilitechsolutions.com">info@affilitechsolutions.com <FiExternalLink /></a>
                        </div>
                        <div className="mail-link-container flex items-center gap-2">
                            <MdSmartphone className='text-[1.1rem]' />
                            <span className='text-[0.85rem]'>+91 6295255260</span>
                        </div>
                    </div>
                </div>
                <div className="contact-form lg:w-[40%]">
                    <form className='w-full' action="">
                        <div className="inp-container w-full font-medium">
                            <label className='text-[0.9rem]' htmlFor="email-inp">Email</label>
                            <input className='w-full py-1.5 border-b border-zinc-900 outline-0' type="email" id='email-inp' />
                        </div>
                        <div className="inp-container w-full font-medium mt-3">
                            <textarea className='w-full py-1.5 border-b border-zinc-900 outline-0 resize-none placeholder:text-zinc-900' rows={6} id='msg-inp' placeholder='Write your message here'></textarea>
                        </div>
                        <button className='px-16 lg:px-20 py-2.5 lg:py-3 rounded-full bg-[#FF6411] text-black font-semibold mt-3'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact