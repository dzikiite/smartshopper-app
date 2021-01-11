export const ADD_BRAND = 'ADD_BRAND';
export const REMOVE_BRAND = 'REMOVE_BRAND';
export const EDIT_BRAND = 'EDIT_BRAND'

const addBrand = ({id, name, link}) => ({
    type: ADD_BRAND,
    payload: {
        id,
        name, 
        link,
    },
});

const removeBrand = (id) => ({
    type: REMOVE_BRAND,
    payload: {
        id,
    },
})

const editBrand = ({id, name, link}) => ({
    type: EDIT_BRAND,
    payload: {
        id, 
        name, 
        link,
    },
})