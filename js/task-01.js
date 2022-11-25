const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

for (const item of itemsEl) {
  console.log(`Categories: ${item.firstElementChild.textContent}`);
  const elementsEl = item.lastElementChild;
  console.log(`Elements: ${elementsEl.children.length}`);
}
