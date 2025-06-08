const SellerOnboarding = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your seller account in minutes",
      icon: "📝"
    },
    {
      number: "02", 
      title: "Verify Business",
      description: "Quick verification process for credibility",
      icon: "✅"
    },
    {
      number: "03",
      title: "Add Products",
      description: "Upload your flower catalog with photos",
      icon: "🌸"
    },
    {
      number: "04",
      title: "Start Selling",
      description: "Go live and start receiving orders",
      icon: "🚀"
    }
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-sm">🚀</span>
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">GET STARTED</span>
            <span className="text-sm">💼</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
            Start Selling in <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">4 Easy Steps</span>
          </h2>
          <p className="text-xl text-[#F2EBD9]/80 max-w-3xl mx-auto mb-8">
            Join thousands of successful flower sellers on our platform
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#DF804D] to-transparent"></div>
              )}
              
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 relative">
                <div className="absolute -top-4 -right-4 bg-[#DF804D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#F2EBD9] mb-4">{step.title}</h3>
                <p className="text-[#F2EBD9]/80 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#DF804D] to-[#632111] text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
            Start Selling Today
          </button>
          <p className="text-[#F2EBD9]/60 text-sm mt-4">No setup fees • Free to join • 24/7 support</p>
        </div>
      </div>
    </section>
  )
}

export default SellerOnboarding
