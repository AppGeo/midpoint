'use strict';

function getLength (p1, p2) {
  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  return Math.sqrt(dx * dx + dy * dy);
}
exports.getLength = getLength;

function getAngle (p1, p2) {
  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  return Math.atan2(dy, dx);
}
exports.getAngle = getAngle;