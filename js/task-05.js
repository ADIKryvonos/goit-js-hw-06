const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(element) {
  refs.span.textContent = element.currentTarget.value;
  if (element.currentTarget.value === '') {
    refs.span.textContent = 'Anonymous';
  }
}
