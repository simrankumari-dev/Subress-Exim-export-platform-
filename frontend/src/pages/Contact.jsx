import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import API from '../api'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12 } })
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all required fields')
      return
    }
    try {
      setLoading(true)
     await axios.post(`${API}/api/inquiry`, form)
      toast.success('Inquiry submitted! We\'ll contact you soon.')
      setForm({ name: '', email: '', phone: '', product: '', message: '' })
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    background: '#111', border: '1px solid rgba(201,168,76,0.2)',
    color: '#F5F0E8', fontSize: '14px',
    fontFamily: 'Outfit, sans-serif', outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  }

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', paddingTop: '75px' }}>

      {/* Header */}
      <section style={{
        padding: '90px 8%',
        background: 'linear-gradient(135deg, #111 0%, #0A0A0A 100%)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}>
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <span className="section-tag">Get In Touch</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 300, color: '#F5F0E8' }}>
            Contact <span style={{ color: '#C9A84C', fontWeight: 700 }}>Us</span>
          </h1>
        </motion.div>
      </section>

      <section style={{ padding: '80px 8%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>

          {/* Info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '32px', fontWeight: 300, color: '#F5F0E8', marginBottom: '16px' }}>
              Let's Start a <span style={{ color: '#C9A84C', fontWeight: 600 }}>Conversation</span>
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: '14px', lineHeight: 1.9, marginBottom: '48px' }}>
              Whether you need a quote, product info, or want to explore a long-term
              partnership — we're here to help. Reach out and our team will respond within 24 hours.
            </p>

            {[
              { icon: FiMail, label: 'Email', value: 'bd@subressexim.com' },
              { icon: FiPhone, label: 'Phone', value: '+91 6352 319 207' },
              { icon: FiMapPin, label: 'Location', value: 'Ahmedabad, Gujarat, India' },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" custom={i + 1}
                viewport={{ once: true }}
                style={{
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  marginBottom: '32px', padding: '24px',
                  border: '1px solid rgba(201,168,76,0.12)',
                  background: 'rgba(201,168,76,0.02)',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} color="#C9A84C" />
                </div>
                <div>
                  <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '6px' }}>{label}</div>
                  <div style={{ color: '#F5F0E8', fontSize: '14px' }}>{value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={1}
            viewport={{ once: true }}
            style={{
              padding: '48px', background: '#111',
              border: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '28px', fontWeight: 600, color: '#F5F0E8', marginBottom: '32px' }}>
              Send an Inquiry
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Name *</label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="Your full name" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email *</label>
                <input name="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Product Interest</label>
                <select name="product" value={form.product} onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                >
                  <option value="">Select a category</option>
                  <option value="spices">Indian Spices</option>
                  <option value="pulses">Pulses</option>
                  <option value="rice">Rice</option>
                  <option value="garments">Garments</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange}
                placeholder="Tell us what you need — product, quantity, destination..." rows={5}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              />
            </div>

            <button onClick={handleSubmit} disabled={loading}
              style={{
                width: '100%', padding: '16px',
                background: loading ? 'rgba(201,168,76,0.5)' : '#C9A84C',
                color: '#0A0A0A', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
                fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                transition: 'all 0.3s',
              }}
            >
              <FiSend size={16} />
              {loading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section > div[style*="grid-template-columns: 1fr 1.5fr"] {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  )
}