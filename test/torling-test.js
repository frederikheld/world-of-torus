'use strict'

var chai = require('chai')
var expect = chai.expect
var Torling = require('./../lib/torling.js')

describe('Torling', function () {

	it('should be initialized with the given name', function () {
		var name = "Karlheinz"

		var torling = new Torling(name)

		expect(torling.getName()).to.equal(name)
	})

	it('should be initialized with 1 health point', function () {

		var torling = new Torling('dummy')

		expect(torling.getHealth()).to.equal(1)
	})

	it('should be initialized with a random, but valid, hex color value', function () {
		var colorPattern = '^#([a-f0-9]{3}|[a-f0-9]{6})$'

		var torling = new Torling('dummy')

		expect(torling.getColor()).to.match(new RegExp(colorPattern))

	})

	it('should throw an error if no name is given on initialization', function () {

		var surrogateNoName = function () {
			new Torling()
		}
		expect(surrogateNoName).to.throw(Error)

	})

	it('should allow to set color', function () {
		var color1 = '#aa3399'
		var color2 = '#cc1234'

		var torling = new Torling("dummy")

		torling.setColor(color1)
		expect(torling.getColor()).to.equal(color1)

		torling.setColor(color2)
		expect(torling.getColor()).to.equal(color2)
	})

	it('should convert all hex color strings to lower case', function () {

		var torling = new Torling("dummy")

		torling.setColor('#7EF3AC')
		expect(torling.getColor()).to.equal('#7ef3ac')

		torling.setColor('#a1B3c5')
		expect(torling.getColor()).to.equal('#a1b3c5')
	})

	// TODO: Functions probably not needed since this should be directly implemented in fight()
	it('should allow to gain and lose health', function () {

		var torling = new Torling('dummy')

		torling.gainHealth(15)
		expect(torling.getHealth()).to.equal(16)

		torling.loseHealth(3)
		expect(torling.getHealth()).to.equal(13)
	})

	it('can breed', function () {

		// Rule for breeding:
		// - For each HP the torling gains another 0.1 HP.
		// - Round up to next full integer

		// TODO: This rule is bad. But it's a starter at least

		var torling = new Torling('dummy')

		torling.breed()
		expect(torling.getHealth()).to.equal(2)

		torling.breed()
		expect(torling.getHealth()).to.equal(3)

		torling.breed()
		expect(torling.getHealth()).to.equal(4)

		torling.breed()
		torling.breed()
		torling.breed()
		torling.breed()
		torling.breed()
		torling.breed()
		expect(torling.getHealth()).to.equal(10)

		torling.breed()
		expect(torling.getHealth()).to.equal(11)

		torling.breed()
		expect(torling.getHealth()).to.equal(13)

		torling.breed()
		torling.breed()
		torling.breed()
		expect(torling.getHealth()).to.equal(19)

		torling.breed()
		expect(torling.getHealth()).to.equal(21)

	})

})
