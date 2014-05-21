'use strict';
var utils = require('./utils');

function midPoint (line) {
  var len = line.length;
  var start = 0;
  var end = len - 1;
  var diff = 0;
  while (start + 1 !== end) {
    if (diff <= 0) {
      diff += utils.getLength(line[start], line[++start]);
    } else {
      diff -= utils.getLength(line[end], line[--end]);
    }
  }
  
  var hyp = (utils.getLength(line[start], line[end]) - diff) / 2;
  var theta = utils.getAngle(line[start], line[end]);

  return [
    line[start][0] + hyp * Math.cos(theta),
    line[start][1] + hyp * Math.sin(theta)
  ];
}
module.exports = midPoint;