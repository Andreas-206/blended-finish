import apiInstance from "../services/api";

const getById = async (id) => {
 return await apiInstance.get(`/products/${ id }`);
}

const create = async (productData) => {
    return await apiInstance.post(`/products/add`, productData);
}

export const productsApi = { getById, create };