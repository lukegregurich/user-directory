console.log('It works!')

const changeHeading2 = function(){
  const heading2 = document.querySelector('h2')
  heading2.textContent = 'I feel... different'
}

const button = document.querySelector('button')
button.addEventListener('click', changeHeading2)
