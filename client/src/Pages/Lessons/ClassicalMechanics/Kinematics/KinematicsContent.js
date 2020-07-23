//Pages/Lessons/Kinematics.js
import React from 'react'

import Navbar from '../../../../Components/Navbar'

import Lesson1_1 from './Lesson1_1'
import { useHistory } from 'react-router-dom'

const KinematicsContent = () => {
  const history = useHistory()

  return (
    <>
      <h2 className="center">Kinematics Lessons</h2>

      <button className="green btn" onClick={()=>{history.push('/lesson1_1')}}>Lesson 1.1: Intro to Kinematics</button>
      

    </>
  )
}

export default KinematicsContent