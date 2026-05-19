import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'instant' })

export default function Footer() {
  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '70px 5% 30px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '50px', marginBottom: '50px',
      }}>
        {/* Brand */}
        <div>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '26px', fontWeight: 700, color: '#C9A84C', letterSpacing: '3px' }}>SUBRESS</div>
            <div style={{ fontSize: '9px', letterSpacing: '6px', color: 'rgba(245,240,232,0.4)' }}>EXIM</div>
          </div>
          <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: '13px', lineHeight: 1.8, maxWidth: '240px' }}>
            Premium spices, pulses, rice & garments exporter from Ahmedabad, India. Trusted globally.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            {[
              { Icon: FaFacebookF, href: 'https://www.facebook.com' },
              { Icon: FaInstagram, href: 'https://www.instagram.com' },
              { Icon: FaLinkedinIn, href: 'https://www.linkedin.com' },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                width: '38px', height: '38px', border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#C9A84C', transition: 'all 0.3s', textDecoration: 'none',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.color = '#0A0A0A' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C9A84C' }}
              ><Icon size={14} /></a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>Navigation</h4>
          {['/', '/products', '/about', '/contact'].map((path, i) => (
            <Link
              key={i}
              to={path}
              onClick={scrollTop}
              style={{
                display: 'block', color: 'rgba(245,240,232,0.5)', textDecoration: 'none',
                fontSize: '13px', marginBottom: '12px', transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = '#C9A84C'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.5)'}
            >
              {['Home', 'Products', 'About', 'Contact'][i]}
            </Link>
          ))}
        </div>

        {/* Products */}
        <div>
          <h4 style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>Products</h4>
          {['Indian Spices', 'Pulses', 'Basmati Rice', 'Garments'].map((p, i) => (
            <div key={i} style={{ color: 'rgba(245,240,232,0.5)', fontSize: '13px', marginBottom: '12px' }}>{p}</div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>Contact</h4>
          {[
            { icon: FiMail, text: 'bd@subressexim.com' },
            { icon: FiPhone, text: '+91 6352 319 207' },
            { icon: FiMapPin, text: 'Ahmedabad, Gujarat, India' },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Icon size={14} color="#C9A84C" />
              <span style={{ color: 'rgba(245,240,232,0.5)', fontSize: '13px' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(201,168,76,0.1)',
        paddingTop: '24px', textAlign: 'center',
        color: 'rgba(245,240,232,0.3)', fontSize: '12px', letterSpacing: '1px',
      }}>
        © 2024 Subress Exim. All rights reserved. | Ahmedabad, India
      </div>
    </footer>
  )
}