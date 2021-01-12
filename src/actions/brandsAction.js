import { fetchBrands } from '../utils/fetchData';

export const ADD_BRAND = 'ADD_BRAND';
export const REMOVE_BRAND = 'REMOVE_BRAND';
export const EDIT_BRAND = 'EDIT_BRAND'
export const GET_BRANDS = 'GET_BRANDS';

export const addBrand = ({id, name, link}) => ({
    type: ADD_BRAND,
    payload: {
        id,
        name, 
        link,
    },
});

export const removeBrand = (id) => ({
    type: REMOVE_BRAND,
    payload: {
        id,
    },
})

export const editBrand = ({id, name, link}) => ({
    type: EDIT_BRAND,
    payload: {
        id, 
        name, 
        link,
    },
})

export const getBrands = () => {
    return async (dispatch) => {
        const products = await fetchBrands();
    }
}