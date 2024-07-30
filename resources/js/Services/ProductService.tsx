import { api } from "@/Utils/fileService";

export const GET_ALL_PRODUCTS = async() => {
    const response = await api.get("products");
    return response.data;
}