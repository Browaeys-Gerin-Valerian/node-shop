const jwt = require('jsonwebtoken');

const SECRET = 'shop-secret-2024';

function issueToken(user) {
  return jwt.sign({ sub: user.id, email: user.email }, SECRET, { expiresIn: '7d' });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { issueToken, verifyToken };
