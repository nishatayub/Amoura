import { useState } from 'react'

const BouquetCard = ({ bouquet, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-[#183127] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full flex flex-col border border-[#2a4637] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={bouquet.image} 
          alt={bouquet.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 transition-opacity duration-300">
            <button className="bg-[#c41e3a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a81a32] transition-colors shadow-lg">
              Quick View
            </button>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-[#e6cfa7] mb-2 tracking-wide">{bouquet.name}</h3>
        <p className="text-[#bfae8e] text-base mb-4 flex-grow">{bouquet.description}</p>
        <div className="flex justify-between items-center flex-wrap gap-4 mt-auto">
          <span className="text-xl font-bold text-[#f7c873] font-serif">${bouquet.price}</span>
          <button 
            onClick={onAddToCart}
            className="bg-[#c41e3a] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a81a32] transition-colors whitespace-nowrap shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default BouquetCard 