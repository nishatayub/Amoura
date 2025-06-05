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
  <section className="bg-gradient-to-b from-[#bfaee6] to-[#dbe6c4] py-12">
    <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#2a4637] mb-10 tracking-wide">SEE WHAT PEOPLE HAVE TO SAY ABOUT US</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      {testimonials.map((testimonial, idx) => (
        <TestimonialCard key={idx} {...testimonial} />
      ))}
    </div>
  </section>
)

export default Testimonials 