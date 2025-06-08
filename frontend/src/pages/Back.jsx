import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const Back = () => {
  const [authType, setAuthType] = useState('login') // 'login' or 'signup'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  })
  const [rememberMe, setRememberMe] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (authType === 'signup') {
      // Validate password confirmation
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!')
        return
      }
      console.log('Signup form submitted:', { 
        fullName: formData.fullName,
        email: formData.email, 
        password: formData.password 
      })
      // Handle signup logic here
    } else {
      console.log('Login form submitted:', { 
        email: formData.email, 
        password: formData.password, 
        rememberMe 
      })
      // Handle login logic here
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#8B4B67] via-[#5C3A4C] to-[#4A2C3A] flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-lg">
          {/* Logo Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-serif font-bold text-[#F2EBD9]">Amoura</h1>
            <p className="text-[#F2EBD9]/80 text-sm">Welcome to your floral journey</p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex mb-6 bg-white/10 rounded-lg p-1 backdrop-blur-md border border-white/20">
            <button
              onClick={() => setAuthType('login')}
              className={`flex-1 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                authType === 'login'
                  ? 'bg-[#DF804D] text-white shadow-lg'
                  : 'text-[#F2EBD9]/80 hover:text-[#F2EBD9]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthType('signup')}
              className={`flex-1 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                authType === 'signup'
                  ? 'bg-[#DF804D] text-white shadow-lg'
                  : 'text-[#F2EBD9]/80 hover:text-[#F2EBD9]'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Auth Form Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
          <div className="mb-4">
            <h2 className="text-xl font-serif font-bold text-[#F2EBD9] mb-2">
              {authType === 'login' ? 'Sign In' : 'Create Account'}
            </h2>
            <p className="text-[#F2EBD9]/70 text-sm">
              {authType === 'login' 
                ? 'Enter your credentials to access your account' 
                : 'Join us and start your floral journey today'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input - Only for Signup */}
            {authType === 'signup' && (
              <div>
                <label htmlFor="fullName" className="block text-[#F2EBD9] text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] transition-all"
                  required
                />
              </div>
            )}
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
                className="w-full px-4 py-3 text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] transition-all"
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] transition-all"
                required
              />
            </div>

            {/* Confirm Password Input - Only for Signup */}
            {authType === 'signup' && (
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
                  className="w-full px-4 py-3 text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] transition-all"
                  required
                />
              </div>
            )}

            {/* Remember Me & Forgot Password - Only for Login */}
            {authType === 'login' && (
              <div className="flex items-center justify-between">
                <label className="flex items-center text-[#F2EBD9]/80 text-sm">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2 w-4 h-4 rounded border-white/30 bg-white/20 text-[#DF804D]"
                  />
                  Remember me
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[#DF804D] hover:text-[#DF804D]/80 transition-colors text-sm"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#DF804D] to-[#632111] text-white py-3 rounded-lg font-bold hover:from-[#632111] hover:to-[#DF804D] transition-all text-base"
            >
              {authType === 'login' ? 'Sign In' : 'Create Account'}
            </button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-[#F2EBD9]/60">or</span>
              </div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full bg-white/10 border border-white/30 text-[#F2EBD9] py-3 rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3 text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <div className="flex justify-center space-x-6 text-[#F2EBD9]/60 text-sm">
            <Link to="/privacy" className="hover:text-[#F2EBD9] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#F2EBD9] transition-colors">
              Terms of Service
            </Link>
            <Link to="/help" className="hover:text-[#F2EBD9] transition-colors">
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Back