console.log('It works!')

const changeHeading = function(ev){
  ev.preventDefault() //break point to pause execution, 
  //stop the page from refreshing
  const userName = formEntry.userName.value
  const heading = document.querySelector('h1')
  const users = document.querySelector('#users')
  users.textContent += ' ' + userName
  formEntry.userName.value = ''
}

const formEntry = document.querySelector('form#userForm')
formEntry.addEventListener('submit', changeHeading)
