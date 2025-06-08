const SellerResources = () => {
  const resources = [
    {
      icon: "📚",
      title: "Seller Handbook",
      description: "Complete guide to maximizing your sales",
      type: "Guide"
    },
    {
      icon: "📊",
      title: "Analytics Dashboard", 
      description: "Track performance and customer insights",
      type: "Tool"
    },
    {
      icon: "🎨",
      title: "Photo Guidelines",
      description: "Best practices for product photography",
      type: "Tutorial"
    },
    {
      icon: "💡",
      title: "Marketing Tips",
      description: "Boost visibility and attract customers",
      type: "Strategy"
    },
    {
      icon: "🎓",
      title: "Seller Workshops",
      description: "Live training sessions with experts",
      type: "Training"
    },
    {
      icon: "💬",
      title: "Community Forum",
      description: "Connect with other successful sellers",
      type: "Community"
    }
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-sm">📚</span>
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">SELLER RESOURCES</span>
            <span className="text-sm">🛠️</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
            Tools for <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl text-[#F2EBD9]/80 max-w-3xl mx-auto">
            Everything you need to grow your floral business on our platform
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="bg-[#DF804D]/20 text-[#DF804D] px-3 py-1 rounded-full text-xs font-medium">
                  {resource.type}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#F2EBD9] mb-3">{resource.title}</h3>
              <p className="text-[#F2EBD9]/80 leading-relaxed">{resource.description}</p>
              <div className="mt-4 text-[#DF804D] font-medium text-sm group-hover:text-[#F2EBD9] transition-colors">
                Learn More →
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#DF804D]/20 to-[#F2EBD9]/10 rounded-3xl p-8 border border-[#DF804D]/30">
            <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">24/7 Support</h3>
            <p className="text-[#F2EBD9]/80 mb-6">
              Our dedicated seller support team is always here to help you succeed
            </p>
            <button className="bg-[#DF804D] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#632111] transition-colors">
              Contact Support
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#F2EBD9]/20 to-[#DF804D]/10 rounded-3xl p-8 border border-[#F2EBD9]/30">
            <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">Seller Onboarding</h3>
            <p className="text-[#F2EBD9]/80 mb-6">
              Personalized onboarding session to get you started on the right foot
            </p>
            <button className="bg-[#F2EBD9] text-[#632111] px-6 py-3 rounded-full font-semibold hover:bg-[#DF804D] hover:text-white transition-all">
              Book Session
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SellerResources
