'use strict';

export const getLength = (p1, p2) => {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  return Math.sqrt(dx * dx + dy * dy);
}

const getDiff = (p1, p2) => {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  return [dx, dy];
}

export const findMidpoint = (p1, p2, hyp, diff) => {
  const delta = getDiff(p1, p2);
  const ratio = ((hyp - diff) / 2) / hyp;
  return [
    p1[0] + delta[0] * ratio,
    p1[1] + delta[1] * ratio
  ]
}
