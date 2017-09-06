var page = require('page');
var empty = require('empty-element');
var template = require('./template');
const title = require('title');
const request = require('superagent');
const header = require('../header');
const axios = require('axios');

page('/', header,loading, asyncLoad, function (ctx, next) {
  title('JairGram')
  var main = document.getElementById('main-container');
  empty(main).appendChild(template(ctx.pictures));
})

function loading (ctx, next) {
  var el = document.createElement('div');
  el.classList.add('loader');
  document.getElementById('main-container').appendChild(el);
  next();
}

async function asyncLoad (ctx, next){
  try{
    ctx.pictures = await fetch('api/pictures').then(res => res.json());
    next();
  } catch (err) {
    return console.log(err)
  }
}
