import { useState } from 'react'
import Person1 from '../assets/pimg1.jpg'
import Person2 from '../assets/pimg2.jpg'
import Person3 from '../assets/pimg3.jpg'
import Person4 from '../assets/pimg4.jpg'
import Person5 from '../assets/pimg5.jpg'
import Person6 from '../assets/pimg6.jpg'


const InstagramGallery = () => {
  // Sample Instagram-style posts data
  const posts = [
    {
      id: 1,
      image: Person1,
      likes: 124,
      caption: 'Fresh morning roses',
      hashtags: '#amoura #roses #fresh'
    },
    {
      id: 2,
      image: Person2,
      likes: 89,
      caption: 'Wedding bouquet perfection',
      hashtags: '#wedding #bouquet #love'
    },
    {
      id: 3,
      image: Person3,
      likes: 156,
      caption: 'Daisy baby',
      hashtags: '#sunflowers #bright #joy'
    },
    {
      id: 4,
      image: Person4,
      likes: 203,
      caption: 'Vibrant mixed arrangement that gave me peace',
      hashtags: '#lilies #elegant #pure'
    },
    {
      id: 5,
      image: Person5,
      likes: 167,
      caption: 'I really be giving myself the Rose i expected from others these days',
      hashtags: '#colorful #mixed #vibrant'
    },
    {
      id: 6,
      image: Person6,
      likes: 92,
      caption: 'Showering myself with my minimal Bouquet',
      hashtags: '#red #roses #romantic'
    }
  ]

  const [selectedPost, setSelectedPost] = useState(null)

  // Render Section Header Component
  const renderSectionHeader = () => (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="text-sm">📸</span>
        <span className="text-lg font-medium text-[#DF804D] tracking-wide">FOLLOW US</span>
        <span className="text-sm">🌸</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
        Our <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Instagram</span> Gallery
      </h2>
      <p className="text-xl text-[#F2EBD9]/80 max-w-2xl mx-auto mb-6">
        Discover daily floral inspiration and behind-the-scenes moments
      </p>
      <a 
        href="https://instagram.com/amoura" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DF804D] to-[#632111] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
      >
        <span>📱</span>
        @amoura
      </a>
    </div>
  )

  // Render Instagram Grid Component
  const renderInstagramGrid = () => (
    <div className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div 
            key={post.id}
            className="group relative aspect-square bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            onClick={() => setSelectedPost(post)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Post Image */}
            <img 
              src={post.image} 
              alt={post.caption}
              className="w-full h-full object-cover"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <span>❤️</span>
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <span>💬</span>
                </div>
                <p className="text-sm px-2">{post.caption}</p>
              </div>
            </div>

            {/* Instagram-style corner icon */}
            <div className="absolute top-3 right-3 text-white/80 text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              📱
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // Render Call to Action Component
  const renderCallToAction = () => (
    <div className="mb-16">
      <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
        <h3 className="text-2xl font-serif font-bold text-[#b95d2b] mb-4">
          Share Your Amoura Moments
        </h3>
        <p className="text-[#F2EBD9]/80 mb-6 max-w-2xl mx-auto">
          Tag us @amoura and use #AmouraMoments to be featured in our gallery! 
          We love seeing how our flowers brighten your special occasions.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-[#DF804D]/20 text-[#b95d2b] px-4 py-2 rounded-full text-sm font-medium">
            #AmouraMoments
          </span>
          <span className="bg-[#DF804D]/20 text-[#b95d2b] px-4 py-2 rounded-full text-sm font-medium">
            #FloralJoy
          </span>
          <span className="bg-[#DF804D]/20 text-[#b95d2b] px-4 py-2 rounded-full text-sm font-medium">
            #BloomWithLove
          </span>
        </div>
      </div>
    </div>
  )

  // Render Stats Component
  const renderStats = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center">
        <div className="text-3xl font-bold text-[#DF804D] mb-2">5.2K</div>
        <div className="text-[#F2EBD9]/70 text-sm">Followers</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#DF804D] mb-2">1.8K</div>
        <div className="text-[#F2EBD9]/70 text-sm">Posts</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#DF804D] mb-2">12.5K</div>
        <div className="text-[#F2EBD9]/70 text-sm">Likes</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#DF804D] mb-2">890</div>
        <div className="text-[#F2EBD9]/70 text-sm">Features</div>
      </div>
    </div>
  )

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2EBD9]/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section 1: Header */}
        {renderSectionHeader()}

        {/* Section 2: Instagram Grid */}
        {renderInstagramGrid()}

        {/* Section 3: Call to Action */}
        {renderCallToAction()}

        {/* Section 4: Stats */}
        {renderStats()}
      </div>

      {/* Modal for selected post */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 max-w-md w-full border border-white/20 shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#F2EBD9]">@amoura</h3>
              <button 
                onClick={() => setSelectedPost(null)}
                className="text-[#F2EBD9] text-2xl hover:text-[#DF804D] transition-colors"
              >
                ✕
              </button>
            </div>
            
            <img 
              src={selectedPost.image} 
              alt={selectedPost.caption}
              className="w-full h-full object-cover rounded-2xl"
            />
            
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span>❤️</span>
                  <span className="text-[#F2EBD9] font-semibold">{selectedPost.likes} likes</span>
                </div>
                <span className="text-[#F2EBD9]/60 text-sm">2 hours ago</span>
              </div>
              
              <p className="text-[#F2EBD9]">
                <span className="font-semibold">amoura</span> {selectedPost.caption}
              </p>
              
              <p className="text-[#DF804D] text-sm">{selectedPost.hashtags}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default InstagramGallery
