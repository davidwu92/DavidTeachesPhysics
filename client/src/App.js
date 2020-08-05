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

import KinematicsContent from './Pages/Lessons/ClassicalMechanics/Kinematics/KinematicsContent'
import ClassicalMechanics from './Pages/Lessons/ClassicalMechanics/ClassicalMechanics.js'
import Lesson1_1 from './Pages/Lessons/ClassicalMechanics/Kinematics/Lesson1_1'
import Lesson1_2 from './Pages/Lessons/ClassicalMechanics/Kinematics/Lesson1_2'

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
        <Route exact path="/classical-mechanics">
          <Navbar/>
          <ClassicalMechanics/>
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
      <Switch>
        <Route exact path="/lesson1_2">
          <Navbar/>
          <Lesson1_2/>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
