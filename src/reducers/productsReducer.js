import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS } from '../actions/productsAction';
import { postProductData, deleteProduct, putProduct } from '../utils/fetchData';

const initialState = [];

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            postProductData(action.payload);
            return [...state, action.payload];
        case REMOVE_PRODUCT:
            deleteProduct(action.payload);
            return state.filter(product => product.id != action.payload.id);
        case EDIT_PRODUCT:
            putProduct(action.payload);
            const { id, name, link, brand, price, priority } = action.payload;
            return state.map(product => {
                if(product.id !== id) {
                    return product;
                } else {
                    return ({
                        id,
                        name,
                        link,
                        brand,
                        price,
                        priority,
                    })
                }
            })
        case GET_PRODUCTS:
            return action.payload;
    }
    return state;
}