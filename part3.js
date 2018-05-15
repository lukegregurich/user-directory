console.log('It works!')

const changeHeading = function(ev){
  const heading = document.querySelector('h1')
  const input = document.querySelector('input')
  heading.textContent = input.value
}

const formEntry = document.querySelector('form#userForm')
formEntry.addEventListener('submit', changeHeading)
