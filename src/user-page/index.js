import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template.js'

page('/:username', header, loadUser,  function (ctx, next) {
  let main = document.getElementById('main-container')
  title(`JairGram - ${ctx.params.username}`)
  empty(main).appendChild(template(ctx.user))
})
page('/:username/:id', loadUser, header, function (ctx, next) {
  var main = document.getElementById('main-container');
  title(`JairGram - ${ctx.user.username}`);
  empty(main).appendChild(template(ctx.user));
  $(`#modal${ctx.params.id}`).openModal({
    dismissible: true,
    opacity: .5,
    complete: function () {
      page(`/${ctx.params.username}`)
    }
  });
});

async function loadUser (ctx, next){
  try {
    ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json());
    next();
  }
  catch (err) {
    console.log(err)
  }
}
