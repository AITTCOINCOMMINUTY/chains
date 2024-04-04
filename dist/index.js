
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./chains.cjs.production.min.js')
} else {
  module.exports = require('./chains.cjs.development.js')
}
