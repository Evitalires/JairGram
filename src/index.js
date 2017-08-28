const page = require('page')

const main = document.getElementById('main-container')

page('/', function (contex, next) {
  main.innerHTML = 'Home <a href="/signup"> Signup </a>'
})
page('/signup', function (contex, next) {
  main.innerHTML = 'Signup <a href="/"> Home </a>'
})
page('/signin', function (contex, next) {
  main.innerHTML = 'Signin <a href="/signup"> Signup </a>' 
})
page()
