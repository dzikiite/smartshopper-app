import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { removeBrand } from '../actions/brandsAction';
import { useDispatch } from 'react-redux';

const Brand = ({...props}) => {
    const { id, name, link, handleEditBrand } = props;
    const dispatch = useDispatch();

    const handleDeleteBrand = () => {
        dispatch(removeBrand(id));
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><a href={link}>{link}</a></td>
            <td>
            <button 
            className="action-btn"
            onClick={handleDeleteBrand}>
                <AiFillDelete />
            </button>
            <button 
            className="action-btn"
            onClick={() => handleEditBrand(id, name, link)}>
                <AiFillEdit />
            </button>
            </td>
        </tr>
     );
}
 
export default Brand;