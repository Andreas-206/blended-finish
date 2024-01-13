import{a as u}from"./assets/vendor-a2e8d7fa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=u.create({baseURL:"https://dummyjson.com"}),l=async o=>await d.get(`/products/${o}`),m=async o=>await d.post("/products/add",o),i={getById:l,create:m},s={formId:document.getElementById("singleProductForm"),singleProduct:document.getElementById("singleProduct"),formForNewProduct:document.getElementById("addNewProductForm"),newProductSection:document.getElementById("newProductSection")};async function p(o){try{o.preventDefault();const r={};new FormData(o.currentTarget).forEach((e,t)=>{r[t]=e});const n=await i.create(r),c=`
        <h3>${n.data.title}</h3>
        <p>${n.data.price}</p>
        <p>${n.data.description}</p>
        `;s.newProductSection.innerHTML=c}catch(r){console.log(r.message)}}s.formId.addEventListener("submit",async o=>{try{o.preventDefault();const r=o.currentTarget.elements.id.value.trim(),n=await i.getById(r);console.log(n);const c=`
    <h3>${n.data.title}</h3>
    <p>${n.data.price}</p>
    <p>${n.data.description}</p>
    `;s.singleProduct.innerHTML=c}catch(r){console.log(r.message)}});s.formForNewProduct.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
