import { useRef, useState } from 'react'
import product1 from '../assets/flower.jpg'
import product2 from '../assets/bouquet.jpg'
import product3 from '../assets/vase.jpg'

// 12 unique flower products, using available images in rotation
const products = [
  { 
    name: 'Spring Daisy Bouquet', 
    image: product1, 
    price: '$24.99', 
    originalPrice: '$29.99',
    recentlyBought: 12,
    rating: 4.8,
    reviews: 156,
    description: 'Fresh white daisies with baby\'s breath',
    availability: 'In Stock',
    deliveryTime: '2-3 days',
    category: 'Bouquet'
  },
  { 
    name: 'Pastel Rose Mix', 
    image: product2, 
    price: '$34.99', 
    originalPrice: '$39.99',
    recentlyBought: 8,
    rating: 4.9,
    reviews: 203,
    description: 'Soft pink and white roses with eucalyptus',
    availability: 'In Stock',
    deliveryTime: '1-2 days',
    category: 'Premium'
  },
  { 
    name: 'Elegant Vase Set', 
    image: product3, 
    price: '$29.99', 
    originalPrice: '$34.99',
    recentlyBought: 15,
    rating: 4.7,
    reviews: 89,
    description: 'Ceramic vase with seasonal flower arrangement',
    availability: 'Limited Stock',
    deliveryTime: '3-4 days',
    category: 'Vase Set'
  },
  { 
    name: 'Sunshine Tulips', 
    image: product1, 
    price: '$19.99', 
    originalPrice: '$24.99',
    recentlyBought: 5,
    rating: 4.6,
    reviews: 124,
    description: 'Bright yellow tulips in elegant wrapping',
    availability: 'In Stock',
    deliveryTime: '2-3 days',
    category: 'Bouquet'
  },
  { 
    name: 'Peach Peony', 
    image: product2, 
    price: '$39.99', 
    originalPrice: '$44.99',
    recentlyBought: 10,
    rating: 5.0,
    reviews: 67,
    description: 'Luxurious peach peonies with gold accents',
    availability: 'In Stock',
    deliveryTime: '1-2 days',
    category: 'Premium'
  },
  { 
    name: 'Lavender Dream', 
    image: product3, 
    price: '$27.99', 
    originalPrice: '$32.99',
    recentlyBought: 7,
    rating: 4.8,
    reviews: 145,
    description: 'Calming lavender stems with white ribbon',
    availability: 'In Stock',
    deliveryTime: '2-3 days',
    category: 'Specialty'
  },
  { 
    name: 'Blushing Ranunculus', 
    image: product1, 
    price: '$22.99', 
    originalPrice: '$27.99',
    recentlyBought: 9,
    rating: 4.7,
    reviews: 98,
    description: 'Delicate pink ranunculus with greenery',
    availability: 'In Stock',
    deliveryTime: '2-3 days',
    category: 'Bouquet'
  },
  { 
    name: 'Garden Party', 
    image: product2, 
    price: '$31.99', 
    originalPrice: '$36.99',
    recentlyBought: 13,
    rating: 4.9,
    reviews: 178,
    description: 'Mixed garden flowers in vintage style',
    availability: 'In Stock',
    deliveryTime: '1-2 days',
    category: 'Mixed'
  },
  { 
    name: 'Sweet Pea Posy', 
    image: product3, 
    price: '$18.99', 
    originalPrice: '$23.99',
    recentlyBought: 6,
    rating: 4.5,
    reviews: 76,
    description: 'Charming sweet pea flowers in pastel tones',
    availability: 'In Stock',
    deliveryTime: '3-4 days',
    category: 'Posy'
  },
  { 
    name: 'Pink Hydrangea', 
    image: product1, 
    price: '$26.99', 
    originalPrice: '$31.99',
    recentlyBought: 11,
    rating: 4.8,
    reviews: 134,
    description: 'Full pink hydrangea with satin ribbon',
    availability: 'Limited Stock',
    deliveryTime: '2-3 days',
    category: 'Single Stem'
  },
  { 
    name: 'White Orchid', 
    image: product2, 
    price: '$44.99', 
    originalPrice: '$49.99',
    recentlyBought: 4,
    rating: 5.0,
    reviews: 45,
    description: 'Exotic white orchid in decorative pot',
    availability: 'In Stock',
    deliveryTime: '1-2 days',
    category: 'Luxury'
  },
  { 
    name: 'Berry Bliss', 
    image: product3, 
    price: '$32.99', 
    originalPrice: '$37.99',
    recentlyBought: 14,
    rating: 4.7,
    reviews: 112,
    description: 'Seasonal berries with pine and eucalyptus',
    availability: 'In Stock',
    deliveryTime: '2-3 days',
    category: 'Seasonal'
  },
]

