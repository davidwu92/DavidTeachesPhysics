//Pages/Lessons/Kinematics.js
import React from 'react'

import Navbar from '../../../Components/Navbar'

import KinematicsContent from './Kinematics/KinematicsContent'
import { useHistory } from 'react-router-dom'

const ClassicalMechanics = () => {
  const history = useHistory()

  return (
    <>
      <div className="container">
        <h2 className="center">Unit One: Classical Mechanics</h2>
        {/* <h4 className="blue-text text-darken-1">Chapter 1: Kinematics</h4> */}
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
      </div>
    </>
  )
}

export default ClassicalMechanics