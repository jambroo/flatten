'use strict'

const flatten = require('../flatten')
const expect = require('chai').expect


describe('flatten function', () => {
  it('should export a function', () => {
    expect(flatten).to.be.a('function')
  })

  it('given an empty array should result in an empty array', () => {
    expect(flatten([])).to.eql([])
  })

  it('given a single-dimensional array should result in the same array', () => {
    expect(flatten([1, 2, 3])).to.eql([1, 2, 3])
  })

  it('given a multi-dimensional array should result in the same array flattened', () => {
    expect(flatten([1, 2, [3]])).to.eql([1, 2, 3])
    expect(flatten([[1,2,[3]],4])).to.eql([1, 2, 3, 4])
  })
})
