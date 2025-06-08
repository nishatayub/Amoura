import TestimonialCard from './cards/TestimonialCard'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'

const testimonials = [
  {
    name: 'Liam Thompson',
    country: 'UK',
    avatar: avatar1,
    rating: 5,
    text: 'Absolutely exceptional service and stunning arrangements. Amoura made my anniversary unforgettable. Highly recommended!'
  },
  {
    name: 'Isabelle Leblanc',
    country: 'France',
    avatar: avatar2,
    rating: 5,
    text: 'The flowers were fresh, beautifully arranged, and delivered on time. Amoura is my go-to for every occasion.'
  },
  {
    name: 'Maria Johnson',
    country: 'USA',
    avatar: avatar3,
    rating: 5,
    text: 'I loved the unique bouquet designs and the attention to detail. The team is friendly and professional.'
  },
  {
    name: 'Ana Nguyen',
    country: 'Australia',
    avatar: avatar4,
    rating: 5,
    text: 'Fantastic experience! The flowers lasted long and the packaging was elegant. Will order again.'
  },
]

const Testimonials = () => (
  <section className="bg-transparent py-20 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjJFQkQ5IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
    
    <div className="relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-sm">💬</span>
          <span className="text-lg font-medium text-[#DF804D] tracking-wide">TESTIMONIALS</span>
          <span className="text-sm">⭐</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        <p className="text-lg text-[#F2EBD9]/80 max-w-2xl mx-auto">
          Discover why thousands of customers trust us for their special moments
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials 