import { useEffect, useRef, useState } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Navbar from './components/Navbar/Navbar'
import Router from './router/Router'
import { IoMdArrowUp } from "react-icons/io";
import { gsap } from 'gsap';
import NavbarMobile from './components/Navbar/NavbarMobile';
import MobileNavMenu from './components/Navbar/MobileNavMenu';
// import SmoothScrolling from './components/utils/SmoothScrolling';
// import Homepage from './components/pages/Homepage/Homepage';

const App = () => {
  const topLinkRef = useRef(null);
  const [navReveal, setNavReveal] = useState(false);

  useEffect(() => {
    if (topLinkRef.current) {
      gsap.from(topLinkRef.current, {
        y: "20vh",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: topLinkRef.current,
          start: "top 20%",
          end: "top 0%",
          scrub: 1,
        },
      })
    }

  }, [])

  return (
    <div className='container w-full h-fit relative'>
      <div className='hidden lg:block fixed bottom-5 right-10 rounded-md z-[9999] text-orange-500' ref={topLinkRef}>
        <a className='flex items-center gap-1 py-3 px-4 rounded-md bg-zinc-900' href="#hero-section">Top <IoMdArrowUp /></a>
      </div>
      <LoadingScreen />
      <Navbar />
      <MobileNavMenu navReveal={navReveal} setNavReveal={setNavReveal} />
      <NavbarMobile navReveal={navReveal} setNavReveal={setNavReveal} />
      <Router />
    </div>
  )
}

export default App