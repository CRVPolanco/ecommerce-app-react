import React from 'react';
import { AppContext } from '../context/AppContext';
import { registeredUsers } from '../utils/registeredUsers';
import iconClose from '/src/assets/icons/icon_close.png';
import notFound from '/src/assets/images/not-found.jpg';
import '../styles/OrderItem.css';

const OrderItem = ({ product }) => {

  const { user, setUser } = React.useContext(AppContext);

  const removeFromCart = (payload) => {
    setUser({...user, products: user.products.filter(i => i.id !== payload.id)});
    registeredUsers[registeredUsers.findIndex(e => e.email === user.email)].products = [...user.products.filter(e => e.id !== payload.id)];
  };

  const img = product.images[0].endsWith('any') ? notFound : product.images[0];

	return (
		<div className="OrderItem">
			<figure>
				<img src={img} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price}</p>
			<img className="removeFromCart" src={iconClose} alt="close" onClick={() => removeFromCart(product)} />
		</div>
	);
}

export { OrderItem };
