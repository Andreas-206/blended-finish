import './styles/normalize.css';
import './styles/index.css';

import { productsApi } from './requests/products';
import { refs } from './js/refs';
import { addProductHandler } from './js/addProductHandler';


refs.formId.addEventListener("submit", async event => {
  try {
    event.preventDefault();

    const id = event.currentTarget.elements.id.value.trim();
  
    const result = await productsApi.getById(id);
  
    console.log(result);
  
    const markup = `
    <h3>${result.data.title}</h3>
    <p>${result.data.price}</p>
    <p>${result.data.description}</p>
    `;
  
    refs.singleProduct.innerHTML = markup; 
  } catch (error) {
    console.log(error.message);
  }
})

refs.formForNewProduct.addEventListener("submit", addProductHandler);