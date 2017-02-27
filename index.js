const words = require('all-the-german-words').lowercase
const packages = require('all-the-package-names')
const difference = require('lodash.difference')

module.exports = difference(words, packages)
