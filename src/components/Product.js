import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineFire } from 'react-icons/ai';

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
        </tr>
     );
}
 
export default Product;