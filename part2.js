console.log('It works!')

const changeHeading2 = function(){
  const heading2 = document.querySelectorAll('#header2')
  heading2.textContent = 'It is changed'
}

const button = document.querySelector('button')
button.addEventListener('click', changeHeading2)
