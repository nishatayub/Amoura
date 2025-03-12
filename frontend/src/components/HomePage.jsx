import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-pink-50 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center h-150">
          <div className="rounded-3xl overflow-hidden bg-green-200 p-6">
            <img 
              src="/api/placeholder/400/400" 
              alt="Person lighting a candle" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-cursive text-gray-900">Brighten up</h1>
            <p className="text-lg font-medium uppercase text-gray-800">
              ZESTWAX BRINGS YOU VIBRANT CANDLES MADE WITH HEART.
            </p>
            <p className="text-lg font-medium text-gray-800">
              DESIGNED TO MAKE YOUR HOME GLOW.
            </p>
            <Link to='/my-products' className="self-end bg-white rounded-full px-6 py-2 text-gray-800 font-medium text-sm hover:bg-gray-100 transition">
              Buy now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Banner Section */}
      <section className="bg-yellow-100 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-800 font-medium text-sm">
            HANDMADE SCENTED AND UNSCENTED CANDLES MADE IN MELBOURNE, AUSTRALIA
          </p>
        </div>
      </section>
      
      {<section className="bg-pink-100 py-16 relative">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Shaped', image: '/api/placeholder/200/200', color: 'bg-blue-200' },
            { name: 'Vessels', image: '/api/placeholder/200/200', color: 'bg-green-200' },
            { name: 'Tapers', image: '/api/placeholder/200/200', color: 'bg-yellow-100' }
          ].map((category) => (
            <div key={category.name} className="flex flex-col items-center gap-4 transform hover:-translate-y-2 transition-all duration-300">
              <div className={`${category.color} w-48 h-48 rounded-full overflow-hidden flex items-center justify-center p-4 shadow-md`}>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-auto"
                />
              </div>
              <a 
                href={`#${category.name.toLowerCase()}`} 
                className="text-gray-800 hover:text-pink-400 transition-colors duration-300 border-b border-gray-800 pb-1 text-sm font-medium tracking-wider"
              >
                {category.name}
              </a>
            </div>
          ))}
        </div>
        
        {/* Shop Now Sidebar */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-pink-200 flex flex-col items-center justify-center">
          <div className="rotate-90 text-lg md:text-xl font-medium text-gray-800 whitespace-nowrap tracking-wide rounded-4xl">
            SHOP NOW
          </div>
          <div className="mt-4">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22L12 2M12 2L2 12M12 2L22 12" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>}
      
      {/* About Section */}
<section className="bg-blue-100 py-12">
  <div className="container mx-auto px-4 grid md:grid-cols-2 items-center">
    <div className="flex flex-wrap gap-3">
      {Array(6).fill(0).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="h-0.5 bg-white rounded-full w-24"></div>
          <div className="h-0.5 bg-white rounded-full w-12"></div>
          <div className="h-0.5 bg-white rounded-full w-6"></div>
        </div>
      ))}
    </div>

    <div className="flex flex-col bg-blue-50 rounded-3xl p-8 shadow-sm">
      <div className="border-b border-blue-200 pb-4">
        <h2 className="text-3xl font-medium text-gray-800 font-cursive">WARM GLOWS</h2>
        <h2 className="text-3xl font-medium text-gray-800 font-cursive">FUZZY FEELS...</h2>
      </div>

      <div className="space-y-4 text-gray-700">
        <p className="font-medium text-lg">Welcome to Zestwax</p>
        <p className="leading-relaxed">
          We&apos;re a homespun business dedicated to bringing light and style to your home... 
          no matter your home&apos;s aesthetic.
        </p>
        <p className="leading-relaxed">
          We craft and shape each of our candles by hand using our unique method, 
          uniting the best in natural and sustainable ingredients.
        </p>
      </div>
    </div>
  </div>
</section>

      
      {/* Second Banner */}
      <section className="bg-pink-100 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-800 font-medium text-sm">
            HANDMADE SCENTED AND UNSCENTED CANDLES MADE IN MELBOURNE, AUSTRALIA
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-orange-200 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Icons */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-100 rounded-2xl p-4 w-32 h-32 flex items-center justify-center">
                <span className="font-cursive text-xl text-purple-500">Zest Wax</span>
              </div>
              <div className="bg-yellow-200 rounded-full w-24 h-24 flex items-center justify-center">
                <span>☀️</span>
              </div>
              <div className="bg-pink-200 rounded-2xl w-24 h-16 flex items-center justify-center">
                <span className="font-cursive text-pink-500">zestwax</span>
              </div>
            </div>
          </div>
          
          {/* Brand Info */}
          <div className="bg-pink-200 rounded-full p-6 flex flex-col items-center justify-center text-center">
            <div className="font-cursive text-xl mb-2">ZESTWAX HANDMADE CANDLES</div>
            <div className="text-sm font-medium">MELBOURNE AUSTRALIA</div>
            <div className="mt-4 text-sm">
              ZESTY, VIBRANT CANDLES MADE WITH HEART
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-800">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                {['CONTACT', 'ABOUT', 'SHOP NOW'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-700 hover:text-pink-400 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-800">SOCIALS</h3>
              <ul className="space-y-2 text-sm">
                {['INSTAGRAM', 'PINTEREST', 'FACEBOOK'].map((social) => (
                  <li key={social}>
                    <a href={`#${social.toLowerCase()}`} className="text-gray-700 hover:text-pink-400 transition-colors duration-300">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;