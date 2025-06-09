import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCartWishlist } from '../context/CartWishlistContext'
import DashboardNavbar from '../components/layout/DashboardNavbar'
import Footer from '../components/layout/Footer'

const Wishlist = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const { 
    wishlistItems, 
    removeFromWishlist, 
    addToCart,
    isInCart 
  } = useCartWishlist()

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

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const handleMoveToCart = (product) => {
    addToCart(product)
    removeFromWishlist(product.id)
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-gradient-to-b from-[#632111] via-[#a49c83] to-[#632111] min-h-screen">
      <DashboardNavbar />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-sm">❤️</span>
              <span className="text-lg font-medium text-[#DF804D] tracking-wide">WISHLIST</span>
              <span className="text-sm">✨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
              Your Wishlist
            </h1>
            <p className="text-[#F2EBD9]/70 text-lg">
              {wishlistItems.length === 0 ? 'Your wishlist is empty' : `${wishlistItems.length} item${wishlistItems.length > 1 ? 's' : ''} in your wishlist`}
            </p>
          </div>

          {wishlistItems.length === 0 ? (
            /* Empty Wishlist */
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl text-center">
              <div className="text-6xl mb-6">💕</div>
              <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">Your wishlist is empty</h3>
              <p className="text-[#F2EBD9]/80 text-lg mb-6">Save your favorite flowers to buy them later!</p>
              <Link 
                to="/customer-dashboard"
                className="inline-block bg-[#DF804D] hover:bg-[#632111] text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            /* Wishlist Items */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.isOnSale && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          SALE
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-white text-xs font-medium">{item.category}</span>
                      </div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                        <span className="text-white text-xs font-medium">{item.rating}</span>
                      </div>
                      
                      {/* Remove from Wishlist Button */}
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-3 left-3 p-2 bg-red-500/80 hover:bg-red-500 rounded-full text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-serif font-bold text-[#F2EBD9] mb-2 group-hover:text-[#DF804D] transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-[#F2EBD9]/80 text-sm leading-relaxed mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[#DF804D] font-bold text-lg">${item.price}</span>
                          {item.originalPrice && (
                            <span className="text-[#F2EBD9]/60 text-sm line-through">${item.originalPrice}</span>
                          )}
                        </div>
                        <span className="text-[#F2EBD9]/60 text-xs">({item.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex gap-2">
                        {isInCart(item.id) ? (
                          <Link 
                            to="/cart"
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
                          >
                            View in Cart
                          </Link>
                        ) : (
                          <button 
                            onClick={() => handleAddToCart(item)}
                            className="flex-1 bg-[#DF804D] hover:bg-[#632111] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                          >
                            Add to Cart
                          </button>
                        )}
                        <button 
                          onClick={() => handleMoveToCart(item)}
                          className="p-2 bg-white/10 hover:bg-white/20 text-[#F2EBD9] hover:text-[#DF804D] rounded-lg transition-colors"
                          title="Move to Cart"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M6 19a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          {wishlistItems.length > 0 && (
            <div className="mt-8 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-xl font-serif font-bold text-[#F2EBD9] mb-4">Quick Actions</h3>
                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={() => {
                      wishlistItems.forEach(item => addToCart(item))
                      alert('All items added to cart!')
                    }}
                    className="bg-[#DF804D] hover:bg-[#632111] text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Add All to Cart
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to clear your entire wishlist?')) {
                        wishlistItems.forEach(item => removeFromWishlist(item.id))
                      }
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Clear Wishlist
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Wishlist
