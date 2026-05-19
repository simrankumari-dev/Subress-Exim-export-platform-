import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPackage } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'

import chilli from "../assets/spices/chilli.webp"
import clove from "../assets/spices/clove.webp"
import garam from "../assets/spices/garam-masala.webp"
import mustard from "../assets/spices/mustard-seeds.webp"
import sinamn from "../assets/spices/sinamn-stick.webp"
import turmeric from "../assets/spices/turmeric.webp"

import toor from "../assets/pulses/toor.webp"
import black from "../assets/pulses/black-eye.webp"
import chickpea from "../assets/pulses/chickpea.webp"
import masoor from "../assets/pulses/masoor.webp"
import moong from "../assets/pulses/moong.webp"
import rajma from "../assets/pulses/rajma.webp"
import urad from "../assets/pulses/urad.webp"
import yellow from "../assets/pulses/yellow-pea.webp"


import basmati from "../assets/rice/basmati.webp"
import broken from "../assets/rice/broken.webp"
import ponni from "../assets/rice/ponni.webp"
import brown from "../assets/rice/brown-rice.webp"
import sona from "../assets/rice/sona.webp"


import cottonKurta from "../assets/cloths/cotton-kurta.webp"
import womentop from "../assets/cloths/women-tops.webp"
import hoodie from "../assets/cloths/hoodie.webp"
import tshirts from "../assets/cloths/tshirts.webp"
import saree from "../assets/cloths/saree.webp"
import wollenSweater from "../assets/cloths/wollen-sweater.webp"
import kurits from "../assets/cloths/kurtis.webp"
import linenShirt from "../assets/cloths/linen-shirt.webp"





// ── SPICES ──
const spicesProducts = [
  { _id: 's1', name: 'Turmeric Powder', category: 'spices', description: 'Pure ground turmeric with rich color and aroma.', image: turmeric, origin: 'India' },
  { _id: 's2', name: 'Red Chilli', category: 'spices', description: 'Sun-dried whole red chillies, premium export quality.', image: chilli, origin: 'India' },
  { _id: 's3', name: 'Cloves', category: 'spices', description: 'Strong aromatic cloves sourced from premium farms.', image: clove, origin: 'India' },
  { _id: 's4', name: 'Garam Masala', category: 'spices', description: 'Authentic Indian spice blend with rich flavor.', image: garam, origin: 'India' },
  { _id: 's5', name: 'Mustard Seeds', category: 'spices', description: 'Premium quality mustard seeds for global export.', image: mustard, origin: 'India' },
  { _id: 's6', name: 'Cinnamon Sticks', category: 'spices', description: 'Naturally aromatic cinnamon sticks with rich taste.', image: sinamn, origin: 'India' },
]

// ── PULSES ──
const pulsesProducts = [
  {
    _id: '101',
    name: 'Toor Dal',
    category: 'pulses',
    description: 'Premium quality toor dal with rich taste and high nutrition.',
    image: toor,
    origin: 'India'
  },
  {
    _id: '102',
    name: 'Black Eyed Beans',
    category: 'pulses',
    description: 'Carefully cleaned black eyed beans ideal for export markets.',
    image: black,
    origin: 'India'
  },
  {
    _id: '103',
    name: 'Chickpeas',
    category: 'pulses',
    description: 'Protein-rich chickpeas sourced from trusted Indian farms.',
    image: chickpea,
    origin: 'India'
  },
  {
    _id: '104',
    name: 'Masoor Dal',
    category: 'pulses',
    description: 'Fresh and nutritious masoor dal with premium quality grains.',
    image: masoor,
    origin: 'India'
  },
  {
    _id: '105',
    name: 'Moong Dal',
    category: 'pulses',
    description: 'High-quality moong dal known for purity and freshness.',
    image: moong,
    origin: 'India'
  },
  {
    _id: '106',
    name: 'Rajma',
    category: 'pulses',
    description: 'Export-grade kidney beans with rich texture and flavor.',
    image: rajma,
    origin: 'India'
  },
  {
    _id: '107',
    name: 'Urad Dal',
    category: 'pulses',
    description: 'Premium urad dal processed with strict quality standards.',
    image: urad,
    origin: 'India'
  },
  {
    _id: '108',
    name: 'Yellow Peas',
    category: 'pulses',
    description: 'Naturally dried yellow peas suitable for global export.',
    image: yellow,
    origin: 'India'
  }
]
// ── RICE ──
const riceProducts = [
  {
    _id: 'r1',
    name: 'Basmati Rice',
    category: 'rice',
    description: 'Premium long-grain basmati rice with rich aroma and fluffy texture.',
    image: basmati,
    origin: 'India'
  },
  {
    _id: 'r2',
    name: 'Broken Rice',
    category: 'rice',
    description: 'High-quality broken rice suitable for daily cooking and food processing.',
    image: broken,
    origin: 'India'
  },
  {
    _id: 'r3',
    name: 'Ponni Rice',
    category: 'rice',
    description: 'Soft and lightweight ponni rice widely used in South Indian cuisine.',
    image: ponni,
    origin: 'India'
  },
  {
    _id: 'r4',
    name: 'Brown Rice',
    category: 'rice',
    description: 'Nutritious whole grain brown rice with natural fiber and minerals.',
    image: brown,
    origin: 'India'
  },
  {
    _id: 'r5',
    name: 'Sona Masoori Rice',
    category: 'rice',
    description: 'Lightweight and aromatic sona masoori rice for everyday meals.',
    image: sona,
    origin: 'India'
  }
]

