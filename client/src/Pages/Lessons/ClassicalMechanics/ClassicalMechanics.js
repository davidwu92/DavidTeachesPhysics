//Pages/Lessons/Kinematics.js
import React from 'react'

import Navbar from '../../../Components/Navbar'

import KinematicsContent from './Kinematics/KinematicsContent'
import conceptMap from './classicalMechConceptMap.png'
import { useHistory } from 'react-router-dom'

const ClassicalMechanics = () => {
  const history = useHistory()

  return (
    <>
      <div className="row blue darken-4 white-text" style={{marginBottom:"0"}}>
        <h2 className="center" style={{marginTop:"0"}}>Unit One: Classical Mechanics</h2>
        <p className="center">
          <span onClick={()=>{document.getElementById("tableContents").scrollIntoView({behavior: "smooth"})}}><u>Skip to Table of Contents</u></span>
        </p>
        <div className="col s12 m4 l4">
          <h6>Dear student,</h6>
          <p style={{textIndent:"2em"}}>Welcome to the first unit in your physics course! Classical Mechanics is the branch of physics that studies the motion of macroscopic objects (essentially anything big enough to be visible to the naked eye).</p>
          <p style={{textIndent:"2em"}}>When learning about classical mechanics, students should master these concepts in a particular order. The skills, equations, and concepts from one chapter are vitally-important prerequisite knowledge for tackling any proceding material; this snowballing effect carries forward into other units (Electromagnetism, Thermodynamics, Waves and Optics), and can be troublesome for students who fall behind early in the semester!</p>
          <p style={{textIndent:"2em"}}>Don't let that discourage you from taking on the physics content you're learning. Use your resources, do the homework and practice problems, and make sure you're fully-proficient with any one chapter's material before moving forward!</p>
          <p className="center"><em>You got this! I'm cheering for your success!</em></p>
          <p className="right">David Wu</p>
        </div>
        <div className="col s12 m8 l8 center">
          <h5><em>The Classical Mechanics Concept Map</em></h5>
          <img src={conceptMap} width="100%"/>
        </div>
      </div>
      <div className="grey darken-4" style={{paddingTop: "20px"}}>
        <div className="container" id="tableContents">
          {/* <h4 className="blue-text text-darken-1">Chapter 1: Kinematics</h4> */}
          <h3 className="center white-text"  style={{marginTop:"0"}}>Table of Contents</h3>
          <h4><a className="blue-text" onClick={()=>{history.push('/kinematics')}}>Chapter 1. Kinematics</a></h4>
          <button className="blue btn-small" onClick={()=>{history.push('/lesson1_1')}}>Lesson 1.1: Physics as a Lab Science</button>
          <br/>
          <br/>
          <button className="blue btn-small" onClick={()=>{history.push('/lesson1_2')}}>Lesson 1.2: Intro to Kinematics</button>
          <br/>
          <br/>
          <button className="blue btn-small" onClick={()=>{history.push('/lesson1_3')}}>Lesson 1.3: Kinematics Equations in 1D</button>
          <br/>
          <br/>
          <button className="blue btn-small" onClick={()=>{history.push('/lesson1_4')}}>Lesson 1.4: Kinematics Equations in 2D</button>
          <br/>
          <br/>
          <button className="blue btn-small" onClick={()=>{history.push('/lesson1_4')}}>Lesson 1.5: Frames of Reference and Relative Motion</button>
          <br/>
          <br/>
        </div>
      </div>
    </>
  )
}

export default ClassicalMechanics