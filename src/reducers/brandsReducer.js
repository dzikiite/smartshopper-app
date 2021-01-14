import { ADD_BRAND, EDIT_BRAND, GET_BRANDS, REMOVE_BRAND } from '../actions/brandsAction';
import { postBrandData, deleteBrand, putBrand } from '../utils/fetchData';

const initialState = [];

export const brandsReducer = (state = initialState, action) => {
        switch(action.type) {
        case ADD_BRAND:
            postBrandData(action.payload);
            return [...state, action.payload];
        
        case REMOVE_BRAND:
            deleteBrand(action.payload);
            return state.filter(brand => brand.id !== action.payload.id);
        
        case EDIT_BRAND:
            putBrand(action.payload);
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
            return action.payload;
    }
    return state;
}