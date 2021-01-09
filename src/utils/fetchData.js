import axios from 'axios';
import { API_URL } from './constants';

const {
  GET_BRANDS,
  GET_PRODUCTS,
  GET_USERS,
  POST_BRANDS,
  POST_PRODUCTS
} = API_URL;

export const fetchBrands = () => (
  axios.get(GET_BRANDS)
    .then(res => res.data)
    .catch(err => new Error(err))
);

export const fetchProducts = () => {
  axios.get(GET_PRODUCTS)
    .then(res => res.data)
    .catch(err => new Error(err));
}

export const fetchUsers = () => (
  axios.get(GET_USERS)
    .then(res => res.data)
    .catch(err => new Error(err))
);

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