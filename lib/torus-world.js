'use strict'

function TorusWorld(size_x, size_y) {
	var tiles // Stores the tiles of the torus world in a two-dimensional array

	if (size_x <= 0 || size_y <= 0) {
		throw new RangeError('size_x and size_y have to be positive integers!')
	} else {
		// this.tiles = new Array(size_x).fill(new Array(size_y).fill(undefined))
		this.tiles = new Array(size_x).fill(new Array(size_y))
	}
}

TorusWorld.prototype.getSizeX = function() {
	return this.tiles.length
}

TorusWorld.prototype.getSizeY = function() {
	return this.tiles[0].length
}

TorusWorld.prototype.getItem = function(pos_x, pos_y) {
	return this.tiles[pos_x][pos_y]
}

TorusWorld.prototype.putItem = function(pos_x, pos_y, item) {
	return this.tiles[pos_x][pos_y] = item
}

module.exports = TorusWorld
