function handleForm() {
  var name = document.getElementById('name').value
  var labelname = document.getElementById('labelname')
  var surname = document.getElementById('soyad').value
  var labelsurname = document.getElementById('labelsurname')
  var message = document.getElementById('message').value
  var labelmessage = document.getElementById('labelmessage')
  var error = document.getElementById('error')

  if (!isNaN(name)) {
    labelname.style.color = 'rgb(201, 55, 19)'
    error.style.visibility = 'visible'
    //return false;
  } else {
    labelname.style.color = 'black'
    error.style.visibility = 'hidden'
  }
  if (!isNaN(surname)) {
    labelsurname.style.color = 'rgb(201, 55, 19)'
    error.style.visibility = 'visible'
    //return false;
  } else {
    labelsurname.style.color = 'black'
    error.style.visibility = 'hidden'
  }
  if (message == '') {
    labelmessage.style.color = 'rgb(201, 55, 19)'
    error.style.visibility = 'visible'
    //return false;
  } else {
    labelmessage.style.color = 'black'
    error.style.visibility = 'hidden'
  }
  if (isNaN(name) && isNaN(surname) && message != '') {
    return true
  } else {
    return false
  }
}
