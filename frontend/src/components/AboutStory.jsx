const AboutStory = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F2EBD9]/5 via-transparent to-[#DF804D]/5"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-sm">📖</span>
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">OUR STORY</span>
            <span className="text-sm">🌿</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Amoura</span>
          </h2>
          <p className="text-xl text-[#F2EBD9]/80 max-w-2xl mx-auto">
            Where passion for florals meets artistry, creating unforgettable moments one bloom at a time
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Text */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-[#DF804D] mb-4 flex items-center gap-2">
                <span>🌱</span> Our Beginning
              </h3>
              <p className="text-[#F2EBD9]/90 leading-relaxed mb-4">
                Founded in 2020 by a passionate florist, Amoura began as a small studio with a simple mission: 
                to bring joy and beauty into people's lives through the timeless art of floral design.
              </p>
              <p className="text-[#F2EBD9]/80 leading-relaxed">
                What started as weekend market visits has blossomed into a trusted name, serving hundreds 
                of customers who believe in the power of flowers to express emotions words cannot capture.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-[#DF804D] mb-4 flex items-center gap-2">
                <span>💝</span> Our Mission
              </h3>
              <p className="text-[#F2EBD9]/90 leading-relaxed">
                We believe every moment deserves to be celebrated with beauty. From intimate gestures to 
                grand celebrations, our carefully curated arrangements speak the language of love, 
                gratitude, and joy.
              </p>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#DF804D]/20 to-[#F2EBD9]/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
              <div className="text-center space-y-8">
                <div className="text-6xl mb-4">🌸</div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#DF804D] mb-2">500+</div>
                    <div className="text-[#F2EBD9]/80">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#DF804D] mb-2">1000+</div>
                    <div className="text-[#F2EBD9]/80">Arrangements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#DF804D] mb-2">50+</div>
                    <div className="text-[#F2EBD9]/80">Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#DF804D] mb-2">3</div>
                    <div className="text-[#F2EBD9]/80">Years Strong</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorations */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#DF804D]/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#F2EBD9]/40 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group hover:scale-105 transition-all duration-500">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl h-full">
              <div className="text-4xl mb-4 group-hover:animate-bounce">🎨</div>
              <h4 className="text-xl font-bold text-[#DF804D] mb-3">Artistry</h4>
              <p className="text-[#F2EBD9]/80">Each arrangement is a unique masterpiece, crafted with passion and attention to detail</p>
            </div>
          </div>
          
          <div className="text-center group hover:scale-105 transition-all duration-500">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl h-full">
              <div className="text-4xl mb-4 group-hover:animate-bounce delay-100">🌿</div>
              <h4 className="text-xl font-bold text-[#DF804D] mb-3">Freshness</h4>
              <p className="text-[#F2EBD9]/80">We source the finest, freshest flowers to ensure lasting beauty and fragrance</p>
            </div>
          </div>
          
          <div className="text-center group hover:scale-105 transition-all duration-500">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl h-full">
              <div className="text-4xl mb-4 group-hover:animate-bounce delay-200">💖</div>
              <h4 className="text-xl font-bold text-[#DF804D] mb-3">Care</h4>
              <p className="text-[#F2EBD9]/80">Every customer is family, and we pour love into every interaction and delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
