import React from 'react'
//https://github.com/talyssonoc/react-katex
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { useHistory } from 'react-router-dom';

const Lesson1_5 = ()=>{
  const history = useHistory()
  return (
  <>
    <div className="indigo lighten-4" style={{marginBottom: "-7px", paddingBottom: "10px"}}>
      <p className="black blue-text" style={{textIndent: "1.2em", margin: "0"}}>
        <button className="btn-small btn-flat black blue-text" onClick={()=>{history.push('/classical-mechanics')}}>Unit 1: Classical Mechanics</button>
        {`>`}<button className="btn-small btn-flat black blue-text" onClick={()=>{history.push('/kinematics')}}>1. Kinematics</button>
        {`>`}<button className="btn-small btn-flat black blue-text">1.5 Kinematics Equations in 2D</button>
      </p>
      <button className="green btn left" onClick={()=>{history.push('/lesson1_4')}}>PREVIOUS LESSON: 1.4 2D Kinematics</button>
      <button className="green btn right" onClick={()=>{history.push('/lesson2_1')}}>NEXT LESSON: 2.1 Newton's First Law</button>
      <br/>
      <div className="container">{/* LESSON 1.5 TABLE OF CONTENTS */}
        <h3 className="center indigo-text text-darken-4">Lesson 1.5 Relative Motion</h3>
        <h6>
          As you drive on the highway at 70 mph, you steadily overtake cars driving 65mph in slower lanes, watching them move "backwards". As an aggressive driver speeds past you at 90mph, he appears to be moving 20mph forward.
          Meanwhile, the cars on the other side of the highway are speeding in the opposite direction of you, moving an astounding 140 mph relative to you!
        </h6>
        <div className="indigo-text text-darken-4 grey lighten-3" style={{padding:"1px 2% 1px 2%"}}>
          <h5>Lesson Contents</h5>
          <div className="indigo darken-4" style={{height: "1px"}}></div><br/>
          <h6>
            <li><span onClick={()=>{document.getElementById("section1").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Reference Frames</u></span> discusses and defines frames of reference.</li><br/>
            <li><span onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Relative Velocity</u></span> analyzes moving bodies from different frames.</li><br/>              
          </h6>
        </div>
      </div>
    </div>

    <div id="section1" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 3 Relative Motion*/}
      <h4 className="green-text text-darken-3">Reference Frames</h4>
      <p>So far, in all our kinematics studies, we've analyzed each object's motion relative to a stationary <b>frame of reference</b> (think: where's the "origin" positioned in our x-y coordinate system? Has it ever been moving?). It's time we learn to empathize with moving observers, and analyze motion from their perspectives.</p>
      <div className="row">{/* RELATIVE MOTION CONTENT */}
        <h5>Noninertial Frames</h5>
        <p>A noninertial frame of reference is one that's accelerating.</p>
        <p>Imagine a ball sitting on a flat train floor. While the train is moving at a constant 100m/s relative to the ground, the ball appears to sit still on the train floor. But if the train hits the brakes, accelerating in the negative direction, the ball will start to roll forward!</p>
        
        <h5>Inertial Frames</h5>
        <p>An inertial frame of reference is one that isn't accelerating: it has constant velocity.</p>
      </div>
      <div className="amber darken-1 row">{/* RELATIVE MOTION EXAMPLE PROBLEMS */}
        <h5 className="center white-text">Relative Motion: Example Problems and Solutions</h5>
      </div>

    </div> {/* Section 1 End*/}

    <div id="section2" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 3 Relative Motion*/}
      <h4 className="green-text text-darken-3">Relative Velocity</h4>
      
      <div className="row">{/* RELATIVE MOTION CONTENT */}
        <h5>Finding Relative Velocity</h5>
        <p>A noninertial frame of reference is one that's accelerating.</p>
        <p>Imagine a ball sitting on a flat train floor. While the train is moving at a constant 100m/s relative to the ground, the ball appears to sit still on the train floor. But if the train hits the brakes, accelerating in the negative direction, the ball will start to roll forward!</p>
        
      </div>
      <div className="amber darken-1 row">{/* RELATIVE MOTION EXAMPLE PROBLEMS */}
        <h5 className="center white-text">Relative Motion: Example Problems and Solutions</h5>
      </div>

    </div> {/* Section 1 End*/}

  </>
  )
}

export default Lesson1_5