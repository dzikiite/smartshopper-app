import axios from 'axios';
import { API_URL } from './constants';

const {
  GET_BRANDS,
  GET_PRODUCTS,
  GET_USERS,
  POST_BRANDS,
  POST_PRODUCTS,
  DELETE_BRAND,
  DELETE_PRODUCT,
} = API_URL;

export const fetchBrands = async() => {
  try { 
    const response = await axios.get(GET_BRANDS);
    const data = await response.data;
    return data;
  } catch(err) {
    console.log(err)
  }
};

export const fetchProducts = async () => {
  try { 
    const response = await axios.get(GET_PRODUCTS);
    const data = await response.data;
    return data;
  } catch(err) {
    console.log(err)
  }
}

export const fetchUsers = async () => {
  try { 
    const response = await axios.get(GET_USERS);
    const data = await response.data;
    return data;
  } catch(err) {
    console.log(err)
  }
};

export const postBrandData = async (brand) => {
  try {
    const response = await axios.post(POST_BRANDS, brand);
    const data = await JSON.stringify(response);
    return data;
  } catch(err) {
    console.log(`błąd wysyłania ${err}`);
  }
}

export const postProductsData = async (product) => {
  try {
    const response = await axios.post(POST_PRODUCTS, product);
    const data = await JSON.stringify(response);
    return data;
  } catch(err) {
    console.log(`błąd wysyłania ${err}`);
  }
}

export const deleteBrand = async (brand) => {
  console.log(brand);
  try {
    const response = axios.delete(DELETE_BRAND, brand);
    console.log(response);
    return response;
  } catch(err) {
    console.log(err);
  }
}