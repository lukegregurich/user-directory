console.log('It works!')

const changeHeading = function(ev){
  ev.preventDefault() //break point to pause execution, 
  //stop the page from refreshing
  const heading = document.querySelector('h1')
  const input = document.querySelector('input')
  heading.textContent = input.value
}

const formEntry = document.querySelector('form#userForm')
formEntry.addEventListener('submit', changeHeading)
