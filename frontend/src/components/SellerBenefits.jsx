const SellerBenefits = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Earn More",
      description: "Higher profit margins with our competitive commission structure",
      stats: "85% average profit margin"
    },
    {
      icon: "🎯",
      title: "Reach More Customers",
      description: "Access to our growing customer base of flower enthusiasts",
      stats: "50K+ active customers"
    },
    {
      icon: "📱",
      title: "Easy Management",
      description: "Intuitive seller dashboard to manage orders and inventory",
      stats: "5-minute setup"
    },
    {
      icon: "🚚",
      title: "Logistics Support",
      description: "We handle delivery and customer service for you",
      stats: "Same-day delivery"
    }
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-sm">🏪</span>
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">SELLER BENEFITS</span>
            <span className="text-sm">💼</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
            Why Choose <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Amoura</span>
          </h2>
          <p className="text-xl text-[#F2EBD9]/80 max-w-3xl mx-auto">
            Join our marketplace and grow your floral business with the tools and support you need to succeed
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-serif font-bold text-[#F2EBD9] mb-4">{benefit.title}</h3>
              <p className="text-[#F2EBD9]/80 mb-4 leading-relaxed">{benefit.description}</p>
              <div className="text-[#DF804D] font-bold text-lg">{benefit.stats}</div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-6 text-center">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#DF804D] mb-2">300%</div>
              <div className="text-[#F2EBD9]/70 text-sm">Average sales increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#DF804D] mb-2">1,200+</div>
              <div className="text-[#F2EBD9]/70 text-sm">Active sellers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#DF804D] mb-2">98%</div>
              <div className="text-[#F2EBD9]/70 text-sm">Seller satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SellerBenefits
