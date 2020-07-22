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

import KinematicsContent from './Pages/Lessons/Kinematics/KinematicsContent'
import Lesson1_1 from './Pages/Lessons/Kinematics/Lesson1_1'

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
          <KinematicsContent/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/lesson1_1">
          <Navbar/>
          <Lesson1_1/>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
