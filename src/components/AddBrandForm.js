import React, { useEffect } from 'react';
import '../styles/AddBrandForm.scss';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { addBrand, editBrand } from '../actions/brandsAction';

const AddBrandForm = ({ actionType, setActionType, editValues }) => {
    const { values, setValues, handleChange } = useForm();
    const { brandName, brandLink } = values;
    const dispatch = useDispatch();
    const { id, editedBrandName, editedBrandLink } = editValues;

    useEffect(() => {
        if (!actionType) {
            setValues({
                ...values,
                brandName: editedBrandName,
                brandLink: editedBrandLink,
            })
        };
    }, [editedBrandName])

    const handleAddBrand = e => {
        e.preventDefault();
        dispatch(addBrand(brandName, brandLink));
        setValues({
            ...values,
            brandName: '',
            brandLink: '',
        })
    } 

    const handleEditBrand = e => {
        e.preventDefault();
        dispatch(editBrand(id, brandName, brandLink));
        setValues({
            ...values,
            brandName: '',
            brandLink: '',
        })
        setActionType(true);
    }

    const button = actionType
    ? (<button onClick={handleAddBrand}>Dodaj sklep</button>)
    : (<button onClick={handleEditBrand}>Edytuj sklep</button>);

    return ( 
        <form className="form-container add-brand">
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
            {button}
        </form>
     );
}
 
export default AddBrandForm;