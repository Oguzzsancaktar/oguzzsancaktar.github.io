function handleForm() {
  var name = document.getElementById('name').value
  var labelname = document.getElementById('labelname')
  var surname = document.getElementById('surname').value
  var labelsurname = document.getElementById('labelsurname')
  var email = document.getElementById('email').value
  var labelemail = document.getElementById('labelemail')
  var phone = document.getElementById('phone').value
  var labelphone = document.getElementById('labelphone')
  var subject = document.getElementById('subject').value
  var labelsubject = document.getElementById('labelsubject')
  var message = document.getElementById('message').value
  var labelmessage = document.getElementById('labelmessage')
  var error = document.getElementById('error')

  validateWithJavaScript()

  if (!isNaN(name)) {
    labelname.style.color = 'rgb(201, 55, 19)'
    error.style.visibility = 'visible'
    return false
  } else {
    labelname.style.color = 'black'
    error.style.visibility = 'hidden'
  }
  if (!isNaN(surname)) {
    labelsurname.style.color = 'rgb(201, 55, 19)'
    error.style.visibility = 'visible'
    return false
  } else {
    labelsurname.style.color = 'black'
    error.style.visibility = 'hidden'
  }
  if (email == '') {
    labelemail.style.color = 'rgb(201, 55, 19)'
    error.style.visibility = 'visible'
    return false
  } else {
    labelemail.style.color = 'black'
    error.style.visibility = 'hidden'
  }
  if (phone == '') {
    labelphone.style.color = 'rgb(201, 55, 19)'
    error.style.visibility = 'visible'
    return false
  } else {
    labelphone.style.color = 'black'
    error.style.visibility = 'hidden'
  }
  if (subject == '') {
    labelsubject.style.color = 'rgb(201, 55, 19)'
    error.style.visibility = 'visible'
    return false
  } else {
    labelsubject.style.color = 'black'
    error.style.visibility = 'hidden'
  }

  if (message == '') {
    labelmessage.style.color = 'rgb(201, 55, 19)'
    error.style.visibility = 'visible'
    return false
  } else {
    labelmessage.style.color = 'black'
    error.style.visibility = 'hidden'
  }

  console.log('xx')
  document.getElementById('contactForm').submit()
}

function reset() {
  document.getElementById('contactForm').reset()
}

function validateWithJavaScript() {
  const errorEl = document.getElementById('error')
  errorEl.style.display = 'none'

  const name = document.getElementById('name').value
  const surname = document.getElementById('surname').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value
  const gender = document.getElementById('gender').value
  const subject = document.getElementById('subject').value
  const message = document.getElementById('message').value
  const subscribe = document.getElementById('subscribe').checked

  if (!name || !email || !phone || !subject || !gender || !message || !surname) {
    errorEl.style.display = 'block'
    errorEl.innerHTML = 'Tüm alanları doldur.'
    return
  }

  if (!isValidEmail(email)) {
    errorEl.style.display = 'block'
    errorEl.innerHTML = 'Doğru eposta gir'
    return
  }

  if (!isValidPhone(phone)) {
    errorEl.style.display = 'block'
    errorEl.innerHTML = 'DOgru tel no gir (Format: 555-555-5555).'
    return
  }

  errorEl.style.color = 'green'
  errorEl.innerHTML = 'Başarılı (JavaScript validation)'

  document.getElementById('contactForm').submit()
}

function isValidEmail(email) {
  return email.includes('@') && email.includes('.')
}

function isValidPhone(phone) {
  return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone)
}
