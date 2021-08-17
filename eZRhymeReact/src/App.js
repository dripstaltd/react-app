import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './Components/Main/Header';
import Footer from './Components/Main/Footer';

// Views
import Dashboard from './Views/Dashboard';
import UserGuides from './Views/UserGuides';
import Contact from './Views/Contact';
import WordPairs from './Views/WordPairs';
import SlangDictionary from './Views/SlangDictionary';
import SpeedDial from './Components/NavComponents/SpeedDials';

function App() {
  console.log(Header);
  return (
    <div className="relative pb-25 h-screen bg-gray-200">
      <Router>
        <Header className="" />
        <div className="views">
          <Switch>
            <Route exact path="/">
              <Dashboard />
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
