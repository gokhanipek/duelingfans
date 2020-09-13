import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Duel from './components/Duel/Duel';
import Navbar from './components/Navbar/Navbar';
import Result from './components/Results/Result';
import './App.css';

function App({turn, score}) {

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
                <Route path="/success/:type">
                  <Result/>
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
