import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeFromCart, updateQty, totalItems } = useCart()
  const navigate = useNavigate()

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 1100,
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '420px', maxWidth: '95vw',
              background: '#111',
              borderLeft: '1px solid rgba(201,168,76,0.2)',
              zIndex: 1200,
              display: 'flex', flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '28px 28px 20px',
              borderBottom: '1px solid rgba(201,168,76,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FiShoppingBag size={20} color="#C9A84C" />
                <span style={{
                  fontFamily: 'Cormorant Garamond', fontSize: '22px',
                  fontWeight: 600, color: '#F5F0E8',
                }}>Your Inquiry Cart</span>
                {totalItems > 0 && (
                  <span style={{
                    background: '#C9A84C', color: '#0A0A0A',
                    fontSize: '11px', fontWeight: 700,
                    padding: '2px 8px', borderRadius: '20px',
                  }}>{totalItems}</span>
                )}
              </div>
              <button onClick={onClose} style={{
                background: 'none', border: 'none',
                color: 'rgba(245,240,232,0.5)', cursor: 'pointer',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.5)'}
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Cart Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px' }}>
              {cart.length === 0 ? (
                <div style={{
                  textAlign: 'center', padding: '80px 20px',
                  color: 'rgba(245,240,232,0.3)',
                }}>
                  <FiShoppingBag size={48} style={{ marginBottom: '16px', opacity: 0.3 }} />
                  <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '20px' }}>Your cart is empty</p>
                  <p style={{ fontSize: '13px', marginTop: '8px' }}>Add products to send an inquiry</p>
                </div>
              ) : (
                cart.map((item, i) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      display: 'flex', gap: '16px', alignItems: 'center',
                      padding: '16px 0',
                      borderBottom: '1px solid rgba(201,168,76,0.08)',
                    }}
                  >
                    {/* Image */}
                    <div style={{
                      width: '70px', height: '70px', flexShrink: 0,
                      overflow: 'hidden', border: '1px solid rgba(201,168,76,0.15)',
                    }}>
                      <img
                        src={item.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&q=80'}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: 'Cormorant Garamond', fontSize: '17px',
                        fontWeight: 600, color: '#F5F0E8', marginBottom: '4px',
                      }}>{item.name}</div>
                      <div style={{
                        fontSize: '10px', letterSpacing: '2px',
                        color: '#C9A84C', textTransform: 'uppercase',
                      }}>{item.category}</div>

                      {/* Qty Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px' }}>
                        <button
                          onClick={() => updateQty(item._id, item.quantity - 1)}
                          style={{
                            width: '26px', height: '26px',
                            border: '1px solid rgba(201,168,76,0.3)',
                            background: 'none', color: '#C9A84C',
                            cursor: 'pointer', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                          }}
                        ><FiMinus size={12} /></button>

                        <span style={{ color: '#F5F0E8', fontSize: '14px', minWidth: '20px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQty(item._id, item.quantity + 1)}
                          style={{
                            width: '26px', height: '26px',
                            border: '1px solid rgba(201,168,76,0.3)',
                            background: 'none', color: '#C9A84C',
                            cursor: 'pointer', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                          }}
                        ><FiPlus size={12} /></button>

                        <span style={{ fontSize: '11px', color: 'rgba(245,240,232,0.35)', marginLeft: '4px' }}>
                          units
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button onClick={() => removeFromCart(item._id)} style={{
                      background: 'none', border: 'none',
                      color: 'rgba(245,240,232,0.3)', cursor: 'pointer',
                      transition: 'color 0.2s', padding: '4px',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = '#ff6b6b'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.3)'}
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div style={{
                padding: '24px 28px',
                borderTop: '1px solid rgba(201,168,76,0.1)',
                background: '#0D0D0D',
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  marginBottom: '20px',
                }}>
                  <span style={{ color: 'rgba(245,240,232,0.5)', fontSize: '13px' }}>
                    Total Products
                  </span>
                  <span style={{ color: '#C9A84C', fontFamily: 'Cormorant Garamond', fontSize: '20px', fontWeight: 700 }}>
                    {cart.length} item{cart.length > 1 ? 's' : ''}
                  </span>
                </div>
                <button
                  onClick={() => { onClose(); navigate('/cart-inquiry') }}
                  style={{
                    width: '100%', padding: '16px',
                    background: '#C9A84C', color: '#0A0A0A',
                    border: 'none', cursor: 'pointer',
                    fontSize: '12px', letterSpacing: '3px',
                    textTransform: 'uppercase',
                    fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#E8C97A'}
                  onMouseLeave={e => e.currentTarget.style.background = '#C9A84C'}
                >
                  Proceed to Inquiry →
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}