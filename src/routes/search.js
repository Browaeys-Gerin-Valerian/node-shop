const express = require('express');

const db = require('../db');
const { formatPrice } = require('../utils/format');

const router = express.Router();

// GET /products/search?q=lamp
router.get('/search', (req, res) => {
  const q = req.query.q || '';
  const rows = db.prepare(`SELECT id, name, price FROM products WHERE name LIKE ? ORDER BY name`).all(`%${q}%`);
  res.json(rows.map((product) => ({ ...product, label: formatPrice(product) })));
});

module.exports = router;
