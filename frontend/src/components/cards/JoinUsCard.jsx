const JoinUsCard = ({ image, title, button, link }) => (
  <div className="bg-[#4b2e83] rounded-2xl shadow-lg flex flex-col items-center p-6 text-center">
    <img src={image} alt={title} className="w-40 h-40 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-serif font-bold text-[#e6cfa7] mb-4">{title}</h3>
    <a href={link} className="mt-auto bg-[#2a4637] text-[#e6cfa7] px-6 py-2 rounded-full font-semibold hover:bg-[#bfae8e] hover:text-[#2a4637] transition-all">
      {button}
    </a>
  </div>
)

export default JoinUsCard 