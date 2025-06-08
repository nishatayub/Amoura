import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Login form submitted:', { ...formData, rememberMe })
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B4B67] via-[#5C3A4C] to-[#4A2C3A] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-[#F2EBD9] mb-2">Amoura</h1>
          <p className="text-[#F2EBD9]/80">Welcome back to your floral journey</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-2">Sign In</h2>
            <p className="text-[#F2EBD9]/70 text-sm">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D] focus:ring-2 focus:ring-[#DF804D]/20 transition-all duration-300"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-[#F2EBD9]/80 text-sm">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 rounded border-white/30 bg-white/20 text-[#DF804D] focus:ring-[#DF804D]/20"
                />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-[#DF804D] hover:text-[#DF804D]/80 text-sm font-medium transition-colors duration-300"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#DF804D] to-[#632111] text-white py-3 rounded-lg font-bold hover:from-[#632111] hover:to-[#DF804D] transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-[#F2EBD9]/60">or</span>
              </div>
            </div>

            {/* Social Login Options */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full bg-white/10 border border-white/30 text-[#F2EBD9] py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-[#F2EBD9]/70 text-sm">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-[#DF804D] hover:text-[#DF804D]/80 font-medium transition-colors duration-300"
              >
                Sign up here
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

export default Login
