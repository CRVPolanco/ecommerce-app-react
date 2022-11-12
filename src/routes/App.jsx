import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserAuth } from './UserAuth';
import { Layout } from '../containers/Layout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { PasswordRecovery } from '../pages/PasswordRecovery';
import { SendEmail } from '../pages/SendEmail';
import { NewPassword } from '../pages/NewPassword';
import { MyAccount } from '../pages/MyAccount';
import { Checkout } from '../pages/Checkout';
import { Orders } from '../pages/Orders';
import { NotFound } from '../pages/NotFound';
import { ContextProvider } from '../context/AppContext';
import { Search } from '../pages/Search';
import '../styles/global.css';

function App() {
	return (
    <ContextProvider>
	  	<BrowserRouter>
	  		<Layout>
	  			<Switch>
	  				<Route exact path="/" component={Home} />
	  				<Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
	  				<Route exact path="/password-recovery" component={PasswordRecovery} />
	  				<Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/search/:searchId" component={Search}/>
            <UserAuth>
	  				  <Route exact path="/new-password" component={NewPassword} />
	  				  <Route exact path="/account" component={MyAccount} />
	  				  <Route exact path="/checkout" component={Checkout} />
	  				  <Route exact path="/orders" component={Orders} />
            </UserAuth>
	  				<Route path="*" component={NotFound} />
	  			</Switch>
	  		</Layout>
	  	</BrowserRouter>
    </ContextProvider>
	);
}

export { App };
