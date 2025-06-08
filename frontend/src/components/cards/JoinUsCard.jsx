const JoinUsCard = ({ image, title, button, link, subtitle, description, features, icon }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col p-8 border border-white/20 hover:border-[#DF804D]/50 hover:shadow-[0_8px_32px_rgba(223,128,77,0.3)] transition-all duration-500 group hover:scale-[1.02] h-full">
    
    {/* Header with icon and title */}
    <div className="text-center mb-6">
      <div className="text-4xl mb-3 group-hover:animate-bounce">{icon}</div>
      <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent mb-2">
        {title}
      </h3>
      <p className="text-lg font-medium text-[#DF804D] mb-3">{subtitle}</p>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>

    {/* Image */}
    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-2xl border-2 border-[#DF804D]/30 shadow-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#DF804D]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Features list */}
    <div className="mb-8 flex-grow">
      <h4 className="text-lg font-semibold text-[#DF804D] mb-4 text-center">What You Get:</h4>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-700">
            <span className="w-2 h-2 bg-[#DF804D] rounded-full flex-shrink-0"></span>
            <span className="font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Action button */}
    <div className="text-center mt-auto">
      <a 
        href={link} 
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DF804D] to-[#632111] text-[#F2EBD9] px-8 py-3 rounded-full font-semibold hover:from-[#632111] hover:to-[#DF804D] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:animate-pulse"
      >
        <span>{button}</span>
        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  </div>
)

export default JoinUsCard 