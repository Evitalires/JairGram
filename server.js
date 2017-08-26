var express = require('express')
var app = express()
//      Ruta, función
app.get('/', function(req, res){
  res.send('Hola Bogotá')
})

// Ahora vamos a lanzar el sitio web
// Puerto que escuchará,                      Cerramos el proceso con 1
app.listen(3000, function(err){
  if (err) return console.log('Hubo un error'), process.exit(1)
  console.log('JairGram escuchando en el puerto 3000')
})