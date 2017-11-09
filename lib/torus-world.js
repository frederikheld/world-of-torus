'use strict'

var Torling = require('./torling.js')

function TorusWorld(size_x, size_y) {
	var tiles // Stores the tiles of the torus world in a two-dimensional array

	if (size_x <= 0 || size_y <= 0) {
		throw new RangeError('size_x and size_y have to be positive integers!')
	} else {
		this.tiles = new Array(size_x).fill(new Array(size_y).fill(undefined))
		// this.tiles = new Array(size_x).fill(new Array(size_y))
	}
}

TorusWorld.prototype.namesakeAlreadyPlaced = function(torling) {

	for (var row in this.tiles) {
		for (var obj in row) {
			if (obj instanceof Torling) {
				if (torling.getName() == obj.getName()) {
					return true
				}
			}
		}
	}

	return false
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
	if (item instanceof Torling) {
		if (this.namesakeAlreadyPlaced(item)) {
			throw new Error('There can only be one "' + item.getName() + '"! There\'s already a namesake in this world. Please choose another name for your Torling!')
		}
	}
	// TODO: Violates CC rules: method has multiple duties

	return this.tiles[pos_x][pos_y] = item
}

module.exports = TorusWorld
