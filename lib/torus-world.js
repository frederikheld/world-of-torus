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

TorusWorld.prototype.namesakeAlreadyPlaced = function (torling) {

	for (var row in this.tiles) {
		for (var obj in row) {
			if (obj instanceof Torling) {
				if (torling.getName() == obj.getName()) {
					return true
				}
			}
		}
	}
	// PERFORMANCE: Expensive loops could be avoided if pointers to each torling would be stored in a separate list.

	return false
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
			throw new Error('There can only be one "' + item.getName() + '"! There\'s already a namesake in this world. Please choose another name for your Torling!')
		}
	}
	// TODO: Violates CC rules: method has multiple duties since it can place all kinds of items

	return this.tiles[pos_x][pos_y] = item
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
