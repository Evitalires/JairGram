var page = require('page');
var empty = require('empty-element');
var template = require('./template');
const title = require('title');
const request = require('superagent');
const header = require('../header');

page('/', header, loadPictures, function (ctx, next) {
  title('JairGram')
  var main = document.getElementById('main-container');
  empty(main).appendChild(template(ctx.pictures));
})

function loadPictures(ctx, next) {
  request
    .get('api/pictures')
    .end(function (err, res) {
      if (err) return console.log(err);
      ctx.pictures = res.body;
      next()
    })
}
