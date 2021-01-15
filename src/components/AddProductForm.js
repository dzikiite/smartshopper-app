import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, editProduct } from '../actions/productsAction';
import '../styles/AddProductForm.scss';

const AddProductForm = ({ actionType, setActionType, editValues }) => {
    const { values, setValues, handleChange } = useForm();
    const { 
        productName, 
        productLink, 
        productBrand, 
        productPrice, 
        productPriority } = values;
    const brands = useSelector(store => store.brands);
    const dispatch = useDispatch();
    const { 
        id, 
        editedProductName, 
        editedProductLink,
        editedProductBrand,
        editedProductPrice,
        editedProductPriority} = editValues;

    useEffect(() => {
        if(!actionType) {
            setValues({
                ...values,
                productName: editedProductName,
                productLink: editedProductLink,
                productBrand: editedProductBrand,
                productPrice: editedProductPrice,
                productPriority: editedProductPriority,
            })
        };
    }, [editedProductName])

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

    const handleEditProduct = e => {
        e.preventDefault();
        dispatch(editProduct(id, productName, productLink, productBrand, productPrice, productPriority));
        setValues({
            ...values,
            productName: '',
            productLink: '',
            productPrice: '',
            productPriority: false,
        })
        setActionType(true);
    }

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

    const button = actionType
    ? (<button onClick={handleAddProduct}>Dodaj produkt</button>)
    : (<button onClick={handleEditProduct}>Edytuj produkt</button>)

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
                onChange={handleChange}
                value={productBrand}>
                    <option value=""></option>
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
                checked={productPriority}
                onChange={handleChange}/>
            </label>
            {button}
        </form>
     );
}
 
export default AddProductForm;