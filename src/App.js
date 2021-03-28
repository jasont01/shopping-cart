import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Games from './components/Games';
import GameDetail from './components/GameDetail';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch('../game_list.json');
      const data = await res.json();
      setGameList(data);
    };
    fetchList();
  }, []);

  const findItem = (id) => gameList.find((entry) => entry.id === id);

  const addToCart = (itemId) => {
    const found = cart.some((item) => item.id === itemId);
    if (!found) {
      const newItem = {
        id: itemId,
        qty: 1,
      };
      setCart([...cart, newItem]);
    } else {
      const newData = cart.map((item) => {
        if (item.id === itemId) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      setCart(newData);
    }
  };

  return (
    <div className='App'>
      <Router>
        <NavBar cartSize={cart.length} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/store'
            render={() =>
              gameList.length && (
                <Games gameList={gameList} addToCart={addToCart} />
              )
            }
          />
          <Route
            path='/store/:id'
            render={(props) => <GameDetail {...props} addToCart={addToCart} />}
          />
          <Route
            path='/cart'
            render={() => (
              <Cart cartData={cart} findItem={findItem} updateCart={setCart} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
