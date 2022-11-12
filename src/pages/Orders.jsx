import React from 'react';
import { NavLink } from 'react-router-dom';
import { OrderItem } from '../components/OrderItem';
import { AppContext } from '../context/AppContext';
import '../styles/Orders.css';

const Orders = () => {

  const { user, sumTotal } = React.useContext(AppContext);

  return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
          {!user && <p>Please sign up or sign in</p>}
          {!!user && !user.products.length && <p>Nothing yet, add a product!</p>}
          {!!user && !!user.products && (
            user.products.map(p => (
              <OrderItem product={p} key={`${p.title}__${p.key}`}/>
            ))
          )}
				</div>
        <div className="order">
				  <p>
				  	<span>Total</span>
				  </p>
				  <p>$ {sumTotal(user.products)}</p>
			    </div>
			    <button className="primary-button">
			    	<NavLink to="/checkout">Checkout</NavLink>
			    </button>
			  </div>
		</div>
	);
}

export { Orders };
