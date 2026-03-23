
import {getLength, findMidpoint} from './utils.js'
const midPoint = (line) => {
  let start = 0;
  let end = line.length - 1;
  let diff = 0;
  let lastStart = 0;
  let lastEnd = 0;
  while (start + 1 !== end) {
    if (diff <= 0) {
      lastStart =  getLength(line[start], line[++start]);
      diff += lastStart;
    } else {
     lastEnd = getLength(line[end], line[--end]);
     diff -= lastEnd;
    }
  }
  
  let hyp = getLength(line[start], line[end]);

  if (Math.abs(diff) > hyp) {
    // our last segment is smaller than the current difference;

    // to correct this we 
    // 1. undo the last one that was too big
    // 2. force it to do the segment at the other end that was previously the midpoint
    // 3. recalculate the distance between the new last two points
    if (diff > 0) {
      diff -= lastStart; // 1. 
      start--;// 1. 
      diff -= getLength(line[end], line[--end]); // 2. 
    } else {
      diff += lastEnd;// 1. 
      end++;// 1. 
      diff += getLength(line[start], line[++start]); // 2. 
    }
     hyp = getLength(line[start], line[end]); // 3. 
  }
  return findMidpoint(line[start], line[end], hyp, diff);
}
export default midPoint;