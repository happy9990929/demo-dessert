const experienceImages = [
  { src: 'images/experience/experience_1.png', alt: '療癒下午茶時光 1' },
  { src: 'images/experience/experience_2.png', alt: '療癒下午茶時光 2' },
  { src: 'images/experience/experience_3.png', alt: '療癒下午茶時光 3' },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* 文字區 */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand-gold font-script text-xl mb-3">L&apos;expérience</p>
          <h2 className="font-serif text-brand-matcha text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6">
            給你最療癒的
            <br />
            <span className="italic font-normal">午後時光</span>
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-brand-gold" />
            <span className="text-brand-gold text-lg">✦</span>
          </div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            不只是甜點，更是對生活的熱愛。從清爽的檸檬塔到濃郁的千層派，
            我們為您挑選最契合心情的甜蜜滋味。
          </p>
          <button
            id="experience-book-btn"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-matcha text-brand-matcha hover:bg-brand-matcha hover:text-white font-medium rounded-full tracking-wide transition-all duration-300"
          >
            探索更多
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* 圖片三欄 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {experienceImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                idx === 1 ? 'md:mt-10' : ''
              }`}
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-matcha/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-white font-serif text-lg font-semibold text-shadow">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 底部箭頭操作提示 */}
        <div className="flex justify-center mt-10 gap-1 text-brand-gold text-opacity-60">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-brand-gold/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  )
}
