import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/Hero'
import AboutStory from '../components/AboutStory'
import Services from '../components/Services'
import PopularProducts from '../components/PopularProducts'
import InstagramGallery from '../components/InstagramGallery'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import FAQ from '../components/FAQ'
import PackagingInfo from '../components/PackagingInfo'
import SellerBenefits from '../components/SellerBenefits'
import SellerOnboarding from '../components/SellerOnboarding'
import SellerTestimonials from '../components/SellerTestimonials'
import SellerResources from '../components/SellerResources'
import SellerFAQ from '../components/SellerFAQ'
import Footer from '../components/layout/Footer'

const LandingPage = () => {
  const [userType, setUserType] = useState('customer')

  return (
    <div className="bg-gradient-to-b from-[#632111] via-[#a49c83] to-[#632111] min-h-screen flex flex-col">
      <Navbar />
      <Hero userType={userType} onUserTypeChange={setUserType} />
      
      {/* Content sections with smooth transitions */}
      <div className="relative">
        {/* Scroll Indicator */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
            <span className="text-[#F2EBD9]/80 text-sm font-medium">
              {userType === 'customer' ? 'Customer Content' : 'Seller Content'}
            </span>
            <div className="w-1 h-1 bg-[#DF804D] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Customer-focused sections */}
        {userType === 'customer' && (
          <div className="transition-all duration-700 ease-in-out animate-fadeInUp">
            <AboutStory />
            <PopularProducts />
            <Services />
            <InstagramGallery />
            <Testimonials />
            <PackagingInfo />
            <FAQ />
          </div>
        )}

        {/* Seller-focused sections */}
        {userType === 'seller' && (
          <div className="transition-all duration-700 ease-in-out animate-fadeInUp">
            <SellerBenefits />
            <SellerOnboarding />
            <SellerTestimonials />
            <SellerResources />
            <SellerFAQ />
          </div>
        )}
      </div>

      {/* Common sections that always show */}
      <Newsletter />

      <Footer />
    </div>
  )
}

export default LandingPage 