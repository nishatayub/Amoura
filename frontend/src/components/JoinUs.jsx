import JoinUsCard from './cards/JoinUsCard'
import buyImg from '../assets/buy.jpg'
import sellImg from '../assets/sell.jpg'

const joinUsOptions = [
  {
    title: 'Get Started To Buy',
    image: buyImg,
    button: 'Start Shopping',
    link: '#',
    subtitle: 'Discover Beautiful Blooms',
    description: 'Browse our curated collection of fresh flowers, custom bouquets, and seasonal arrangements.',
    features: [
      'Fresh daily flowers',
      'Custom bouquet designs', 
      'Same-day delivery',
      'Special occasion packages'
    ],
    icon: '🛍️'
  },
  {
    title: 'Get Started To Sell',
    image: sellImg,
    button: 'Join as Seller',
    link: '#',
    subtitle: 'Grow Your Floral Business',
    description: 'Connect with customers, showcase your beautiful arrangements, and build your floral empire.',
    features: [
      'Easy product listing',
      'Order management tools',
      'Analytics dashboard',
      '24/7 seller support'
    ],
    icon: '🌺'
  },
]

const JoinUs = () => (
  <section className="py-20 bg-transparent relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#DF804D]/5 via-transparent to-[#F2EBD9]/5"></div>
    <div className="relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-sm">🤝</span>
          <span className="text-lg font-medium text-[#DF804D] tracking-wide">JOIN US</span>
          <span className="text-sm">🌟</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] bg-clip-text text-transparent">
          Start Your Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're looking to buy beautiful flowers or sell your floral creations, we have the perfect platform for you
        </p>
      </div>
      
      {/* Horizontally spread cards with more spacing */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 px-6">
        {joinUsOptions.map((option) => (
          <JoinUsCard key={option.title} {...option} />
        ))}
      </div>
    </div>
  </section>
)

export default JoinUs 