const input = document.querySelector(`#font-size-control`);
const span = document.querySelector(`#text`);

function changeTextSize(event) {
  console.log(event.currentTarget.value);
  span.style.fontSize = event.currentTarget.value + `px`;
}

input.addEventListener('input', changeTextSize);
