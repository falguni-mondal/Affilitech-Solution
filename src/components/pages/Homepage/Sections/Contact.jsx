import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
    return (
        <section className='w-full mt-[20vh] bg-zinc-200 p-10 rounded-3xl' id='contact-section'>
            <div className="flex justify-between mt-10 w-full">
                <div className="left-contact w-[40%]">
                    <h2 className='text-[3rem] font-semibold leading-none tracking-tight mb-3'>Lets<span className='block p-0 m-0 text-[5rem] font-semibold leading-[5rem] tracking-tight prime-txt'>#Talk</span></h2>
                    <div className="contact-txt mb-3">
                        feel free to connect with us. We believe that
                        communication always leads to better outcomes and
                        that is all we wish and work for our clients.
                    </div>
                    <div className="contact-links flex items-center gap-5">
                        <p className='flex items-center gap-2 text-[1.3rem] font-semibold'>Contact Us <HiArrowLongRight className='text-[2rem] text-[#f0550d]' /></p>
                        <div className="contact-links-container flex gap-2">
                            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="#" target='_blank'>
                                <FaFacebookF className='text-[1.2rem]' />
                            </a>
                            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="#" target='_blank'>
                                <FaXTwitter className='text-[1.2rem]' />
                            </a>
                            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="#" target='_blank'>
                                <FaLinkedinIn className='text-[1.2rem]' />
                            </a>
                            <a className='w-[2rem] h-[2rem] border border-zinc-500 rounded-full flex justify-center items-center hover:bg-[#f0550d] hover:border-zinc-200 transition-all duration-300' href="#" target='_blank'>
                                <FaInstagram className='text-[1.2rem]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-form w-[40%]">
                    <form className='w-full' action="">
                        <div className="inp-container w-full font-medium">
                            <label className='text-[0.9rem]' htmlFor="email-inp">Email</label>
                            <input className='w-full py-1.5 border-b border-zinc-900 outline-0' type="email" id='email-inp' />
                        </div>
                        <div className="inp-container w-full font-medium mt-3">
                            <textarea className='w-full py-1.5 border-b border-zinc-900 outline-0 resize-none placeholder:text-zinc-900' rows={6} id='msg-inp' placeholder='Write your message here'></textarea>
                        </div>
                        <button className='px-20 py-3 rounded-full bg-[#f0550d] text-black font-semibold mt-3'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact