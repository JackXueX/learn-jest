// const math = require('./math.js');
// const { add, minus } = math;

import {add, minus} from './math';

test('测试加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10);
});

test('测试减法 3 -3', () => {
  expect(minus(3, 3)).toBe(0);
});