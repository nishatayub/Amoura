import Navbar from '../components/layout/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import JoinUs from '../components/JoinUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/layout/Footer'

const LandingPage = () => {
  return (
    <div className="bg-[#10231b] min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <JoinUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingPage 