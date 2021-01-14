import React from 'react';
import { useForm } from '../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../actions/productsAction';
import '../styles/AddProductForm.scss';

const AddProductForm = () => {
    const { values, setValues, handleChange } = useForm();
    const { 
        productName, 
        productLink, 
        productBrand, 
        productPrice, 
        productPriority } = values;
    const brands = useSelector(store => store.brands);
    const dispatch = useDispatch();

    const brandsOptions = brands.map(brand => {
        const { name } = brand;
    
        return (
            <option 
            key={name} 
            value={name}>
                {name}
            </option>
        )
    });

    const handleAddProduct = e => {
        e.preventDefault();
        dispatch(addProduct(productName, productLink, productBrand, productPrice, productPriority));
        setValues({
            ...values,
            productName: '',
            productLink: '',
            productPrice: '',
            productPriority: false,
        })
    } 

    return ( 
        <form className="form-container add-product" onSubmit={handleAddProduct}>
            <label htmlFor="productName">
                Nazwa produktu
                <input 
                type="text"
                name="productName"
                value={productName}
                onChange={handleChange}/>
            </label>
            <label htmlFor="productLink">
                Link do produktu
                <input 
                type="text"
                name="productLink"
                value={productLink}
                onChange={handleChange}/>
            </label>
            <label htmlFor="productBrand">
                Wybierz markę
                <select 
                name="productBrand" 
                onChange={handleChange}>
                    <option value="" selected></option>
                    {brandsOptions}
                </select>
            </label>
            <label htmlFor="productPrice">
                Cena w zł
                <input 
                type="text"
                name="productPrice"
                value={productPrice}
                onChange={handleChange}/>
            </label>
            <label htmlFor="productPriority">
                Priorytet?
                <input 
                type="checkbox" 
                name="productPriority"
                value="productPriority"
                onChange={handleChange}/>
            </label>
            <button>Dodaj produkt</button>
        </form>
     );
}
 
export default AddProductForm;