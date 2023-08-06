$(document).ready(function () {
  $.getJSON('https://jsonplaceholder.typicode.com/users', function (users) {
    let usersOutput = '<h2 class="mt-4">Takip Ettigim Yazarlar</h2><ul class="list-group">'
    users.forEach(function (user) {
      usersOutput += `
              <li class="list-group-item">
                  <strong>${user.name}</strong> (${user.username}) - ${user.email}
              </li>
          `
    })
    usersOutput += '</ul>'
    $('#users').html(usersOutput)
  })

  $.getJSON('https://jsonplaceholder.typicode.com/posts', function (posts) {
    let postsOutput = '<h2 class="mt-4">Önemli Makaleler</h2><ul class="list-group">'
    posts.slice(0, 5).forEach(function (post) {
      postsOutput += `
              <li class="list-group-item">
                  <h5>${post.title}</h5>
                  <p>${post.body}</p>
              </li>
          `
    })
    postsOutput += '</ul>'
    $('#posts').html(postsOutput)
  })
})

function handleLogin() {
  var kulAd = 'b191210049'
  var sifre = '12345'
  var username = document.getElementById('username').value
  var Parola = document.getElementById('parola').value
  var Hata = document.getElementById('hata')

  if (username == '' || Parola == '') {
    Hata.style.visibility = 'visible'
    Hata.innerHTML = 'Kullanıcı adı ya da Parola boş bırakılamaz.'
    return false
  } else if ((username != '' && username != kulAd) || (Parola != '' && Parola != sifre)) {
    Hata.style.visibility = 'visible'
    Hata.innerHTML = 'Kullanıcı adı ya da Parola yanlış.'
    return false
  } else {
    return true
  }
}
