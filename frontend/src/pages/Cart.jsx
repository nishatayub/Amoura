import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCartWishlist } from '../context/CartWishlistContext'
import DashboardNavbar from '../components/layout/DashboardNavbar'
import Footer from '../components/layout/Footer'

const Cart = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const { 
    cartItems, 
    removeFromCart, 
    updateCartQuantity, 
    clearCart, 
    cartTotal,
    addToWishlist 
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

  const handleQuantityChange = (productId, newQuantity) => {
    updateCartQuantity(productId, newQuantity)
  }

  const handleMoveToWishlist = (product) => {
    addToWishlist(product)
    removeFromCart(product.id)
  }

  const handleCheckout = () => {
    // TODO: Implement checkout functionality
    alert('Checkout functionality coming soon!')
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
              <span className="text-sm">🛒</span>
              <span className="text-lg font-medium text-[#DF804D] tracking-wide">SHOPPING CART</span>
              <span className="text-sm">✨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
              Your Cart
            </h1>
            <p className="text-[#F2EBD9]/70 text-lg">
              {cartItems.length === 0 ? 'Your cart is empty' : `${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart`}
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl text-center">
              <div className="text-6xl mb-6">🛒</div>
              <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">Your cart is empty</h3>
              <p className="text-[#F2EBD9]/80 text-lg mb-6">Start shopping to add beautiful flowers to your cart!</p>
              <Link 
                to="/customer-dashboard"
                className="inline-block bg-[#DF804D] hover:bg-[#632111] text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                  <div className="p-6 border-b border-white/20">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-serif font-bold text-[#F2EBD9]">Cart Items</h2>
                      <button
                        onClick={clearCart}
                        className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-white/10">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6">
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-serif font-bold text-[#F2EBD9]">{item.name}</h3>
                                <p className="text-[#F2EBD9]/70 text-sm">{item.category}</p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-400 hover:text-red-300 transition-colors"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-[#DF804D] font-bold text-lg">${item.price}</span>
                                {item.originalPrice && (
                                  <span className="text-[#F2EBD9]/60 text-sm line-through">${item.originalPrice}</span>
                                )}
                              </div>
                              
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#F2EBD9] flex items-center justify-center transition-colors"
                                  >
                                    -
                                  </button>
                                  <span className="text-[#F2EBD9] font-medium w-8 text-center">{item.quantity}</span>
                                  <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#F2EBD9] flex items-center justify-center transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                                
                                <button
                                  onClick={() => handleMoveToWishlist(item)}
                                  className="text-[#F2EBD9]/70 hover:text-red-400 transition-colors"
                                  title="Move to Wishlist"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 sticky top-24">
                  <h2 className="text-xl font-serif font-bold text-[#F2EBD9] mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-[#F2EBD9]/80">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#F2EBD9]/80">
                      <span>Shipping</span>
                      <span>FREE</span>
                    </div>
                    <div className="flex justify-between text-[#F2EBD9]/80">
                      <span>Tax</span>
                      <span>${(cartTotal * 0.08).toFixed(2)}</span>
                    </div>
                    <hr className="border-white/20" />
                    <div className="flex justify-between text-lg font-bold text-[#F2EBD9]">
                      <span>Total</span>
                      <span>${(cartTotal * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-[#DF804D] hover:bg-[#632111] text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <Link
                    to="/customer-dashboard"
                    className="block w-full text-center bg-white/10 hover:bg-white/20 text-[#F2EBD9] font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Continue Shopping
                  </Link>
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

export default Cart
