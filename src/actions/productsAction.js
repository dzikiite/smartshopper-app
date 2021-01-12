import { fetchProducts } from '../utils/fetchData';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const addProduct = ({id, name, link, brand, price, priority}) => ({
    type: ADD_PRODUCT,
    payload: {
        id, 
        name, 
        link,
        brand,
        price,
        priority,
    }
});

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    payload: {
        id,
    }
});

export const editProduct = ({id, name, link, brand, price, priority}) => ({
    type: EDIT_PRODUCT,
    payload: {
        id,
        name,
        link,
        brand,
        price,
        priority,
    }
});

export const getProducts = () => {
    return async (dispatch) => {
        const res = await fetchProducts();
        
        dispatch({
            type: GET_PRODUCTS,
            payload: res,
        })
    }
};