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
  PUT_BRAND,
  PUT_PRODUCT,
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

export const postProductData = async (product) => {
  try {
    const response = await axios.post(POST_PRODUCTS, product);
    const data = await JSON.stringify(response);
    return data;
  } catch(err) {
    console.log(`błąd wysyłania ${err}`);
  }
}

export const deleteBrand = async (brand) => {
  try {
    const response = await axios.delete(DELETE_BRAND, { data: brand });
    return response;
  } catch(err) {
    console.log(err);
  }
}

export const deleteProduct = async (product) => {
  try {
    const response = await axios.delete(DELETE_PRODUCT, { data: product });
    return response;
  } catch(err) {
    console.log(err);
  }
}

export const putBrand = async (brand) => {
  try {
    const response = await axios.put(PUT_BRAND, brand);
    return response;
  } catch(err) {
    console.log(err);
  }
}

export const putProduct = async (product) => {
  try {
    const response = await axios.put(PUT_PRODUCT, product);
    return response
  } catch(err) {
    console.log(err);
  }
}