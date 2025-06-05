const Footer = () => (
  <footer className="bg-[#4b2e83] text-[#e6cfa7] pt-12 pb-4 px-4 mt-auto">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {/* About */}
      <div>
        <h3 className="text-lg font-serif font-bold mb-2 text-[#f7c873]">AMOURA</h3>
        <p className="text-sm text-[#e6cfa7]">
          At Amoura, we believe flowers aren't just gifts — they're emotions, wrapped in petals and sent with love. From quiet apologies to grand gestures, every bouquet holds a moment that matters.
        </p>
      </div>
      {/* Links */}
      <div>
        <h3 className="text-lg font-serif font-bold mb-2 text-[#f7c873]">Links</h3>
        <ul className="space-y-1">
          <li><a href="#about" className="hover:text-[#bfae8e] transition-colors">About Us</a></li>
          <li><a href="#privacy" className="hover:text-[#bfae8e] transition-colors">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-[#bfae8e] transition-colors">Terms and Conditions</a></li>
        </ul>
      </div>
      {/* Contact */}
      <div>
        <h3 className="text-lg font-serif font-bold mb-2 text-[#f7c873]">Contact Us</h3>
        <div className="flex gap-3 mb-2">
          <a href="#" aria-label="Instagram" className="hover:text-[#bfae8e] transition-colors text-xl">&#x1F30D;</a>
          <a href="#" aria-label="Pinterest" className="hover:text-[#bfae8e] transition-colors text-xl">&#x1F4F7;</a>
          <a href="#" aria-label="Facebook" className="hover:text-[#bfae8e] transition-colors text-xl">&#x1F4F1;</a>
        </div>
        <div className="text-sm">amoura@example.com<br />+92 XXX YYY ZZZZ</div>
      </div>
    </div>
    <div className="text-center text-xs text-[#bfae8e] border-t border-[#bfae8e]/20 pt-4">
      All Rights Reserved. &copy; copyright 2025
    </div>
  </footer>
)

export default Footer 