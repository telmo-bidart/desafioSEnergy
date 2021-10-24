import React from 'react';
import './App.css';
import Nav from './Nav'
import Suport from './Suport'
import Contribuitors from './Contribuitors';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contribuitors" component={Contribuitors} />
      <Route path="/suport" component={Suport} />
    </Switch>
    </div>
    </Router>
    );
}

const Home = () => (
  <div>
    <h1>
      graph
    </h1>
  </div>
);

export default App;
