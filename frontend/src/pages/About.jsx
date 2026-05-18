import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCheckCircle } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12 } })
}

export default function About() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', paddingTop: '75px' }}>

      {/* Hero */}
      <section style={{
        padding: '90px 8%',
        background: 'linear-gradient(135deg, #111 0%, #0A0A0A 100%)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: '-100px', top: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }} />
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <span className="section-tag">Our Story</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 300, color: '#F5F0E8' }}>
            About <span style={{ color: '#C9A84C', fontWeight: 700 }}>Subress Exim</span>
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '100px 8%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center',
        }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div style={{
              position: 'relative', height: '500px', overflow: 'hidden',
              border: '1px solid rgba(201,168,76,0.2)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1604740795234-9cb8e03c189b?w=800&q=80"
                alt="Spices"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', bottom: '-1px', right: '-1px',
                background: '#C9A84C', padding: '24px 32px',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '36px', fontWeight: 700, color: '#0A0A0A', lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#0A0A0A', textTransform: 'uppercase' }}>Years of Trust</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}>
            <span className="section-tag">Who We Are</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 300, color: '#F5F0E8', marginBottom: '24px' }}>
              India's Trusted Export <span style={{ color: '#C9A84C', fontWeight: 600 }}>Partner</span>
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '14px', lineHeight: 1.9, marginBottom: '20px' }}>
              Founded in Ahmedabad, Gujarat — the trade capital of India — Subress Exim
              was born from a simple vision: to bring the finest Indian produce and
              garments to markets across the world with integrity and quality.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '14px', lineHeight: 1.9, marginBottom: '36px' }}>
              We have built strong relationships with farmers, processors, and
              manufacturers across India to ensure every product leaving our warehouse
              meets international standards of quality, safety, and freshness.
            </p>
            {[
              'ISO-compliant quality processes',
              'Direct farm-to-export sourcing',
              'Flexible MOQ for all buyers',
              'Timely shipping worldwide',
            ].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <FiCheckCircle size={16} color="#C9A84C" />
                <span style={{ color: 'rgba(245,240,232,0.7)', fontSize: '14px' }}>{point}</span>
              </div>
            ))}
          </motion.div>
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

      {/* Mission & Vision */}
      <section style={{
        padding: '80px 8%',
        background: '#111',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
          {[
            { title: 'Our Mission', text: 'To deliver premium Indian products to global markets with consistency, reliability, and the highest standards of quality.' },
            { title: 'Our Vision', text: 'To become one of India\'s most trusted export brands — known worldwide for authenticity and excellence.' },
            { title: 'Our Values', text: 'Integrity in every transaction. Quality in every product. Respect for every partner — farmer, buyer, or team member.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i}
              viewport={{ once: true }}
              style={{ padding: '48px 40px', border: '1px solid rgba(201,168,76,0.1)', background: '#0D0D0D' }}
            >
              <div style={{ width: '40px', height: '2px', background: '#C9A84C', marginBottom: '24px' }} />
              <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '28px', fontWeight: 600, color: '#F5F0E8', marginBottom: '16px' }}>{item.title}</h3>
              <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: '14px', lineHeight: 1.9 }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 8%', textAlign: 'center' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: '#F5F0E8', marginBottom: '30px' }}>
            Ready to <span style={{ color: '#C9A84C', fontWeight: 700 }}>Work Together?</span>
          </h2>
          <Link to="/contact" className="btn-primary">Contact Us Today</Link>
        </motion.div>
      </section>

    </div>
  )
}