import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Vocabulary from './Pages/Vocabulary'
import Lessons from './Pages/Lessons'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar/>
          <Home />
        </Route>
      </Switch>
      
      <Switch>
        <Route exact path="/lessons">
          <Navbar/>
          <Lessons />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/vocabulary">
          <Navbar/>
          <Vocabulary />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/kinematics">
        <Navbar/>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
