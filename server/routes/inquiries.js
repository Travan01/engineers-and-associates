
const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// POST a new inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newInquiry = new Inquiry({ name, email, message });
    await newInquiry.save();
    res.status(201).json({ message: 'Inquiry submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
