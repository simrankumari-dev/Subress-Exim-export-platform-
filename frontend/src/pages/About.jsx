import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCheckCircle, FiMail } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import { strengths, markets, qualitySteps, testimonials, whoWeArePoints } from '../data/aboutData'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12 } })
}

export default function About() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', paddingTop: '110px' }}>

      {/* HERO */}
      <section style={{ padding: '80px 8% 100px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ position: 'absolute', right: '-200px', top: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <span style={{ display: 'inline-block', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 16px', marginBottom: '28px' }}>Our Story</span>
        </motion.div>
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
          style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(48px, 7vw, 90px)', lineHeight: 0.95, color: '#F5F0E8', marginBottom: '32px' }}>
          About <span style={{ color: '#C9A84C', fontWeight: 700, fontStyle: 'italic' }}>Subress</span><br />
          <span style={{ color: '#C9A84C', fontWeight: 700, fontStyle: 'italic' }}>Exim</span>
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
          style={{ fontSize: '16px', color: 'rgba(245,240,232,0.55)', maxWidth: '580px', lineHeight: 1.9 }}>
          Founded in Ahmedabad — the trade capital of India — Subress Exim was built on a simple promise: to bring India's finest produce and craftsmanship to the world with integrity, quality, and trust.
        </motion.p>
      </section>

      {/* WHO WE ARE */}
      <section style={{ padding: '100px 8%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="about-grid">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1604740795234-9cb8e03c189b?w=800&q=80" alt="Spices"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, background: '#C9A84C', padding: '28px 32px' }}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '42px', fontWeight: 700, color: '#0A0A0A', lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#0A0A0A', textTransform: 'uppercase', marginTop: '4px' }}>Years of Trust</div>
              </div>
              <div style={{ position: 'absolute', top: '30px', left: '-20px', background: '#111', border: '1px solid rgba(201,168,76,0.3)', padding: '20px 24px' }}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '36px', fontWeight: 700, color: '#C9A84C', lineHeight: 1 }}>20+</div>
                <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(245,240,232,0.5)', textTransform: 'uppercase', marginTop: '4px' }}>Countries</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}>
            <span style={{ display: 'inline-block', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '4px', marginBottom: '22px' }}>Who We Are</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 300, color: '#F5F0E8', marginBottom: '24px', lineHeight: 1.15 }}>
              India's Trusted<br /><span style={{ color: '#C9A84C', fontWeight: 600, fontStyle: 'italic' }}>Export Partner</span>
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '14px', lineHeight: 1.9, marginBottom: '18px' }}>
              Established in 2014, Subress Exim has grown from a small trading firm into one of Gujarat's most reliable export houses. We specialize in premium spices, pulses, rice, and garments — products that carry the essence of India.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '14px', lineHeight: 1.9, marginBottom: '36px' }}>
              Our relationships with thousands of farmers, processors, and global buyers are built on transparency, consistency, and a shared commitment to quality that never wavers.
            </p>
            {whoWeArePoints.map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <FiCheckCircle size={16} color="#C9A84C" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(245,240,232,0.7)', fontSize: '14px' }}>{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US + STRENGTHS */}
      <section style={{ padding: '100px 8%', background: '#0D0D0D', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span style={{ display: 'inline-block', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 16px', marginBottom: '20px' }}>Why Choose Us</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(34px, 5vw, 58px)', fontWeight: 300, color: '#F5F0E8' }}>
            The <span style={{ color: '#C9A84C', fontWeight: 600, fontStyle: 'italic' }}>Subress Advantage</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px' }}>
          {strengths.map((item, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              style={{ padding: '40px 36px', background: '#111', border: '1px solid rgba(201,168,76,0.08)' }}
              whileHover={{ borderColor: 'rgba(201,168,76,0.35)', background: 'rgba(201,168,76,0.03)' }}>
              <div style={{ width: '52px', height: '52px', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <item.icon size={22} color="#C9A84C" />
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', fontWeight: 600, color: '#F5F0E8', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.5)', lineHeight: 1.8 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GLOBAL MARKETS */}
      <section style={{ padding: '100px 8%' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span style={{ display: 'inline-block', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 16px', marginBottom: '20px' }}>Our Reach</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(34px, 5vw, 58px)', fontWeight: 300, color: '#F5F0E8' }}>
            Our <span style={{ color: '#C9A84C', fontWeight: 600, fontStyle: 'italic' }}>Global Markets</span>
          </h2>
          <p style={{ color: 'rgba(245,240,232,0.45)', fontSize: '15px', maxWidth: '520px', margin: '20px auto 0', lineHeight: 1.8 }}>
            From the spice markets of the Middle East to the supermarkets of Europe — Subress Exim products reach buyers across 6 continents.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
          {markets.map((market, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              style={{ padding: '36px 32px', background: '#111', border: '1px solid rgba(201,168,76,0.08)', position: 'relative', overflow: 'hidden' }}
              whileHover={{ borderColor: 'rgba(201,168,76,0.3)' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '20px', fontSize: '60px', opacity: 0.06 }}>{market.flag}</div>
              <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '12px' }}>{market.region}</div>
              <div style={{ width: '30px', height: '2px', background: '#C9A84C', marginBottom: '16px' }} />
              <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: '13px', lineHeight: 1.9 }}>{market.countries}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUALITY PROCESS */}
      <section style={{ padding: '100px 8%', background: '#0D0D0D', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span style={{ display: 'inline-block', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 16px', marginBottom: '20px' }}>How We Work</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(34px, 5vw, 58px)', fontWeight: 300, color: '#F5F0E8' }}>
            Our <span style={{ color: '#C9A84C', fontWeight: 600, fontStyle: 'italic' }}>Quality Process</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
          {qualitySteps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              style={{ padding: '40px 32px', background: '#111', border: '1px solid rgba(201,168,76,0.08)', position: 'relative' }}
              whileHover={{ borderColor: 'rgba(201,168,76,0.3)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '56px', fontWeight: 700, color: 'rgba(201,168,76,0.12)', lineHeight: 1, marginBottom: '16px' }}>{step.step}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', fontWeight: 600, color: '#F5F0E8', marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.5)', lineHeight: 1.8 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 8%' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span style={{ display: 'inline-block', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 16px', marginBottom: '20px' }}>Testimonials</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(34px, 5vw, 58px)', fontWeight: 300, color: '#F5F0E8' }}>
            What Our <span style={{ color: '#C9A84C', fontWeight: 600, fontStyle: 'italic' }}>Clients Say</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px' }}>
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
              style={{ padding: '44px 36px', background: '#111', border: '1px solid rgba(201,168,76,0.1)', position: 'relative' }}
              whileHover={{ borderColor: 'rgba(201,168,76,0.35)' }}>
              <FaQuoteLeft size={28} color="rgba(201,168,76,0.2)" style={{ marginBottom: '24px' }} />
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} style={{ color: '#C9A84C', fontSize: '14px' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(245,240,232,0.65)', lineHeight: 1.9, marginBottom: '32px', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '20px' }}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '18px', fontWeight: 600, color: '#F5F0E8' }}>{t.name}</div>
                <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '1px', marginTop: '4px' }}>{t.role}</div>
                <div style={{ fontSize: '11px', color: 'rgba(245,240,232,0.35)', marginTop: '2px' }}>{t.country}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STAY CONNECTED */}
      <section style={{ padding: '100px 8%', background: 'linear-gradient(135deg, #0A0A0A 0%, #181208 50%, #0A0A0A 100%)', borderTop: '1px solid rgba(201,168,76,0.15)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ position: 'relative' }}>
          <span style={{ display: 'inline-block', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 16px', marginBottom: '24px' }}>Get In Touch</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: 300, color: '#F5F0E8', lineHeight: 1.05, marginBottom: '20px' }}>
            Stay <span style={{ color: '#C9A84C', fontWeight: 700, fontStyle: 'italic' }}>Connected</span><br />With Us
          </h2>
          <p style={{ color: 'rgba(245,240,232,0.45)', fontSize: '15px', maxWidth: '480px', margin: '0 auto 48px', lineHeight: 1.9 }}>
            Have a product inquiry, partnership proposal, or just want to say hello? Our team is always ready to connect with you.
          </p>
          <motion.a
            href="mailto:bd@subressexim.com?subject=Inquiry from Website&body=Hello Subress Exim Team,%0D%0A%0D%0AI am interested in your products and would like to know more.%0D%0A%0D%0ARegards,"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: '#C9A84C', color: '#0A0A0A', padding: '20px 48px', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Outfit, sans-serif', fontWeight: 700, textDecoration: 'none', boxShadow: '0 20px 60px rgba(201,168,76,0.25)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#E8C97A'; e.currentTarget.style.boxShadow = '0 25px 70px rgba(201,168,76,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(201,168,76,0.25)' }}>
            <FiMail size={20} /> Mail Us
          </motion.a>
          <div style={{ marginTop: '24px' }}>
            <span style={{ fontSize: '12px', color: 'rgba(245,240,232,0.3)', letterSpacing: '1px' }}>bd@subressexim.com</span>
          </div>
          <div style={{ marginTop: '32px' }}>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              style={{ color: 'rgba(245,240,232,0.4)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(245,240,232,0.15)', paddingBottom: '2px' }}
              onMouseEnter={e => e.target.style.color = '#C9A84C'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.4)'}>
              Or fill our contact form →
            </Link>
          </div>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  )
}