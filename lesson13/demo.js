// import $ from 'jquery';
const jsdom = require('jsdom');
const $ = require('jquery')(new jsdom.JSDOM().window);

const addDivToBody = () => {
  $('body').append('<div/>');
}

export default addDivToBody;