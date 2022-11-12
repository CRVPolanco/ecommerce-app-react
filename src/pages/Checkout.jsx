import React from 'react';
import { OrderItem } from '../components/OrderItem';
import { AppContext } from '../context/AppContext';
import '../styles/Checkout.css';

const Checkout = () => {

  const date = new Date();
  const { user, sumTotal } = React.useContext(AppContext);

	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`}</span>
							<span>{!!user?.products && user?.products.length}{!user?.products && "0"} articles</span>
						</p>
						<p>$ {sumTotal(user.products)}</p>
					</div>
				</div>
				{!!user.products.length > 0 && user.products.map(p => (
          <OrderItem product={p} key={`${p.id}__${p.title}`} />
        ))}
        {!user.products.length  && <p>No items yet, add one!</p>}
			</div>
		</div>
	);
}

export { Checkout };
