const inputValidation = document.querySelector('#validation-input');

const inputLength = Number(inputValidation.dataset.length);

function textCheck(event) {
  if (event.currentTarget.value.length === inputLength) {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  } else {
    inputValidation.classList.add('invalid');
    inputValidation.classList.add('valid');
  }
}

inputValidation.addEventListener('blur', textCheck);
