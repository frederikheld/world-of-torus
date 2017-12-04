'use strict'

var Torling = require('./torling.js')

function TorusWorld(size_x, size_y) {
	var tiles // Stores the tiles of the torus world in a two-dimensional array

	if (size_x <= 0 || size_y <= 0) {
		throw new RangeError('size_x and size_y have to be positive integers!')
	} else {

		// Init all tiles as undefined:
		this.tiles = []
		for (var x = 0; x < size_x; x++) {
			this.tiles[x] = []
			for (var y = 0; y < size_y; y++) {
				this.tiles[x][y] = undefined
			}
		}

	}
}

TorusWorld.prototype.getSizeX = function () {
	return this.tiles.length
}

TorusWorld.prototype.getSizeY = function () {
	return this.tiles[0].length
}

TorusWorld.prototype.getItem = function (pos_x, pos_y) {
	return this.tiles[pos_x][pos_y]
}

TorusWorld.prototype.putItem = function (pos_x, pos_y, item) {
	if (item instanceof Torling) {
		if (this.namesakeAlreadyPlaced(item)) {
			throw new RangeError('There can be only one ' + item.getName() + '! You can\'t put two Torlings with the same name into this TorusWorld-')
		}
	}
	this.tiles[pos_x][pos_y] = item

}

TorusWorld.prototype.namesakeAlreadyPlaced = function (torling) {

	for (var x = 0; x < this.tiles.length; x++) {
		for (var y = 0; y < this.tiles[0].length; y++) {
			if (this.tiles[x][y] instanceof Torling) {
				if (this.tiles[x][y].getName() == torling.getName()) {
					return true
				}
			}
		}
	}

	return false
}

TorusWorld.prototype.renderHTML = function () {

	var result = '<table>'

	for (var y = this.getSizeY() - 1; y >= 0; y--) {
		result += '<tr>'

		for (var x = 0; x < this.getSizeX(); x++) {

			if (this.tiles[x][y] instanceof Torling) {
				result += '<td style="background-color: ' + this.tiles[x][y].getColor() + '">'
				result += this.tiles[x][y].getName()
				result += '</td>'
			} else {
				result += "<td></td>"
			}

		}

		result += '</tr>'
	}

	result += '</table>'

	return result
}

module.exports = TorusWorld
