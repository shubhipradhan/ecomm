import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './components/Products/Product';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';
function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
