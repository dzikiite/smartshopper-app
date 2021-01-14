import React, { useEffect, useState } from 'react';
import '../styles/ProductsList.scss';
import Product from './Product';
import AddProductForm from './AddProductForm';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsAction';
import { getBrands } from '../actions/brandsAction';

const ProductsList = () => {

    const [ actionType, setActionType ] = useState(true);
    const [ editValues, setEditValues ] = useState({});
    const products = useSelector(store => store.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts()); 
        dispatch(getBrands());
    }, []);

    const handleEditProduct = (id, name, link, brand, price, priority) => {
        setEditValues({
            id,
            editedProductName: name,
            editedProductLink: link,
            editedProductBrand: brand,
            editedProductPrice: price,
            editedProductPriority: priority,
        })
        setActionType(false)
    }

    const product = products.map(product => {
        return (
            <Product 
            key={product.id}
            handleEditProduct={handleEditProduct}
            {...product}/>
        )
    });

    return ( 
        <div className="products-container">
            <table>
                <tbody>
		        <tr>
			        <th>Produkt</th>
			        <th>Link</th>
			        <th>Marka</th>
			        <th>Cena</th>
			        <th>Priorytet</th>
                    <th>Akcje</th>
		        </tr>
                {product}
                </tbody>
            </table>
            <AddProductForm 
            actionType={actionType}
            setActionType={setActionType}
            editValues={editValues}/>
        </div>
     );
}
 
export default ProductsList;