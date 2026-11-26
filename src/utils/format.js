const _ = require('lodash');

/** "12.50 EUR" */
function formatPrice(product) {
  return `${Number(_.get(product, 'price', 0)).toFixed(2)} EUR`;
}

module.exports = { formatPrice };
