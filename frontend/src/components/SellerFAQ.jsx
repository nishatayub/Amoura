const SellerFAQ = () => {
  const faqs = [
    {
      question: "How much does it cost to become a seller?",
      answer: "It's completely free to join! We only charge a small commission on successful sales, so you only pay when you earn."
    },
    {
      question: "What commission does Amoura charge?",
      answer: "Our commission is competitive at just 15% per sale. This includes payment processing, customer support, and marketing exposure."
    },
    {
      question: "How do I get paid?",
      answer: "Payments are processed weekly via bank transfer or PayPal. You'll receive detailed earnings reports in your seller dashboard."
    },
    {
      question: "Can I sell internationally?",
      answer: "Currently we serve domestic markets, but we're expanding internationally soon. You'll be notified when it's available in your region."
    },
    {
      question: "What support do you provide sellers?",
      answer: "We offer 24/7 seller support, marketing assistance, photography guidelines, business analytics, and regular workshops."
    },
    {
      question: "How do I handle returns and refunds?",
      answer: "We handle all customer service including returns and refunds. Our policies protect both sellers and customers while maintaining quality standards."
    }
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-2xl">❓</span>
            <span className="text-lg font-medium text-[#DF804D] tracking-wide">SELLER FAQ</span>
            <span className="text-2xl">💡</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-[#F2EBD9]/80 max-w-3xl mx-auto">
            Everything you need to know about selling on Amoura
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-[#F2EBD9] pr-4">{faq.question}</h3>
                <div className="text-[#DF804D] text-2xl group-open:rotate-180 transition-transform duration-300">
                  ▼
                </div>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-[#F2EBD9]/80 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#DF804D]/20 to-[#F2EBD9]/20 rounded-3xl p-8 border border-[#DF804D]/30">
          <h3 className="text-2xl font-serif font-bold text-[#F2EBD9] mb-4">
            Still Have Questions?
          </h3>
          <p className="text-[#F2EBD9]/80 mb-6 max-w-2xl mx-auto">
            Our seller support team is here to help you every step of the way
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#DF804D] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#632111] transition-colors">
              Contact Seller Support
            </button>
            <button className="border border-[#DF804D] text-[#DF804D] px-6 py-3 rounded-full font-semibold hover:bg-[#DF804D] hover:text-white transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SellerFAQ
