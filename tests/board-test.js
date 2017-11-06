'use strict'

var chai = require('chai');
var expect = chai.expect;

var Board = require('./../src/board.js');

describe('Board', function() {
    it('is initialized correctly', function() {
        var board = new Board([]);
    });
});
