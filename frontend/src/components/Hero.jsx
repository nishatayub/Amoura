import heroImage from '../assets/img1.jpg'

const Hero = () => (
  <section className="relative flex items-center justify-center h-[60vh] md:h-[70vh] text-center overflow-hidden mt-16">
    <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-70" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#10231bcc] to-[#10231b99]" />
    <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
        Every bouquet tells a story<br />
        <span className="text-[#6bbf59]">—let <span className="tracking-widest">AMOURA</span> whisper yours.</span>
      </h1>
      <button className="mt-6 bg-[#2a4637] text-[#e6cfa7] px-8 py-3 rounded-full text-lg font-semibold border border-[#bfae8e] hover:bg-[#bfae8e] hover:text-[#2a4637] transition-all shadow-lg">
        Get Started
      </button>
    </div>
  </section>
)

export default Hero 