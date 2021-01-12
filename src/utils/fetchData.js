import axios from 'axios';
import { API_URL } from './constants';

const {
  GET_BRANDS,
  GET_PRODUCTS,
  GET_USERS,
  POST_BRANDS,
  POST_PRODUCTS
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
    console.log('helper:')
    console.log(data);
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

export const postBrandData = () => {
  axios.post(POST_BRANDS, {})
    .then(res => console.log(res))
    .catch(err => console.log(`postBrandData error: ${err}`));
}

export const postProductsData = () => {
  axios.post(POST_PRODUCTS, {})
    .then(res => console.log(res))
    .catch(err => console.log(`postProductsData error: ${err}`));
}