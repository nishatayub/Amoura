import { useState, useEffect } from 'react'

const AnimatedSection = ({ children, animation = 'fadeInUp', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`animated-${delay}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [delay])

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out'
    const animations = {
      fadeInUp: isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
      fadeInLeft: isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0',
      fadeInRight: isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0',
      scaleIn: isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
      slideDown: isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
    }
    return `${baseClass} ${animations[animation]}`
  }

  return (
    <div id={`animated-${delay}`} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}

const FloatingElements = () => {
  return (
    <>
      {/* Floating gems */}
      <div className="fixed top-20 left-10 w-3 h-3 bg-gradient-to-br from-[#DF804D] to-[#632111] rounded-full animate-float pointer-events-none z-10 shadow-lg"></div>
      <div className="fixed top-40 right-20 w-4 h-4 bg-gradient-to-br from-[#F2EBD9] to-[#AFAB9F] rounded-full animate-float-delayed pointer-events-none z-10 shadow-lg"></div>
      <div className="fixed bottom-40 left-16 w-2 h-2 bg-gradient-to-br from-[#632111] to-[#DF804D] rounded-full animate-float-slow pointer-events-none z-10 shadow-lg"></div>
      <div className="fixed bottom-60 right-12 w-3 h-3 bg-gradient-to-br from-[#AFAB9F] to-[#F2EBD9] rounded-full animate-float pointer-events-none z-10 shadow-lg"></div>
      
      {/* Sparkle effects */}
      <div className="fixed top-1/3 left-1/4 text-yellow-300/60 animate-sparkle pointer-events-none z-10">💎</div>
      <div className="fixed top-2/3 right-1/3 text-amber-300/60 animate-sparkle-delayed pointer-events-none z-10">✨</div>
    </>
  )
}

const ParallaxBackground = ({ children, speed = 0.5 }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="relative"
      style={{ 
        transform: `translateY(${scrollY * speed}px)` 
      }}
    >
      {children}
    </div>
  )
}

const HoverCard = ({ children, className = '', hoverScale = 1.05 }) => {
  return (
    <div 
      className={`transition-all duration-300 ease-out hover:scale-${Math.round(hoverScale * 100)} hover:shadow-2xl cursor-pointer group ${className}`}
    >
      {children}
    </div>
  )
}

const TypewriterText = ({ text, speed = 100, className = '' }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const CountUpNumber = ({ target, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return

    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      setCount(prev => {
        const next = prev + increment
        if (next >= target) {
          clearInterval(timer)
          return target
        }
        return next
      })
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration, started])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`counter-${target}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [target])

  return (
    <span id={`counter-${target}`} className={className}>
      {Math.round(count)}
    </span>
  )
}

const GradientButton = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-[#DF804D] to-[#632111] hover:from-[#632111] hover:to-[#DF804D]',
    secondary: 'bg-gradient-to-r from-[#F2EBD9] to-[#AFAB9F] hover:from-[#AFAB9F] hover:to-[#F2EBD9] text-[#632111]',
    outline: 'bg-white/20 border-2 border-[#DF804D] hover:bg-[#DF804D] hover:border-[#DF804D]'
  }

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        text-white font-bold py-3 px-6 rounded-full
        transform transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-xl
        active:scale-95
        relative overflow-hidden
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
    </button>
  )
}

const AnimatedBorder = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#DF804D] via-[#F2EBD9] to-[#DF804D] animate-gradient-x"></div>
      <div className="relative bg-white/10 backdrop-blur-md m-1 rounded-xl">
        {children}
      </div>
    </div>
  )
}

// Enhanced animations and transitions component
const AnimationsAndTransitions = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <FloatingElements />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-sm animate-bounce">💎</span>
              <span className="text-lg font-medium text-[#DF804D] tracking-wide">LUXURY IN MOTION</span>
              <span className="text-sm animate-bounce delay-500">✨</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2EBD9] mb-6 leading-tight">
              Timeless <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Elegance</span> & <span className="bg-gradient-to-r from-[#DF804D] to-[#F2EBD9] bg-clip-text text-transparent">Sophistication</span>
            </h2>
            <TypewriterText 
              text="Experience the beauty of sophisticated jewelry through smooth animations and luxurious interactions"
              className="text-xl text-[#F2EBD9]/80 max-w-2xl mx-auto"
            />
          </div>
        </AnimatedSection>

        {/* Interactive Cards Demo */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <HoverCard className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl h-full">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce">💍</div>
                <h3 className="text-xl font-bold text-[#DF804D] mb-3">Smooth Transitions</h3>
                <p className="text-[#F2EBD9]/80">Every interaction feels fluid and natural with carefully crafted jewelry displays</p>
              </div>
            </HoverCard>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={400}>
            <HoverCard className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl h-full">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-pulse">💎</div>
                <h3 className="text-xl font-bold text-[#DF804D] mb-3">Luxury Interactions</h3>
                <p className="text-[#F2EBD9]/80">Delightful feedback on every click, hover, and selection of precious jewelry</p>
              </div>
            </HoverCard>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={600}>
            <HoverCard className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl h-full">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-spin">👑</div>
                <h3 className="text-xl font-bold text-[#DF804D] mb-3">Premium Quality</h3>
                <p className="text-[#F2EBD9]/80">Optimized experiences that showcase luxury without compromising performance</p>
              </div>
            </HoverCard>
          </AnimatedSection>
        </div>

        {/* Statistics with Count Up */}
        <AnimatedSection animation="slideDown" delay={800}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#DF804D] mb-2">
                  <CountUpNumber target={500} />+
                </div>
                <div className="text-[#F2EBD9]/70">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#DF804D] mb-2">
                  <CountUpNumber target={800} />+
                </div>
                <div className="text-[#F2EBD9]/70">Jewelry Pieces</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#DF804D] mb-2">
                  <CountUpNumber target={25} />+
                </div>
                <div className="text-[#F2EBD9]/70">Designer Collections</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#DF804D] mb-2">
                  <CountUpNumber target={99} />%
                </div>
                <div className="text-[#F2EBD9]/70">Satisfaction</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Interactive Button Demo */}
        <AnimatedSection animation="fadeInUp" delay={1000}>
          <div className="text-center">
            <AnimatedBorder className="inline-block p-6">
              <GradientButton className="text-lg px-8 py-4">
                <span className="flex items-center gap-2">
                  <span className="animate-pulse">🌸</span>
                  Experience the Magic
                  <span className="animate-bounce">✨</span>
                </span>
              </GradientButton>
            </AnimatedBorder>
          </div>
        </AnimatedSection>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes sparkle-delayed {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 3s ease-in-out infinite; }
        .animate-sparkle-delayed { animation: sparkle-delayed 4s ease-in-out infinite 1s; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
      `}</style>
    </section>
  )
}

export default AnimationsAndTransitions
export { AnimatedSection, FloatingElements, ParallaxBackground, HoverCard, TypewriterText, CountUpNumber, GradientButton, AnimatedBorder }
