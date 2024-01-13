import { productsApi } from "../requests/products";
import { refs } from "./refs";

export async function addProductHandler(evt) {
    try{
        evt.preventDefault();
        const data ={};
        new FormData(evt.currentTarget).forEach((value, key) => {data[key]=value})    
        const result = await productsApi.create(data);
        const markup = `
        <h3>${result.data.title}</h3>
        <p>${result.data.price}</p>
        <p>${result.data.description}</p>
        `;
        refs.newProductSection.innerHTML = markup;
    }
    catch(err){
console.log(err.message);
    }
    


}