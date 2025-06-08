const PackagingInfo = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2EBD9]/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-sm">📦</span>
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">WHAT'S INCLUDED</span>
            <span className="text-sm">✨</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
            Your <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Complete</span> Package
          </h2>
          <p className="text-xl text-[#F2EBD9]/80 max-w-2xl mx-auto">
            Every Amoura delivery is carefully curated to create an unforgettable unboxing experience
          </p>
        </div>

        {/* Packaging Visual */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Package Illustration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#DF804D]/20 to-[#F2EBD9]/20 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">📦</div>
                  <p className="text-[#F2EBD9]/80 text-lg">Premium Packaging Experience</p>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#DF804D]/40 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#F2EBD9]/40 rounded-full animate-pulse delay-500"></div>
              </div>

              {/* Package Contents */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-[#7f4526] mb-6">
                  What's Inside Your Box
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-lg">🌸</span>
                    <div>
                      <h4 className="font-semibold text-[#8a4f2f] mb-1">Fresh Premium Flowers</h4>
                      <p className="text-[#F2EBD9]/80 text-sm">Hand-selected, locally sourced blooms at peak freshness</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-lg">💧</span>
                    <div>
                      <h4 className="font-semibold text-[#8a4f2f] mb-1">Flower Food Packet</h4>
                      <p className="text-[#F2EBD9]/80 text-sm">Professional-grade nutrients to extend bloom life</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-lg">📝</span>
                    <div>
                      <h4 className="font-semibold text-[#8a4f2f] mb-1">Care Instructions</h4>
                      <p className="text-[#F2EBD9]/80 text-sm">Detailed guide to keep your flowers beautiful longer</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-lg">🎀</span>
                    <div>
                      <h4 className="font-semibold text-[#8a4f2f] mb-1">Elegant Wrapping</h4>
                      <p className="text-[#F2EBD9]/80 text-sm">Beautiful tissue paper and signature ribbon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group hover:scale-105 transition-all duration-500">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl h-full">
              <div className="text-2xl mb-4 group-hover:animate-bounce">🌡️</div>
              <h4 className="text-xl font-bold text-[#DF804D] mb-3">Temperature Controlled</h4>
              <p className="text-[#F2EBD9]/80">Special insulated packaging to maintain optimal flower temperature during delivery</p>
            </div>
          </div>
          
          <div className="text-center group hover:scale-105 transition-all duration-500">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl h-full">
              <div className="text-2xl mb-4 group-hover:animate-bounce delay-100">♻️</div>
              <h4 className="text-xl font-bold text-[#DF804D] mb-3">Eco-Friendly</h4>
              <p className="text-[#F2EBD9]/80">100% recyclable packaging materials and biodegradable flower food</p>
            </div>
          </div>
          
          <div className="text-center group hover:scale-105 transition-all duration-500">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl h-full">
              <div className="text-2xl mb-4 group-hover:animate-bounce delay-200">🚚</div>
              <h4 className="text-xl font-bold text-[#DF804D] mb-3">Safe Delivery</h4>
              <p className="text-[#F2EBD9]/80">Protective cushioning ensures your flowers arrive in perfect condition</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-[#DF804D] mb-4">
              Premium Unboxing Experience
            </h3>
            <p className="text-[#F2EBD9]/80 max-w-3xl mx-auto mb-6">
              From the moment you receive your Amoura package, every detail has been thoughtfully designed to create joy. 
              Our signature packaging not only protects your flowers but also adds to the special moment of receiving them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#DF804D] flex items-center gap-2">
                <span>📋</span> Included with Every Order
              </h4>
              <ul className="space-y-2 text-[#F2EBD9]/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Personalized greeting card (if requested)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Amoura care guide booklet
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  QR code for care tips and videos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Satisfaction guarantee card
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#DF804D] flex items-center gap-2">
                <span>🎁</span> Special Add-Ons Available
              </h4>
              <ul className="space-y-2 text-[#F2EBD9]/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Premium vase or container
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Artisan chocolates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Scented candle
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DF804D] rounded-full"></span>
                  Custom gift wrapping
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackagingInfo
