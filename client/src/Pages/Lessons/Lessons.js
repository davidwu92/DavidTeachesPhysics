//Pages/Lessons/Lessons.js
import React from 'react'
// import { useHistory } from 'react-router-dom'

const Lessons = () => {
  return (
    <>
      <div className="purple darken-1 white-text">
        <h3 className="center" style={{margin:"0"}}>Classical Mechanics Lessons</h3>
        <h6 className="center" style={{margin:"0"}}><i>AKA Newtonian Mechanics. Part One consists of what one would expect to study in their first semester of Physics: Kinematics, Forces, Momentum/Energy, Circular Motion, and all other things pertaining to the motion of objects.</i></h6>
        <br></br>
      </div>
      <div className="row" style={{display:"flex", flexWrap:"wrap"}}>
          {/* KINEMATICS LESSONS */}
        <div className="col s12 m6 l6 blue lighten-4">
          <h4 className="center">1. Kinematics: How do things move?</h4>
          <h6>Lesson 1.1 Intro to Kinematics.</h6>
            <div style={{textIndent: "15px"}}>
              <li>Physics as a Lab Science: Accuracy, Precision, and the SI System</li>
              <li>Vectors and Scalars</li>
              <li>Displacement, Velocity, Acceleration</li>
              <li>Graphing Motion</li>
              <li>Freefall and Acceleration Due to Gravity</li>
            </div>
          <h6>Lesson 1.2 Equations of Motion in One Dimension</h6>
            <div style={{textIndent: "15px"}}>
                <li>The Displacement Equation</li>
                <li>The V-Squared Equation</li>
                <li>1-D Motion: Problem-Solving Techniques</li>
            </div>
          <h6>Lesson 1.3 The Equations of Motion in Two Dimensions</h6>
            <div style={{textIndent: "15px"}}>
              <li>The Displacement Equation</li>
              <li>The V-Squared Equation</li>
              <li>1-D Motion: Problem-Solving Techniques</li>
            </div>
          <h6>Lesson 1.4 Review</h6>
            <div style={{textIndent: "15px"}}>
              <li>Big Picture Ideas in Kinematics</li>
              <li>Additional Practice</li>
            </div>
        </div>
          
          {/* FORCES */}
        <div className="col s12 m6 l6 green lighten-4">
          <h4 className="center">2. Forces: Why do things accelerate?</h4>
          <h6>Lesson 2.1 Intro to Forces</h6>
            <div style={{textIndent: "15px"}}>
              <li>What are forces?</li>
              <li>Common Forces and their Formulas</li>
              <li>Free Body Diagrams</li>
            </div>
          <h6>Lesson 2.2 Newton's Laws of Motion</h6>
            <div style={{textIndent: "15px"}}>
              <li>The First Law (the Law of Inertia)</li>
              <li>The Second Law (F = ma)</li>
              <li>The Third Law (Equal and Opposite Forces)</li>
            </div>
          <h6>Lesson 2.3 Newton's 2<sup>nd</sup> Law in 1-D</h6>
            <div style={{textIndent: "15px"}}>
              <li>Solving Force Problems in One Dimension</li>
              <li>Utilizing F<sub>g</sub>, F<sub>N</sub>, F<sub>F</sub>, and F<sub>T</sub></li>
              <li>1-D Force Problems</li>
            </div>
          <h6>Lesson 2.3 Newton's 2<sup>nd</sup> Law in 2-D</h6>
            <div style={{textIndent: "15px"}}>
              <li>Using Trigonometry to Analyze Angled Forces</li>
              <li>Solving Force Problems in Two Dimensions</li>
              <li>2-D Force Problems</li>
            </div>
          <h6>Lesson 2.4 Forces Review</h6>
            <div style={{textIndent: "15px"}}>
              <li>Big Picture Ideas from Forces</li>
              <li>Additional Practice</li>
            </div>
        </div>
          {/* IMPULSE AND MOMENTUM */}
        <div className="col s12 m6 l6 red lighten-4">
          <h4 className="center">3. Impulse and Momentum: How do moving objects behave?</h4>
          <h6>Lesson 3.1 Intro to Impulse and Momentum</h6>
            <div style={{textIndent: "15px"}}>
              <li>What is Impulse?</li>
              <li>What is Momentum?</li>
            </div>
          <h6>Lesson 3.2 Conservation of Momentum</h6>
            <div style={{textIndent: "15px"}}>
              <li>Conservative versus Nonconservative Forces</li>
              <li>Inelastic Collisions</li>
            </div>
          <h6>Lesson 3.3 Collisions</h6>
            <div style={{textIndent: "15px"}}>
              <li>Inelastic Collisions</li>
              <li>Elastic Collisions Part I</li>
              <li>Angled Collisions</li>
            </div>
          <h6>Lesson 3.4 Impulse and Momentum Review</h6>
            <div style={{textIndent: "15px"}}>
              <li>Big Picture Ideas from Impulse and Momentum</li>
              <li>Additional Practice</li>
            </div>
        </div>
          
          {/* WORK AND ENERGY */}
        <div className="col s12 m6 l6 purple lighten-4">
          <h4 className="center">4. Work and Energy: How do objects do stuff?</h4>
          <h6>Lesson 4.1 Defining Work</h6>
            <div style={{textIndent: "15px"}}>
              <li>Work, the product of Force and Distance</li>
              <li>Work Done by Varying Forces</li>
            </div>
          <h6>Lesson 4.2 Mechanical Energy (Kinetic and Potential)</h6>
            <div style={{textIndent: "15px"}}>
              <li>The Different Flavors of Energy</li>
              <li>Kinetic Energy and the Work-Energy Theorem</li>
              <li>Gravitational Potential Energy</li>
            </div>
          <h6>Lesson 4.3 Spring Potential Energy and Hooke's Law</h6>
            <div style={{textIndent: "15px"}}>
              <li>Hooke's Law: the Spring Force</li>
              <li>Potential Energy in Springs</li>
            </div>
          <h6>Lesson 4.4 Conservation of Energy</h6>
            <div style={{textIndent: "15px"}}>
              <li>The Law of Conservation of (Mechanical) Energy</li>
              <li>Elastic Collisions Part II</li>
              <li>Conservation of Energy Problems</li>
            </div>
          <h6>Lesson 4.5 Work and Energy Review</h6>
            <div style={{textIndent: "15px"}}>
              <li>Big Picture Ideas from Work and Energy</li>
              <li>Additional Practice</li>
            </div>
        </div>

          {/* CENTRIPETAL MOTION */}
        <div className="col s12 m6 l6 amber lighten-4">
          <h4 className="center">5. Centripetal Motion: How do objects move in circles?</h4>
          <h6>Lesson 5.1 Intro to Rotational Kinematics</h6>
            <div style={{textIndent: "15px"}}>
              <li>Displacement, Velocity, and Acceleration: with a twist</li>    
              <li>Rotational Kinematics Equations</li>
            </div>
          <h6>Lesson 5.2 Newton's 2<sup>nd</sup> Law in Circular Motion</h6>
            <div style={{textIndent: "15px"}}>
              <li>The Centripetal Force: how things move in circles</li>    
              <li>Solving Centripetal Force Problems</li>
            </div>
          <h6>Lesson 5.3 Universal Gravitation</h6>
            <div style={{textIndent: "15px"}}>
              <li>Johannes Kepler: Laws of Planetary Motion</li>
              <li>Newton's Law of Universal Gravitation</li>
              <li>Universal Gravitation Problems</li>
            </div>
        </div>
        
          {/* CLASSICAL MECH REVIEW */}
        <div className="col s12 m6 l6 teal lighten-4">
          <h4 className="center">6. Classical Mechanics: Review and Strategies</h4>
          <h6>Lesson 6.1 Concept Map</h6>
            <div style={{textIndent: "15px"}}>
              <li>Fitting together all the pieces of the Classical Mechanics Puzzle</li>
              <li>Commonly-Missed Conceptual Questions</li>
            </div>
          <h6>Lesson 6.2 Free Response Questions</h6>
            <div style={{textIndent: "15px"}}>
              <li>Free Response Strategies</li>
              <li>FRQ Examples and Solutions</li>
            </div>
        </div>
      </div>{/* END OF CLASSICAL MECHANICS DIV */}

      <div className="purple darken-1 white-text">
        <h3 className="center" style={{margin:"0"}}>Electromagnetics Lessons</h3>
        <h6 className="center" style={{margin:"0"}}><i>Everything from electrostatics, electrodynamics and circuits, to magnetic fields.</i></h6>
        <br></br>
      </div>
      <div className="row" style={{display:"flex", flexWrap:"wrap"}}>

      </div>
    </>
    )
}

export default Lessons