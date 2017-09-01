var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'JairGram'} );
})
app.get('/signup', function (req, res) {
  res.render('index', {title: 'JairGram - Signup'});
})
app.get('/signin', function (req, res) {
  res.render('index', {title: 'JairGram - Signin'});
})
app.get('/api/pictures', function (req, res) {
  var pictures = [
    {
      user: {
        username: 'Evitalires',
        avatar: 'jair.jpg'
      },
      url: 'https://carlosazaustre.es/content/images/2015/02/B9p1VCGIEAAZcUJ.jpg',
      likes: 10,
      liked: true,
      createdAt: +new Date()
    },
    {
      user: {
        username: 'Evitalires',
        avatar: 'jair.jpg'
      },
      url: 'https://userscontent2.emaze.com/images/e0db49a7-545f-427e-bb4e-95f990e2234b/5d80eb38c5581aafcdc06d0b3c1cc6e8.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 100)
    }
  ];

  setTimeout(function () {
    res.send(pictures);
  }, 2000)

})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('JairGram escuchando en el puerto 3000');
})
