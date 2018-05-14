console.log('It works!')

const changeHeading = function(){
  const heading = document.querySelector('h1')
  heading.textContent = document.getElementById("new name").value
}

const formEntry = document.querySelector('form')
formEntry.addEventListener('change', changeHeading)
