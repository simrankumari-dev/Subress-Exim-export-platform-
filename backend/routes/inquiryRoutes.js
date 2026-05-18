const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// Submit inquiry
router.post('/', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: '✅ Inquiry submitted successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all inquiries
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;