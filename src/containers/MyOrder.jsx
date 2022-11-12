import React from 'react';
import { NavLink } from 'react-router-dom';
import { OrderItem } from '../components/OrderItem';
import { AppContext } from '../context/AppContext';
import iconFlechita from '/src/assets/icons/flechita.svg';
import '../styles/MyOrder.css';

const MyOrder = () => {

  const { user, handleOrders, sumTotal } = React.useContext(AppContext);


  if(!user){
    return(
		  <aside className="MyOrder">
        <p>Log in or register first to see the cart</p>
      </aside>
    )
  }

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={iconFlechita} alt="arrow" onClick={handleOrders} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
        {user.products.map(product => (
          <OrderItem product={product} key={`orderItem-${product.id}`}/>
        )) }
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
		</aside>
	);
}

export { MyOrder };
