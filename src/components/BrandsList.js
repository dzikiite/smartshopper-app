import React, { useEffect, useState } from 'react';
import '../styles/BrandsList.scss';
import Brand from './Brand';
import AddBrandForm from './AddBrandForm';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../actions/brandsAction';

const BrandsList = () => {

    const [ actionType, setActionType ] = useState(true);
    const [ editValues, setEditValues ] = useState({})
    const brands = useSelector(store => store.brands);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getBrands());
    }, []);

    const handleEditBrand = (id, name, link) => {
        setEditValues({
            id,
            editedBrandName: name,
            editedBrandLink: link,
        })
        setActionType(false);
    }

    const brand = brands.map(brand => {
        return (
            <Brand 
            key={brand.id}
            handleEditBrand={handleEditBrand}
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
            <AddBrandForm 
            actionType={actionType}
            setActionType={setActionType}
            editValues={editValues}
            />
        </div>
     );
}
 
export default BrandsList;