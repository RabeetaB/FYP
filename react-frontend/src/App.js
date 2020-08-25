import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';
import logo from './assets/images/logo.png';
import { Button } from 'antd';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import axios from "axios";
import store from './flux/store';
import { loadUser } from './flux/actions/authActions';
import SuperAdminLogin from './components/superAdmin/loginSuperAdmin';
import PaymentMethods from './components/payment_gateways/payment_methods';
import StripeCheckOut from "./components/payment_gateways/stripeCheckout";
import CheckoutForm from "./components/payment_gateways/checkoutForm";

const stripePromise = loadStripe("pk_test_51HEBkBAA6YnKro0mXZpOZTmOQOMYTdMlZnvkfVxa9GvKq7vybBYkuKyWib3dIVpJ9IKYPk9l4TSnkHpnAS7Cm9L300TDmPH2NG");


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Elements stripe={stripePromise}>
      <Provider store={store}>
          <Router>
    <div className="Nav-bar">
    <img className="App-logo" src={logo} alt="Logo"/>
    <h3 className="App-name"><span className="open">Open </span><span className="rest">Restaurant</span></h3>
    <nav>
      <li> <Link to="/">Super Admin Login</Link> </li>
      <li> <Link to="/checkout">Checkout</Link> </li>
      <li> <Link to="/checkout">Add Reviews</Link> </li>
      <li> <Link to="/checkout">View Reviews</Link> </li>
    </nav>
    {/* <div className="Nav-button">
    <Button>Sign Up </Button>
    <Button>Login </Button>
    </div> */}
    </div>
    <div className="Main-content">
    <div className="banner"></div>
    <div className="App-intro">
    <Switch>
      <Route exact path="/checkout"  component={StripeCheckOut} />
      <Route exact path="/"  component={SuperAdminLogin} />
      {/* <Redirect to="/" /> */}
    </Switch>
    </div>
    <div className="banner"></div>
    </div>
    </Router>
    <footer>Made By Rabeeta | Open Restaurant</footer>
     </Provider></Elements>
    </div>
  );
}

export default App; 
