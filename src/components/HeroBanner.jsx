import { useState, useEffect, useCallback } from 'react'

const slides = [
  { src: 'images/hero/hero.jpg', alt: '法式精品甜點' },
  { src: 'images/hero/hero_2.jpg', alt: '職人手作蛋糕' },
  { src: 'images/hero/hero_3.jpg', alt: '節慶禮盒' },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 400)
  }, [animating])

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((prev) => {
        const next = (prev + 1) % slides.length
        return next
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => goTo((current + 1) % slides.length)
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden" id="hero">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-xl">
            <p className="text-brand-gold font-script text-xl mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              Pâtisserie Française
            </p>
            <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
              Crafting Sweet<br />Moments of<br />
              <span className="text-brand-gold">Pure Joy</span>
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
              每一口都是味蕾的旅行，堅持使用頂級法國 AOP 認證奶油<br className="hidden md:block" />
              與當季新鮮食材，手工打造極致細膩的法式藝術感。
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
              <button
                id="hero-btn-reserve"
                className="px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-white font-medium rounded-full tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5"
              >
                立即預訂
              </button>
              <button
                id="hero-btn-explore"
                className="px-8 py-3.5 border-2 border-white/70 text-white hover:border-white hover:bg-white/10 font-medium rounded-full tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              >
                探索風味
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-300"
        aria-label="上一張"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-300"
        aria-label="下一張"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? 'w-8 h-2 bg-brand-gold'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`切換至第${idx + 1}張`}
          />
        ))}
      </div>
    </section>
  )
}
