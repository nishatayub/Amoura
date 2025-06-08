const Footer = () => (
  <footer className="bg-transparent text-[#F2EBD9] pt-16 pb-8 px-4 mt-auto relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjJFQkQ5IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
    
    <div className="relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* About */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#DF804D]/30 transition-all duration-300">
          <h3 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">AMOURA</h3>
          <p className="text-[#F2EBD9]/80 leading-relaxed">
            At Amoura, we believe flowers aren't just gifts — they're emotions, wrapped in petals and sent with love. From quiet apologies to grand gestures, every bouquet holds a moment that matters.
          </p>
        </div>
        
        {/* Links */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#DF804D]/30 transition-all duration-300">
          <h3 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#about" className="hover:text-[#DF804D] transition-all duration-300 text-[#F2EBD9]/80 hover:translate-x-2 inline-block">About Us</a></li>
            <li><a href="#privacy" className="hover:text-[#DF804D] transition-all duration-300 text-[#F2EBD9]/80 hover:translate-x-2 inline-block">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-[#DF804D] transition-all duration-300 text-[#F2EBD9]/80 hover:translate-x-2 inline-block">Terms and Conditions</a></li>
          </ul>
        </div>
        
        {/* Contact */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#DF804D]/30 transition-all duration-300">
          <h3 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Connect With Us</h3>
          <div className="flex gap-4 mb-6">
            <a href="#" aria-label="Instagram" className="w-12 h-12 bg-gradient-to-br from-[#DF804D]/20 to-[#632111]/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:from-[#DF804D] hover:to-[#632111] hover:scale-110 transition-all duration-300 text-xl border border-white/20">🌐</a>
            <a href="#" aria-label="Pinterest" className="w-12 h-12 bg-gradient-to-br from-[#DF804D]/20 to-[#632111]/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:from-[#DF804D] hover:to-[#632111] hover:scale-110 transition-all duration-300 text-xl border border-white/20">📷</a>
            <a href="#" aria-label="Facebook" className="w-12 h-12 bg-gradient-to-br from-[#DF804D]/20 to-[#632111]/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:from-[#DF804D] hover:to-[#632111] hover:scale-110 transition-all duration-300 text-xl border border-white/20">📱</a>
          </div>
          <div className="text-[#F2EBD9]/80 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#DF804D]">✉</span>
              <span>amoura@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#DF804D]">📞</span>
              <span>+92 XXX YYY ZZZZ</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-[#F2EBD9]/60 border-t border-white/10 pt-8">
        <p className="font-light">All Rights Reserved. &copy; copyright 2025 <span className="text-sm">🌸</span></p>
      </div>
    </div>
  </footer>
)

export default Footer 