'use strict'

var chai = require('chai')
var expect = chai.expect
var Torling = require('./../lib/torling.js')

describe('Torling', function() {

	it('should be initialized correctly', function() {
		var name = "Karlheinz"
		var healthPoints = 1
		var colorPattern = '^#([a-f0-9]{3}|[a-f0-9]{6})$'

		var torling = new Torling(name)

		// name is param is stored:
		expect(torling.getName()).to.equal(name)

		// standard amount of HP is assigned:
		expect(torling.getHealth()).to.equal(healthPoints)

		// valid hex color string is generated (randomly):
		expect(torling.getColor()).to.match(new RegExp(colorPattern))
	})

	it('should throw an error if no name is given on initialization', function() {

		var surrogateNoName = function() {
			new Torling()
		}
		expect(surrogateNoName).to.throw(Error)

	})

	it('should allow to set color', function() {
		var color1 = '#aa3399'
		var color2 = '#cc1234'

		var torling = new Torling("dummy")

		torling.setColor(color1)
		expect(torling.getColor()).to.equal(color1)

		torling.setColor(color2)
		expect(torling.getColor()).to.equal(color2)
	})

	it('should convert all hex color strings to lower case', function() {
		var color1upper = '#7EF3AC'
		var color1lower = '7ef3ac'

		var torling = new Torling("dummy")

		torling.setColor(color1upper)
		// expect(torling.getColor()).to.equal(color1lower)
	})

})
