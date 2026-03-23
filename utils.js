'use strict';

export function getLength (p1, p2) {
  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  return Math.sqrt(dx * dx + dy * dy);
}

function getDiff (p1, p2) {
  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  return [dx, dy];
}

export function diffThingy(p1, p2, hyp, diff) {
  var delta = getDiff(p1, p2);
  var ratio = ((hyp - diff) / 2) / hyp;
  return [
    p1[0] + delta[0] * ratio,
     p1[1] + delta[1] * ratio
  ]
}
