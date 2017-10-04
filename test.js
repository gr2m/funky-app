const assert = require('assert')
const generateString = require('funky-sloth-42')

assert.equal(typeof generateString(), 'string')
assert.equal(typeof generateString(2)[0], 'string')

console.log('OK')
