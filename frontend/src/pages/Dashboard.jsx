import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartWishlist } from '../context/CartWishlistContext'
import DashboardNavbar from '../components/layout/DashboardNavbar'
import Footer from '../components/layout/Footer'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const { addToCart, addToWishlist, isInWishlist, isInCart } = useCartWishlist()

  const products = [
    {
      id: 1,
      name: 'Red Rose Bouquet',
      image: '/assets/product1.jpg',
      price: 29.99,
      originalPrice: 39.99,
      category: 'Roses',
      rating: 4.8,
      reviews: 124,
      isOnSale: true,
      description: 'Beautiful red roses perfect for romantic occasions'
    },
    {
      id: 2,
      name: 'White Lily Arrangement',
      image: '/assets/product2.jpg',
      price: 34.99,
      category: 'Lilies',
      rating: 4.9,
      reviews: 89,
      isOnSale: false,
      description: 'Elegant white lilies symbolizing purity and peace'
    },
    {
      id: 3,
      name: 'Mixed Tulip Bundle',
      image: '/assets/product3.jpg',
      price: 24.99,
      originalPrice: 32.99,
      category: 'Tulips',
      rating: 4.7,
      reviews: 156,
      isOnSale: true,
      description: 'Colorful tulips bringing spring joy to any space'
    },
    {
      id: 4,
      name: 'Sunflower Delight',
      image: '/assets/product4.jpg',
      price: 19.99,
      category: 'Sunflowers',
      rating: 4.6,
      reviews: 92,
      isOnSale: false,
      description: 'Bright sunflowers that radiate warmth and happiness'
    },
    {
      id: 5,
      name: 'Purple Orchid Plant',
      image: '/assets/product5.jpg',
      price: 45.99,
      originalPrice: 55.99,
      category: 'Orchids',
      rating: 4.9,
      reviews: 67,
      isOnSale: true,
      description: 'Exotic orchid plant for sophisticated plant lovers'
    },
    {
      id: 6,
      name: 'Pink Carnation Mix',
      image: '/assets/product6.jpg',
      price: 22.99,
      category: 'Carnations',
      rating: 4.5,
      reviews: 143,
      isOnSale: false,
      description: 'Long-lasting carnations in soft pink shades'
    },
    {
      id: 7,
      name: 'Premium Rose Collection',
      image: '/assets/product7.jpg',
      price: 59.99,
      originalPrice: 74.99,
      category: 'Roses',
      rating: 5.0,
      reviews: 203,
      isOnSale: true,
      description: 'Luxury rose arrangement for special celebrations'
    },
    {
      id: 8,
      name: 'Garden Fresh Bouquet',
      image: '/assets/product8.jpg',
      price: 39.99,
      category: 'Mixed',
      rating: 4.8,
      reviews: 178,
      isOnSale: false,
      description: 'Fresh garden flowers in a beautiful arrangement'
    },
    {
      id: 9,
      name: 'Tropical Paradise',
      image: '/assets/product9.jpg',
      price: 49.99,
      originalPrice: 64.99,
      category: 'Tropical',
      rating: 4.7,
      reviews: 95,
      isOnSale: true,
      description: 'Exotic tropical flowers bringing paradise home'
    },
    {
      id: 10,
      name: 'Classic Elegance',
      image: '/assets/product10.jpg',
      price: 42.99,
      category: 'Mixed',
      rating: 4.8,
      reviews: 134,
      isOnSale: false,
      description: 'Timeless flower arrangement for any occasion'
    },
    {
      id: 11,
      name: 'Spring Meadow',
      image: '/assets/product11.jpg',
      price: 32.99,
      originalPrice: 41.99,
      category: 'Seasonal',
      rating: 4.6,
      reviews: 112,
      isOnSale: true,
      description: 'Fresh spring flowers capturing meadow beauty'
    },
    {
      id: 12,
      name: 'Royal Bouquet',
      image: '/assets/product12.jpg',
      price: 67.99,
      category: 'Premium',
      rating: 4.9,
      reviews: 89,
      isOnSale: false,
      description: 'Luxurious flower arrangement fit for royalty'
    }
  ]

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    
    if (!userData || !token) {
      navigate('/')
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== 'customer') {
      navigate('/')
      return
    }

    setUser(parsedUser)
  }, [navigate])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-gradient-to-b from-[#632111] via-[#a49c83] to-[#632111] min-h-screen">
      <DashboardNavbar />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#F2EBD9] mb-2">
                Welcome back, {user.first_name}! 🌸
              </h1>
              <p className="text-[#F2EBD9]/80 text-lg">
                Discover beautiful flowers for every occasion
              </p>
            </div>
          </div>

          {/* Product Gallery Section */}
          <div className="mb-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-sm">🌺</span>
                <span className="text-lg font-medium text-[#DF804D] tracking-wide">FRESH FLOWERS</span>
                <span className="text-sm">✨</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
                Our Product Gallery
              </h2>
              <p className="text-[#F2EBD9]/70 text-lg max-w-2xl mx-auto">
                Discover our beautiful collection of fresh flowers and arrangements, perfect for every occasion
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.isOnSale && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          SALE
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-white text-xs font-medium">{product.category}</span>
                      </div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                        <span className="text-white text-xs font-medium">{product.rating}</span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-serif font-bold text-[#F2EBD9] mb-2 group-hover:text-[#DF804D] transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-[#F2EBD9]/80 text-sm leading-relaxed mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[#DF804D] font-bold text-lg">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-[#F2EBD9]/60 text-sm line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <span className="text-[#F2EBD9]/60 text-xs">({product.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <button 
                          onClick={() => addToCart(product)}
                          className={`flex-1 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                            isInCart(product.id) 
                              ? 'bg-green-600 hover:bg-green-700' 
                              : 'bg-[#DF804D] hover:bg-[#632111]'
                          }`}
                        >
                          {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                        </button>
                        <button 
                          onClick={() => addToWishlist(product)}
                          className={`p-2 rounded-lg transition-colors ${
                            isInWishlist(product.id)
                              ? 'bg-red-500 hover:bg-red-600 text-white'
                              : 'bg-white/10 hover:bg-white/20 text-[#F2EBD9] hover:text-red-400'
                          }`}
                        >
                          <svg className="w-4 h-4" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-[#DF804D] mb-2">100+</div>
              <div className="text-[#F2EBD9]/80">Flower Varieties</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-[#DF804D] mb-2">24/7</div>
              <div className="text-[#F2EBD9]/80">Fresh Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-[#DF804D] mb-2">500+</div>
              <div className="text-[#F2EBD9]/80">Happy Customers</div>
            </div>
          </div>

          {/* Recent Orders Placeholder */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">Recent Orders</h3>
            <div className="text-center py-8">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-[#F2EBD9]/80 text-lg mb-4">No orders yet</p>
              <p className="text-[#F2EBD9]/60">Start shopping to see your orders here!</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Dashboard
