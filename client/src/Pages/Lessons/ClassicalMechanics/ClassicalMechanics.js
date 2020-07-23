//Pages/Lessons/Kinematics.js
import React from 'react'

import Navbar from '../../../Components/Navbar'

import KinematicsContent from './Kinematics/KinematicsContent'
import { useHistory } from 'react-router-dom'

const ClassicalMechanics = () => {
  const history = useHistory()

  return (
    <>
      <h2 className="center">Unit One: Classical Mechanics</h2>

      <button className="green btn" onClick={()=>{history.push('/kinematics')}}>1. Kinematics</button>
      

    </>
  )
}

export default ClassicalMechanics