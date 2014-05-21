'use strict';

function getLength (p1, p2) {
  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  return Math.sqrt(dx * dx + dy * dy);
}
exports.getLength = getLength;

function getDiff (p1, p2) {
  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  return [dx, dy];
}

function diffThingy(p1, p2, hyp, diff) {
  var delta = getDiff(p1, p2);
  var ratio = ((hyp - diff) / 2) / hyp;
  return p1.map(function (p, i) {
    return p + delta[i] * ratio;
  });
}
exports.diffThingy = diffThingy;