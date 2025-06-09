import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCartWishlist } from '../../context/CartWishlistContext'

const DashboardNavbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartCount, wishlistCount } = useCartWishlist()

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/')
  }

  const isSellerDashboard = location.pathname === '/seller-dashboard'
  const dashboardLink = isSellerDashboard ? '/seller-dashboard' : '/customer-dashboard'

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <Link to={dashboardLink}>
              <span className="text-3xl font-serif font-bold tracking-wide bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
                AMOURA
              </span>
            </Link>
          </div>
          
          <div className="flex gap-8 text-base font-medium">
            <Link to={dashboardLink} className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
              {isSellerDashboard ? 'My Products' : 'Products'}
            </Link>
            {!isSellerDashboard && (
              <>
                <Link to="#categories" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
                  Categories
                </Link>
                <Link to="#sales" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
                  On Sale
                </Link>
                <Link to="#new" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
                  New Arrivals
                </Link>
              </>
            )}
            {isSellerDashboard && (
              <>
                <Link to="#analytics" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
                  Analytics
                </Link>
                <Link to="#orders" className="text-white/90 hover:text-[#DF804D] transition-all duration-300 hover:scale-105">
                  Orders
                </Link>
              </>
            )}
          </div>
          
          {/* Cart, Wishlist, Orders & Profile Section - Only show for customers */}
          <div className="flex items-center gap-4">
            {!isSellerDashboard && (
              <>
                {/* Cart Icon */}
                <Link to="/cart" className="relative group">
                  <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-[#DF804D]/50">
                    <svg className="w-6 h-6 text-white group-hover:text-[#DF804D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M6 19a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#DF804D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </Link>

                {/* Wishlist Icon */}
                <Link to="/wishlist" className="relative group">
                  <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-[#DF804D]/50">
                    <svg className="w-6 h-6 text-white group-hover:text-[#DF804D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#DF804D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                        {wishlistCount}
                      </span>
                    )}
                  </div>
                </Link>

                {/* Orders Icon */}
                <Link to="/orders" className="relative group">
                  <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-[#DF804D]/50">
                    <svg className="w-6 h-6 text-white group-hover:text-[#DF804D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </Link>
              </>
            )}

            {/* Profile Dropdown */}
            <div className="relative group">
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-[#DF804D]/50">
                <svg className="w-6 h-6 text-white group-hover:text-[#DF804D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link to="/profile" className="block px-4 py-2 text-[#F2EBD9] hover:bg-white/10 hover:text-[#DF804D] transition-colors">
                    My Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-[#F2EBD9] hover:bg-white/10 hover:text-[#DF804D] transition-colors">
                    Settings
                  </Link>
                  <Link to="/help" className="block px-4 py-2 text-[#F2EBD9] hover:bg-white/10 hover:text-[#DF804D] transition-colors">
                    Help & Support
                  </Link>
                  <hr className="border-white/20 my-2" />
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-[#F2EBD9] hover:bg-white/10 hover:text-red-400 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default DashboardNavbar
