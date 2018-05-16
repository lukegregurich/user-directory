console.log('It works!')
const form = document.querySelector('form#userForm')

const renderColor = function(){ //or function(color)
  //function returns a `div` element for color  
  const colorDiv = document.createElement('div')
  const favoriteColor = form.favoriteColor.value
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'  //rem is relative to font size
  colorDiv.style.height = '3rem' 
  return colorDiv
}

const renderListItem = function(label, value){ //label and value correspond to "Name:", then the actual name "Luke"
    //function creates the list items for each stat.
  const item = document.createElement('li')
  item.textContent = `${label}: `
  try {
    item.appendChild(value)
  } catch(e) {
    item.textContent += value
  }
  return item
}

const renderList = function(data){
    const list = document.createElement('ul')
    Object.keys(data).map(function(label){
        const item = renderListItem(label, data[label])
        list.appendChild(item)
    })
    return list
}

const handleSubmit = function(ev){
  ev.preventDefault() //break point to pause execution, stop the page from refreshing
  const form = ev.target
  const user = {
      name: form.userName.value,
      age: form.age.value,
      favoriteColor: renderColor(form.favoriteColor.value),
  }
  //p.textContent = `${userName}, ${age}`
  //p.style.backgroundColor = favoriteColor
//   list.appendChild(renderListItem('Name', userName))
//   list.appendChild(renderListItem('Age', age))
//   list.appendChild(renderListItem('Favorite Color', favoriteColor))
  const list = renderList(user)
  const users = document.querySelector('#users')
  users.appendChild(list)
  //users.innerHTML += `<p>${userName}, ${age}<p>`
  form.reset();
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)
