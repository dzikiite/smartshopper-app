import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineFire, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { removeProduct } from '../actions/productsAction';

const Product = ({...props}) => {

    const dispatch = useDispatch();

    const { 
        id, 
        name, 
        link, 
        brand, 
        price, 
        priority,
        handleEditProduct } = props;

    const handleProductDelete = () => {
        dispatch(removeProduct(id));
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><a href={link}>{link}</a></td>
            <td>{brand}</td>
            <td>{price}zł</td>
            <td>{priority ? <AiOutlineFire /> : '-'}</td>
            <td>
            <button 
            className="action-btn"
            onClick={handleProductDelete}>
                <AiFillDelete />
            </button>
            <button 
            className="action-btn"
            onClick={() => handleEditProduct(id, name, link, brand, price, priority)}>
                <AiFillEdit />
            </button>
            </td>
        </tr>
     );
}
 
export default Product;