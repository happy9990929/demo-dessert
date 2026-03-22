import { useState, useRef, useEffect } from 'react'

const feedbacks = [
  {
    id: 1,
    rating: 5,
    title: '每一口都是驚喜',
    content: '檸檬塔的酸度與甜度平衡得恰到好處，塔皮酥脆不油膩。這是我在台北吃過最正統的法式甜點！',
    author: '林小姐',
    initial: 'LW',
    date: '3 天前'
  },
  {
    id: 2,
    rating: 5,
    title: '極致品味的聖多諾黑',
    content: '焦糖的脆感與千層的層次感完美混合，鮮奶油清爽而不甜膩，真的是職人等級的工藝。',
    author: '陳先生',
    initial: 'CC',
    date: '1 週前'
  },
  {
    id: 3,
    rating: 5,
    title: '夢幻的草莓蛋糕',
    content: '草莓非常新鮮，夾層的鮮奶油像雲朵一樣輕盈。家人慶生都指名這一家。',
    author: '張太太',
    initial: 'JC',
    date: '2 週前'
  },
  {
    id: 4,
    rating: 5,
    title: '巧克力控的救贖',
    content: '巧克力的濃郁度滿分，苦甜適中，配上一杯黑咖啡，就是最完美的下午茶時光。',
    author: 'Sophia H.',
    initial: 'SH',
    date: '5 天前'
  },
  {
    id: 5,
    rating: 5,
    title: '精緻的禮盒包裝',
    content: '買來送給客戶的，包裝精美大氣，客戶收到後讚不絕口，紛紛詢問在那裡買的。',
    author: '王經理',
    initial: 'WM',
    date: '2 天前'
  },
  {
    id: 6,
    rating: 5,
    title: '職人精神的千層派',
    content: '可以感覺到主理人對食材的堅持。每一層派皮都均勻酥脆，内餡卡士達醬香濃迷人。',
    author: '李小妹',
    initial: 'LL',
    date: '4 天前'
  },
  {
    id: 7,
    rating: 5,
    title: '最溫暖的實體門市',
    content: '店內氛圍非常優雅，店員服務也很有親切，在那裡用餐感受到滿滿的治癒。',
    author: 'David R.',
    initial: 'DR',
    date: '6 天前'
  },
  {
    id: 8,
    rating: 5,
    title: '療癒的下午茶之選',
    content: '不只是外型亮眼，內涵更是驚人。這是一個會讓人想無限回購的甜點品牌。',
    author: '徐小姐',
    initial: 'SH',
    date: '10 天前'
  },
  {
    id: 9,
    rating: 5,
    title: '完美融合現代與傳統',
    content: '法式傳統技法加上在地新鮮食材的創意，讓每一道甜點都像藝術品般閃耀。',
    author: '專業甜點師 Ryan',
    initial: 'RS',
    date: '1 個月前'
  },
  {
    id: 10,
    rating: 5,
    title: '純粹的喜悅',
    content: '這就是寫在標題上的 "Pure Joy"。每一口下肚，心情都變得明媚起來了。',
    author: '吳太太',
    initial: 'WT',
    date: '今天'
  }
]

export default function FeedbackSection() {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef(null)

  const slidesPerView = 3
  const maxIdx = feedbacks.length - slidesPerView

  const next = () => setCurrent((prev) => (prev >= maxIdx ? 0 : prev + 1))
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIdx : prev - 1))

  return (
    <section id="feedback" className="bg-brand-cream py-24 overflow-hidden border-t border-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-serif text-brand-green text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 tracking-wide">
          Sweet Words from Our Guests
        </h2>
        <p className="text-brand-green/60 text-lg font-script italic">
          Shared Joy & Sweet Stories
        </p>
        {/* Reviews 拿掉 (已依照要求略過顯示) */}
      </div>

      <div className="relative max-w-7xl mx-auto px-12">
        {/* Slider Container - 增加 py-12 與 px-10 避免懸停縮放時被裁切 */}
        <div className="overflow-hidden py-12 -my-12 px-10 -mx-10">
          <div 
            className="flex transition-transform duration-700 ease-in-out gap-8 px-4"
            style={{ transform: `translateX(-${current * (100 / slidesPerView)}%)` }}
          >
            {feedbacks.map((item) => (
              <div 
                key={item.id} 
                className="w-full md:w-[calc(33.333%-1rem)] flex-shrink-0"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer group border border-transparent hover:border-brand-gold/10 flex flex-col justify-between">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <h3 className="font-serif text-brand-green font-bold text-xl mb-4 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-8">
                      {item.content}
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="flex items-center gap-4 border-t border-brand-cream pt-6">
                    <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm tracking-wider">
                      {item.initial}
                    </div>
                    <div className="text-left">
                      <p className="text-brand-green font-semibold text-sm">{item.author}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-brand-cream hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center justify-center text-brand-gold group"
          aria-label="Previous Review"
        >
          <svg className="w-6 h-6 transform transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-brand-cream hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center justify-center text-brand-gold group"
          aria-label="Next Review"
        >
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator (Mobile friendly) */}
      <div className="flex justify-center gap-2 mt-12">
        {[...Array(maxIdx + 1)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full h-1.5 ${
              i === current ? 'bg-brand-gold w-8' : 'bg-brand-gold/30 w-2 hover:bg-brand-gold/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
