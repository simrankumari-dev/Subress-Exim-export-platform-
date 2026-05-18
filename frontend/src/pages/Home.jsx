import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGlobe, FiAward, FiPackage, FiUsers } from 'react-icons/fi'

import masale from "../assets/masale.png"
import pulses from "../assets/pulses.png"
import garment from "../assets/garments.png"
import rice from "../assets/rice.jpg"

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
    desc: 'Turmeric, Red Chilli, Cumin, Cardamom — sourced from finest Indian farms.',
    img: masale,
    tag: 'spices'
  },
  {
    title: 'Pulses',
    desc: 'Chickpeas, Toor Dal, Moong Dal — pure nutrition, zero compromise.',
    img: pulses,
    tag: 'pulses'
  },
  {
    title: 'Premium Rice',
    desc: 'Basmati, Sella, Raw Rice — long grain, aromatic, export quality.',
    img: rice,
    tag: 'rice'
  },
  {
    title: 'Garments',
    desc: "Men's, Women's & Cotton wear — modern fashion meets comfort.",
    img: garment,
    tag: 'garments'
  },
]

const tickerItems = [
  '🌿 Premium Export Quality Products',
  '🚢 Shipping to 20+ Countries Worldwide',
  '✅ FSSAI & International Certified',
  '📦 Custom Packaging Available',
  '🤝 Direct Farm to Export',
  '⭐ 10+ Years of Trusted Export Experience',
]

