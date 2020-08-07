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
        <h2 className="center">Chapter 1: Kinematics</h2>

        <button className="blue btn" onClick={()=>{history.push('/lesson1_1')}}>Lesson 1.1: Physics as a Lab Science</button>
        <br/>
        <br/>
        <button className="blue btn" onClick={()=>{history.push('/lesson1_2')}}>Lesson 1.2: Intro to Kinematics</button>
        <br/>
        <br/>
        <button className="blue btn" onClick={()=>{history.push('/lesson1_3')}}>Lesson 1.3: Kinematics Equations in 1D</button>
      
      </div>
    </>
  )
}

export default KinematicsContent