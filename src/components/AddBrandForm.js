import React from 'react';
import '../styles/AddBrandForm.scss';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { addBrand } from '../actions/brandsAction';

const AddBrandForm = () => {
    const { values, setValues, handleChange } = useForm();
    const { brandName, brandLink } = values;
    const dispatch = useDispatch();

    const handleAddBrand = e => {
        e.preventDefault();
        dispatch(addBrand(brandName, brandLink));
        setValues({
            ...values,
            brandName: '',
            brandLink: '',
        })
    }

    return ( 
        <form className="form-container add-brand" onSubmit={handleAddBrand}>
            <label htmlFor="brandName">
                Nazwa sklepu 
                <input 
                type="text" 
                name="brandName" 
                value={brandName}
                onChange={handleChange}/>
            </label>
            <label htmlFor="brandLink">
                Link do sklepu 
                <input 
                type="text" 
                name="brandLink" 
                value={brandLink}
                onChange={handleChange}/>
            </label>
            <button>Dodaj sklep</button>
        </form>
     );
}
 
export default AddBrandForm;