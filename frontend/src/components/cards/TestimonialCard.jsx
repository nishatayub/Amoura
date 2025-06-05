const TestimonialCard = ({ avatar, name, country, rating, text }) => (
  <div className="bg-[#2a4637] rounded-2xl shadow-lg flex flex-col p-6 text-left text-[#e6cfa7]">
    <div className="flex items-center gap-4 mb-3">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-[#bfae8e]" />
      <div>
        <div className="font-serif font-bold text-lg">{name}</div>
        <div className="text-xs text-[#bfae8e]">{country}</div>
      </div>
    </div>
    <div className="flex items-center mb-2">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-[#ffd700] text-lg">★</span>
      ))}
    </div>
    <p className="text-[#e6cfa7] text-base">{text}</p>
  </div>
)

export default TestimonialCard 