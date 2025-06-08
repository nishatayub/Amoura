import { Link } from 'react-router-dom'

const Navbar = () => {
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
          <div className="flex gap-3">
            <Link to="/login">
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar 