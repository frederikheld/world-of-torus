'use strict'

var chai = require('chai')
var expect = chai.expect
var TorusWorld = require('./../lib/torus-world.js')
var Torling = require('./../lib/torling.js')

describe('TorusWorld', function () {

	// Note: d contains default values that apply to all tests in this suite.
	// I shortened it to a non self-explaining name, knowing that I'm breaking clean coding rules. But it's better for readability of the tests to have a short name.
	var d

	beforeEach(function () {

		d = {}

		d.size_x = 10
		d.size_y = 20

		d.torusWorld = new TorusWorld(d.size_x, d.size_y)

	})

	afterEach(function () {
		d = null
	})

	it('should initialize size correctly', function () {
		expect(d.torusWorld.getSizeX()).to.equal(d.size_x)
		expect(d.torusWorld.getSizeY()).to.equal(d.size_y)
	})

	it('should throw an error if initialized with sizes lower than or equal to 0', function () {

		// negative dimensions:
		var surrogateNegative = function () {
			new TorusWorld(-20, -10)
		}
		expect(surrogateNegative).to.throw(RangeError)

		// dimensions 0:
		var surrogateZero = function () {
			new TorusWorld(0, 0)
		}
		expect(surrogateZero).to.throw(RangeError)

		// The surrogates are neccessary in order to have the Exceptions thrown by TorusWorld passed correctly to expect()

	})

	it('should initialize all tiles as undefined', function () {
		expect(d.torusWorld.getItem(0, 0)).to.be.an('undefined')
		expect(d.torusWorld.getItem(d.size_x - 1, d.size_y - 1)).to.be.an('undefined')
	})

	it('should allow to put a torling onto a tile', function () {

		expect(d.torusWorld.getItem(2, 3)).to.be.an('undefined')

		d.torusWorld.putItem(2, 3, new Torling('Karlheinz'))
		expect(d.torusWorld.getItem(2, 3) instanceof Torling).to.equal(true)

	})

	it('should not allow to put two Torlings with the same name into the TorusWorld', function () {

		d.torusWorld.putItem(0, 0, new Torling('Karlheinz'))
		d.torusWorld.putItem(1, 1, new Torling('Uwe'))

		var surrogatePutItem = function () {
			d.torusWorld.putItem(2, 2, new Torling('Karlheinz'))
		}
		expect(surrogatePutItem).to.throw(RangeError)
	})

	it('can render itself as HTML', function () {
		var torling_karlheinz = new Torling('Karlheinz')
		torling_karlheinz.setColor('#ff0000')

		var world = new TorusWorld(1, 2)
		world.putItem(0, 1, torling_karlheinz)

		var worldAsHTML =
			'<table>' +
			'<tr>' +
			'<td style="background-color: #ff0000">Karlheinz</td>' +
			'</tr>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'</table>'

		expect(world.getSizeX()).to.equal(1)
		expect(world.getSizeY()).to.equal(2)
		expect(world.renderHTML()).to.equal(worldAsHTML)

		var torling_martin = new Torling('Martin')
		torling_martin.setColor('#ffffff')

		var torling_ute = new Torling('Ute')
		torling_ute.setColor('#cccccc')

		var torling_jens = new Torling('Jens')
		torling_jens.setColor('#aaffbb')

		var world2 = new TorusWorld(3, 2)
		world2.putItem(2, 1, torling_martin)
		world2.putItem(0, 0, torling_ute)
		world2.putItem(1, 1, torling_jens)

		var world2AsHTML =
			'<table>' +
			'<tr>' +
			'<td></td>' +
			'<td style="background-color: #aaffbb">Jens</td>' +
			'<td style="background-color: #ffffff">Martin</td>' +
			'</tr>' +
			'<tr>' +
			'<td style="background-color: #cccccc">Ute</td>' +
			'<td></td>' +
			'<td></td>' +
			'</tr>' +
			'</table>'

		expect(world2.getSizeX()).to.equal(3)
		expect(world2.getSizeY()).to.equal(2)
		expect(world2.renderHTML()).to.equal(world2AsHTML)
	})

	// TODO: Throws error if pos in addItem is out of bounds

})
