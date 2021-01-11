import { combineReducers } from 'redux';
import { brandsReducer } from './brandsReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
    brands: brandsReducer,
    products: productsReducer,
});