const express = require('express');

const router = express.Router();

// GET /welcome?name=Alice
router.get('/welcome', (req, res) => {
  const name = req.query.name || 'guest';
  res.send(`<!doctype html><html><body><h1>Welcome back, ${name}!</h1><a href="/products/search">Browse</a></body></html>`);
});

module.exports = router;
