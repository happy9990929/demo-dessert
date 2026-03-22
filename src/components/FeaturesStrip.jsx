const features = [
  {
    id: 'premium-ingredients',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Premium Ingredients',
    subtitle: '頂級天然食材',
  },
  {
    id: 'daily-freshly-baked',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.444 0-8 2.686-8 6 0 1.473.756 2.816 2 3.82V18a1 1 0 001 1h10a1 1 0 001-1v-5.18C19.244 11.816 20 10.473 20 9c0-3.314-3.556-6-8-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h8M8 17h8" />
      </svg>
    ),
    title: 'Daily Freshly Baked',
    subtitle: '每日現做現烤',
  },
  {
    id: 'exquisite-packaging',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Exquisite Packaging',
    subtitle: '精緻禮盒包裝',
  },
]

export default function FeaturesStrip() {
  return (
    <section id="features" className="bg-brand-cream py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              id={f.id}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center mb-5 text-brand-gold group-hover:bg-brand-matcha group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="font-serif text-brand-matcha font-semibold text-lg mb-1.5">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm tracking-wider">{f.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
