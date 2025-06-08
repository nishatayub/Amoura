import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How fresh are your flowers?",
      answer: "All our flowers are sourced daily from local growers and imported directly from premium farms. We guarantee freshness and most arrangements last 7-14 days with proper care."
    },
    {
      question: "Do you offer same-day delivery?",
      answer: "Yes! We offer same-day delivery for orders placed before 2 PM, Monday through Saturday. Sunday deliveries are available for pre-ordered arrangements."
    },
    {
      question: "Can I customize my bouquet?",
      answer: "Absolutely! We love creating personalized arrangements. Contact us with your preferences for colors, flower types, and occasion, and we'll craft something unique just for you."
    },
    {
      question: "What's your delivery area?",
      answer: "We currently deliver within a 25-mile radius of our studio. Delivery fees vary by distance, and we offer free delivery for orders over $75."
    },
    {
      question: "How do I care for my flowers?",
      answer: "Cut stems at an angle under running water, use the provided flower food, change water every 2-3 days, and keep away from direct sunlight and heat sources."
    },
    {
      question: "Do you do wedding flowers?",
      answer: "Yes! We specialize in wedding florals including bridal bouquets, centerpieces, ceremony arrangements, and venue decorations. Book a consultation to discuss your vision."
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "Your satisfaction is our priority. If you're not completely happy with your arrangement, contact us within 24 hours and we'll make it right with a replacement or full refund."
    },
    {
      question: "Can I schedule recurring deliveries?",
      answer: "Yes! Set up weekly, bi-weekly, or monthly flower subscriptions. Perfect for keeping your home or office fresh with seasonal blooms year-round."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#DF804D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F2EBD9]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-sm">❓</span>
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">SUPPORT</span>
            <span className="text-sm">💡</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-[#F2EBD9]/80 max-w-2xl mx-auto">
            Find quick answers to common questions about our flowers, delivery, and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#DF804D]/50 rounded-2xl transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#F2EBD9] pr-4">
                  {faq.question}
                </h3>
                <div className={`text-[#DF804D] text-2xl transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  ➕
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#DF804D]/30 to-transparent mb-4"></div>
                  <p className="text-[#F2EBD9]/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-[#DF804D] mb-4">
              Still have questions?
            </h3>
            <p className="text-[#F2EBD9]/80 mb-6 max-w-lg mx-auto">
              Our friendly team is here to help! Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@amoura.com"
                className="group bg-gradient-to-r from-[#DF804D] to-[#632111] text-white px-6 py-3 rounded-full font-semibold hover:from-[#632111] hover:to-[#DF804D] hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <span className="group-hover:animate-bounce">📧</span>
                Email Us
              </a>
              <a 
                href="tel:+1234567890"
                className="group bg-white/20 backdrop-blur-sm text-[#F2EBD9] border-2 border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <span className="group-hover:animate-pulse">📞</span>
                Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💡</span>
              <h4 className="text-lg font-bold text-[#DF804D]">Quick Tip</h4>
            </div>
            <p className="text-[#F2EBD9]/80 text-sm">
              For the longest-lasting arrangements, recut stems every few days and add fresh water with flower food.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⏰</span>
              <h4 className="text-lg font-bold text-[#DF804D]">Business Hours</h4>
            </div>
            <p className="text-[#F2EBD9]/80 text-sm">
              Mon-Sat: 8AM-7PM | Sun: 10AM-5PM<br/>
              Same-day delivery cutoff: 2PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
