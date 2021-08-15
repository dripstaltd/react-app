import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';

// Views
import Home from './Views/Home';
import UserGuides from './Views/UserGuides';
import Contact from './Views/Contact';
import WordPairs from './Views/WordPairs';
import SlangDictionary from './Views/SlangDictionary';
import SpeedDial from './Components/SpeedDials';

function App() {
  return (
    <div className="relative pb-25 h-screen bg-gray-200">
      <Router>
        <Header className="" />
        <div className="views">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user-guides">
              <UserGuides />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/word-pairs">
              <WordPairs />
            </Route>
            <Route path="/slang-dictionary">
              <SlangDictionary />
            </Route>
          </Switch>
          <SpeedDial />
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
