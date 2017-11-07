'use strict'

function Torling(name) {
	var name

	if (typeof name === 'undefined') {
		throw new Error('You can\'t create a torling that has no name!');
	}

	this.name = name

}

Torling.prototype.getName = function() {
	return this.name
}

module.exports = Torling
