'use strict'

var chai = require('chai')
var expect = chai.expect
var Board = require('./../src/torus-world.js')

describe('Torus-World', function() {

	it('is initialized correctly with positive values', function() {
		var size_x = 10
		var size_y = 20

		var board = new Board(size_x, size_y)

		expect(board.getSizeX()).to.equal(size_x)
		expect(board.getSizeY()).to.equal(size_y)
	})

	it('throws exception if initialized with value that is not a positive integer', function() {

		// negative dimensions:
		var surrogateNegative = function() {
			new Board(-20, -10)
		}
		expect(surrogateNegative).to.throw(RangeError)

		// dimensions 0:
		var surrogateZero = function() {
			new Board(0, 0)
		}
		expect(surrogateZero).to.throw(RangeError)
	})

	// TODO: You can't add two torlings with the torus-world!

})
