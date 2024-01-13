import apiInstance from "../services/api";

const getById = async (id) => {
 return await apiInstance.get(`/products/${ id }`);
}

export const productsApi = { getById };