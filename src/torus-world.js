'use strict'

function Board(size_x, size_y) {
	var size_x
	var size_y

	if (size_x <= 0 || size_y <= 0) {
		throw new RangeError('size_x and size_y have to be positive integers!')
	} else {
		this.size_x = size_x
		this.size_y = size_y
	}
}

Board.prototype.getSizeX = function() {
	return this.size_x
}

Board.prototype.getSizeY = function() {
	return this.size_y
}

module.exports = Board
