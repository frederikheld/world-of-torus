'use strict'

var chai = require('chai')
var expect = chai.expect
var Torling = require('./../src/torling.js')

describe('Torling', function() {

	it('is initialized correctly', function() {
		var name = "Karlheinz"

		var torling = new Torling(name)

		expect(torling.getName()).to.equal(name)
	})

	it('throws an exception if no name is given on initialization', function() {

		var surrogateNoName = function() {
			new Torling()
		}
		expect(surrogateNoName).to.throw(Error)

	})

})
