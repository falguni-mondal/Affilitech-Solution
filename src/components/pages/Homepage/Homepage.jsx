import Hero from './Sections/Hero'
import HomeMarquee from './Marquee/HomeMarquee'
import About from './Sections/About'

const Homepage = () => {
  return (
    <div className='w-full' id='homepage'>
        <Hero/>
        <HomeMarquee/>
        <About/>
    </div>
  )
}

export default Homepage