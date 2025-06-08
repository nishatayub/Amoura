import { useState } from 'react'

const UserTypeSelector = ({ onUserTypeChange }) => {
  const [selectedType, setSelectedType] = useState('customer')

  const handleTypeChange = (type) => {
    setSelectedType(type)
    onUserTypeChange(type)
  }

  return (
    <div className="relative py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F2EBD9] mb-4">
            Welcome to <span className="text-[#DF804D]">Amoura</span>
          </h2>
          <p className="text-lg text-[#F2EBD9]/80 max-w-2xl mx-auto">
            Choose your path to get started with the perfect floral experience
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Customer Path */}
          <div 
            onClick={() => handleTypeChange('customer')}
            className={`
              cursor-pointer group relative overflow-hidden rounded-3xl p-8 text-center transition-all duration-500 transform hover:scale-105
              ${selectedType === 'customer' 
                ? 'bg-gradient-to-br from-[#DF804D]/20 to-[#F2EBD9]/20 border-2 border-[#DF804D] shadow-2xl' 
                : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15'
              }
            `}
          >
            <div className="relative z-10">
              <div className="text-6xl mb-6 group-hover:animate-bounce">🛍️</div>
              <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">
                I'm a Customer
              </h3>
              <p className="text-[#F2EBD9]/80 mb-6 leading-relaxed">
                Browse beautiful flowers, create custom bouquets, and find the perfect blooms for every occasion
              </p>
              <ul className="text-left space-y-2 text-[#F2EBD9]/70 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Shop curated flower collections
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Custom bouquet design service
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Same-day delivery available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Special occasion packages
                </li>
              </ul>
            </div>
            {selectedType === 'customer' && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#DF804D]/10 via-transparent to-[#F2EBD9]/10 animate-pulse"></div>
            )}
          </div>

          {/* Seller Path */}
          <div 
            onClick={() => handleTypeChange('seller')}
            className={`
              cursor-pointer group relative overflow-hidden rounded-3xl p-8 text-center transition-all duration-500 transform hover:scale-105
              ${selectedType === 'seller' 
                ? 'bg-gradient-to-br from-[#632111]/20 to-[#DF804D]/20 border-2 border-[#632111] shadow-2xl' 
                : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15'
              }
            `}
          >
            <div className="relative z-10">
              <div className="text-6xl mb-6 group-hover:animate-bounce">🌺</div>
              <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">
                I'm a Seller
              </h3>
              <p className="text-[#F2EBD9]/80 mb-6 leading-relaxed">
                Join our marketplace, showcase your floral artistry, and reach customers who appreciate quality blooms
              </p>
              <ul className="text-left space-y-2 text-[#F2EBD9]/70 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#632111] rounded-full"></span>
                  Sell on our trusted platform
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#632111] rounded-full"></span>
                  Access to thousands of customers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#632111] rounded-full"></span>
                  Marketing and promotional support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#632111] rounded-full"></span>
                  Flexible commission structure
                </li>
              </ul>
            </div>
            {selectedType === 'seller' && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#632111]/10 via-transparent to-[#DF804D]/10 animate-pulse"></div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => onUserTypeChange(selectedType)}
            className={`
              px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl
              ${selectedType === 'customer'
                ? 'bg-gradient-to-r from-[#DF804D] to-[#632111] text-white hover:from-[#632111] hover:to-[#DF804D]'
                : 'bg-gradient-to-r from-[#632111] to-[#DF804D] text-white hover:from-[#DF804D] hover:to-[#632111]'
              }
            `}
          >
            Continue as {selectedType === 'customer' ? 'Customer' : 'Seller'}
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Quick Access Links */}
        <div className="flex justify-center gap-6 mt-8 text-sm">
          <button className="text-[#F2EBD9]/60 hover:text-[#DF804D] transition-colors underline">
            Already have an account? Sign In
          </button>
          <span className="text-[#F2EBD9]/40">|</span>
          <button className="text-[#F2EBD9]/60 hover:text-[#DF804D] transition-colors underline">
            Learn more about our platform
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserTypeSelector
