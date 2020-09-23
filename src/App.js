import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Header from './Components/Header';
import Home from './Containers/Home';
import Checkout from './Containers/Checkout';
import './App.css';
import Login from './Containers/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Containers/Payment';
import Orders from './Containers/Orders';

const promise = loadStripe('pk_test_51HSTJ3HGJQvwLfaegAvpu14uFFFUVCkVKqXVhVvkHsq6F65bkKiexC5B7RQpG49Y5aGMtTmD1yA17XOpQapo2QRc009W5sNxAU');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path='/login'>            
            <Login />
          </Route>
          <Route path='/orders'>
            <Header />           
            <Orders />
          </Route>
          <Route path='/checkout'>
            <Header />           
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
