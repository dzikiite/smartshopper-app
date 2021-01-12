import { ADD_BRAND, EDIT_BRAND, GET_BRANDS, REMOVE_BRAND } from '../actions/brandsAction';

const initialState = [];

export const brandsReducer = (state = initialState, action) => {
        switch(action.type) {
        case ADD_BRAND:
            return [...state, action.payload];
        
        case REMOVE_BRAND:
            return state.filter(brand => brand.id !== action.payload.id);
        
        case EDIT_BRAND:
            const { id, name, link } = action.payload;
            return state.map(brand => {
                if (brand.id !== id) {
                    return brand;
                } else {
                    return ({
                        id,
                        name,
                        link,
                    })
                }
            });
        case GET_BRANDS:
            return [...state, action.payload];
    }
    return state;
}