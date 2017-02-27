const expect = require('chai').expect
const woerter = require('.')
const they = it

describe('woerter', () => {
  they('are in an array', () => {
    expect(woerter).to.be.an('array')
  })

  they('are all lowercase', () => {
    expect(woerter.every(word => word === word.toLowerCase())).to.equals(true)
  })

  they('all have length', () => {
    expect(woerter.every(word => word.length > 0)).to.equal(true)
  })
})
