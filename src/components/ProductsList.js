import React from 'react';
import '../styles/ProductsList.scss';

const ProductsList = () => {
    return ( 
        <div className="products-container">
            <table>
		        <tr>
			        <th>Produkt</th>
			        <th>Link</th>
			        <th>Marka</th>
			        <th>Cena</th>
			        <th>Priorytet</th>
		        </tr>
                <tr>
                    <td>Test</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Test</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
     );
}
 
export default ProductsList;