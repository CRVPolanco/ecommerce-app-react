import React from 'react';
import {ProductInfo} from '../components/ProductInfo';
import { AppContext } from '../context/AppContext';
import iconClose from '/src/assets/icons/icon_close.png';
import '../styles/ProductDetail.css';

const ProductDetail = () => {

  const { detail, toggleProductDetail, setToggleProductDetail } = React.useContext(AppContext);

	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={iconClose} alt="close" onClick={() => setToggleProductDetail(!toggleProductDetail)} />
			</div>
			<ProductInfo detail={detail} />
		</aside>
	);
}

export { ProductDetail };
