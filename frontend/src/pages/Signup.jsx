import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [userType, setUserType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signup form submitted:', { userType, ...formData })
    // Handle signup logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B4B67] via-[#5C3A4C] to-[#4A2C3A] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-[#F2EBD9] mb-2">Amoura</h1>
          <p className="text-[#F2EBD9]/80">Begin your floral journey with us</p>
        </div>

        {/* Signup Form Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          {!userType ? (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-2">Join Amoura</h2>
                <p className="text-[#F2EBD9]/70 text-sm">Choose how you'd like to join our community</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setUserType('customer')}
                  className="w-full bg-white/10 border border-white/30 rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">🛍️</span>
                    <div>
                      <h3 className="text-[#F2EBD9] font-semibold text-lg">Customer</h3>
                      <p className="text-[#F2EBD9]/70 text-sm">Browse and purchase beautiful flowers</p>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setUserType('seller')}
                  className="w-full bg-white/10 border border-white/30 rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">🏪</span>
                    <div>
                      <h3 className="text-[#F2EBD9] font-semibold text-lg">Seller</h3>
                      <p className="text-[#F2EBD9]/70 text-sm">Start your floral business with us</p>
                    </div>
                  </div>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setUserType('')}
                  className="text-[#F2EBD9]/70 hover:text-[#F2EBD9] text-sm"
                >
                  ← Back
                </button>
                <span className="text-[#F2EBD9]/80 text-sm">
                  {userType === 'customer' ? '🛍️ Customer' : '🏪 Seller'} Registration
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-[#F2EBD9] text-sm font-medium mb-2">
                    {userType === 'customer' ? 'Full Name' : 'Business Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={userType === 'customer' ? "Enter your full name" : "Enter your business name"}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:ring-2 focus:ring-[#DF804D]/20 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-[#F2EBD9] text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:ring-2 focus:ring-[#DF804D]/20 transition-all duration-300"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-[#F2EBD9] text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:ring-2 focus:ring-[#DF804D]/20 transition-all duration-300"
                    required
                  />
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-[#F2EBD9] text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:ring-2 focus:ring-[#DF804D]/20 transition-all duration-300"
                    required
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 rounded border-white/30 bg-white/20 text-[#DF804D] focus:ring-[#DF804D]/20"
                  />
                  <label htmlFor="terms" className="text-[#F2EBD9]/80 text-sm">
                    I agree to the{' '}
                    <Link to="/terms" className="text-[#DF804D] hover:text-[#DF804D]/80 transition-colors duration-300">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-[#DF804D] hover:text-[#DF804D]/80 transition-colors duration-300">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#DF804D] to-[#632111] text-white py-3 rounded-lg font-bold hover:from-[#632111] hover:to-[#DF804D] transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  {userType === 'customer' ? 'Join as Customer' : 'Start Selling'}
                </button>
              </form>
            </>
          )}

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-[#F2EBD9]/70 text-sm">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[#DF804D] hover:text-[#DF804D]/80 font-medium transition-colors duration-300"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6 text-[#F2EBD9]/60 text-sm">
            <Link to="/privacy" className="hover:text-[#F2EBD9] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#F2EBD9] transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/help" className="hover:text-[#F2EBD9] transition-colors duration-300">
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
