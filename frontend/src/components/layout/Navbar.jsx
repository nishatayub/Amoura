import { Link } from 'react-router-dom'

const Navbar = ({ authType, setAuthType, setShowAuth }) => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <Link to="/">
              <span className="text-3xl font-serif font-bold tracking-wide bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
                AMOURA
              </span>
            </Link>
          </div>
          <div className="flex gap-8 text-base font-medium">
            <Link to="/" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
              Home
            </Link>
            <a href="#products" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
              Products
            </a>
            <a href="#services" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
              Services
            </a>
            <a href="#about" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="#contact" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
              Contact
            </a>
          </div>
          
          {/* Auth Toggle Buttons - Same UI as Hero section */}
          <div className="relative bg-white/10 rounded-full p-1 backdrop-blur-md border border-white/20 min-w-[140px]">
            <div 
              className={`absolute top-1 h-8 bg-gradient-to-r from-[#DF804D] to-[#632111] rounded-full transition-all duration-500 ease-in-out ${
                authType === 'login' ? 'left-1 w-[calc(50%-4px)]' : 'right-1 w-[calc(50%-4px)]'
              }`}
            ></div>
            <div className="relative z-10 flex">
              <button
                onClick={() => {
                  setAuthType('login')
                  setShowAuth(true)
                }}
                className={`flex-1 py-2 px-3 text-xs font-semibold transition-all duration-300 rounded-full whitespace-nowrap ${
                  authType === 'login' 
                    ? 'text-white' 
                    : 'text-[#F2EBD9]/70 hover:text-[#F2EBD9]'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setAuthType('signup')
                  setShowAuth(true)
                }}
                className={`flex-1 py-2 px-3 text-xs font-semibold transition-all duration-300 rounded-full whitespace-nowrap ${
                  authType === 'signup' 
                    ? 'text-white' 
                    : 'text-[#F2EBD9]/70 hover:text-[#F2EBD9]'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar 