import { createContext, useContext, useState, useEffect } from 'react'

const CartWishlistContext = createContext()

export const useCartWishlist = () => {
  const context = useContext(CartWishlistContext)
  if (!context) {
    throw new Error('useCartWishlist must be used within a CartWishlistProvider')
  }
  return context
}

export const CartWishlistProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    const savedWishlist = localStorage.getItem('wishlist')
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist))
    }
  }, [])

  // Save to localStorage whenever cart or wishlist changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
  }, [wishlistItems])

  // Cart functions
  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  // Wishlist functions
  const addToWishlist = (product) => {
    setWishlistItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev // Already in wishlist
      }
      return [...prev, product]
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId))
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId)
  }

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId)
  }

  // Calculate totals
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const wishlistCount = wishlistItems.length

  const value = {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    isInCart,
    cartTotal,
    cartCount,
    wishlistCount
  }

  return (
    <CartWishlistContext.Provider value={value}>
      {children}
    </CartWishlistContext.Provider>
  )
}
