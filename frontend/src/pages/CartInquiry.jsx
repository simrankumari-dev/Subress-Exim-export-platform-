import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FiTrash2, FiSend } from 'react-icons/fi'
import API from '../api'

export default function CartInquiry() {
  const { cart, removeFromCart, clearCart, totalItems } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all required fields')
      return
    }
    if (cart.length === 0) {
      toast.error('Your cart is empty!')
      return
    }

    const productList = cart.map(item =>
      `${item.name} (${item.category}) x${item.quantity}`
    ).join(', ')

    try {
      setLoading(true)
      await axios.post(`${API}/api/inquiry`, {
        ...form,
        product: productList,
        message: `Products Interested In: ${productList}\n\nAdditional Message: ${form.message}`,
      })
      toast.success('Inquiry sent successfully! We\'ll contact you within 24 hours.')
      clearCart()
      navigate('/')
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
    transition: 'border-color 0.3s', boxSizing: 'border-box',
  }

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', paddingTop: '75px' }}>

      {/* Header */}
      <section style={{
        padding: '70px 8% 50px',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        background: '#111',
      }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-tag">Step 2 of 2</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: '#F5F0E8' }}>
            Complete Your <span style={{ color: '#C9A84C', fontWeight: 700 }}>Inquiry</span>
          </h1>
        </motion.div>
      </section>

      <section style={{ padding: '60px 8%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px' }}>

          {/* Cart Summary */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '26px', color: '#F5F0E8', marginBottom: '24px', fontWeight: 600 }}>
              Selected Products ({totalItems})
            </h2>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', color: 'rgba(245,240,232,0.3)' }}>
                <p>No products selected.</p>
                <button onClick={() => navigate('/products')} className="btn-primary" style={{ marginTop: '20px' }}>
                  Browse Products
                </button>
              </div>
            ) : (
              cart.map((item, i) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex', gap: '16px', alignItems: 'center',
                    padding: '18px', marginBottom: '12px',
                    border: '1px solid rgba(201,168,76,0.12)',
                    background: '#111',
                  }}
                >
                  <img
                    src={item.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&q=80'}
                    alt={item.name}
                    style={{ width: '64px', height: '64px', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '18px', fontWeight: 600, color: '#F5F0E8' }}>{item.name}</div>
                    <div style={{ fontSize: '10px', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>
                      {item.category} · Qty: {item.quantity}
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item._id)}
                    style={{ background: 'none', border: 'none', color: 'rgba(245,240,232,0.3)', cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ff6b6b'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.3)'}
                  >
                    <FiTrash2 size={16} />
                  </button>
                </motion.div>
              ))
            )}

            <button onClick={() => navigate('/products')}
              className="btn-outline" style={{ marginTop: '12px', fontSize: '11px' }}>
              + Add More Products
            </button>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            style={{ padding: '40px', background: '#111', border: '1px solid rgba(201,168,76,0.15)' }}
          >
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '26px', color: '#F5F0E8', marginBottom: '28px', fontWeight: 600 }}>
              Your Details
            </h2>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Full Name *</label>
              <input name="name" value={form.name} onChange={handleChange}
                placeholder="Your name" style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email Address *</label>
              <input name="email" value={form.email} onChange={handleChange}
                placeholder="your@email.com" style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange}
                placeholder="+91 XXXXX XXXXX" style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Additional Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange}
                placeholder="Quantity needed, destination country, any special requirements..." rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              />
            </div>

            <button onClick={handleSubmit} disabled={loading}
              style={{
                width: '100%', padding: '16px',
                background: loading ? 'rgba(201,168,76,0.5)' : '#C9A84C',
                color: '#0A0A0A', border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
                fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                transition: 'all 0.3s',
              }}
            >
              <FiSend size={16} />
              {loading ? 'Sending...' : 'Submit Inquiry'}
            </button>

            <p style={{ fontSize: '11px', color: 'rgba(245,240,232,0.3)', textAlign: 'center', marginTop: '16px', lineHeight: 1.6 }}>
              We'll respond within 24 hours with pricing and availability.
            </p>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section > div[style*="grid-template-columns: 1fr 1.2fr"] {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>
    </div>
  )
}