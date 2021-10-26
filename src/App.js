import React from 'react';
import './App.css';
import Nav from './Nav'
import Suport from './Suport'
import Contribuitors from './Contribuitors';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chart from './components/Chart';

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

const Home = () => {
  return (
    <div>
       <div>
         <form>
           <input type="radio" id="v" value="volts"></input>
           <input type="radio" id="a" value="ampere"></input>
           <input type="radio" id="c" value="temp"></input>
         </form>
         </div> <Chart />
    </div>
  );
}


export default App;
