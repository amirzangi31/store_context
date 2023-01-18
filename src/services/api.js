import axios from "axios"

const BASE_URL = "http://fakestoreapi.com"

const getProducts = async () =>{
    const response = await axios.get(`${BASE_URL}/products`)

    return response;
}


export {getProducts}