// Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
  value: document.querySelector('#value'),
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

const changeValue = () => {
  refs.value.textContent = counterValue;
};

const clickOnDecrement = () => {
  counterValue -= 1;
  changeValue();
};
const clickOnIncrement = () => {
  counterValue += 1;
  changeValue();
};

refs.decrement.addEventListener('click', clickOnDecrement);
refs.increment.addEventListener('click', clickOnIncrement);
