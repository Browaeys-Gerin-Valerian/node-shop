const path = require('path');
const express = require('express');

const UPLOADS = path.join(__dirname, '..', '..', 'uploads');

const router = express.Router();

// GET /files/download?name=invoice-42.pdf
router.get('/download', (req, res) => {
  const name = req.query.name;
  if (!name) return res.status(400).send('name is required');
  res.sendFile(path.join(UPLOADS, name));
});

module.exports = router;
