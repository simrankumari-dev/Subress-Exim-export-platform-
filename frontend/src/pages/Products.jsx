import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { FiPackage } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'

const categories = ['all', 'spices', 'pulses', 'rice', 'garments']

const fallbackProducts = [
  { _id: '1', name: 'Turmeric Powder', category: 'spices', description: 'Pure ground turmeric with rich color and aroma.', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80', origin: 'India' },
  { _id: '2', name: 'Red Chilli', category: 'spices', description: 'Sun-dried whole red chillies, premium quality.', image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=80', origin: 'India' },
  { _id: '3', name: 'Cumin Seeds', category: 'spices', description: 'Aromatic cumin seeds for authentic Indian taste.', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80', origin: 'India' },
  { _id: '4', name: 'Chickpeas', category: 'pulses', description: 'High protein chickpeas, carefully sorted and cleaned.', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80', origin: 'India' },
  { _id: '5', name: 'Toor Dal', category: 'pulses', description: 'Split pigeon peas — staple of Indian cooking.', image: 'https://images.unsplash.com/photo-1596560548464-f010571f9d41?w=400&q=80', origin: 'India' },
  { _id: '6', name: 'Basmati Rice', category: 'rice', description: 'Long grain basmati with natural fragrance.', image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=80', origin: 'India' },
  { _id: '7', name: 'Sella Rice', category: 'rice', description: 'Parboiled rice with excellent cooking quality.', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80', origin: 'India' },
  { _id: '8', name: 'Cotton Kurta', category: 'garments', description: 'Premium cotton kurtas in modern designs.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', origin: 'India' },
]

export default function Products() {
  const [searchParams] = useSearchParams()
  const [active, setActive] = useState(searchParams.get('category') || 'all')
  const [products, setProducts] = useState(fallbackProducts)
  const [loading, setLoading] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const url = active === 'all'
          ? 'http://localhost:5000/api/products'
          : `http://localhost:5000/api/products?category=${active}`
        const { data } = await axios.get(url)
        if (data.length > 0) setProducts(data)
        else setProducts(fallbackProducts.filter(p => active === 'all' || p.category === active))
      } catch {
        setProducts(fallbackProducts.filter(p => active === 'all' || p.category === active))
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [active])

  const filtered = active === 'all' ? products : products.filter(p => p.category === active)

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', paddingTop: '75px' }}>

      {/* Header */}
      <section style={{
        padding: '80px 8% 60px',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        background: 'linear-gradient(180deg, #111 0%, #0A0A0A 100%)',
      }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-tag">Export Catalog</span>
          <h1 style={{
            fontFamily: 'Cormorant Garamond', fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 300, color: '#F5F0E8',
          }}>
            Our <span style={{ color: '#C9A84C', fontWeight: 700 }}>Products</span>
          </h1>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <div style={{
        padding: '40px 8% 0',
        display: 'flex', gap: '4px', flexWrap: 'wrap',
      }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            style={{
              padding: '10px 24px',
              background: active === cat ? '#C9A84C' : 'transparent',
              color: active === cat ? '#0A0A0A' : 'rgba(245,240,232,0.5)',
              border: '1px solid',
              borderColor: active === cat ? '#C9A84C' : 'rgba(201,168,76,0.2)',
              cursor: 'pointer', fontSize: '11px', letterSpacing: '2px',
              textTransform: 'uppercase', fontFamily: 'Outfit, sans-serif',
              fontWeight: 600, transition: 'all 0.3s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <section style={{ padding: '50px 8% 100px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px', color: '#C9A84C' }}>Loading...</div>
        ) : (
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2px',
            }}
          >
            <AnimatePresence>
              {filtered.map((product, i) => (
                <motion.div
                  key={product._id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{
                    background: '#111',
                    border: '1px solid rgba(201,168,76,0.1)',
                    overflow: 'hidden', cursor: 'pointer',
                    transition: 'border-color 0.3s',
                  }}
                  whileHover={{ borderColor: 'rgba(201,168,76,0.4)' }}
                >
                  {/* Product Image */}
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <motion.img
                      src={product.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80'}
                      alt={product.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute', top: '16px', left: '16px',
                      background: 'rgba(10,10,10,0.85)', padding: '4px 12px',
                      fontSize: '9px', letterSpacing: '2px', color: '#C9A84C',
                      textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.3)',
                    }}>{product.category}</div>
                  </div>

                  {/* Product Info */}
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond', fontSize: '20px',
                      fontWeight: 600, color: '#F5F0E8', marginBottom: '10px',
                    }}>{product.name}</h3>

                    <p style={{
                      fontSize: '13px', color: 'rgba(245,240,232,0.5)',
                      lineHeight: 1.7, marginBottom: '20px',
                    }}>
                      {product.description}
                    </p>

                    {/* Bottom Row — Origin + Add to Cart */}
                    <div style={{
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', marginTop: '16px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiPackage size={12} color="#C9A84C" />
                        <span style={{
                          fontSize: '11px', color: 'rgba(245,240,232,0.4)', letterSpacing: '1px',
                        }}>
                          {product.origin}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          addToCart(product)
                          toast.success(`${product.name} added!`)
                        }}
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(201,168,76,0.4)',
                          color: '#C9A84C', padding: '7px 16px',
                          fontSize: '10px', letterSpacing: '2px',
                          textTransform: 'uppercase', cursor: 'pointer',
                          fontFamily: 'Outfit, sans-serif', fontWeight: 600,
                          transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#C9A84C'
                          e.currentTarget.style.color = '#0A0A0A'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = '#C9A84C'
                        }}
                      >
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  )
}