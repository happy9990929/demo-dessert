import { useEffect, useRef } from 'react'

const products = [
  { src: 'images/products/trat/tart_lemon.png', name: '檸檬塔' },
  { src: 'images/products/cake/cake_millefeuille.png', name: '千層派' },
  { src: 'images/products/trat/tart_raspberry.png', name: '覆盆子塔' },
  { src: 'images/products/cake/cake_chocolate.png', name: '巧克力蛋糕' },
  { src: 'images/products/trat/tart_matcha.png', name: '抹茶塔' },
  { src: 'images/products/trat/tart_pistachio.png', name: '開心果塔' },
  { src: 'images/products/cake/cake_strawberry_shortcake.png', name: '草莓蛋糕' },
  { src: 'images/products/trat/tart_mango.png', name: '芒果塔' },
  // 複製一份讓無縫輪播
  { src: 'images/products/trat/tart_lemon.png', name: '檸檬塔' },
  { src: 'images/products/cake/cake_millefeuille.png', name: '千層派' },
  { src: 'images/products/trat/tart_raspberry.png', name: '覆盆子塔' },
  { src: 'images/products/cake/cake_chocolate.png', name: '巧克力蛋糕' },
  { src: 'images/products/trat/tart_matcha.png', name: '抹茶塔' },
  { src: 'images/products/trat/tart_pistachio.png', name: '開心果塔' },
  { src: 'images/products/cake/cake_strawberry_shortcake.png', name: '草莓蛋糕' },
  { src: 'images/products/trat/tart_mango.png', name: '芒果塔' },
]

export default function ConceptSection() {
  return (
    <section id="concept" className="bg-[#6b7a3f] py-20 overflow-hidden">
      <div className="max-width-7xl mx-auto px-6 text-center mb-12">
        {/* 上方裝飾線 */}
        <p className="text-brand-gold font-script text-xl mb-3">Our Signature</p>
        <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Artisan Craftsmanship
          <br />
          <span className="italic font-normal text-brand-gold">In Every Bite</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4 mb-6">
          <span className="w-12 h-px bg-brand-gold/50" />
          <span className="text-brand-gold text-lg">✦</span>
          <span className="w-12 h-px bg-brand-gold/50" />
        </div>
        <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          從經典的馬卡龍到極致工藝的聖多諾黑，
          <br className="hidden md:block" />
          我們將法式傳統與現代創意完美結合。
        </p>
      </div>

      {/* 無限自動輪播 */}
      <div className="relative w-full overflow-hidden py-4">
        {/* 左右漸層蒙版 */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#6b7a3f] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#6b7a3f] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-scroll" style={{ width: 'max-content' }}>
          {products.map((p, idx) => (
            <div
              key={idx}
              className="w-52 md:w-64 flex-shrink-0 group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white/10 aspect-square shadow-lg group-hover:shadow-brand-gold/20 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <img
                  src={p.src}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-serif text-base font-semibold">{p.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-white/60 text-sm mb-6">精選法式甜點 · 每日限量製作</p>
        <button
          id="concept-explore-btn"
          className="inline-flex items-center gap-2 px-10 py-4 bg-brand-gold hover:bg-brand-gold-light text-white font-medium rounded-full tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5"
        >
          瀏覽全部品項
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
