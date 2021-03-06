import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';

// Views
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
  return (
    <div className="relative pb-25 min-h-screen">
      <Router>
        <Header />
        <div className="views">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
