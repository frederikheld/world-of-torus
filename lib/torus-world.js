'use strict'

function TorusWorld(size_x, size_y) {
	var tiles // Stores the tiles of the torus world in a two-dimensional array

	if (size_x <= 0 || size_y <= 0) {
		throw new RangeError('size_x and size_y have to be positive integers!')
	} else {
		this.tiles = new Array(size_x).fill(new Array(size_y))
	}
}

TorusWorld.prototype.getSizeX = function() {
	return this.tiles.length
}

TorusWorld.prototype.getSizeY = function() {
	return this.tiles[0].length
}

module.exports = TorusWorld
