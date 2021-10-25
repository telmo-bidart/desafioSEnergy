import React from 'react';
import './App.css';
import Nav from './Nav'
import Suport from './Suport'
import Contribuitors from './Contribuitors';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, CartesianGrid } from 'recharts';
import { usinaData } from './dadosUsina';

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
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={usinaData}>
      <CartesianGrid strokeDasharray="3 3" />
      <Line dataKey="tensao_V">

      </Line>
    </LineChart>
  </ResponsiveContainer>
);

export default App;
