console.log('It works!')

const form = document.querySelector('form#userForm')

const renderColor = function(ev){
  const colorDiv = document.createElement('div')
  const favoriteColor = form.favoriteColor.value
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'  //rem is relative to font size
  colorDiv.style.height = '3rem' 
  return colorDiv
}

const renderListItem = function(ev){
    
}

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

  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '

  colorItem.appendChild(renderColor()) //this will be colordiv()
  //p.textContent = `${userName}, ${age}`
  //p.style.backgroundColor = favoriteColor
  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.appendChild(colorItem)
  users.appendChild(list)
  //users.innerHTML += `<p>${userName}, ${age}<p>`

  form.reset();
  form.userName.focus()
}

form.addEventListener('submit', changeHeading)
