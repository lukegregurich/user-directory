console.log('It works!')

//const globalObject = {};
// const nameItem = null
// const ageItem = null
// const colorItem = null
const form = document.querySelector('form#userForm')

const renderColor = function(ev){ //or function(color)
  //function returns a `div` element for color  
  const colorDiv = document.createElement('div')
  const favoriteColor = form.favoriteColor.value
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'  //rem is relative to font size
  colorDiv.style.height = '3rem' 
  return colorDiv
}

const renderListItem = function(ev){
    //function creates the list items for each stat.
  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${userName}`
  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '
  return
}

const handleSubmit = function(ev){
  ev.preventDefault() //break point to pause execution, stop the page from refreshing
  const form = ev.target
  const userName = form.userName.value
  const users = document.querySelector('#users')
  const age = form.age.value
  const favoriteColor = form.favoriteColor.value
  
  const list = document.createElement('ul')

//   const nameItem = document.createElement('li')
//   nameItem.textContent = `Name: ${userName}`
  
//   const ageItem = document.createElement('li')
//   ageItem.textContent = `Age: ${age}`

//   const colorItem = document.createElement('li')
//   colorItem.textContent = 'Favorite Color: '
  
  renderListItem(colorItem).appendChild(renderColor(favoriteColor)) //call the renderColor function to get the div element
  //p.textContent = `${userName}, ${age}`
  //p.style.backgroundColor = favoriteColor
  list.appendChild(renderListItem(nameItem))
  list.appendChild(renderListItem(ageItem))
  list.appendChild(renderListItem(colorItem))
  users.appendChild(list)
  //users.innerHTML += `<p>${userName}, ${age}<p>`

  form.reset();
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)
