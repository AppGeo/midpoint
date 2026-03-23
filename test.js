'use strict';

import test from 'tape';
import {getLength} from './utils.js'
import midPoint from './index.js'

test('lengths', function (t) {
  var a = [0, 0];
  var b = [1, 1];
  var c = [-1, -1];
  var root2 = Math.sqrt(2);
  var root8 = Math.sqrt(8);
  t.plan(6);
  t.equals(getLength(a, b), root2);
  t.equals(getLength(a, c), root2);
  t.equals(getLength(b, c), root8);
  t.equals(getLength(b, a), root2);
  t.equals(getLength(c, a), root2);
  t.equals(getLength(c, b), root8);
});
test('mid points', function (t) {
  t.deepEquals(midPoint([[0,0], [1,1], [2,2], [3,3]]), [1.5, 1.5], 'correct mid point 1');
  t.deepEquals(midPoint([[0,0], [1,1], [3,3]]), [1.5, 1.5], 'correct mid point, 2');
  t.deepEquals(midPoint([[0,0], [1,1],[2,2]]), [1, 1], 'correct mid point, 3');
  t.deepEquals(midPoint([[0,0], [1, 0],[1,1],[7,1]]), [3, 1], 'correct mid point, 4');
  t.deepEquals(midPoint([[7,1], [1,1],[1,0],[0,0]]), [3, 1], 'correct mid point, 5');

  t.end();
});

test('weird', function (t){
  const path = [
          [
            -93.58900674667849,
            34.72896579327973
          ],
          [
            -93.52014326672906,
            34.88244373300708
          ],
          [
            -93.31354710277073,
            34.9711667901214
          ],
          [
            -89.36857824131185,
            35.22873356176132
          ]
        ]
  t.deepEquals(midPoint(path),   [-91.53717547300896, 35.08714598336179], 'correct forward')
      t.deepEquals(midPoint(path.toReversed()),   [-91.53717547300896, 35.08714598336179 ], 'correct backwards')
       t.end();
});