console.log('It works!')

const changeHeading = function(){
  const heading = document.querySelector('h1')
  heading.textContent = 'It is changed'
}


const button = document.querySelector('button')
button.addEventListener('click', changeHeading)
