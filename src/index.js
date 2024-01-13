import './styles/normalize.css';
import './styles/index.css';

import { productsApi } from './requests/products';

const formIdEl = document.getElementById('singleProductForm');
const singleProductEl = document.getElementById('singleProduct');

formIdEl.addEventListener("submit", async event => {
  event.preventDefault();

  const id = event.currentTarget.elements.id.value.trim();

  const result = await productsApi.getById(id);

  console.log(result);

  const markup = `
  <h3>${result.data.title}</h3>
  <p>${result.data.price}</p>
  <p>${result.data.description}</p>
  `;

  singleProductEl.innerHTML = markup;
})