// ── GARMENTS ──
const garmentsProducts = [
  {
    _id: 'c1',
    name: 'Cotton Kurta',
    category: 'clothing',
    description: 'Comfortable cotton kurta crafted with breathable fabric for daily wear.',
    image: cottonKurta,
    origin: 'India'
  },
  {
    _id: 'c2',
    name: 'Women Top',
    category: 'clothing',
    description: 'Stylish women top designed with modern fashion and comfortable fabric.',
    image: womentop,
    origin: 'India'
  },
  {
    _id: 'c3',
    name: 'Hoodie',
    category: 'clothing',
    description: 'Soft and warm hoodie designed for comfort and casual fashion.',
    image: hoodie,
    origin: 'India'
  },
  {
    _id: 'c4',
    name: 'T-Shirt',
    category: 'clothing',
    description: 'Classic t-shirt made with premium fabric for everyday comfort and style.',
    image: tshirts,
    origin: 'India'
  },
  {
    _id: 'c5',
    name: 'Saree',
    category: 'clothing',
    description: 'Traditional saree with elegant design and premium craftsmanship.',
    image: saree,
    origin: 'India'
  },
  {
    _id: 'c6',
    name: 'Woollen Sweater',
    category: 'clothing',
    description: 'Warm woollen sweater perfect for winter comfort and style.',
    image: wollenSweater,
    origin: 'India'
  },
  {
    _id: 'c7',
    name: 'Kurtis',
    category: 'clothing',
    description: 'Trendy and comfortable kurtis suitable for casual and festive wear.',
    image: kurits,
    origin: 'India'
  },
  {
    _id: 'c8',
    name: 'Linen Shirt',
    category: 'clothing',
    description: 'Premium linen shirt with lightweight fabric and modern design.',
    image: linenShirt,
    origin: 'India'
  }
]

// ── ALL COMBINED ──
const allProducts = [
  ...spicesProducts,
  ...pulsesProducts,
  ...riceProducts,
  ...garmentsProducts,
]

const categories = ['all', 'spices', 'pulses', 'rice', 'garments']

export default function Products() {
  const [searchParams] = useSearchParams()
  const [active, setActive] = useState(searchParams.get('category') || 'all')
  const { addToCart } = useCart()

  // Filter based on active category
  const filtered = active === 'all'
    ? allProducts
    : active === 'spices' ? spicesProducts
    : active === 'pulses' ? pulsesProducts
    : active === 'rice' ? riceProducts
    : garmentsProducts

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
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2px',
          }}
        >
          <AnimatePresence mode="popLayout">
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
                  overflow: 'hidden',
                  transition: 'border-color 0.3s',
                }}
                whileHover={{ borderColor: 'rgba(201,168,76,0.4)' }}
              >
                {/* Product Image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                    }}
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

                  {/* Bottom Row */}
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', marginTop: '16px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiPackage size={12} color="#C9A84C" />
                      <span style={{ fontSize: '11px', color: 'rgba(245,240,232,0.4)', letterSpacing: '1px' }}>
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
      </section>
    </div>
  )
}