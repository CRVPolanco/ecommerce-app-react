import React from 'react';
import { ProductItem } from '../components/ProductItem';
import '../styles/ProductList.css';

const ProductList = ({ filtedProducts }) => {

	return (
		<section className="main-container">
			<div className="ProductList">
        {filtedProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
		</section>
	);
}

export { ProductList };
