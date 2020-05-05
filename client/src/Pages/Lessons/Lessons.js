//Pages/Lessons/Lessons.js
import React from 'react'
// import { useHistory } from 'react-router-dom'

const Lessons = () => {
  return (
    <>
      {/* PART ONE: CLASSICAL MECHANICS */}
      <div className="blue darken-1 white-text">
        <h3 className="center" style={{marginTop:"0"}}>Part One: Classical Mechanics</h3>
        <h6 className="center" style={{margin:"0"}}><i>AKA Newtonian Mechanics. Most of this knowledge was discovered in the late 1600's, so now is a great time to start catching up on physics knowledge!</i></h6>
        <br></br>
      </div>
      <div className="row" style={{display:"flex", flexWrap:"wrap", marginBottom:0}}>
          {/* 1. KINEMATICS LESSONS */}
        <div className="col s12 m6 l6 blue lighten-4">
          <h4 className="center">1. Kinematics</h4>
          <h6>Lesson 1.1 Intro to Kinematics</h6>
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
          
          {/* 2. FORCES */}
        <div className="col s12 m6 l6 light-blue lighten-4">
          <h4 className="center">2. Forces</h4>
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
          
          {/* 3. IMPULSE AND MOMENTUM */}
        <div className="col s12 m6 l6 light-blue lighten-3">
          <h4 className="center">3. Impulse and Momentum</h4>
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
          
          {/* 4. WORK AND ENERGY */}
        <div className="col s12 m6 l6 blue lighten-3">
          <h4 className="center">4. Work and Energy</h4>
          <h6>Lesson 4.1 Defining Work</h6>
            <div style={{textIndent: "15px"}}>
              <li>Work, the product of Force and Distance</li>
              <li>Work Done by Varying Forces</li>
              <li>Power, the rate of Work-doing</li>
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

          {/* 5. CIRCULAR MOTION */}
        <div className="col s12 m6 l6 blue lighten-4">
          <h4 className="center">5. Circular Motion</h4>
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
        
          {/* 6. CLASSICAL MECH REVIEW */}
        <div className="col s12 m6 l6 light-blue lighten-4">
          <h4 className="center">6. Classical Mechanics Review</h4>
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

      {/* PART TWO: ELECTROMAGNETISM*/}
      <div className="amber darken-2 white-text">
        <h3 className="center" style={{marginTop:"0"}}>Part Two: Electromagnetism</h3>
        <h6 className="center" style={{margin:"0"}}><i>Electric charges and magnetics are complex phenomena. Let's cover everything from electrostatics, electrodynamics and circuits, to magnetic fields.</i></h6>
        <br></br>
      </div>
      <div className="row" style={{display:"flex", flexWrap:"wrap", marginBottom: 0}}>
        {/* 7. ELECTROSTATICS */}
        <div className="col s12 m6 l6 amber lighten-4">
          <h4 className="center">7. Electrostatics</h4>
          <h6>Lesson 7.1 Intro to Electrostatics</h6>
            <div style={{textIndent: "15px"}}>
              <li>Positive and Negative Charges</li>
              <li>Elementary Charge, <i>e</i></li>
              <li>Conductors and Insulators</li>
            </div>
          <h6>Lesson 7.2 Electric Fields and Force</h6>
            <div style={{textIndent: "15px"}}>
                <li>Envisioning the Electric Field</li>
                <li>Forces between charges</li>
                <li>Coulomb's Law problems</li>
            </div>
          <h6>Lesson 7.3 Electric Potential</h6>
            <div style={{textIndent: "15px"}}>
              <li>Potential, Electric Potential Energy, and Voltage</li>
              <li>Work in Moving Charges</li>
            </div>
        </div>
        
        {/* 8. ELECTRODYNAMICS */}
        <div className="col s12 m6 l6 orange lighten-4">
          <h4 className="center">8. Electrodynamics and Circuits</h4>
          <h6>Lesson 8.1 Intro to Electrodynamics</h6>
            <div style={{textIndent: "15px"}}>
              <li>Electric Potential Difference and EMF</li>
              <li>Current: the flow of charge</li>
              <li>Resistance: the current-inhibiting factor</li>
              <li>Ohm's Law</li>
              <li>Revisiting Power</li>
            </div>
          <h6>Lesson 8.2 Introductory Circuits</h6>
            <div style={{textIndent: "15px"}}>
                <li>Drawing Circuit Diagrams</li>
                <li>Resistors connected in Series vs. Parallel</li>
                <li>The P, I, V, R Chart</li>
            </div>
          <h6>Lesson 8.3 Capacitors</h6>
            <div style={{textIndent: "15px"}}>
              <li>What are capacitors?</li>
              <li>Calculating Capacitance</li>
              <li>Capacitors connected in series and parallel</li>
            </div>
        </div>
      
        {/* 9. MAGNETIC FIELDS */}
        <div className="col s12 m6 l6 orange lighten-3">
          <h4 className="center">9. Magnets and Magnetic Fields</h4>
          <h6>Lesson 9.1 Magnetic Fields</h6>
            <div style={{textIndent: "15px"}}>
              <li>What are magnets?</li>
              <li>Envisioning B-Fields</li>
            </div>
          <h6>Lesson 9.2 B-Fields from Charges in Motion</h6>
            <div style={{textIndent: "15px"}}>
                <li>Cross Products and the Right Hand Rule</li>
                <li>F<sub>B</sub> from a moving point charge</li>
                <li>F<sub>B</sub> from current-carrying wires</li>
                <li>Lorentz Force Law</li>
            </div>
          <h6>Lesson 9.3 Magnetic Flux</h6>
            <div style={{textIndent: "15px"}}>
                <li>Inducing Currents in Loops</li>
                <li>Electromagnets</li>
                <li>Building an Electric Motor</li>
            </div>
      </div>{/* END OF E/M */}
        <div className="col s12 m6 l6 amber lighten-3">

        </div>
      </div>
      
      {/* PART THREE: HEAT AND THERMO */}
      <div className="red darken-1 white-text">
        <h3 className="center" style={{marginTop:"0"}}>Part Three: Heat and Thermodynamics</h3>
        <h6 className="center" style={{margin:"0"}}><i>We've been harnessing energy via heat engines since the late 1700's. Everything from calorimetry to thermodynamics and heat engines.</i></h6>
        <br></br>
      </div>
      <div className="row" style={{display:"flex", flexWrap:"wrap", marginBottom: 0}}>
        {/* 10. CALORIMETRY */}
        <div className="col s12 m6 l6 red lighten-4">
          <h4 className="center">10. Calorimetry</h4>
          <h6>Lesson 10.1 Intro to Calorimetry</h6>
            <div style={{textIndent: "15px"}}>
              <li>Temperature, Heat, and Internal Energy</li>
              <li>Heat Transfer by Conduction, Convection, or Radiation</li>
              <li>Thermal conductors vs. insulators</li>
            </div>
          <h6>Lesson 10.2 Specific Heat</h6>
            <div style={{textIndent: "15px"}}>
              <li>Specific Heat and Specific Heat Capacity</li>
              <li>The States of Matter and Latent Heat</li>
            </div>
          <h6>Lesson 10.3 Calorimetry Calculations</h6>
            <div style={{textIndent: "15px"}}>
                <li>Mixing different substances with different temperatures</li>
                <li>Changing States of Matter</li>
            </div>
        </div>

        {/* 11. THERMODYNAMICS */}
        <div className="col s12 m6 l6 pink lighten-4">
          <h4 className="center">11. Thermodynamics</h4>
          <h6>Lesson 11.1 The First Law of Thermodynamics</h6>
            <div style={{textIndent: "15px"}}>
              <li>The Zeroeth Law of Thermodynamics</li>
              <li>The First Law of Thermodynamics</li>
              <li>PV Diagrams</li>
            </div>
          <h6>Lesson 11.2 The Second Law of Thermodynamics</h6>
            <div style={{textIndent: "15px"}}>
              <li>Introducing Entropy and the 2<sup>nd</sup> Law</li>
              <li>Efficiency and Heat Engines</li>
              <li>Perpetual Motion and the Carnot Engine</li>
            </div>
          <h6>Lesson 11.3 The Third Law of Thermodynamics</h6>
            <div style={{textIndent: "15px"}}>
              <li>Reversible vs. Irreversible Processes</li>
              <li>Entropy as Time's "Arrow"</li>
              <li>Heat Death, or the Big Freeze</li>
            </div>
        </div>
      </div>{/* END OF HEAT AND THERMO */}

      {/* PART FOUR: WAVES AND OPTICS */}
      <div className="green darken-1 white-text">
        <h3 className="center" style={{marginTop:"0"}}>Part Four: Periodic Motion, Waves, and Optics</h3>
        <h6 className="center" style={{margin:"0"}}><i>From pendulums and sounds to electromagnetic radiation and lenses, waves and optics have quite the myriad of application in today's world.</i></h6>
        <br></br>
      </div>
      <div className="row" style={{display:"flex", flexWrap:"wrap", marginBottom: 0}}>
        {/* 12. PERIODIC MOTION */}
        <div className="col s12 m6 l6 green lighten-4">
          <h4 className="center">12. Periodic Motion</h4>
          <h6>Lesson 12.1 Simple Harmonic Motion</h6>
            <div style={{textIndent: "15px"}}>
              <li>Revisiting Hooke's Law: Restorative Forces</li>
              <li>Frequency and Period</li>
              <li>Sine and Cosine Graphs</li>
            </div>
          <h6>Lesson 12.2 Analyzing Simple Harmonic Oscillators</h6>
            <div style={{textIndent: "15px"}}>
              <li>Simple Harmonic Oscillators</li>
              <li>Bob on a spring problems</li>
              <li>Pendulum problems</li>
              <li>Satellites and Orbits Revisited</li>
              <li>Damped Harmonic Oscillators</li>
            </div>
        </div> 

        {/* 13. MECHANICAL WAVES INTRO */}
        <div className="col s12 m6 l6 light-green lighten-4">
          <h4 className="center">13. Intro to Waves</h4>
          <h6>Lesson 13.1 Properties of Wave Pulses</h6>
            <div style={{textIndent: "15px"}}>
              <li>Transverse, Longitudinal, and Surface Waves</li>
              <li>Calculating Wave Speed using displacement and time</li>
              <li>Boundaries and varying media</li>
              <li>Reflection, Inteference, and Superposition</li>
            </div>
          <h6>Lesson 13.2 Periodic Waves</h6>
            <div style={{textIndent: "15px"}}>
              <li>Frequency, Period, and Wavelength</li>
              <li>Amplitude and Wave Energy</li>
              <li>Graphing waves</li>
            </div>
        </div> 

        {/* 14. PROPERTIES OF SOUND */}
        <div className="col s12 m6 l6 green lighten-3">
          <h4 className="center">14. The Physics of Sound</h4>
          <h6>Lesson 14.1 Characteristics of Musical Sounds</h6>
            <div style={{textIndent: "15px"}}>
              <li>Frequency and pitch</li>
              <li>Amplitude and the Decibel Scale</li>
            </div>
          <h6>Lesson 14.2 Musical Instruments and Resonance</h6>
            <div style={{textIndent: "15px"}}>
              <li>Resonance, Harmonics, and Human Hearing</li>
              <li>Standing Waves: harmonics on a string</li>
              <li>Standing Waves: harmonics open-pipe and closed-pipe</li>
            </div>
          <h6>Lesson 14.3 Properties of Sounds</h6>
            <div style={{textIndent: "15px"}}>
              <li>Sound speeds in different media</li>
              <li>Soundproofing: Transmission versus Reflection</li>
              <li>The Doppler Effect</li>
              <li>The sound barrier and sonic booms</li>
            </div>
        </div> 

        {/* 15. EM RADIATION */}
        <div className="col s12 m6 l6 light-green lighten-3">
          {/* LIGHT AND EMR */}
          <h4 className="center">15. Light and Electromagnetic Radiation</h4>
          <h6>Lesson 15.1 The Electromagnetic Spectrum</h6>
            <div style={{textIndent: "15px"}}>
              <li>The speed of light in a vacuum</li>
              <li>Frequency and wavelength of EMR</li>
              <li>Bands of the Electromagnetic Spectrum</li>
            </div>
          <h6>Lesson 15.2 Properties of Light: Reflection and Refraction</h6>
            <div style={{textIndent: "15px"}}>
              <li>The Law of Reflection: Diffuse versus Smooth Reflection</li>
              <li>Light speeds in different media</li>
              <li>Refraction and Snell's Law</li>
              <li>Total Internal Reflection</li>
            </div>
          <h6>Lesson 15.3 Properties of Light: Polarization, Diffraction, and Interference</h6>
            <div style={{textIndent: "15px"}}>
              <li>Polarization of light and its applications</li>
              <li>Interference and Iridescence</li>
              <li>Diffraction Gratings</li>
            </div>
          {/* <h6>Lesson 15.5 Wave-Particle Duality</h6>
            <div style={{textIndent: "15px"}}>
              <li>Young's Double-Slit Experiment</li>
              <li>The Photoelectric Effect</li>
              <li>The de Broglie Hypothesis and Matter Waves</li>
            </div> */}
        </div>

        {/* 16. OPTICS AND LENSES */}
        <div className="col s12 m6 l6 green lighten-4">
          <h4 className="center">16. Mirrors, Lenses, and Optics</h4>
          <h6>Lesson 16.1 Mirrors</h6>
            <div style={{textIndent: "15px"}}>
              <li>Foci and Ray Diagrams</li>
              <li>Concave Mirrors and Magnification</li>
              <li>Convex Mirrors</li>
            </div>
          <h6>Lesson 16.2 Lenses</h6>
            <div style={{textIndent: "15px"}}>
              <li>More Ray Diagrams</li>
              <li>Convex Lenses</li>
              <li>Concave Lenses</li>
              <li>Telescopes and Microscopes</li>
            </div>
        </div>

        
        <div className="col s12 m6 l6 light-green lighten-4">
        </div>

      </div> {/* END OF WAVES AND OPTICS */}

    </>
    )
}

export default Lessons