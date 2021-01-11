import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from '../actions/productsAction';

export const productsReducer = (state = [], action) => {
    const { id, name, link, brand, price, priority } = action.payload;

    switch(action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== id);
        case EDIT_PRODUCT:
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
    }
}