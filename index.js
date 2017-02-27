const words = require('all-the-german-words-ascii')
const packages = require('all-the-package-names')
const difference = require('lodash.difference')

module.exports = difference(words, packages)
