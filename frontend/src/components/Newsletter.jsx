import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1500)
  }

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#DF804D]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F2EBD9]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {!isSubscribed ? (
          <>
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-sm animate-bounce">📧</span>
                <span className="text-lg font-medium text-[#DF804D] tracking-wide">STAY CONNECTED</span>
                <span className="text-sm animate-bounce delay-500">🌸</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
                Join Our <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Bloom</span> Community
              </h2>
              <p className="text-xl text-[#F2EBD9]/80 max-w-2xl mx-auto">
                Be the first to know about new arrivals, seasonal collections, and exclusive offers
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full text-[#F2EBD9] placeholder-[#F2EBD9]/60 focus:border-[#DF804D] focus:outline-none focus:ring-2 focus:ring-[#DF804D]/50 transition-all duration-300 text-lg"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#DF804D] text-xl">
                    💌
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full bg-gradient-to-r from-[#DF804D] to-[#632111] text-white px-8 py-4 rounded-full text-lg font-bold hover:from-[#632111] hover:to-[#DF804D] hover:scale-105 transition-all duration-500 shadow-xl transform flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <span className="text-xl group-hover:animate-bounce">🌻</span>
                      Subscribe to Newsletter
                    </>
                  )}
                </button>
              </form>

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-[#F2EBD9]/70 mb-4 text-sm">What you'll get:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-[#F2EBD9]/80">
                    <span>🎁</span> Exclusive discounts
                  </div>
                  <div className="flex items-center gap-2 text-[#F2EBD9]/80">
                    <span>🌹</span> Seasonal collections
                  </div>
                  <div className="flex items-center gap-2 text-[#F2EBD9]/80">
                    <span>📚</span> Care tips & guides
                  </div>
                  <div className="flex items-center gap-2 text-[#F2EBD9]/80">
                    <span>⭐</span> VIP early access
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl max-w-2xl mx-auto animate-fade-in">
            <div className="text-6xl mb-6 animate-bounce">🎉</div>
            <h3 className="text-3xl font-serif font-bold text-[#DF804D] mb-4">Welcome to the Family!</h3>
            <p className="text-xl text-[#F2EBD9]/90 mb-6">
              Thank you for subscribing! Get ready for beautiful content and exclusive offers.
            </p>
            <div className="flex justify-center gap-2">
              <span className="text-2xl animate-pulse">🌸</span>
              <span className="text-2xl animate-pulse delay-200">🌺</span>
              <span className="text-2xl animate-pulse delay-400">🌻</span>
            </div>
          </div>
        )}

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-[#F2EBD9]/60 text-sm mb-4">Join 2,500+ flower lovers already subscribed</p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] rounded-full border-2 border-white/30"></div>
              ))}
            </div>
            <span className="text-[#F2EBD9]/70 text-sm">and counting...</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
