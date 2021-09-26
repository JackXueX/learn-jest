import addDivToBody from './demo';
// import $ from 'jquery';
const jsdom = require('jsdom');
const $ = require('jquery')(new jsdom.JSDOM().window);

test('测试 addDivToBody', () => {
  addDivToBody();
  addDivToBody();
  console.log($('body').find('div').length);
  expect($('body').find('div').length).toBe(2);
});