import JoinUsCard from './cards/JoinUsCard'
import buyImg from '../assets/buy.jpg'
import sellImg from '../assets/sell.jpg'

const joinUsOptions = [
  {
    title: 'Get Started To Buy',
    image: buyImg,
    button: 'Get Started To Buy',
    link: '#',
  },
  {
    title: 'Get Started To Sell',
    image: sellImg,
    button: 'Get Started To Sell',
    link: '#',
  },
]

const JoinUs = () => (
  <section className="bg-gradient-to-b from-[#dbe6c4] to-[#bfaee6] py-12">
    <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#2a4637] mb-10 tracking-wide">JOIN US</h2>
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      {joinUsOptions.map((option) => (
        <JoinUsCard key={option.title} {...option} />
      ))}
    </div>
  </section>
)

export default JoinUs 