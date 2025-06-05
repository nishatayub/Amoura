const Navbar = () => (
  <header className="w-full fixed top-0 left-0 z-50 bg-[#10231bcc]/80 backdrop-blur-md">
    <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-serif font-bold tracking-wide text-[#e6cfa7]">AMOURA</span>
      </div>
      <div className="flex gap-8 text-base font-medium text-[#e6cfa7]">
        <a href="#about" className="hover:text-[#bfae8e] transition-colors">About Us</a>
        <a href="#contact" className="hover:text-[#bfae8e] transition-colors">Contact Us</a>
        <a href="#delivery" className="hover:text-[#bfae8e] transition-colors">Delivery Options</a>
        <a href="#services" className="hover:text-[#bfae8e] transition-colors">Services</a>
      </div>
      <div>
        <button className="bg-[#2a4637] text-[#e6cfa7] px-5 py-2 rounded-full font-semibold border border-[#bfae8e] hover:bg-[#bfae8e] hover:text-[#2a4637] transition-all">Login</button>
      </div>
    </nav>
  </header>
)

export default Navbar 