'use strict'

var chai = require('chai')
var expect = chai.expect
var TorusWorld = require('./../lib/torus-world.js')
var Torling = require('./../lib/torling.js')

describe('TorusWorld', function() {

	it('should initialize size correctly', function() {
		var size_x = 10
		var size_y = 20

		var torusWorld = new TorusWorld(size_x, size_y)

		expect(torusWorld.getSizeX()).to.equal(size_x)
		expect(torusWorld.getSizeY()).to.equal(size_y)

	})

	it('should throw an error if initialized with sizes lower than or equal to 0', function() {

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

	it('should initialize tiles as undefined', function() {
		var size_x = 10
		var size_y = 20

		var torusWorld = new TorusWorld(size_x, size_y)

		expect(torusWorld.getItem(0, 0)).to.be.an('undefined')
		expect(torusWorld.getItem(size_x - 1, size_y - 1)).to.be.an('undefined')
	})

	it('allows to put a torling onto a defined tile', function() {
		var size_x = 10
		var size_y = 20

		var torusWorld = new TorusWorld(size_x, size_y)

		torusWorld.putItem(0, 0, new Torling("Karlheinz"))
		expect(torusWorld.getItem(0, 0) instanceof Torling)

		torusWorld.putItem(9, 19, new Torling("Ute"))
		expect(torusWorld.getItem(9, 19) instanceof Torling)

	})

	// TODO: You can't add two torlings with the same name to the torus-world!

})