const PopularProducts = () => {
  const scrollRef = useRef(null)
  const [startIdx, setStartIdx] = useState(0)
  const visibleCount = 3

  const handleScroll = (dir) => {
    if (dir === 'left') {
      setStartIdx((prev) => Math.max(prev - visibleCount, 0))
    } else {
      setStartIdx((prev) => Math.min(prev + visibleCount, products.length - visibleCount))
    }
  }

  const visibleProducts = products.slice(startIdx, startIdx + visibleCount)

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2EBD9]/5 via-transparent to-[#DF804D]/5"></div>
      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-sm">🌟</span>
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">TRENDING</span>
            <span className="text-sm">🔥</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
            Popular Products
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto flex items-center px-4">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            disabled={startIdx === 0}
            className="absolute left-2 z-10 bg-white/20 backdrop-blur-lg text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[#DF804D]/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-white/30"
          >
            ←
          </button>
        {/* Gallery */}
        <div
          ref={scrollRef}
          className="flex-1 flex gap-8 overflow-hidden justify-center"
        >
          {visibleProducts.map((product, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col p-6 text-center border border-white/20 hover:border-[#DF804D]/50 hover:bg-white/15 transition-all duration-500 min-w-[320px] max-w-[320px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DF804D]/10 via-transparent to-[#F2EBD9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-full">
                {/* Top badges */}
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-gradient-to-r from-[#DF804D] to-[#632111] text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold">
                    {product.recentlyBought} recently bought
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    product.availability === 'In Stock' 
                      ? 'bg-green-500/20 text-green-300' 
                      : product.availability === 'Limited Stock'
                      ? 'bg-orange-500/20 text-orange-300'
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {product.availability}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-40 h-40 object-cover rounded-2xl mx-auto shadow-lg border-2 border-white/30 group-hover:border-[#DF804D]/50 transition-all duration-300" 
                  />
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-[#DF804D] transition-colors duration-300 leading-tight">
                  {product.name}
                </h3>
                
                <p className="text-[#F2EBD9]/80 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-400'}`}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="text-white text-sm font-medium">{product.rating}</span>
                  <span className="text-[#F2EBD9]/60 text-xs">({product.reviews} reviews)</span>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-[#DF804D] text-xl font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-[#F2EBD9]/50 text-sm line-through">{product.originalPrice}</span>
                  )}
                </div>

                {/* Delivery Info */}
                <div className="flex items-center justify-center gap-1 mb-4 text-xs text-[#F2EBD9]/70">
                  <span>🚚</span>
                  <span>Delivery: {product.deliveryTime}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full bg-gradient-to-r from-[#DF804D] to-[#632111] text-white px-4 py-2.5 rounded-full font-semibold hover:from-[#632111] hover:to-[#DF804D] hover:scale-105 transition-all duration-300 shadow-lg text-sm">
                    Add to Cart
                  </button>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white/10 text-white px-3 py-2 rounded-full text-xs font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                      💖 Wishlist
                    </button>
                    <button className="flex-1 bg-white/10 text-white px-3 py-2 rounded-full text-xs font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                      👁️ Quick View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          disabled={startIdx + visibleCount >= products.length}
          className="absolute right-2 z-10 bg-white/20 backdrop-blur-lg text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[#DF804D]/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-white/30"
        >
          →
        </button>
      </div>
    </div>
    </section>
  )
}

export default PopularProducts 