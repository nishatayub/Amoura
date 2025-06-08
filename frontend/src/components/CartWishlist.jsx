import { useState } from 'react'

const CartWishlist = () => {
  const [activeTab, setActiveTab] = useState('cart')
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Rose Elegance Bouquet",
      price: 65,
      quantity: 1,
      image: "🌹",
      color: "Red & Pink"
    },
    {
      id: 2,
      name: "Sunflower Sunshine",
      price: 45,
      quantity: 2,
      image: "🌻",
      color: "Bright Yellow"
    }
  ])

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 3,
      name: "White Lily Paradise",
      price: 85,
      image: "🤍",
      color: "Pure White"
    },
    {
      id: 4,
      name: "Mixed Garden Bouquet",
      price: 55,
      image: "🌸",
      color: "Colorful Mix"
    },
    {
      id: 5,
      name: "Romantic Red Roses",
      price: 75,
      image: "❤️",
      color: "Deep Red"
    }
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const moveToCart = (wishlistItem) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== wishlistItem.id))
    setCartItems([...cartItems, { ...wishlistItem, quantity: 1 }])
  }

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id))
  }

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DF804D]/5 via-transparent to-[#F2EBD9]/5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-sm">🛒</span>
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">SHOPPING</span>
            <span className="text-sm">💝</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
            Your <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Cart</span> & <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Wishlist</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white/10 backdrop-blur-md rounded-2xl p-2 mb-8 border border-white/20 shadow-xl max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('cart')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'cart'
                ? 'bg-[#DF804D] text-white shadow-lg'
                : 'text-[#F2EBD9]/80 hover:text-[#F2EBD9]'
            }`}
          >
            <span>🛒</span>
            Cart ({cartItems.length})
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'wishlist'
                ? 'bg-[#DF804D] text-white shadow-lg'
                : 'text-[#F2EBD9]/80 hover:text-[#F2EBD9]'
            }`}
          >
            <span>💝</span>
            Wishlist ({wishlistItems.length})
          </button>
        </div>

        {/* Cart Tab */}
        {activeTab === 'cart' && (
          <div className="space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                <div className="text-6xl mb-4 opacity-50">🛒</div>
                <h3 className="text-2xl font-serif text-[#F2EBD9] mb-4">Your cart is empty</h3>
                <p className="text-[#F2EBD9]/70 mb-6">Start adding beautiful arrangements to your cart</p>
                <button className="bg-gradient-to-r from-[#DF804D] to-[#632111] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Browse Flowers
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{item.image}</div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-[#F2EBD9] mb-1">{item.name}</h4>
                          <p className="text-[#F2EBD9]/70 text-sm mb-2">{item.color}</p>
                          <p className="text-[#DF804D] font-bold">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-[#DF804D]/20 text-[#DF804D] rounded-full flex items-center justify-center hover:bg-[#DF804D] hover:text-white transition-all duration-300"
                          >
                            −
                          </button>
                          <span className="text-[#F2EBD9] font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-[#DF804D]/20 text-[#DF804D] rounded-full flex items-center justify-center hover:bg-[#DF804D] hover:text-white transition-all duration-300"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, 0)}
                          className="text-[#F2EBD9]/50 hover:text-red-400 transition-colors ml-2"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Summary */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg text-[#F2EBD9]">Subtotal:</span>
                    <span className="text-xl font-bold text-[#DF804D]">${cartTotal}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg text-[#F2EBD9]">Delivery:</span>
                    <span className="text-lg text-[#F2EBD9]">$8</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#DF804D]/30 to-transparent mb-4"></div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold text-[#F2EBD9]">Total:</span>
                    <span className="text-2xl font-bold text-[#DF804D]">${cartTotal + 8}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#DF804D] to-[#632111] text-white py-4 rounded-2xl font-bold text-lg hover:from-[#632111] hover:to-[#DF804D] hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                    <span>💳</span>
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Wishlist Tab */}
        {activeTab === 'wishlist' && (
          <div className="space-y-6">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                <div className="text-6xl mb-4 opacity-50">💝</div>
                <h3 className="text-2xl font-serif text-[#F2EBD9] mb-4">Your wishlist is empty</h3>
                <p className="text-[#F2EBD9]/70 mb-6">Save your favorite arrangements for later</p>
                <button className="bg-gradient-to-r from-[#DF804D] to-[#632111] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Discover Flowers
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl group hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-5xl mb-4">{item.image}</div>
                      <h4 className="text-lg font-bold text-[#F2EBD9] mb-2">{item.name}</h4>
                      <p className="text-[#F2EBD9]/70 text-sm mb-3">{item.color}</p>
                      <p className="text-[#DF804D] font-bold text-xl mb-4">${item.price}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => moveToCart(item)}
                          className="flex-1 bg-gradient-to-r from-[#DF804D] to-[#632111] text-white py-2 px-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="px-3 py-2 bg-white/20 text-[#F2EBD9]/70 rounded-xl hover:text-red-400 transition-colors"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl text-center">
            <div className="text-2xl mb-2">🚚</div>
            <div className="text-[#F2EBD9] font-semibold text-sm">Free delivery over $75</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl text-center">
            <div className="text-2xl mb-2">🌱</div>
            <div className="text-[#F2EBD9] font-semibold text-sm">7-day freshness guarantee</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl text-center">
            <div className="text-2xl mb-2">💌</div>
            <div className="text-[#F2EBD9] font-semibold text-sm">Personalized message cards</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartWishlist
