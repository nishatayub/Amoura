import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import DashboardNavbar from '../components/layout/DashboardNavbar'
import Footer from '../components/layout/Footer'

const Orders = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  // Mock orders data - replace with actual API call
  const [orders] = useState([
    {
      id: 'ORD-001',
      date: '2025-06-08',
      status: 'Delivered',
      total: 89.97,
      items: [
        { name: 'Red Rose Bouquet', quantity: 2, price: 29.99 },
        { name: 'White Lily Arrangement', quantity: 1, price: 34.99 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2025-06-05',
      status: 'In Transit',
      total: 45.99,
      items: [
        { name: 'Purple Orchid Plant', quantity: 1, price: 45.99 }
      ]
    }
  ])

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500'
      case 'In Transit':
        return 'bg-blue-500'
      case 'Processing':
        return 'bg-yellow-500'
      case 'Cancelled':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
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
              <span className="text-sm">📦</span>
              <span className="text-lg font-medium text-[#DF804D] tracking-wide">ORDER HISTORY</span>
              <span className="text-sm">✨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
              Your Orders
            </h1>
            <p className="text-[#F2EBD9]/70 text-lg">
              {orders.length === 0 ? 'No orders yet' : `${orders.length} order${orders.length > 1 ? 's' : ''} found`}
            </p>
          </div>

          {orders.length === 0 ? (
            /* No Orders */
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl text-center">
              <div className="text-6xl mb-6">📦</div>
              <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">No orders yet</h3>
              <p className="text-[#F2EBD9]/80 text-lg mb-6">Start shopping to see your orders here!</p>
              <Link 
                to="/customer-dashboard"
                className="inline-block bg-[#DF804D] hover:bg-[#632111] text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            /* Orders List */
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden"
                >
                  <div className="p-6 border-b border-white/20">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-[#F2EBD9]">Order {order.id}</h3>
                        <p className="text-[#F2EBD9]/70">Placed on {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </div>
                        <div className="text-[#DF804D] font-bold text-lg mt-1">${order.total.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-serif font-bold text-[#F2EBD9] mb-4">Items</h4>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <span className="text-[#F2EBD9] font-medium">{item.name}</span>
                            <span className="text-[#F2EBD9]/70 ml-2">x{item.quantity}</span>
                          </div>
                          <span className="text-[#DF804D] font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-6">
                      <button className="bg-[#DF804D] hover:bg-[#632111] text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        Track Order
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-[#F2EBD9] font-medium py-2 px-4 rounded-lg transition-colors">
                        Reorder
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-[#F2EBD9] font-medium py-2 px-4 rounded-lg transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Orders
