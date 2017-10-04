'use strict'

const flatten = require('../flatten')
const expect = require('chai').expect


describe('flatten function', () => {
  it('should export a function', () => {
    expect(flatten).to.be.a('function')
  })
})
