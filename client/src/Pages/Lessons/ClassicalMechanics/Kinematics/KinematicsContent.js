//Pages/Lessons/Kinematics.js
import React from 'react'

import Navbar from '../../../../Components/Navbar'

import Lesson1_1 from './Lesson1_1'
import { useHistory } from 'react-router-dom'

const KinematicsContent = () => {
  const history = useHistory()

  return (
    <>
      <div className="container">
        <h2 className="center">Unit 1: Kinematics</h2>

        <button className="green btn" onClick={()=>{history.push('/lesson1_1')}}>Lesson 1.1: Physics as a Lab Science</button>
        <br/>
        <br/>
        <button className="green btn" onClick={()=>{history.push('/lesson1_2')}}>Lesson 1.2: Intro to Kinematics: Displacement, Velocity, and Acceleration</button>
      
      </div>
    </>
  )
}

export default KinematicsContent