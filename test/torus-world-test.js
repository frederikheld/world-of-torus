'use strict'

var chai = require('chai')
var expect = chai.expect
var TorusWorld = require('./../lib/torus-world.js')

describe('TorusWorld', function() {

	it('should be initialized correctly with positive values', function() {
		var size_x = 10
		var size_y = 20

		var torusWorld = new TorusWorld(size_x, size_y)

		expect(torusWorld.getSizeX()).to.equal(size_x)
		expect(torusWorld.getSizeY()).to.equal(size_y)
	})

	it('should throw an error if initialized with value that is not a positive integer', function() {

		// negative dimensions:
		var surrogateNegative = function() {
			new TorusWorld(-20, -10)
		}
		expect(surrogateNegative).to.throw(RangeError)

		// dimensions 0:
		var surrogateZero = function() {
			new TorusWorld(0, 0)
		}
		expect(surrogateZero).to.throw(RangeError)
	})

	// TODO: You can't add two torlings with the torus-world!

})
