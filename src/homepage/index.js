var page = require('page');
var empty = require('empty-element');
var template = require('./template');
const title = require('title');

page('/', function (ctx, next) {
  title('JairGram')
  var main = document.getElementById('main-container')

  var pictures = [
    {
      user: {
        username: 'Evitalires',
        avatar: 'jair.jpg'
      },
      url: 'https://carlosazaustre.es/content/images/2015/02/B9p1VCGIEAAZcUJ.jpg',
      likes: 10,
      liked: true
    },
    {
      user: {
        username: 'Evitalires',
        avatar: 'jair.jpg'
      },
      url: 'https://userscontent2.emaze.com/images/e0db49a7-545f-427e-bb4e-95f990e2234b/5d80eb38c5581aafcdc06d0b3c1cc6e8.jpg',
      likes: 1,
      liked: true
    }
  ];
  empty(main).appendChild(template(pictures));
})
