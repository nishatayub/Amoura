const SellerTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      business: "Rosa's Garden",
      image: "/src/assets/avatar1.jpg",
      rating: 5,
      text: "Since joining Amoura, my sales have tripled! The platform is incredibly user-friendly and the customer support is outstanding.",
      revenue: "$15K+ monthly"
    },
    {
      name: "James Chen",
      business: "Bloom & Co",
      image: "/src/assets/avatar2.jpg", 
      rating: 5,
      text: "Amoura helped me expand my local flower shop into a thriving online business. The logistics support is a game-changer!",
      revenue: "$8K+ monthly"
    },
    {
      name: "Sarah Thompson",
      business: "Petals Paradise",
      image: "/src/assets/avatar3.jpg",
      rating: 5,
      text: "The seller dashboard makes managing orders so easy. I can focus on creating beautiful arrangements while Amoura handles the rest.",
      revenue: "$12K+ monthly"
    }
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
            What Our <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Sellers</span> Say
          </h2>
          <p className="text-xl text-[#F2EBD9]/80 max-w-3xl mx-auto">
            Join successful flower businesses already thriving on our platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-[#F2EBD9]/90 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Revenue Badge */}
              <div className="bg-[#DF804D]/20 text-[#DF804D] px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                {testimonial.revenue}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#DF804D]/30"
                />
                <div>
                  <div className="font-bold text-[#F2EBD9] text-lg">{testimonial.name}</div>
                  <div className="text-[#DF804D] font-medium">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#DF804D]/20 to-[#F2EBD9]/20 rounded-3xl p-8 border border-[#DF804D]/30">
            <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-[#F2EBD9]/80 mb-6">
              Start your seller journey today and watch your business bloom
            </p>
            <button className="bg-gradient-to-r from-[#DF804D] to-[#632111] text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              Become a Seller
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SellerTestimonials
