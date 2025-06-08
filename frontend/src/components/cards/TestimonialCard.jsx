const TestimonialCard = ({ avatar, name, country, rating, text }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col p-8 text-left border border-white/20 hover:border-[#DF804D]/50 hover:shadow-[0_8px_32px_rgba(223,128,77,0.3)] transition-all duration-500 group hover:scale-105">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative group-hover:scale-110 transition-transform duration-300">
        <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-[#DF804D]/50 shadow-lg" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#DF804D]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div>
        <div className="font-serif font-bold text-xl bg-gradient-to-r from-[#DF804D] to-[#5d4406] bg-clip-text text-transparent">{name}</div>
        <div className="text-sm text-[#F2EBD9]/70 font-medium">{country}</div>
      </div>
    </div>
    <div className="flex items-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-[#DF804D] text-xl mr-1 drop-shadow-sm">★</span>
      ))}
    </div>
    <p className="text-[#F2EBD9] text-base leading-relaxed font-light">{text}</p>
  </div>
)

export default TestimonialCard 