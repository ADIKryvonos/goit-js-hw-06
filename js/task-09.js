function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colourName = document.querySelector('.color');
const changeColourButton = document.querySelector('.change-color');
const bgColor = document.querySelector('body');

function mixRandomColour(value) {
  bgColor.style.backgroundColor = getRandomHexColor();
  colourName.textContent = getRandomHexColor();
}

changeColourButton.addEventListener('click', mixRandomColour);
