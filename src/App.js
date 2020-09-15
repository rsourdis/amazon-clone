import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Containers/Home';
import Checkout from './Containers/Checkout';
import './App.css';
import Login from './Containers/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

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
          <Route path='/checkout'>
            <Header />           
            <Checkout />
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
