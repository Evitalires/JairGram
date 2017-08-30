const page = require('page');
const title = require('title');

page('/', function (ctx, next) {
  title('JairGram')
  var main = document.getElementById('main-container');
  main.innerHTML = '<a href="/signup">signup</a>'
})
