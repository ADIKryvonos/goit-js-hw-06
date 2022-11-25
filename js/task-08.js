const form = document.querySelector('.login-form');

form.addEventListener('submit', sendForm);

function sendForm(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  if (elements.email.value === '' || elements.password.value === '') {
    return alert('Необхідно заповнити пусті поля!');
  }
  const formData = { email: elements.email.value, password: elements.password.value };
  console.log(formData);
  event.currentTarget.reset();
}
