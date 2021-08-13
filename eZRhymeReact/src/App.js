import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';

// Views
import Home from './Views/Home';
import About from './Views/About';

function App() {
  return (
    <div className="relative pb-25 min-h-screen">
      <Router>
        <Header className="" />
        <div className="views">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
