
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGlobe, FiAward, FiPackage, FiUsers } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15 } })
}

const stats = [
  { icon: FiGlobe, number: '20+', label: 'Countries Served' },
  { icon: FiPackage, number: '500+', label: 'Products Exported' },
  { icon: FiAward, number: '10+', label: 'Years Experience' },
  { icon: FiUsers, number: '1000+', label: 'Happy Clients' },
]

const categories = [
  {
    title: 'Indian Spices',
    desc: 'Turmeric, Red Chilli, Cumin, Cardamom & more — sourced from finest Indian farms.',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    tag: 'spices'
  },
  {
    title: 'Pulses',
    desc: 'Chickpeas, Toor Dal, Moong Dal — pure nutrition, zero compromise.',
    img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
    tag: 'pulses'
  },
  {
    title: 'Premium Rice',
    desc: 'Basmati, Sella, Raw Rice — long grain, aromatic, export quality.',
    img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=80',
    tag: 'rice'
  },
  {
    title: 'Garments',
    desc: 'Men\'s, Women\'s & Cotton wear — modern fashion meets comfort.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tag: 'garments'
  },
]

export default function Home() {
  return (
    <div style={{ background: '#0A0A0A' }}>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', position: 'relative',
        display: 'flex', alignItems: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.2)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 50%, rgba(201,168,76,0.08) 100%)',
        }} />

        {/* Decorative lines */}
        <div style={{
          position: 'absolute', top: 0, right: '15%',
          width: '1px', height: '100%',
          background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
        }} />

        <div style={{ position: 'relative', padding: '0 8%', maxWidth: '900px' }}>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="section-tag">Est. 2014 — Ahmedabad, India</span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(52px, 8vw, 110px)',
              fontWeight: 300, lineHeight: 0.95,
              color: '#F5F0E8', marginBottom: '30px',
            }}
          >
            Global<br />
            <span style={{ color: '#C9A84C', fontWeight: 700 }}>Excellence</span><br />
            in Export
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            style={{
              fontSize: '16px', color: 'rgba(245,240,232,0.6)',
              maxWidth: '480px', lineHeight: 1.8, marginBottom: '48px',
            }}
          >
            Premium spices, pulses, rice & garments from the heart of India —
            delivered to 20+ countries with unmatched quality and trust.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Link to="/products" className="btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn-outline">Get a Quote</Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute', bottom: '40px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}
        >
          <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(245,240,232,0.4)' }}>SCROLL</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)' }} />
        </motion.div>
      </section>

      {/* STATS */}
      <section style={{
        padding: '80px 8%',
        background: '#111',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
        }}>
          {stats.map(({ icon: Icon, number, label }, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden"
              whileInView="show" custom={i}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <Icon size={28} color="#C9A84C" style={{ marginBottom: '16px' }} />
              <div style={{
                fontFamily: 'Cormorant Garamond', fontSize: '52px',
                fontWeight: 700, color: '#C9A84C', lineHeight: 1,
              }}>{number}</div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(245,240,232,0.5)', marginTop: '8px', textTransform: 'uppercase' }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '100px 8%' }}>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <span className="section-tag">What We Export</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: '#F5F0E8' }}>
            Our Product <span style={{ color: '#C9A84C', fontWeight: 600 }}>Categories</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2px',
        }}>
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i}
              viewport={{ once: true }}
              style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', height: '420px' }}
              whileHover="hover"
            >
              <motion.div
                variants={{ hover: { scale: 1.08 } }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${cat.img})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.3) 100%)',
              }} />
              <motion.div
                variants={{ hover: { y: -8 } }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '36px 28px',
                }}
              >
                <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', marginBottom: '10px', textTransform: 'uppercase' }}>{cat.tag}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '26px', fontWeight: 600, color: '#F5F0E8', marginBottom: '12px' }}>{cat.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.6)', lineHeight: 1.7 }}>{cat.desc}</p>
                <Link to={`/products?category=${cat.tag}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: '#C9A84C', textDecoration: 'none', fontSize: '12px',
                  letterSpacing: '2px', textTransform: 'uppercase', marginTop: '20px',
                }}>
                  View All <FiArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={{
        padding: '100px 8%',
        background: '#111',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center',
        }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <span className="section-tag">Why Choose Us</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: '#F5F0E8', marginBottom: '30px' }}>
              Trusted by Buyers<br /><span style={{ color: '#C9A84C', fontWeight: 600 }}>Across the Globe</span>
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '14px', lineHeight: 1.9, marginBottom: '40px' }}>
              We combine decades of expertise in Indian agriculture and textiles
              with modern export standards. Every product is quality-checked,
              certified, and delivered on time.
            </p>
            <Link to="/about" className="btn-primary">Our Story</Link>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { title: 'Quality Certified', desc: 'All products meet international food safety and export standards.' },
              { title: 'Direct Sourcing', desc: 'We work directly with farmers and manufacturers — no middlemen.' },
              { title: 'Timely Delivery', desc: 'Reliable logistics ensuring your order arrives on schedule.' },
              { title: 'Custom Orders', desc: 'Flexible packaging, quantities and labeling for your needs.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" custom={i}
                viewport={{ once: true }}
                style={{
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  padding: '24px', border: '1px solid rgba(201,168,76,0.15)',
                  background: 'rgba(201,168,76,0.03)',
                  transition: 'border-color 0.3s',
                }}
                whileHover={{ borderColor: 'rgba(201,168,76,0.4)' }}
              >
                <div style={{
                  width: '8px', height: '8px', background: '#C9A84C',
                  borderRadius: '50%', marginTop: '6px', flexShrink: 0,
                }} />
                <div>
                  <h4 style={{ color: '#F5F0E8', fontSize: '15px', marginBottom: '6px', fontFamily: 'Cormorant Garamond', fontWeight: 600 }}>{item.title}</h4>
                  <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: '13px', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* CTA BANNER */}
      <section style={{
        padding: '100px 8%', textAlign: 'center',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1508 50%, #0A0A0A 100%)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="section-tag">Ready to Export?</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond', fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 300, color: '#F5F0E8', margin: '20px 0 30px',
          }}>
            Let's Build a <span style={{ color: '#C9A84C', fontWeight: 700 }}>Global Partnership</span>
          </h2>
          <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: '15px', maxWidth: '520px', margin: '0 auto 48px', lineHeight: 1.8 }}>
            Whether you need a small sample order or bulk supply — we're ready to serve you with the best of India.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Request a Quote</Link>
            <Link to="/products" className="btn-outline">Browse Products</Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}