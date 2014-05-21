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
  
  var hyp = utils.getLength(line[start], line[end]);
  return utils.diffThingy(line[start], line[end], hyp, diff);
}
module.exports = midPoint;