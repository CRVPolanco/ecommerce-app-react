import React from 'react';
import { AppContext } from '../context/AppContext';
import iconAddCart from '/src/assets/icons/bt_add_to_cart.svg';
import '../styles/ProductInfo.css';

const ProductInfo = ({ detail }) => {

  const { addToCart } = React.useContext(AppContext);

	return (
		<>
			<img src={detail.images[0]} alt="bike" />
			<div className="ProductInfo">
				<p>${detail.price}</p>
				<p>{detail.title}</p>
				<p>{detail.description}</p>
				<button className="primary-button add-to-cart-button" onClick={() => addToCart(detail)} >
					<img src={iconAddCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export { ProductInfo };
