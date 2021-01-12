import { combineReducers } from 'redux';
import { brandsReducer } from './brandsReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    brands: brandsReducer,
});