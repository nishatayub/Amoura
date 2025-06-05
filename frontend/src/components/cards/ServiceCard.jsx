const ServiceCard = ({ image, title, link }) => (
  <div className="bg-[#2a4637] rounded-2xl shadow-lg flex flex-col items-center p-6 text-center">
    <img src={image} alt={title} className="w-28 h-28 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-serif font-bold text-[#e6cfa7] mb-4">{title}</h3>
    <a href={link} className="mt-auto bg-[#4b2e83] text-[#e6cfa7] px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-[#bfae8e] hover:text-[#2a4637] transition-all">
      Explore <span className="ml-1">→</span>
    </a>
  </div>
)

export default ServiceCard 