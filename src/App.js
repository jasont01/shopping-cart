import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Games from './components/Games';
import GameDetail from './components/GameDetail';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const updateCart = (cartData) => {
    setCart(cartData);
  };

  const addToCart = () => {
    
  }

  // useEffect(() => {
  //   updateCart();
  // }, [])

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/store' component={Games} />
          <Route path='/store/:id' component={GameDetail} />
          <Route path='/cart'>
            <Cart cartData={cart} updateCart={updateCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
