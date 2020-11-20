import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = () => {

    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductRow />
            </tbody>

        </table>

    )

}

export default ProductTable;