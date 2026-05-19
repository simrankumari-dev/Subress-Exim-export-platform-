import { FiGlobe, FiAward, FiPackage, FiUsers } from 'react-icons/fi'
import masale from "../assets/masale.png"
import pulses from "../assets/pulses.webp"
import garment from "../assets/garments.png"
import rice from "../assets/rice.jpg"

export const stats = [
  { icon: FiGlobe, number: '20+', label: 'Countries Served' },
  { icon: FiPackage, number: '500+', label: 'Products Exported' },
  { icon: FiAward, number: '10+', label: 'Years Experience' },
  { icon: FiUsers, number: '1000+', label: 'Happy Clients' },
]

export const categories = [
  { title: 'Indian Spices', desc: 'Turmeric, Red Chilli, Cumin, Cardamom — sourced from finest Indian farms.', img: masale, tag: 'spices' },
  { title: 'Pulses', desc: 'Chickpeas, Toor Dal, Moong Dal — pure nutrition, zero compromise.', img: pulses, tag: 'pulses' },
  { title: 'Premium Rice', desc: 'Basmati, Sella, Raw Rice — long grain, aromatic, export quality.', img: rice, tag: 'rice' },
  { title: 'Garments', desc: "Men's, Women's & Cotton wear — modern fashion meets comfort.", img: garment, tag: 'garments' },
]

export const whyUsPoints = [
  { title: 'Quality Certified', desc: 'All products meet international food safety and export standards.' },
  { title: 'Direct Sourcing', desc: 'We work directly with farmers and manufacturers — no middlemen.' },
  { title: 'Timely Delivery', desc: 'Reliable logistics ensuring your order arrives on schedule.' },
  { title: 'Custom Orders', desc: 'Flexible packaging, quantities and labeling for your needs.' },
]

export const tickerItems = [
  '🌿 Premium Export Quality Products',
  '🚢 Shipping to 20+ Countries Worldwide',
  '✅ FSSAI & International Certified',
  '📦 Custom Packaging Available',
  '🤝 Direct Farm to Export',
  '⭐ 10+ Years of Trusted Export Experience',
]