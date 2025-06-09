import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartWishlistProvider } from './context/CartWishlistContext'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import SellerDashboard from './pages/SellerDashboard'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Orders from './pages/Orders'

function App() {
  return (
    <CartWishlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/customer-dashboard" element={<Dashboard />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </CartWishlistProvider>
  )
}

export default App
