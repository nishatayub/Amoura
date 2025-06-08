import { useState } from 'react'

const Signup = ({ isOpen, onClose }) => {
  const [userType, setUserType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Modal form submitted:', { userType, ...formData })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-md w-full border border-white/20 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-[#F2EBD9]">Join Amoura</h2>
          <button 
            onClick={onClose}
            className="text-[#F2EBD9]/70 hover:text-[#F2EBD9] text-2xl"
          >
            ×
          </button>
        </div>

        {!userType ? (
          <div className="space-y-4">
            <p className="text-[#F2EBD9]/80 text-center mb-6">Choose how you'd like to join our community</p>
            
            <div className="grid gap-4">
              <button
                onClick={() => setUserType('customer')}
                className="bg-white/10 border border-white/30 rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🛍️</span>
                  <div>
                    <h3 className="text-[#F2EBD9] font-semibold text-lg">Customer</h3>
                    <p className="text-[#F2EBD9]/70 text-sm">Browse and purchase beautiful flowers</p>
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => setUserType('seller')}
                className="bg-white/10 border border-white/30 rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🏪</span>
                  <div>
                    <h3 className="text-[#F2EBD9] font-semibold text-lg">Seller</h3>
                    <p className="text-[#F2EBD9]/70 text-sm">Start your floral business with us</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <button
                type="button"
                onClick={() => setUserType('')}
                className="text-[#F2EBD9]/70 hover:text-[#F2EBD9]"
              >
                ← Back
              </button>
              <span className="text-[#F2EBD9]/80">
                {userType === 'customer' ? '🛍️ Customer' : '🏪 Seller'} Registration
              </span>
            </div>

            <input
              type="text"
              name="name"
              placeholder={userType === 'customer' ? "Full Name" : "Business Name"}
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D]"
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D]"
              required
            />
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#DF804D]"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#DF804D] to-[#632111] text-white py-3 rounded-lg font-bold hover:from-[#632111] hover:to-[#DF804D] transition-all duration-300"
            >
              {userType === 'customer' ? 'Join as Customer' : 'Start Selling'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Signup
