import ServiceCard from './cards/ServiceCard'
import flowerImg from '../assets/flower.jpg'
import bouquetImg from '../assets/bouquet.jpg'
import vaseImg from '../assets/vase.jpg'

const services = [
  {
    title: 'Flowers',
    image: flowerImg,
    icon: '🌼',
    description: 'Fresh, hand-picked flowers for every occasion, delivered with care.',
    link: '#',
  },
  {
    title: 'Bouquets',
    image: bouquetImg,
    icon: '💐',
    description: 'Artfully arranged bouquets to express your feelings beautifully.',
    link: '#',
  },
  {
    title: 'Vase Arrangements',
    image: vaseImg,
    icon: '🏺',
    description: 'Elegant vase arrangements to brighten up any space, events and more.',
    link: '#',
  },
]

const Services = () => (
  <section id="services" className="relative overflow-hidden py-20 bg-transparent">
    <div className="absolute inset-0 bg-gradient-to-br from-[#DF804D]/5 via-transparent to-[#F2EBD9]/5"></div>
    <div className="relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-sm">🌺</span>
          <span className="text-lg font-medium text-[#DF804D] tracking-wide">OUR SERVICES</span>
          <span className="text-sm">✨</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
          Floral <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Artistry</span>
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">Discover our range of floral creations, crafted for every moment.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  </section>
)

export default Services 