var page = require('page');
var empty = require('empty-element');
var template = require('./template');
const title = require('title');

page('/signin', function (ctx, next) {
  title('JairGram - Signin')
  var main = document.getElementById('main-container')
  empty(main).appendChild(template);
})
