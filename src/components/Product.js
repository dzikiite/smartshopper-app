import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineFire, AiFillDelete, AiFillEdit } from 'react-icons/ai';

const Product = ({...props}) => {

    const dispatch = useDispatch();

    const { name, link, brands, price, priority } = props;

    return ( 
        <tr>
            <td>{name}</td>
            <td><a href={link}>{link}</a></td>
            <td>{brands}</td>
            <td>{price}zł</td>
            <td>{priority ? <AiOutlineFire /> : '-'}</td>
            <td>
            <button className="action-btn"><AiFillDelete /></button>
            <button className="action-btn"><AiFillEdit /></button>
            </td>
        </tr>
     );
}
 
export default Product;