import React, { useEffect } from 'react';
import '../styles/ProductsList.scss';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsAction';

const ProductsList = () => {

    const products = useSelector(store => store.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts()); 
    }, []);

    const product = products.map(product => {
        return (
            <Product 
            key={product._id}
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
        </div>
     );
}
 
export default ProductsList;