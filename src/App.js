import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Duel from './components/Duel/Duel';
import Navbar from './components/Navbar/Navbar';
import Result from './components/Results/Result';

function App() {

  return (
    <div className="App">
          <Router>
            <Navbar />
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/duel">
                  <Duel />
                </Route>
                <Route path="/result">
                  <Result />
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
