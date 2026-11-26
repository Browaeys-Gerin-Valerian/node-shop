const express = require('express');

const { deepMerge } = require('../utils/merge');

const DEFAULTS = { theme: 'light', currency: 'EUR', newsletter: false };

const router = express.Router();

// POST /account/preferences  { "theme": "dark" }
router.post('/preferences', express.json(), (req, res) => {
  const preferences = deepMerge(JSON.parse(JSON.stringify(DEFAULTS)), req.body);
  res.json(preferences);
});

module.exports = router;
