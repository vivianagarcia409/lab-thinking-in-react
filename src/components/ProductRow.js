import React from 'react';
import { data } from '../data.json'

const ProductRow = () => {
    return data.map((products) => {

        return (
            <tr>
                <td>{products.name}</td>
                <td>{products.price}</td>
            </tr>

        )

    });

}

export default ProductRow;