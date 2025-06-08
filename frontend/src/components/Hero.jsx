import { useState } from 'react'
import heroImage from '../assets/bgimg.png'

const Hero = ({ userType, onUserTypeChange, authType, showAuth }) => {
  const [formData, setFormData] = useState({
    // Common fields
    email: '',
    password: '',
    confirmPassword: '',
    // Customer fields
    firstName: '',
    lastName: '',
    phone: '',
    // Seller fields
    businessName: '',
    businessAddress: '',
    website: '',
    description: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleUserTypeToggle = (type) => {
    onUserTypeChange(type)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const submitData = {
      userType,
      ...formData
    }
    
    console.log('Form submitted:', submitData)
    // Add form submission logic here
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-20 pb-8 bg-transparent overflow-hidden">
      <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="w-full max-w-6xl mx-auto px-4 text-center">
          
          {/* Main Container with Blurry Background - Welcome & Advanced Signup Form Layout */}
          <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl border border-white/20 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-8 transition-all duration-700 ${
            userType === 'customer' 
              ? 'bg-gradient-to-br from-blue-500/5 to-purple-500/5' 
              : 'bg-gradient-to-br from-orange-500/5 to-red-500/5'
          }`}>
            
            {/* Left Side - Welcome Content */}
            <div className="flex-1 text-center lg:text-left lg:pr-8 mb-6 lg:mb-0">
              {/* Mode Indicator */}
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4 border border-white/20">
                <span className="text-[#F2EBD9]/80 text-sm font-medium">
                  {userType === 'customer' ? 'Customer Experience' : 'Seller Experience'}
                </span>
              </div>
              
              <h1 className="font-serif font-bold leading-tight mb-4">
                <span className="block text-lg md:text-xl lg:text-2xl text-[#F2EBD9]/80 drop-shadow-lg font-normal">Welcome to</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent mt-2 tracking-wide drop-shadow-xl">
                  Amoura
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-[#F2EBD9]/85 font-medium leading-relaxed mb-4 lg:mb-6 transition-all duration-500">
                {userType === 'customer' 
                  ? "Join our floral marketplace and discover the perfect blooms for every moment. Browse premium arrangements, enjoy same-day delivery, and create unforgettable memories."
                  : "Start your floral business journey with Amoura! Reach thousands of customers, grow your sales, and showcase your beautiful arrangements on our trusted platform."
                }
              </p>
              
              {/* Dynamic Benefits */}
              <div className="hidden lg:block space-y-3 text-left">
                {userType === 'customer' ? (
                  <div className="space-y-3 animate-fadeInUp">
                    <div className="flex items-center gap-3 text-[#F2EBD9]/80 text-sm">
                      <span>Premium quality flowers from trusted sellers</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F2EBD9]/80 text-sm">
                      <span>Same-day delivery in most areas</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F2EBD9]/80 text-sm">
                      <span>Perfect for gifts and special occasions</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F2EBD9]/80 text-sm">
                      <span>Curated collections for every budget</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 animate-fadeInUp">
                    <div className="flex items-center gap-3 text-[#F2EBD9]/80 text-sm">
                      <span>Grow your business with our seller platform</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F2EBD9]/80 text-sm">
                      <span>Reach thousands of potential customers</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F2EBD9]/80 text-sm">
                      <span>Professional tools and analytics</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F2EBD9]/80 text-sm">
                      <span>Dedicated seller support team</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Advanced Signup Form */}
            <div className="flex-1 max-w-md w-full lg:max-w-lg xl:max-w-md">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {/* Header */}
                <div className="text-center mb-4">
                  <h2 className="text-xl font-serif font-bold text-[#F2EBD9] mb-1">
                    {showAuth && authType === 'login' ? 'Welcome Back' : 'Get Started'}
                  </h2>
                  <p className="text-[#F2EBD9]/70 text-xs">
                    {showAuth && authType === 'login' 
                      ? 'Sign in to your account to continue' 
                      : 'Create your account and join our community'
                    }
                  </p>
                </div>

                {/* Animated Toggle Switcher */}
                <div className="relative bg-white/10 rounded-full p-1 mb-4 border border-white/20">
                  <div 
                    className={`absolute top-1 h-8 bg-gradient-to-r from-[#DF804D] to-[#632111] rounded-full transition-all duration-500 ease-in-out ${
                      userType === 'customer' ? 'left-1 w-[calc(50%-4px)]' : 'right-1 w-[calc(50%-4px)]'
                    }`}
                  ></div>
                  <div className="relative z-10 flex">
                    <button
                      type="button"
                      onClick={() => handleUserTypeToggle('customer')}
                      className={`flex-1 py-2 px-4 text-sm font-semibold transition-all duration-300 rounded-full ${
                        userType === 'customer' 
                          ? 'text-white' 
                          : 'text-[#F2EBD9]/70 hover:text-[#F2EBD9]'
                      }`}
                    >
                      Customer
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUserTypeToggle('seller')}
                      className={`flex-1 py-2 px-4 text-sm font-semibold transition-all duration-300 rounded-full ${
                        userType === 'seller' 
                          ? 'text-white' 
                          : 'text-[#F2EBD9]/70 hover:text-[#F2EBD9]'
                      }`}
                    >
                      Seller
                    </button>
                  </div>
                </div>

                {/* Dynamic Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Login Form */}
                  {showAuth && authType === 'login' ? (
                    <div className="space-y-3 transition-all duration-700 ease-in-out animate-fadeInUp">
                      {/* Email */}
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                        required
                      />
                      
                      {/* Password */}
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                        required
                      />
                      
                      {/* Remember Me & Forgot Password */}
                      <div className="flex items-center justify-between text-xs">
                        <label className="flex items-center text-[#F2EBD9]/80">
                          <input
                            type="checkbox"
                            className="mr-2 w-3 h-3 rounded border-white/30 bg-white/20 text-[#DF804D]"
                          />
                          Remember me
                        </label>
                        <span className="text-[#DF804D] cursor-pointer hover:underline">
                          Forgot password?
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Signup Forms */
                    <>
                      {/* Customer Form */}
                      {userType === 'customer' && (
                    <div className="space-y-3 transition-all duration-700 ease-in-out animate-fadeInUp">
                      {/* First Row - 2 Column Layout */}
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                          required
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                          required
                        />
                      </div>
                      
                      {/* Email */}
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                        required
                      />
                      
                      {/* Phone */}
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                        required
                      />
                      
                      {/* Password Row - 2 Column Layout */}
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                          required
                        />
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Seller Form */}
                  {userType === 'seller' && (
                    <div className="space-y-3 transition-all duration-700 ease-in-out animate-fadeInUp">
                      {/* Business Name */}
                      <input
                        type="text"
                        name="businessName"
                        placeholder="Business Name"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                        required
                      />
                      
                      {/* Email & Website - 2 Column Layout */}
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Business Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                          required
                        />
                        <input
                          type="url"
                          name="website"
                          placeholder="Website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                        />
                      </div>
                      
                      {/* Business Address */}
                      <input
                        type="text"
                        name="businessAddress"
                        placeholder="Business Address"
                        value={formData.businessAddress}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                        required
                      />
                      
                      {/* Password Row - 2 Column Layout */}
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                          required
                        />
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm"
                          required
                        />
                      </div>
                      
                      {/* Business Description - Compact */}
                      <textarea
                        name="description"
                        placeholder="Brief business description (optional)"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:bg-white/25 transition-all duration-300 text-sm resize-none"
                      />
                    </div>
                  )}
                    </>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#DF804D] to-[#632111] text-white py-2.5 rounded-lg font-bold hover:from-[#632111] hover:to-[#DF804D] hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mt-4"
                  >
                    {showAuth && authType === 'login' 
                      ? 'Sign In' 
                      : (userType === 'seller' ? 'Start Selling' : 'Join Amoura')
                    }
                  </button>
                </form>
                
                {/* Footer */}
                <p className="text-center text-white/60 text-xs mt-4">
                  {showAuth && authType === 'login' 
                    ? (
                      <>
                        Don't have an account? <span className="text-[#DF804D] cursor-pointer hover:underline">Sign Up</span>
                      </>
                    ) 
                    : (
                      <>
                        Already have an account? <span className="text-[#DF804D] cursor-pointer hover:underline">Sign In</span>
                      </>
                    )
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#DF804D]/50 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#F2EBD9]/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#632111]/60 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#AFAB9F]/50 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  )
}

export default Hero
