import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

const tickerItems = [
  '🌿 Premium Export Quality Products',
  '🚢 Shipping to 20+ Countries Worldwide',
  '✅ FSSAI & International Certified',
  '📦 Custom Packaging Available',
  '🤝 Direct Farm to Export',
  '⭐ 10+ Years of Trusted Export Experience',
]

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'instant' })

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const location = useLocation()
  const { totalItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001 }}>

        {/* ── TICKER ── */}
        <div style={{
          background: '#C9A84C',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          padding: '8px 0',
        }}>
          <div style={{
            display: 'inline-flex',
            animation: 'ticker 28s linear infinite',
          }}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#0A0A0A',
                padding: '0 36px',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── NAVBAR ── */}
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.6)',
            borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid rgba(201,168,76,0.08)',
            backdropFilter: 'blur(20px)',
            transition: 'all 0.4s ease',
            padding: '0 5%',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            height: '70px',
          }}
        >
          {/* Logo */}
          <Link to="/" onClick={scrollTop} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '22px', fontWeight: 700,
                color: '#C9A84C', letterSpacing: '3px',
              }}>SUBRESS</span>
              <span style={{
                fontSize: '9px', letterSpacing: '6px',
                color: 'rgba(245,240,232,0.5)', textTransform: 'uppercase',
              }}>EXIM</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '40px' }} className="desktop-nav">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={scrollTop}
                style={{
                  textDecoration: 'none',
                  fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
                  color: location.pathname === link.to ? '#C9A84C' : 'rgba(245,240,232,0.7)',
                  transition: 'color 0.3s', fontWeight: 500,
                }}
                onMouseEnter={e => e.target.style.color = '#C9A84C'}
                onMouseLeave={e => e.target.style.color = location.pathname === link.to ? '#C9A84C' : 'rgba(245,240,232,0.7)'}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setCartOpen(true)}
              style={{
                position: 'relative', background: 'none', border: 'none',
                color: 'rgba(245,240,232,0.7)', cursor: 'pointer',
                transition: 'color 0.3s', padding: '4px',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.7)'}
            >
              <FiShoppingBag size={22} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{
                    position: 'absolute', top: '-6px', right: '-6px',
                    background: '#C9A84C', color: '#0A0A0A',
                    fontSize: '10px', fontWeight: 700,
                    width: '18px', height: '18px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >{totalItems}</motion.span>
              )}
            </button>

            <Link
              to="/contact"
              onClick={scrollTop}
              className="btn-primary desktop-nav"
              style={{ fontSize: '11px', padding: '10px 24px' }}
            >
              Get Quote
            </Link>

            <button onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none', border: 'none',
                color: '#C9A84C', fontSize: '24px',
                cursor: 'pointer', display: 'none',
              }}
              className="mobile-menu-btn">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                background: 'rgba(10,10,10,0.98)',
                padding: '30px',
                display: 'flex', flexDirection: 'column', gap: '24px',
                borderBottom: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={scrollTop}
                  style={{
                    textDecoration: 'none', fontSize: '14px',
                    letterSpacing: '3px', textTransform: 'uppercase', color: '#F5F0E8',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}