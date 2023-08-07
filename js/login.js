function handleLogin() {
  const DEFAULT_USERNAME = 's221210334@sakarya.edu.tr'
  const DEFAULT_PASSWORD = 's221210334'
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  var error = document.getElementById('error')

  if (username == '' || password == '') {
    error.style.visibility = 'visible'
    error.innerHTML = 'Kullanıcı adı ya da password boş bırakılamaz.'
    return false
  } else if ((username != '' && username != DEFAULT_USERNAME) || (password != '' && password != DEFAULT_PASSWORD)) {
    error.style.visibility = 'visible'
    error.innerHTML = 'Kullanıcı adı ya da password yanlış.'
    return false
  } else {
    return true
  }
}
