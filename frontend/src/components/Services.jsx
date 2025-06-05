import ServiceCard from './cards/ServiceCard'
import flowerImg from '../assets/flower.jpg'
import bouquetImg from '../assets/bouquet.jpg'
import vaseImg from '../assets/vase.jpg'

const services = [
  {
    title: 'Flowers',
    image: flowerImg,
    link: '#',
  },
  {
    title: 'Bouquets',
    image: bouquetImg,
    link: '#',
  },
  {
    title: 'Vase Arrangements',
    image: vaseImg,
    link: '#',
  },
]

const Services = () => (
  <section id="services" className="bg-gradient-to-b from-[#bfcdb1] to-[#dbe6c4] py-12">
    <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#2a4637] mb-10 tracking-wide">SERVICES</h2>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
)

export default Services 