'use strict'

function getRandomColor() {
	var letters = '0123456789abcdef';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
// TODO: Put helper in own file

function Torling(name) {
	var name

	if (typeof name === 'undefined') {
		throw new Error('You can\'t create a torling that has no name!');
	}

	this.name = name
	this.health = 1

	this.color = getRandomColor()

}

Torling.prototype.getName = function () {
	return this.name
}

Torling.prototype.getHealth = function () {
	return this.health
}

Torling.prototype.getColor = function () {
	return this.color
}

Torling.prototype.setColor = function (hexColorString) {
	this.color = hexColorString.toLowerCase()
}

Torling.prototype.gainHealth = function (healthPoints) {
	this.health += healthPoints
}

Torling.prototype.loseHealth = function (healthPoints) {
	this.health -= healthPoints
}

module.exports = Torling
