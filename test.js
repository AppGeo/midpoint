'use strict';

var test = require('tape');
var utils = require('./utils');
var midPoint = require('./index');

test('lengths', function (t) {
  var a = [0, 0];
  var b = [1, 1];
  var c = [-1, -1];
  var root2 = Math.sqrt(2);
  var root8 = Math.sqrt(8);
  t.plan(6);
  t.equals(utils.getLength(a, b), root2);
  t.equals(utils.getLength(a, c), root2);
  t.equals(utils.getLength(b, c), root8);
  t.equals(utils.getLength(b, a), root2);
  t.equals(utils.getLength(c, a), root2);
  t.equals(utils.getLength(c, b), root8);
});
test('angles', function (t) {
  t.equals(utils.getAngle([0,0], [1,1]), Math.PI/4, 'right angle');
  t.end();
});
test('mid points', function (t) {
  t.deepEquals(midPoint([[0,0], [1,1], [2,2], [3,3]]), [1.5, 1.5], 'correct mid point');
  t.deepEquals(midPoint([[0,0], [1,1], [3,3]]), [1.5, 1.5], 'correct mid point');
  t.deepEquals(midPoint([[0,0], [1,1],[2,2]]), [1, 1], 'correct mid point');
  t.end();
});