var express = require('express');
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Platzigram - Signup' });
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram - Signin' });
})

app.get('/api/pictures', function (req, res) {
  var pictures = [
    {
      user: {
        username: 'evitalires',
        avatar: 'jair.jpg'
      },
      url: 'https://carlosazaustre.es/content/images/2015/02/B9p1VCGIEAAZcUJ.jpg',
      likes: 10,
      liked: true,
      createdAt: +new Date()
    },
    {
      user: {
        username: 'evitalires',
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
  }, 500);
});


app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})



app.get('/api/user/:username', function (req, res) {
  const user = {
    username: 'evitalires',
    avatar: 'https://pbs.twimg.com/profile_images/790109881298722816/1lUAE_IX_400x400.jpg',
    pictures: [
      {
        id: 1,
        src: 'https://image.redbull.com/rbcom/010/2015-06-02/1331726754024_5/0010/1/1500/1000/1/the-witcher-3-wild-hunt.jpg',
        likes: 4
      },
      {
        id: 2,
        src: 'http://www.seletiene.com/linio/thewitcher/banner1.jpg',
        likes: 7
      },
      {
        id: 3,
        src: 'https://www.rockpapershotgun.com/images/13/jun/witch2a.jpg',
        likes: 56
      },
      {
        id: 4,
        src: 'https://images.g2a.com/images/1024x768/1x1x0/960210b35e92/59128871ae653afbe342aa9c',
        likes: 35
      },
      {
        id: 5,
        src: 'http://www.somosxbox.com/wp-content/uploads/2014/07/The-Witcher-3-Igni-21.jpg',
        likes: 9
      }
    ]
  }
  res.send(user);
})

app.get('/:username', function (req, res){
  res.render('index', { title: `Platzigram - ${req.params.username}` })
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log('Platzigram escuchando en el puerto 3000');
})
