console.log('It works!')

const form = document.querySelector('form#userForm')

const changeHeading = function(ev){
  ev.preventDefault() //break point to pause execution, 
  //stop the page from refreshing
  const form = ev.target
  const userName = form.userName.value
  const users = document.querySelector('#users')
  const age = form.age.value
  users.innerHTML += '<p>' + userName + ', ' + age + '<p>'
  form.reset();
}

form.addEventListener('submit', changeHeading)
