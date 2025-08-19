import Hero from './Sections/Hero'
import HomeMarquee from './Marquee/HomeMarquee'
import About from './Sections/About'
import Services from './Sections/Services/Services'
import Impact from './Sections/Impact'
import Testimonials from './Sections/Testimonials'
import BrandMarquees from './Sections/BrandMarquees'
import PinMarquee from './Sections/PinMarquee'
import Playful from './Sections/Playful'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const Homepage = () => {
  return (
    <div className='w-full' id='homepage'>
        <Hero />
        <HomeMarquee />
        <About />
        <Services />
        <Impact />
        <Testimonials />
        <BrandMarquees />
        {/* <Playful /> */}
        <PinMarquee />
        <Contact />
        <Footer />
    </div>
  )
}

export default Homepage