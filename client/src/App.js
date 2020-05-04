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
        <Route exact path="/vocabulary">
          <Navbar/>
          <Vocabulary />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
