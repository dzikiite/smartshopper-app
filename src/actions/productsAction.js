export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

const addProduct = ({id, name, link, brand, price, priority}) => ({
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

const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    payload: {
        id,
    }
});

const editProduct = ({id, name, link, brand, price, priority}) => ({
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