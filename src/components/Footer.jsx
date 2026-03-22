

const navLinks = ['首頁', '招牌塔類', '職人手作蛋糕', '節慶禮盒', '實體門市']



export default function Footer() {
  return (
    <footer className="bg-brand-darkgrey text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 品牌 Logo 與簡介 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="images/logo.png"
                alt="LE PETIT DÉLICE"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="font-serif font-semibold text-base tracking-widest">
                LE PETIT DÉLICE
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              法式精品甜點，每一口都是味蕾的探索旅程。
              以職人精神打造屬於您的甜點記憶。
            </p>

          </div>

          {/* 導航連結 */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-5 text-brand-gold">品項選單</h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 text-sm hover:text-white hover:text-brand-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-5 text-brand-gold">聯絡我們</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>台北市大安區仁愛路四段 100 號<br />Le Petit Délice 精品甜點</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(02) 2700-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>週二至週日 10:00 – 20:00<br />週一公休</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 分隔線與版權 */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>© 2024 LE PETIT DÉLICE. All Rights Reserved.</span>
          <span className="font-script text-sm text-brand-gold/60">Crafted with love ✦</span>
        </div>
      </div>
    </footer>
  )
}
