const express = require('express');

const db = require('../db');
const { checkPassword } = require('../auth/password');
const { issueToken } = require('../auth/token');

const router = express.Router();

// POST /auth/login?next=/account
router.post('/login', express.urlencoded({ extended: false }), (req, res) => {
  const user = db.prepare('SELECT id, email, password FROM users WHERE email = ?').get(req.body.email);
  if (!user || !checkPassword(req.body.password || '', user.password)) {
    return res.status(401).send('Invalid email or password');
  }
  res.cookie('token', issueToken(user), { httpOnly: true });
  res.redirect(req.query.next || '/');
});

module.exports = router;