export default function Home() {
  return (
    <div style={{ background: '#0A0A0A' }}>

      {/* ── RUNNING TICKER ── */}
      <div style={{
        background: '#C9A84C',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '9px 0',
        borderBottom: '1px solid rgba(201,168,76,0.4)',
      }}>
        <div style={{
          display: 'inline-flex',
          animation: 'ticker 28s linear infinite',
        }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              padding: '0 40px',
            }}>
              {item}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes ticker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.18)',
        }} />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(120deg, rgba(10,10,10,0.97) 55%, rgba(201,168,76,0.06) 100%)',
        }} />

        {/* Subtle corner glow */}
        <div style={{
          position: 'absolute', top: '10%', right: 0,
          width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', padding: '0 8%', maxWidth: '860px' }}>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span style={{
              display: 'inline-block',
              border: '1px solid rgba(201,168,76,0.45)',
              color: '#C9A84C',
              fontSize: '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              padding: '6px 14px',
              marginBottom: '32px',
            }}>
              Est. 2014 — Ahmedabad, India
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(54px, 8vw, 108px)',
              fontWeight: 300,
              lineHeight: 0.93,
              color: '#F5F0E8',
              marginBottom: '32px',
              letterSpacing: '-1px',
            }}
          >
            Global<br />
            <span style={{ color: '#C9A84C', fontWeight: 700, fontStyle: 'italic' }}>Excellence</span><br />
            in Export
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            style={{
              fontSize: '15px',
              color: 'rgba(245,240,232,0.55)',
              maxWidth: '440px',
              lineHeight: 1.85,
              marginBottom: '48px',
            }}
          >
            Premium spices, pulses, rice & garments from the heart of India —
            delivered across 20+ countries with trust and unmatched quality.
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
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute', bottom: '40px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}
        >
          <span style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(245,240,232,0.35)', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <div style={{
            width: '1px', height: '44px',
            background: 'linear-gradient(to bottom, rgba(201,168,76,0.55), transparent)',
          }} />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        padding: '72px 8%',
        background: '#111',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
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
              <Icon size={26} color="#C9A84C" style={{ marginBottom: '14px', opacity: 0.85 }} />
              <div style={{
                fontFamily: 'Cormorant Garamond',
                fontSize: '50px',
                fontWeight: 700,
                color: '#C9A84C',
                lineHeight: 1,
              }}>
                {number}
              </div>
              <div style={{
                fontSize: '10px', letterSpacing: '2px',
                color: 'rgba(245,240,232,0.45)',
                marginTop: '8px', textTransform: 'uppercase',
              }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: '100px 8%' }}>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '10px', letterSpacing: '3px',
            textTransform: 'uppercase', color: '#C9A84C',
            borderBottom: '1px solid rgba(201,168,76,0.4)',
            paddingBottom: '4px', marginBottom: '18px',
          }}>
            What We Export
          </span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: 'clamp(34px, 5vw, 58px)',
            fontWeight: 300,
            color: '#F5F0E8',
            lineHeight: 1.1,
          }}>
            Our Product <span style={{ color: '#C9A84C', fontWeight: 600, fontStyle: 'italic' }}>Categories</span>
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
              style={{
                position: 'relative', overflow: 'hidden',
                cursor: 'pointer', height: '420px',
              }}
              whileHover="hover"
            >
              <motion.div
                variants={{ hover: { scale: 1.07 } }}
                transition={{ duration: 0.55 }}
                style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${cat.img})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.96) 40%, rgba(10,10,10,0.2) 100%)',
              }} />
              <motion.div
                variants={{ hover: { y: -6 } }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '32px 26px',
                }}
              >
                <div style={{
                  fontSize: '9px', letterSpacing: '3px',
                  color: '#C9A84C', marginBottom: '10px',
                  textTransform: 'uppercase',
                }}>
                  {cat.tag}
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond',
                  fontSize: '26px', fontWeight: 600,
                  color: '#F5F0E8', marginBottom: '10px',
                }}>
                  {cat.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(245,240,232,0.55)',
                  lineHeight: 1.7,
                }}>
                  {cat.desc}
                </p>
                <Link
                  to={`/products?category=${cat.tag}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: '#C9A84C', textDecoration: 'none',
                    fontSize: '11px', letterSpacing: '2px',
                    textTransform: 'uppercase', marginTop: '18px',
                  }}
                >
                  View All <FiArrowRight size={13} />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{
        padding: '100px 8%',
        background: '#111',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}>
        <div className="why-us-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <span style={{
              display: 'inline-block',
              fontSize: '10px', letterSpacing: '3px',
              textTransform: 'uppercase', color: '#C9A84C',
              borderBottom: '1px solid rgba(201,168,76,0.4)',
              paddingBottom: '4px', marginBottom: '22px',
            }}>
              Why Choose Us
            </span>
            <h2 style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: 'clamp(30px, 4vw, 50px)',
              fontWeight: 300, color: '#F5F0E8',
              marginBottom: '24px', lineHeight: 1.15,
            }}>
              Trusted by Buyers<br />
              <span style={{ color: '#C9A84C', fontWeight: 600, fontStyle: 'italic' }}>
                Across the Globe
              </span>
            </h2>
            <p style={{
              color: 'rgba(245,240,232,0.5)',
              fontSize: '14px', lineHeight: 1.9,
              marginBottom: '36px',
            }}>
              Decades of expertise in Indian agriculture and textiles,
              backed by modern export standards — quality-checked, certified, on time.
            </p>
            <Link to="/about" className="btn-primary">Our Story</Link>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                  display: 'flex', gap: '18px', alignItems: 'flex-start',
                  padding: '22px 20px',
                  border: '1px solid rgba(201,168,76,0.12)',
                  background: 'rgba(201,168,76,0.025)',
                  transition: 'border-color 0.3s',
                }}
                whileHover={{ borderColor: 'rgba(201,168,76,0.35)' }}
              >
                <div style={{
                  width: '6px', height: '6px',
                  background: '#C9A84C', borderRadius: '50%',
                  marginTop: '7px', flexShrink: 0,
                }} />
                <div>
                  <h4 style={{
                    color: '#F5F0E8', fontSize: '15px',
                    marginBottom: '5px',
                    fontFamily: 'Cormorant Garamond', fontWeight: 600,
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    color: 'rgba(245,240,232,0.45)',
                    fontSize: '13px', lineHeight: 1.7,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        padding: '100px 8%', textAlign: 'center',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #181208 50%, #0A0A0A 100%)',
        borderTop: '1px solid rgba(201,168,76,0.12)',
      }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span style={{
            display: 'inline-block',
            fontSize: '10px', letterSpacing: '3px',
            textTransform: 'uppercase', color: '#C9A84C',
            borderBottom: '1px solid rgba(201,168,76,0.4)',
            paddingBottom: '4px', marginBottom: '22px',
          }}>
            Ready to Export?
          </span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: 'clamp(34px, 5vw, 62px)',
            fontWeight: 300, color: '#F5F0E8',
            margin: '0 0 24px',
            lineHeight: 1.1,
          }}>
            Let's Build a{' '}
            <span style={{ color: '#C9A84C', fontWeight: 700, fontStyle: 'italic' }}>
              Global Partnership
            </span>
          </h2>
          <p style={{
            color: 'rgba(245,240,232,0.45)',
            fontSize: '14px', maxWidth: '480px',
            margin: '0 auto 44px', lineHeight: 1.85,
          }}>
            Small sample order or bulk supply — we're ready to serve you
            with the finest products from India.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Request a Quote</Link>
            <Link to="/products" className="btn-outline">Browse Products</Link>
          </div>
        </motion.div>
      </section>

      {/* ── RESPONSIVE ── */}
      <style>{`
        @media (max-width: 768px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>

    </div>
  )
}