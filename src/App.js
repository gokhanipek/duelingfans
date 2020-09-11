import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Duel from './components/Duel/Duel';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
          <Router>
            <Navbar />

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/duel">
                  <Duel />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </Router>
        </div>
  );
}

export default App;
