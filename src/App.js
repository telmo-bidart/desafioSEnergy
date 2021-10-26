import React from 'react';
import './App.css';
import Nav from './Nav'
import Suport from './Suport'
import Contribuitors from './Contribuitors';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
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
  
  <ResponsiveContainer width="100%" height={550}>
    <LineChart data={usinaData}
    margin={{top: 100, right:100, left: 100, bottom: 1}}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="tempo_h" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={55}/>
      <Line dataKey="tensao_V" activeDot={{ r: 4 }} name="Tensão(V)" dot={false}>

      </Line>
    </LineChart>
  </ResponsiveContainer>
);


export default App;
