console.log('It works!')

const form = document.querySelector('form#userForm')

const changeHeading = function(ev){
  ev.preventDefault() //break point to pause execution, 
  //stop the page from refreshing
  const form = ev.target
  const userName = form.userName.value
  const users = document.querySelector('#users')
  const age = form.age.value
  const favoriteColor = form.favoriteColor.value
  
  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${userName}`
  
  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  //p.textContent = `${userName}, ${age}`
  //p.style.backgroundColor = favoriteColor
  list.appendChild(nameItem)
  list.appendChild(ageItem)
  users.appendChild(list)
  //users.innerHTML += `<p>${userName}, ${age}<p>`

  form.reset();
  form.userName.focus()
}

form.addEventListener('submit', changeHeading)
