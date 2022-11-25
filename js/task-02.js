const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientList = ingredients => {
  return ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    liEl.classList.add('item');

    return liEl;
  });
};

const element = ingredientList(ingredients);
ingredientsEl.append(...element);
console.log(element);
