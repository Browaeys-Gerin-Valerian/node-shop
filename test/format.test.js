const assert = require('node:assert');
const { test } = require('node:test');

const { formatPrice } = require('../src/utils/format');

test('formats a price with two decimals', () => {
  assert.strictEqual(formatPrice({ price: 12.5 }), '12.50 EUR');
});
