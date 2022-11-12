import React from 'react';
import { AppContext } from '../context/AppContext';
import { ProductDetail } from '../containers/ProductDetail';
import { registeredUsers } from '../utils/registeredUsers';
import iconAddCart from '/src/assets/icons/bt_add_to_cart.svg';
import notFound from '/src/assets/images/not-found.jpg';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {


  const { user, setUser, setDetail, toggleProductDetail, setToggleProductDetail } = React.useContext(AppContext);

  const handleClick = (item) => {
    if(!user) return;
    setUser({ ...user, products: [...user.products, item] });
    registeredUsers[registeredUsers.findIndex(u => ((u.email === user.email) && (u.password === user.password)))].products = [...user.products, item];
  }
  const handleDetails = (item) => {
    setDetail({...item});
    setToggleProductDetail(!toggleProductDetail)
  }

	return (
    <>
		  <div className="ProductItem">
		  	<img src={product.images[0]} alt={product.title} onClick={() => handleDetails(product)} />
		  	<div className="product-info">
		  		<div>
		  			<p>$ {product.price}</p>
		  			<p>{product.title}</p>
		  		</div>
		  		<figure onClick={() => handleClick(product)}>
		  			<img src={iconAddCart} alt="" />
		  		</figure>
		  	</div>
		  </div>
      {!!toggleProductDetail && <ProductDetail />}
    </>
	);
}

export { ProductItem };
