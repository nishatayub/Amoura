const ServiceCard = ({ image, title, description, icon, link }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center transition-all duration-500 border border-white/20 hover:scale-105 hover:shadow-2xl hover:bg-white/15 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#DF804D]/10 via-transparent to-[#F2EBD9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="relative mb-6">
        <img src={image} alt={title} className="w-32 h-32 object-cover rounded-2xl mx-auto shadow-lg border-2 border-white/30 group-hover:border-[#DF804D]/50 transition-all duration-300" />
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#DF804D] to-[#632111] rounded-full flex items-center justify-center text-sm shadow-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#DF804D] transition-colors duration-300">{title}</h3>
      <p className="text-white/80 text-base mb-8 leading-relaxed">{description}</p>
      <a 
        href={link} 
        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#DF804D] to-[#632111] text-white px-8 py-3 rounded-full font-semibold hover:from-[#632111] hover:to-[#DF804D] hover:scale-105 transition-all duration-300 shadow-lg group/btn"
      >
        <span>Explore</span> 
        <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
      </a>
    </div>
  </div>
)

export default ServiceCard 