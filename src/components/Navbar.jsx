import { useState, useEffect } from 'react'


const navLinks = ['首頁', '招牌塔類', '職人手作蛋糕', '節慶禮盒', '實體門市']

/**
 * Navbar component with Jelly v3 (Scale + Skew)
 * Updated: 2026-03-21 18:43
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    console.log('--- Jelly v3 (Skew + Scale) Loaded ---');
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="images/logo.png"
            alt="LE PETIT DÉLICE Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-serif font-semibold text-lg text-brand-green tracking-widest leading-tight hidden sm:block">
            LE PETIT DÉLICE
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-gold hover:bg-brand-cream/30 rounded-full tracking-wide transition-all duration-300 relative group origin-center"
                >
                  {link}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-gold scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-center" />
                </a>
              </li>
            ))}
          </ul>


        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-brand-matcha"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="開啟選單"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-t border-brand-cream ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a 
                href="#" 
                className="text-sm font-medium text-gray-700 hover:text-brand-gold inline-flex w-full px-4 py-2 hover:bg-brand-cream/30 transform transition-all rounded-lg" 
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}

        </ul>
      </div>
    </header>
  )
}
// SYNC TAG: JELLY_V3_FINAL
