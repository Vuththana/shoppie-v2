import { api } from "@/Utils/fileService";

export const GET_ALL_PRODUCTS = async() => {
    const response = await api.get("products");
    return response.data;
}

export const GET_PRODUCT_BY_ID = async (id:string ) => {
    const response = await api.get(`products/${id}`)
    return response.data
}
