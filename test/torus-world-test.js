'use strict'

var chai = require('chai')
var expect = chai.expect
var TorusWorld = require('./../lib/torus-world.js')
var Torling = require('./../lib/torling.js')

describe('TorusWorld', function() {

	// Note: d contains default values that apply to all tests in this suite.
	// I shortened it to a non self-explaining name, knowing that I'm breaking clean coding rules. But it's better for readability of the tests to have a short name.
	var d

	beforeEach(function() {

		d = {}

		d.size_x = 10
		d.size_y = 20

		d.torusWorld = new TorusWorld(d.size_x, d.size_y)

	})

	afterEach(function() {
		d = null
	})

	it('should initialize size correctly', function() {
		expect(d.torusWorld.getSizeX()).to.equal(d.size_x)
		expect(d.torusWorld.getSizeY()).to.equal(d.size_y)
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

		// The surrogates are neccessary in order to have the Exceptions thrown by TorusWorld passed correctly to expect()

	})

	it('should initialize tiles as undefined', function() {
		expect(d.torusWorld.getItem(0, 0)).to.be.an('undefined')
		expect(d.torusWorld.getItem(d.size_x - 1, d.size_y - 1)).to.be.an('undefined')
	})

	it('allows to put a torling onto a defined tile', function() {

		d.torusWorld.putItem(0, 0, new Torling('Karlheinz'))
		expect(d.torusWorld.getItem(0, 0) instanceof Torling)

		d.torusWorld.putItem(9, 19, new Torling('Ute'))
		expect(d.torusWorld.getItem(9, 19) instanceof Torling)

	})

	it('does not allow to put two Torlings with the same name into the TorusWorld', function() {

		d.torusWorld.putItem(0, 0, new Torling('Karlheinz'))
		d.torusWorld.putItem(1, 0, new Torling('Maik'))

		var surrogateAddNamesake = function() {
			d.torusWorld.putItem(10, 0, new Torling('Karlheinz'))
		}
		expect(surrogateAddNamesake).to.throw(Error)

	})

})
