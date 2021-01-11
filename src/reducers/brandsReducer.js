import { ADD_BRAND, EDIT_BRAND, REMOVE_BRAND } from '../actions/brandsAction';

export const brandsReducer = (state = [], action) => {
    const { id, name, link} = action.payload;

    switch(action.type) {
        case ADD_BRAND:
            return [...state, action.payload];
        
        case REMOVE_BRAND:
            return state.filter(brand => brand.id !== id)
        
        case EDIT_BRAND:
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
    }
}