const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // spices, pulses, rice, garments
  description: { type: String },
  image: { type: String },
  origin: { type: String, default: 'India' },
  available: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);