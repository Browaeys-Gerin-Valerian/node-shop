const Database = require('better-sqlite3');

const db = new Database(process.env.DB_PATH || 'shop.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT NOT NULL, price REAL NOT NULL);
  CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT UNIQUE NOT NULL, password TEXT NOT NULL);
`);

module.exports = db;
