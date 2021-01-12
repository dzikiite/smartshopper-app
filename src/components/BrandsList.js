import React, { useEffect } from 'react';
import '../styles/BrandsList.scss';
import Brand from './Brand';
import AddBrandForm from './AddBrandForm';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../actions/brandsAction';

const BrandsList = () => {

    const brands = useSelector(store => store.brands);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands());
    }, []);

    const brand = brands.map(brand => {
        return (
            <Brand 
            key={brand.id}
            {...brand} />
        )
    });

    return ( 
        <div className="brands-container">
            <table >
	            <tbody>
		            <tr>
			            <th>Sklep</th>
			            <th>Link</th>
                        <th>Akcje</th>
		            </tr>
                    {brand}
	            </tbody>
            </table>
            <AddBrandForm />
        </div>
     );
}
 
export default BrandsList;