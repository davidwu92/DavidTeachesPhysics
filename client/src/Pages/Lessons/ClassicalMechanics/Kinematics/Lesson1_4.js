import React from 'react'
//https://github.com/talyssonoc/react-katex
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { useHistory } from 'react-router-dom';

import cliffBoat from './1-4-Ex1.png'
import golfBall from './1-4-golfBall.png'
import maxSoccer from './1-4-Ex9.png'
import velocityComponents from './1-4-velocityComponents.png'
import ex6cannon from './1-4-Ex6.png'
import ex6C from './1-4-Ex6C.png'
import ex7football from './1-4-Ex7.png'
import ex7B from './1-4-Ex7B.png'
import ex8 from './1-4-Ex8.png'

const Lesson1_4 = () => {
  const history = useHistory()

  return (
    <>
      <div className="indigo lighten-4" style={{marginBottom: "-7px", paddingBottom: "10px"}}>
        <p className="black blue-text" style={{textIndent: "1.2em", margin: "0"}}>
          <button className="btn-small btn-flat black blue-text" onClick={()=>{history.push('/classical-mechanics')}}>Unit 1: Classical Mechanics</button>
          {`>`}<button className="btn-small btn-flat black blue-text" onClick={()=>{history.push('/kinematics')}}>1. Kinematics</button>
          {`>`}<button className="btn-small btn-flat black blue-text">1.4 Kinematics Equations in 2D</button>
        </p>
        <button className="green btn left" onClick={()=>{history.push('/lesson1_3')}}>PREVIOUS LESSON: 1.3 The Kinematics Equations in One Dimension</button>
        <button className="green btn right" onClick={()=>{history.push('/lesson1_5')}}>NEXT LESSON: 1.5 Frames of Reference</button>
        <br/>
        <div className="container">{/* LESSON 1.4 TABLE OF CONTENTS */}
          <h3 className="center indigo-text text-darken-4">Lesson 1.4 Kinematics Equations in 2 Dimensions</h3>
          <h6>
            In 1D kinematics, we analyzed motion over time with displacement, velocity, and acceleration in one direction. We learned to relate these quantities with two kinematics formulas (the Displacement and V-Squared Equations), plus an additional 2-3 useful mathematical definitions.
            <br/>
            <br/>
            If you know your trigonometry, analyzing motion in <em>two</em> dimensions isn't actually much more difficult!
          </h6>
          <div className="indigo-text text-darken-4 grey lighten-3" style={{padding:"1px 2% 1px 2%"}}>
            <h5>Lesson Contents</h5>
            <div className="indigo darken-4" style={{height: "1px"}}></div><br/>
            <h6>
              <li><span onClick={()=>{document.getElementById("section1").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Vectors and Vector Components</u></span> reviews all prerequisite trigonometry and vector analysis skills.</li><br/>
              <li><span onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>2D Projectile Motion</u></span> the paragon of kinematics problems, ubiquitous to every introductory physics course.</li><br/>
              {/* <li><span onClick={()=>{document.getElementById("section3").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Relative Motion</u></span> studies the behaviors of moving objects from different frames of reference.</li><br/> */}
              {/* <li><span onClick={()=>{document.getElementById("section4").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Problem-Solving Guide: 2D Kinematics</u></span></li><br/> */}
            </h6>
          </div>
        </div>
      </div>

      <div id="section1" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 1 Vectors and Vector Components*/}
        <h4 className="green-text text-darken-3">Vectors and Vector Components</h4>
        <p style={{textIndent: "1.2em"}}>
          <em>
            Vectors are commonly represented with a magnitude and an angle above some reference axis (usually the x-axis).
            We can break them down into vector components using trigonometry!
          </em>
        </p>
        <div className="row">{/* Vectors and Vector Components CONTENT */}
          <div className="row yellow lighten-4">
            <div className="col s8 m8 l8">
              <h5 className="center">Analyzing Vector Components: the golfball example</h5>
              <h6><em>Consider an astronaut practicing his golf swing in a large, rectangular, zero-gravity room. <br/><br/> He hits a golfball from one corner of the room with initial velocity 23 m/s, 20 degrees above the floor.</em></h6>
              <br/>
              <div className="col s12 m12 l12 amber"></div>
              <h6><b>1. Find the x- and y-components of this initial velocity, <InlineMath>v_o</InlineMath>.</b></h6>
              <h6><b>2. What do these velocity components represent? How might they be useful?</b></h6>
            </div>
            <div className="col s4 m4 l4">
              <br/>
              <img src={golfBall} width="100%"/>
              <br/>
            </div>
          </div>
          <div className="col s12 m12 l12 amber darken-2"></div>
          
          <div className="col s6 m6 l6" >
            <h5 className="center">1. How to find vector components</h5>
            <h6>The x- and y-components of any vector can be found by drawing a right triangle, using its magnitude (in this case, <InlineMath>v_o</InlineMath>) as the hypotenuse.</h6>
            <div className="center">
              <img src={velocityComponents} width="100%"/>
            </div>
            <p>Since we set up our right triangle such that its legs lie along the x- and y-axes, we can use Sine and Cosine ratios to find the "missing lengths" of the sides...</p>
            <div className="row">
              <div className="col s6 m6 l6 center">
                <h6><InlineMath>{String.raw`sin\theta = v_{oy}/v_o`}</InlineMath></h6>
                <h6 className="yellow lighten-4"><InlineMath>{String.raw`v_{oy} = v_osin\theta`}</InlineMath></h6>
              </div>
              <div className="col s6 m6 l6 center">
                <h6><InlineMath>{String.raw`cos\theta = v_{ox}/v_o`}</InlineMath></h6>
                <h6 className="yellow lighten-4"><InlineMath>{String.raw`v_{ox} = v_ocos\theta`}</InlineMath></h6>
              </div>
              <p>...so that's how we come up with the "formula" for x- and y-components of a vector, given its magnitude and angle.</p>
              <div className="col s6 m6 l6 center">
                <h6><InlineMath>{String.raw`v_{oy} = (1\frac{m}{s})sin(20^{\circ})`}</InlineMath></h6>
                <h6><InlineMath>{String.raw`v_{oy} = 0.342 m/s`}</InlineMath></h6>
              </div>
              <div className="col s6 m6 l6 center">
                <h6><InlineMath>{String.raw`v_{ox} = (1\frac{m}{s})cos(20^{\circ})`}</InlineMath></h6>
                <h6><InlineMath>{String.raw`v_{ox} = 0.940m/s`}</InlineMath></h6>
              </div>
              <div className="col s12 m12 l12">
                <p><em>Last note: vectors and their x- and y-components have <u>magnitudes</u> that follow the rules of right triangle trigonometry: sine, cosine, and tangent ratios, as well as the pythagorean theorem.</em></p>
              </div>
            </div>
          </div>
          <div className="col s6 m6 l6" style={{borderStyle: "none none none solid", borderColor:"#ffc107"}}>
            <h5 className="center">2. Interpreting Vector Components</h5>
            <p style={{textIndent: "2em"}}>Since our ball is in a zero-gravity room, we can assume it won't accelerate after being hit. The ball will travel forward with a constant speed, following a linear path until it hits some obstacle (probably the far wall, if the room is drawn to scale).</p>
            <h6>Each second that passes, the ball moves 1 meter along the imaginary <em>r</em>-axis, which points 10<sup>o</sup> above the x-axis.</h6>
            <p>The ball's position along the r-axis is the same as its distance travelled; this is a function of time:</p>
            <h6 className="center"><InlineMath>{String.raw`d = r(t) = v_ot`}</InlineMath></h6>
            <div className="col s12 m12 l12 grey"></div>
            <div className="col s12 m12 l12">
              <p>So we found the component vectors of the initial velocity (I call them "vox" and "voy"):</p>
            </div>
            <div className="col s6 m6 l6 center">
              <h6><InlineMath>{String.raw`v_{ox} = 0.940m/s`}</InlineMath></h6>
            </div>
            <div className="col s6 m6 l6 center">
              <h6><InlineMath>{String.raw`v_{oy} = 0.342 m/s`}</InlineMath></h6>
            </div>
            <div className="col s12 m12 l12">
              <h6 className="center"><InlineMath>{String.raw`v_{x}`}</InlineMath> and <InlineMath>{String.raw`v_{y}`}</InlineMath> are the rates at which the ball's x- and y-positions are changing.</h6>
            </div>
            <div className="col s6 m6 l6 center">
              <h6><InlineMath>{String.raw`x(t) = v_{x}t`}</InlineMath></h6>
            </div>
            <div className="col s6 m6 l6 center">
              <h6><InlineMath>{String.raw`y(t) = v_{y}t`}</InlineMath></h6>
            </div>
            <div className="col s12 m12 l12 grey"></div>
            <div className="col s12 m12 l12">
              <h6>The component vectors can help us answer familiar 1-D kinematics questions:</h6>
            </div>
            <li><b>How high above the floor is the ball 3 seconds after being hit?</b></li>
            <p className="center"><InlineMath>{String.raw`y = (0.342m/s)(3s) = 1.026m`}</InlineMath></p>
            <li><b>When will the ball hit the opposite wall, if the width of the room is 40 meters?</b></li>
            <div className="col s4 m4 l4">
              <p className="center"><InlineMath>{String.raw`x(t) = v_xt`}</InlineMath> ...</p>
            </div>
            <div className="col s4 m4 l4">
              <p className="center"><InlineMath>{String.raw`40m = (0.94m/s)t`}</InlineMath> ...</p>
            </div>
            <div className="col s4 m4 l4">
              <p className="center"><InlineMath>{String.raw`t = 42.55s`}</InlineMath></p>
            </div>
            <p className="center"><b>Follow-up question: how high up does it hit that wall?</b></p>
            <p className="center"><InlineMath>{String.raw`y = (0.342m/s)(42.55s) = 14.552m`}</InlineMath> above the ground.</p>
          </div>
          
          <div className="col s12 m12 l12 amber darken-2"></div>
          
          <div className="col s12 m12 l12">
            <h6>I hope that this example helped clear up any confusions from Lesson 1.2 (Intro to Kinematics). The following examples will help you practice analyzing vectors and their components.</h6>
          </div>
        </div>
        <div className="amber darken-1 row">{/* Vectors and Vector Components EXAMPLE PROBLEMS */}
            <h5 className="center white-text">Vector Components: Example Problems and Solutions</h5>
            <div className="col s12 m6 l6">{/* EX 1 */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "50vh"}}>
                  <span className="card-title grey-text text-darken-4">Ex 1. Finding Vector Components with Trigonometry</span>
                  <p style={{textIndent: "20px", fontWeight: "500"}}>An observer is sitting at the edge of a seaside cliff when he spots a boat in the distance. With an inclinometer and laser distance meter, he measures that the boat is positioned 800 meters away, 25 degrees below the horizontal.</p><br/>
                  <p><b>A.</b> How far up is the observer above sea level?</p><br/>
                  <p><b>B.</b> How far is the boat from the bottom of the cliff?</p><br/>
                  <p><b>C.</b> Suppose the boat is travelling toward shore at a rate of 10 m/s. Will the distance meter measure the boat to be 790 meters after one second, 780 meters after two, and so on?</p><br/>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  <div className="row">
                    <div className="col s5 m5 l5">
                      <p style={{textIndent:"2em"}}>This is indeed a trigonometry problem! Note that the angle of depression (below the observer's horizontal) is the same as the angle of elevation from the boat, looking up at the observer: 25<sup>o</sup>.</p>
                    </div>
                    <div className="col s7 m7 l7">
                      <img src={cliffBoat} width="100%"/>
                    </div>
                    <div className="col s12 m12 l12">
                      <p style={{textIndent:"2em"}}>As long as you were able to come up with a diagram similar to the one shown here, you're ready to find the components of position vector, <InlineMath>{String.raw`\vec{r}`}</InlineMath>.</p>
                      <p style={{textIndent:"2em"}}>I find that using positive and negative angles <em>can</em> lead to some confusion. It's often better to view these vectors as literal triangles with positive side lengths and angles, then apply appropriate negative signs for x-y-directions.</p>
                      <div className="col s6 m6 l6">
                        <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δx = rcos\theta`}</InlineMath></p>
                        <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δx = (800m)cos25^\circ`}</InlineMath></p>
                        <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δx = 725m`}</InlineMath></p>
                      </div>
                      <div className="col s6 m6 l6">
                        <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δy = rsin\theta`}</InlineMath></p>
                        <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δy = (800m)sin25^\circ`}</InlineMath></p>
                        <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δy = 338m`}</InlineMath></p>
                      </div>
                      <p style={{textIndent:"2em"}}>Technically, the angle should be -25<sup>o</sup>, as the boat is located 25<sup>o</sup> <em>below</em> the horizontal from the observer's perspective. So, more accurately, <InlineMath>Δy = -338m</InlineMath> (which makes sense, as the boat is at a lower y-position!)</p>
                      <p><b>A. </b>The observer is 338 meters above the water.</p>
                      <p><b>B. </b>The boat is 725 meters away from the shore.</p>
                      <p><b>C. </b>No, the distance meter will not measure a 10 meters less distance each passing second, because the boat isn't travelling 10m/s <em>toward the observer</em>. After one second, the boat travels 10 meters in the negative x-direction, placing it at x=715m from shore; we can use the Pythagorean Theorem to find the observer-boat distance at t=1s...</p>
                      <p style={{textIndent:"4em"}}><InlineMath>{String.raw`r^2 = (Δx)^2 + (Δy)^2`}</InlineMath></p>
                      <p style={{textIndent:"4em"}}><InlineMath>{String.raw`r^2 = (715)^2 + (338)^2`}</InlineMath></p>
                      <p style={{textIndent:"4em"}}><InlineMath>{String.raw`r = 790.87m`}</InlineMath></p>
                      
                      <p style={{textIndent:"2em"}}>While it's possible to find the rate at which the distance meter reading is decreasing, this is more a Related Rates problem from first semester Calculus.</p>
                      <p style={{textIndent:"2em"}}>In fact, the distance between observer and boat doesn't even decrease at a steady rate; imagine the point in time when the boat is directly under the observer (still going forward 10m/s). At that instant, the observer would measure a distance of "338m; the reading would stop decreasing, and begin to increase (as the boat, assuming constant velocity, travels onward through the... beach...).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l6">{/* EX 2 */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "50vh"}}>
                  <span className="card-title grey-text text-darken-4">Ex 2. Using Vector Components</span>
                  <p style={{textIndent: "20px", fontWeight: "500"}}>After building speed on a runway, an airplane starts lifting off the ground, climbing upwards at a constant rate of 3 meters per second. Sensors on the ground indicate that it has a horizontal velocity of 35 m/s.</p><br/>
                  <p><b>A.</b> What's the speed of the plane?</p><br/>
                  <p><b>B.</b> If the plane continues climbing at the same rate, when will its altitude reach 1 kilometer?</p><br/>
                  <p><b>C.</b> When the plane is 100 meters off the ground, what's the plane's horizontal displacement?</p><br/>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  
                </div>
              </div>
            </div>
            
            
            
            <div className="col s12 m6 l6">{/* EX 3: Analyzing Angles */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "50vh"}}>
                  <span className="card-title grey-text text-darken-4">Ex 3. Analyzing Angles</span>
                  <p style={{textIndent: "20px", fontWeight: "500"}}>A cue ball is positioned in the bottom left hand corner of a pool table (with dimensions of 1.42m x 2.84m). The ball is hit with a speed of 1 m/s, <InlineMath>\theta</InlineMath> degrees from the adjacent 1.42m side.</p><br/>
                  <p><b>A. </b>What values for <InlineMath>\theta</InlineMath> will cause the ball to hit the right wall first (before any other walls)?</p><br/>
                  <p><b>B. </b>What values for <InlineMath>\theta</InlineMath> will cause the ball to hit the top wall first?</p><br/>
                  <p><b>C. </b>Try predicting where and when the ball makes first contact with a wall if <InlineMath>\theta = 76^\circ</InlineMath>.</p><br/>
                  <p><em>For simplicity's sake, we'll assume the ball has a radius of zero and has no acceleration.</em></p>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  
                </div>
              </div>
            </div>
            <div className="col s12 m6 l6">{/* EX 4: Adding Vectors */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "50vh"}}>
                  <span className="card-title grey-text text-darken-4">Ex 4. Adding (Velocity) Vectors</span>
                  <p style={{textIndent: "20px", fontWeight: "500"}}>A child drops his paratrooper toy from the side of a building, 12 meters above the ground. Without any wind, this toy would nearly-immediately reach its terminal velocity of 0.68 m/s downward; but due to the breezy weather, it is pushed away from the building wall with a velocity of 0.37 m/s as it falls.</p><br/>
                  <p><b>A. </b>What's the speed of the toy during its fall? (No acceleration due to gravity to account for, due to the toy's parachute design!)</p><br/>
                  <p><b>B. </b>At what angle away from the vertical is the toy's velocity vector pointing?</p><br/>
                  <p><b>C. </b>When does the toy land on the ground? How far is it from the building when it lands?</p><br/>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  
                </div>
              </div>
            </div>
        </div>

      </div>{/* Section 1 End*/}

      <div id="section2" className="blue lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 2 2D Projectile Motion*/}
        <h4 className="blue-text text-darken-3">2D Projectile Motion</h4>
        
        <div className="row" style={{display:"flex", flexWrap:"wrap"}}>{/* 2D Projectile Motion CONTENT */}
          <div className="col s12 m6 l6 blue lighten-4">
            <h5>Consider the following situation:</h5>
            <p><b><span className="red-text text-darken-1">Patricia</span>, <span className="green-text text-darken-2">Xena</span>, and <span className="blue-text text-darken-3">Yolanda</span> stand together at the edge of a field.</b></p>
            <p className="red-text text-darken-1">Patricia punts a ball with an initial speed of <InlineMath>v_o</InlineMath>, at some angle above the horizontal <InlineMath>\theta</InlineMath>.</p>
            <p className="green-text text-darken-2">As soon as Patricia kicks her ball, Xena runs forward such that she is always directly under the ball.</p>
            <p className="blue-text text-darken-3">Meanwhile, Yolanda throws her ball upward, such that her ball constantly has the same height as Patricia's punted ball.</p>
            {/* <p className="center"><em>How fast must Xena be running? What initial speed does Yolanda need to throw her ball?</em></p> */}
            <div className="col s12 m12 l12 blue"></div>
            <div className="col s12 m12 l12">
              <h6>To help visualize this, I've graphed all three objects' motions with initial conditions:</h6>
              <div className="col s6 m6 l6 center"><h6><InlineMath>v_o = 8.544 m/s</InlineMath></h6></div>
              <div className="col s6 m6 l6 center"><h6><InlineMath>\theta = 69.4^\circ</InlineMath></h6></div>
              <br/>
              <br/>
              <p><em>You can drag Patricia's ball along its parabolic trajectory to see where all three objects are at different points in time!</em></p>
            </div>
          </div>
          <div className="col s12 m6 l6 blue darken-3">
            <h6 className="center white-text"><em>Points P, X, and Y over time.</em></h6>
            <iframe src="https://www.desmos.com/calculator/ozcqusfgbn?embed" width="100%" height="90%"></iframe>
          </div>

          <div className="col s12 m12 l12">
            <h5 className="center">The Displacement Equations as <InlineMath>x(t)</InlineMath> and <InlineMath>y(t)</InlineMath> functions</h5>
            <p style={{textIndent: "4em"}}>Like any object flying around on a 2-D coordinate system, Patricia's ball has x- and y-displacements that are functions of time. Since this is a projectile motion problem (where flying objects have constant acceleration, g=9.8m/s<sup>2</sup> pointed down), we can use the x- and y-displacement equations as functions that model exactly where the ball is at time <em>t</em>.</p>
            <div className="col s6 m6 l6 center">
              <h6><InlineMath>{String.raw`Δx=v_{ox}t + \frac{1}{2}a_xt^2`}</InlineMath></h6>
              <h6><InlineMath>{String.raw`Δx=v_ocos(\theta)t`}</InlineMath></h6>
            </div>
            <div className="col s6 m6 l6 center">
              <h6><InlineMath>{String.raw`Δy=v_{oy}t + \frac{1}{2}a_yt^2`}</InlineMath></h6>
              <h6><InlineMath>{String.raw`Δy=v_osin(\theta)t - \frac{1}{2}gt^2`}</InlineMath></h6>
            </div>
            <p className="center"><em>The x- and y-displacements of the ball are two parametric equations that, together, draw out the ball's path through space.</em></p>
          </div>

          <div className="col s12 m12 l12 blue"></div>
          <div className="row" style={{display:"flex", flexWrap:"wrap"}}>
            <div className="col s12 m8 l8 blue lighten-2">
              <ol>
                <h6>
                  <h5>Four important reminders before problem-solving</h5>
                  <br/>
                  <b><li>Vectors and the equations containing them <u>must be analyzed using x- and y-component vectors</u>.</li></b>
                  <p className="center"><em>Given initial velocity <InlineMath>v_o</InlineMath> pointed <InlineMath>\theta^\circ</InlineMath> above the horizontal, practice finding <InlineMath>{`v_{ox}`}</InlineMath> and <InlineMath>{`v_{oy}`}</InlineMath>.</em></p>
                  <br/>
                  <b><li>The two sets of kinematics equations (one for each direction) are united by the time parameter.</li></b>
                  <p className="center"><em>If you can find the time <u>when</u> the object reaches a particular <em>x</em>-position...</em></p>
                  <p className="center"><em>...it should help you find its y-position at that time. And vice versa!</em></p>
                  <br/>
                  <b><li>A flying projectile's acceleration <u>almost always</u> points in the negative-y direction:</li></b>
                  <p className="center"><InlineMath>{String.raw`a_x = 0\frac{m}{s^2}`}</InlineMath>&nbsp;&nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp;&nbsp;<InlineMath>{String.raw`a_y = -g = -9.8\frac{m}{s^2}`}</InlineMath></p>
                  <p className="center"><em>Don't mistakenly plug in "<InlineMath>{String.raw`a=-9.8\frac{m}{s^2}`}</InlineMath>" for an x-component equation: <InlineMath>{String.raw`Δx = 5t -4.9t^2`}</InlineMath>.</em></p>
                  <br/>
                  <b><li>If a projectile's starting and final positions have the same height (<InlineMath>{String.raw`y_o = y_f`}</InlineMath>), we can use the parabolic path's symmetry to our advantage...</li></b>
                </h6>
              </ol>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_{oy} = -v_{fy}`}</InlineMath> ... initial and final y-speeds are equal and opposite.</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`\theta_o = -\theta_f`}</InlineMath> ... v<sub>o</sub>'s angle above horizontal is the opposite of v<sub>f</sub>'s angle.</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`t_{apex} = \frac{1}{2}t_{land}`}</InlineMath> ...the time taken to reach the top of its trajectory is half the time it takes to hit the floor.</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`x_{apex} = \frac{1}{2}x_f`}</InlineMath> ...same with x-displacement; half the max distance is where the ball's at its apex.</p>
            </div>
            <div className="col s12 m4 l4 white" style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
              <h4 className="center blue-text text-darken-3">2D Kinematics Toolbox</h4>
              <div className="col s5 m12 l12">
                <h5 className="center"><u>Formulas and Definitions</u></h5>
                <p><em>Each of these equations are for the x-direction only! <br/> Of course use y-components instead for vertical motion.</em></p>
                <div className="col s6 m6 l6">
                  <p className="center">Definition of Velocity</p>
                  <h6 className="center"><InlineMath>{String.raw`\vec{v_{x}}_{avg} = \frac{Δx}{t}`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6">
                  <p className="center">Definition of Acceleration</p>
                  <h6 className="center"><InlineMath>{String.raw`\vec{a_x} = \frac{Δv_x}{t}`}</InlineMath></h6>
                </div>
                <div className="col s12 m12 l12"></div>
                <div className="col s6 m6 l6">
                  <p className="center">Displacement Equation</p>
                  <h6 className="center"><InlineMath>{String.raw`Δx = v_{ox}t + \frac{1}{2}a_xt^2`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6">
                  <p className="center">The V-Squared Equation</p>
                  <h6 className="center"><InlineMath>{String.raw`v_{fx}^2 = v_{ox}^2 + 2aΔx`}</InlineMath></h6>
                </div>
              </div>
              <div className="col s2 m12 l12 blue darken-3"></div>
              <div className="col s5 m12 l12">
                <h5 className="center"><u>Vectors and their Components</u></h5>
                <p><em>For any vector (<InlineMath>{String.raw`\vec{v_o}`}</InlineMath> in these sample) pointed θ degrees above the horizontal...</em></p>
                <div className="col s6 m6 l6 center">
                  <h6><InlineMath>{String.raw`v_o^2 = v_{ox}^2 + v_{oy}^2`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6 center">
                  <h6><InlineMath>{String.raw`\theta = tan^{-1}(\frac{v_{oy}}{v_{ox}})`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6 center">
                  <h6><InlineMath>{String.raw`v_{oy} = v_osin\theta`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6 center">
                  <h6><InlineMath>{String.raw`v_{ox} = v_ocos\theta`}</InlineMath></h6>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="amber darken-1 row">{/* 2D PROJECTILE EXAMPLES */}
          <h5 className="center white-text">2D Projecile Motion: Example Problems and Solutions</h5>
          <div className="col s12 m6 l6">{/* EX 5 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 5. Horizontal Launches: <em>v<sub>oy</sub></em> is zero</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A marble rolls off the edge of a flat desk 1.25 meters above the floor.</p><br/>
                <p><b>A.</b> How long does it take for the marble to hit the floor?</p><br/>
                <p><b>B.</b> If the marble was rolling at 2.6 m/s, how far away from the foot of the desk does the marble land?</p><br/>
                <p><b>C.</b> If the marble landed 6 meters away from the foot of the desk, how fast was it rolling before it fell?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p><b>A. </b>The marble will drop at the same rate regardless of its horizontal velocity. So to find how long it takes to hit the ground, we'll use the Δy equation...</p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`Δy = v_{oy}t + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`-1.25 = (0)t + \frac{1}{2}(-9.8)t^2`}</InlineMath></p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`-1.25 = -4.9t^2`}</InlineMath></p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`t = 0.505s`}</InlineMath></p>
                <p><b>B. </b>The marble is in the air for 0.505 seconds, during which time its x-velocity is a constant 2.6m/s and its x-acceleration is zero.</p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`Δx = v_{ox}t + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`Δx = 2.6(0.505)`}</InlineMath></p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`Δx = 1.313m`}</InlineMath></p>
                <p><b>C. </b>Same as B, except the x-displacement is given (6m upon landing) and we must find its initial velocity!</p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`Δx = v_{ox}t + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`(6)= v_{ox}(0.505)`}</InlineMath></p>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`v_{ox} = 11.88m/s`}</InlineMath></p>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l6">{/* EX 6 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 6. Angled Launches: the Typical 2D Kinematics Problem</span>
                <div className="col s6 m6 l6">
                  <p style={{textIndent: "20px", fontWeight: "500"}}>The amazing human cannonball (see gif) is launched from a height of 8 meters above the floor with a speed of 15 m/s, angled 65<sup>o</sup> above the horizontal. He lands gracefully on the floor some time later.</p><br/>
                </div>
                <div className="col s6 m6 l6 center">
                  <iframe src="https://giphy.com/embed/DlJqDfBkYxG5G" width="120%" frameBorder="0"></iframe>
                </div>
                <div className="col s12 m12 l12">
                  <p><b>A.</b> What's his maximum height (above the ground)?</p><br/>
                  <p><b>B.</b> What time does he hit the floor? How far is this from the cannon base?</p><br/>
                  <p><b>C.</b> With what velocity does he hit the floor?</p><br/>
                </div>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p>This is the archetypical kinematics problem. Be sure to give it an honest attempt, then look through my solution carefully!</p>
                <div className="row">
                  <div className="col s4 m4 l4">
                    <p><InlineMath>y_o = 8m</InlineMath></p>
                  </div>
                  <div className="col s4 m4 l4">
                    <p><InlineMath>v_o = 15m/s</InlineMath></p>
                  </div>
                  <div className="col s4 m4 l4">
                    <p><InlineMath>θ = 65^\circ</InlineMath></p>
                  </div>
                </div>
                <p>Those are all our givens from the problem! We should take a second to find the x- and y-components of <InlineMath>{String.raw`\vec{v_o}`}</InlineMath>...</p>
                <div className="row">
                  <div className="col s6 m6 l6">
                    <p><InlineMath>{String.raw`v_{ox} = v_ocos\theta`}</InlineMath></p>  
                    <p><InlineMath>{String.raw`v_{ox} = 15cos(65^\circ) = 6.339m/s`}</InlineMath></p>  
                  </div>
                  <div className="col s6 m6 l6">
                    <p><InlineMath>{String.raw`v_{oy} = v_osin\theta`}</InlineMath></p>
                    <p><InlineMath>{String.raw`v_{oy} = 15sin(65^\circ) = 13.595m/s`}</InlineMath></p>
                  </div>
                </div>
                <p>Meanwhile, the unknowns to find are A. y<sub>max</sub>, B. time and Δx of landing, and C. v<sub>f</sub> at time of landing. Here's the complete diagram outlining everything.</p>
                <div className="col s12 m12 l12">
                  <img src={ex6cannon} width="100%"/>
                </div>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <p><b>A. </b>The "cannonball" reaches his highest point when his y-velocity is zero. The quickest way to do this is to use the V-Squared equation (for y-velocities), since we don't actually care about how much time he takes to reach the top of his trajectory.</p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{fy}^2 = v_{oy}^2 + 2a(Δy)`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`(0)^2 = (13.595)^2 + 2(-9.8)(Δy)`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`(0)^2 = 184.824 - 19.6(Δy)`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δy = 9.434m`}</InlineMath> is the maximum displacement from where the man was launched.</p>
                <p className="center">So he reaches a height of 17.43 meters above the floor before coming back down.</p>
                <p><em>Of course it's possible to find that value using time-relevant equations! Try finding how long it takes to reach the max height (using the definition of acceleration), then plugging that time into the displacement equation to verify this solution.</em></p>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <p><b>B. </b>We'll use the displacement equation in the y-direction to find how long our cannonball-man is in the air. Then, we can use that time in the x-displacement equation to figure out exactly how far away he lands.</p>
                <div className="col s7 m7 l7">
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δy = v_{oy}t + \frac{1}{2}at^2`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`-8 = 13.595t -4.9t^2`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`0 = -4.9t^2 + 13.59t + 8`}</InlineMath></p>
                  <p>...and the <span className="purple-text">quadratic formula</span> will find "t" for us.</p>
                </div>
                <div className="col s5 m5 l5 purple-text">
                  <p className="center"><em>For quadratic equations </em><InlineMath>{String.raw`0 = ax^2 + bx + c`}</InlineMath>...</p>
                  <h6 className="center"><InlineMath>{String.raw`x = \frac{-b \pm \sqrt{b^2 -4ac}}{2a}`}</InlineMath></h6>
                </div>
                <h6 style={{textIndent:"2em"}}><InlineMath>{String.raw`t = \frac{-13.595 \pm \sqrt{(13.595)^2 -4(-4.9)(8)}}{2(8)}`}</InlineMath></h6>
                <p style={{textIndent:"2em"}}><InlineMath>{String.raw`t = 3.273`}</InlineMath> or <InlineMath>{String.raw`t = -0.499`}</InlineMath> seconds.</p>
                <p>Of course the negative time is extranneous; it implies that the other time our man has y<sub>f</sub>=0m is about half a second before his launch.</p>
                <p>To understand exactly where that extranneous value comes from, try graphing the displacement equation in a slightly different form...</p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δy = v_{oy}t + \frac{1}{2}at^2`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`y_f - y_o = v_{oy}t + \frac{1}{2}at^2`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`y_f = \frac{1}{2}at^2 + v_{oy}t + y_o`}</InlineMath> a quadratic equation in standard form!</p>
                <div className="col s6 m6 l6">
                  <p>This form of the y-displacement equation gives us the man's y-position is a function of time, t.</p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`y(t) = -4.9t^2 + 13.595t + 8`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}> ...for times <InlineMath>t \geq 0</InlineMath>.</p>
                </div>
                <div className="col s6 m6 l6">
                  <iframe src="https://www.desmos.com/calculator/tyrs7hwlfz?embed" width="100%"></iframe>
                </div>
                <div className="col s12 m12 l12">
                  <p>The displacement equation, like any other equation we use, acts as a model for the situation at hand. The man's y-position is modeled by the parabola above only for times between 0 and 3.273 seconds, after which he is certainly motionless on the ground (and hopefully not seriously injured).</p>
                  <p>Regardless of his wellbeing, we still must find the range of his motion, Δx; since he's airborn for 3.273 seconds, and his x-velocity is 6.339m/s...</p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δx = v_{ox}t + \frac{1}{2}a_xt^2`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δx = 6.339(3.273) + 0`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δx = 20.75m`}</InlineMath></p>
                </div>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <p><b>C. </b>To find his final velocity vector, we need vector components <InlineMath>{String.raw`v_{fx}`}</InlineMath> and <InlineMath>{String.raw`v_{fy}`}</InlineMath>.</p>
                <p>Since he doesn't accelerate horizontally, <InlineMath>{String.raw`v_{fx} = v_{ox} = 6.339m/s`}</InlineMath>.</p>
                <p>To find <InlineMath>{String.raw`v_{fy}`}</InlineMath>, we <em>could</em> use the definition of acceleration with time <InlineMath>t=3.273s</InlineMath>.</p>
                <p>But if we made a mistake in calculating the time in the air, that mistake would compound into this part's calculation; let's use the v-squared equation instead, and verify with the definition of acceleration.</p>
                <div className="col s6 m6 l6">
                  <p><InlineMath>{String.raw`v_{fy}^2 = v_{oy}^2 + 2a(Δy)`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_{fy}^2 = 13.595^2 + 2(-9.8)(-8)`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_{fy}^2 = 341.62`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_{fy} = -18.483m/s`}</InlineMath></p>
                  <p><em>His y-velocity starts at around positive 14m/s, and never increases. Plus he wouldn't be falling if his final y-velocity was positive.</em></p>
                </div>
                <div className="col s6 m6 l6">
                  <p><em>Verifying this using t from part B and the definition of acceleration...</em></p>
                  <p><InlineMath>{String.raw`Δv_y = a_yt`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_{fy} - v_{oy} = at`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_{fy} = at + v_{oy} = -9.8(3.273) + 13.595`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_{fy} = -18.48 m/s`}</InlineMath></p>
                </div>
                <div className="col s12 m12 l12">
                  <p>It's important to verify each calculation using other equations! This simulataneously checks if our time and final y-velocities are correct, and the only way we could possibly be incorrect now is if we had the wrong <InlineMath>{String.raw`v_{oy}`}</InlineMath> to begin with.</p>
                  <p>And so to find the final velocity vector, we use trigonometry...</p>
                </div>
                <div className="col s5 m5 l5">
                  <img src={ex6C} width="100%"/>
                </div>
                <div className="col s7 m7 l7">
                  <p><InlineMath>{String.raw`v_f^2 = v_{fx}^2 + v_{fy}^2`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_f = \sqrt{(6.339)^2 + (-18.483)^2}`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_f = 19.53m/s`}</InlineMath> landing speed.</p>
                  <hr></hr>
                  <p><InlineMath>{String.raw`tan\theta = v_{fy}/v_{fx}`}</InlineMath></p>
                  <p><InlineMath>{String.raw`tan\theta = -18.783/6.339`}</InlineMath></p>
                  <p><InlineMath>{String.raw`\theta = -71.35^\circ`}</InlineMath> or 71.35 degrees below the horizontal.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col s12 m6 l6">{/* EX 7 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 7. Using Symmetry in Parabolic Trajectories</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A football is kicked from the end of a flat football field. It reaches a maximum height of 25 meters, and hits the field 68 meters away from where it was kicked.</p><br/>
                <p><b>A.</b> Find how long the ball was in the air.</p><br/>
                <p><b>B.</b> Find the ball's initial velocity: magnitude and angle above the horizontal.</p><br/>
                <p><b>C.</b> Suppose the ball follows the same trajectory, except that another player catches the ball at a height of 1.7 meters above the ground (rather than letting the ball drop to the ground). At what time and x-position would the player catch the ball?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <img src={ex7football} width="100%"/>
                <p><b>A. </b>We know the football reaches a max height of 25 meters, but have no initial velocity to work with. Due to symmetry, the time it takes to get to this 25m height is the same as the time to come back down.</p>
                <p>Since <InlineMath>v_y = 0m/s</InlineMath> when the ball's at its highest point, we can use the y-displacement equation to figure out how long it takes for something to fall 25 meters!</p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δy = v_{oy}t + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`-25 = (0)t -4.9t^2`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`-25 = (0)t -4.9t^2`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`t_{fall} = 2.259s`}</InlineMath> is how long it takes a ball to drop 25 meters.</p>
                <p>Twice that value will tell us how long the ball is in the air...</p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`t = 4.518s`}</InlineMath></p>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <p><b>B. </b>The initial velocity is a 2-dimensional vector, for which we have no components or angles (yet). Finding v<sub>ox</sub> is simple enough, now that we know how long the ball's in the air.</p>
                <div className="col s12 m12 l12">
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{ox} = Δx/t`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{ox} = (65m)/(4.518s)`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{ox} = 14.39m/s`}</InlineMath></p>
                </div>
                  <p>Meanwhile, v<sub>oy</sub> can be found with v-squared, definition of acceleration, or displacement equations!</p>
                <div className="col s6 m6 l6">
                  <p><InlineMath>{String.raw`v_{fy}^2 = v_{oy}^2 + 2aΔy`}</InlineMath></p>
                  <p><em>since v<sub>y</sub> is zero at y=25m...</em></p>
                  <p><InlineMath>{String.raw`0^2 = v_{oy}^2 + 2(-9.8)(25)`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_{oy}^2 = 490`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_{oy} = 22.14m/s`}</InlineMath></p>
                </div>
                <div className="col s6 m6 l6">
                  <p><InlineMath>{String.raw`Δy = v_{oy}t + \frac{1}{2}at^2`}</InlineMath></p>
                  <p><em>We could plug in Δy=25 at time t = 2.259s, but it's easier to use total time in air (since Δy=0).</em></p>
                  <p><InlineMath>{String.raw`0 = v_{oy}(4.518) + -4.9(4.518)^2`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_{oy} = 22.14m/s`}</InlineMath></p>
                </div>
                <p>Either way, we have the x and y-components, from which we can get speed and angle.</p>
                <div className="col s5 m5 l5">
                  <img src={ex7B} width="100%"></img>
                </div>
                <div className="col s7 m7 l7">
                  <p><InlineMath>{String.raw`v_o^2 = v_{ox}^2 + v_{oy}^2`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_o = \sqrt{(14.39)^2 + (22.14)^2}`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_o = 26.41m/s`}</InlineMath> initial speed.</p>
                  <hr></hr>
                  <p><InlineMath>{String.raw`tan\theta = v_{oy}/v_{ox}`}</InlineMath></p>
                  <p><InlineMath>{String.raw`tan\theta = 22.14/14.39`}</InlineMath></p>
                  <p><InlineMath>{String.raw`\theta = 56.98^\circ`}</InlineMath> above the horizontal.</p>
                </div>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <p><b>C. </b>If the ball is caught at a height of 1.7 meters, we can apply the y-displacement equation to find time of catch.</p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δy = v_{oy}t + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`1.7 = 22.14t -4.9t^2`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`1.7 = 22.14t -4.9t^2`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`t= 4.44s, 0.078s`}</InlineMath> are the times when the ball's at height 1.7m.</p>
                <p>Since the ball is caught just before hitting the floor, <InlineMath>{String.raw`t= 4.44s`}</InlineMath></p>
                <p>How far does the ball travel in that time?</p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δx = v_{ox}t`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δx = (14.39m/s)(4.44s)`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δx = 63.89m`}</InlineMath></p>
                <p>...these values makes sense! The ball would've travelled 65m in 4.518s without a catcher.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l6">{/* EX 8 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 8. Using a Given Final Velocity</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>At a hypothetical crime scene, forensic scientists find a bullet wedged into a wall 100.0 meters across from the shooter's suspected position. The bullet hit the wall 1.23 meters above the ground at a velocity of about 234 m/s, angled 5.6 degrees below the horizontal.</p><br/>
                <p><b>A.</b> How much time elapsed between the gun firing and the bullet hitting the wall?</p><br/>
                <p><b>B.</b> Find the bullet's initial velocity (speed and angle above/below the horizontal).</p><br/>
                <p><b>C.</b> From what height was the bullet fired?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p>Here's our diagram (not drawn to scale). We don't actually know how the gun was angled (above or below the horizontal) or how high up the shooter was positioned; the bullet could've come from a rooftop for all we know.</p>
                <img src={ex8} width="100%"/>
                <p>Like any problem that provides velocity as a magnitude and angle, we should find the x- and y-components of this vector.</p>
                <div className="row">
                  <div className="col s6 m6 l6">
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{fx} = v_fcos\theta`}</InlineMath></p>  
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{fx} = 234cos(-5.6^\circ)`}</InlineMath></p>  
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{fx} = 232.883m/s`}</InlineMath></p>  
                  </div>
                  <div className="col s6 m6 l6">
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{fy} = v_fsin\theta`}</InlineMath></p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{fy} = 234sin(-5.6^\circ)`}</InlineMath></p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{fy} = -22.834m/s`}</InlineMath></p>
                  </div>
                </div>
                <p><em>Since we're working with lots of large and small numbers, it's worth keeping around as many significant figures as we can throughout this calculation.</em></p>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <p><b>A. </b>Finding the time elapsed is a simple matter of using the definition of velocity (or x-displacement equation, with zero acceleration).</p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δx = v_{x}t`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`t = \frac{Δx}{v_{x}} = \frac{100m}{232.883m/s}`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`t = 0.4294s`}</InlineMath></p>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <p><b>B. </b>To find the initial velocity, we'll need both x- and y-components.</p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{ox} = v_{fx} = 232.883m/s`}</InlineMath></p>
                <p>...and the y-component is found using the definition of acceleration, isolating v<sub>o</sub>.</p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δv_y = a_yt`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{fy} - v_{oy} = a_yt`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{oy} = v_{fy}-a_yt`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{oy} = -22.834-(-9.8)(0.4294)`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{oy} = -18.6259m/s`}</InlineMath></p>
                <p>With both these components, we can now find the speed and angle at which the bullet was fired!</p>
                <div className="col s6 m6 l6">
                  <p><InlineMath>{String.raw`v_o^2 = v_{ox}^2 + v_{oy}^2`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_o = \sqrt{(232.883)^2 + (-18.6259)^2}`}</InlineMath></p>
                  <p><InlineMath>{String.raw`v_o = 233.6267m/s`}</InlineMath> initial speed.</p>
                </div>
                <div className="col s6 m6 l6">
                  <p><InlineMath>{String.raw`tan\theta = v_{oy}/v_{ox}`}</InlineMath></p>
                  <p><InlineMath>{String.raw`tan\theta = -18.6259/232.883`}</InlineMath></p>
                  <p><InlineMath>{String.raw`\theta = -4.5728^\circ`}</InlineMath></p>
                  <p>...about ~4.6 degrees below the horizontal.</p>
                </div>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <p><b>C. </b>The height at which the bullet was fired is its y-displacement, plus the final 1.2m above the ground. Either the v-squared or y-displacement equations will get us the coveted Δy.</p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δy = v_{oy}t + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δy = (-18.6259)(0.4294) + \frac{1}{2}(-9.8)(0.4294)^2`}</InlineMath></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δy = -8.9014m`}</InlineMath></p>
                <p><em>So the bullet shot from a position ~8.9 meters above the bullet hole. Add the final y-position of 1.23m for...</em></p>
                <p style={{textIndent: "2em"}}><InlineMath>{String.raw`y_o = 10.1314m`}</InlineMath> was the initial height of the shooter (above ground).</p>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l6">{/* EX 9 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 9. Finding the Optimal Launch Angle</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>Soccer player Max wants to figure out the best angle at which he should kick his ball in order to maximize the distance it travels before landing. He kicks balls from the ground at a speed of 11.5 m/s.</p><br/>
                <p><b>A.</b> Find the equation that relates how far away the ball lands with the launch angle.</p>
                <br/>
                <p><b>B.</b> Find how far away it lands with launch angles θ = 0<sup>o</sup>, 25<sup>o</sup>, 30<sup>o</sup>, and 65<sup>o</sup>.</p>
                <br/>
                <p><b>C.</b> What's the maximum Δx Max can achieve? At what launch angle does this occur?</p>
                <p style={{textIndent:"3em"}}><em>You may require trig identity: <InlineMath>{String.raw`sin(\theta)cos(\theta) = \frac{1}{2}sin(2\theta)`}</InlineMath></em></p>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <div className="col s12 l7 m7">
                  <p className="center"><em>Max kicks his ball at different angles.</em></p>
                  <img src={maxSoccer} width="100%"/>
                </div>
                <div className="col s12 l5 m5">
                  <h6 className="center">There are two givens:</h6>
                  <p>1. <InlineMath>Δy = 0</InlineMath> upon landing.</p>
                  <p>2. <InlineMath>v_o = 10.5m/s</InlineMath>, angled θ<sup>o</sup> above the horizontal.</p>
                </div>
                <div className="col s12 m12 l12 amber darken-3"></div>
                <div className="col s12 m12 l12">
                  <p><b>A. </b>To get an equation relating Δx to θ, we must <span className="pink-text text-accent-3">eliminate the time parameter</span>.</p>
                  <p className="center"><em><b>1. Write out displacement equations for x and y.</b></em></p>
                  <div className="col s6 m6 l6">
                    <p><InlineMath>{`Δx = v_{ox}`}</InlineMath><span className="pink-text text-accent-3"><InlineMath>t</InlineMath></span></p>
                    <p><InlineMath>{String.raw`Δx = v_ocosθ`}</InlineMath><span className="pink-text text-accent-3"><InlineMath>t</InlineMath></span></p>
                    <p className="center"><em><b>3. Plug in <InlineMath>t</InlineMath> from the Δy EQ.</b></em></p>
                    <p><InlineMath>{String.raw`Δx = v_ocosθ`}</InlineMath><span className="pink-text text-accent-3"><InlineMath>{String.raw`(\frac{v_o}{4.9}sinθ)`}</InlineMath></span></p>
                    <p><InlineMath>{String.raw`Δx = \frac{v_o^2}{4.9}cosθsinθ`}</InlineMath></p>
                    <p><InlineMath>{String.raw`Δx = \frac{(11.5)^2}{4.9}cosθsinθ`}</InlineMath></p>
                    <p><InlineMath>{String.raw`Δx = 26.99cosθsinθ`}</InlineMath></p>
                  </div>
                  <div className="col s6 m6 l6">
                    <p><InlineMath>{String.raw`Δy = v_{oy}t + \frac{1}{2}at^2`}</InlineMath></p>
                    <p><InlineMath>{String.raw`Δy = v_osin(θ)t + \frac{1}{2}at^2`}</InlineMath></p>
                    <p className="center"><em><b>2. Isolate <span className="pink-text text-accent-3">time of landing <InlineMath>t</InlineMath></span>.</b></em></p>
                    <p><InlineMath>{String.raw`0 = v_osin(θ)t - 4.9t^2`}</InlineMath></p>
                    <p><InlineMath>{String.raw`0 = t(v_osinθ - 4.9t)`}</InlineMath></p>
                    <p className="pink-text text-accent-3"><InlineMath>{String.raw`t = \frac{v_o}{4.9}sinθ`}</InlineMath></p>
                  </div>
                  <div className="col s12 m12 l12">
                    <p className="center"><em>Applying trig identity: <InlineMath>{String.raw`sin(\theta)cos(\theta) = \frac{1}{2}sin(2\theta)`}</InlineMath>...</em></p>
                    <p><InlineMath>{String.raw`Δx = 26.99(\frac{1}{2}sin(2\theta))`}</InlineMath></p>
                    <p><InlineMath>{String.raw`Δx = 13.495sin(2\theta)`}</InlineMath> is our relation between distance and launch angle.</p>
                  </div>
                </div>
                <div className="col s12 m12 l12 amber darken-3"></div>
                <div className="col s12 m12 l12">
                  <p><b>B. </b>Δx for angles 0<sup>o</sup>, 25<sup>o</sup>, 30<sup>o</sup>, and 65<sup>o</sup> can now be found by plugging into our equation from part A.</p>
                  <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δx = 13.495sin(2(0)) = 13.495sin(0) = 0m`}</InlineMath></p>
                  <p className="center"><em>The ball never left the ground if θ=0<sup>o</sup>!</em></p>
                  <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δx = 13.495sin(2(25)) = 13.495sin(50) = 10.3m`}</InlineMath></p>
                  <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δx = 13.495sin(2(30)) = 13.495sin(60) = 11.7m`}</InlineMath></p>
                  <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δx = 13.495sin(2(65)) = 13.495sin(130) = 10.3m`}</InlineMath></p>
                  <p style={{textIndent: "2em"}}>It's definitely possible to solve part B without the solution to A: just plug in each angle to the Δy equation, find the time in the air, and plug that result into the Δx equation to find distance covered.</p>
                </div>
                <div className="col s12 m12 l12 amber darken-3"></div>
                <div className="col s12 m12 l12">
                  <p><b>C. </b>Finding the angle that maximizes Δx is typically a Calculus problem, where we'd find θ such that the first derivative <InlineMath>{String.raw`\frac{dx}{d\theta}`}</InlineMath> is zero.</p>
                  <p>But there's an elegant solution that uses just a bit of trigonometry logic.</p>
                  <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = 13.495`}</InlineMath><span className="blue-text text-darken-3"><InlineMath>sin(2\theta)</InlineMath></span></p>
                  <p>Notice that <span className="blue-text text-darken-3"><InlineMath>{String.raw`sin(2\theta)`}</InlineMath></span> can be any number between -1 and 1!</p>
                  <h6>And so the maximum displacement is <InlineMath>{String.raw`Δx = 13.495m`}</InlineMath></h6>
                  <p className="center">This occurs when <InlineMath>{String.raw`sin(2\theta) = 1`}</InlineMath>...</p>
                  <h6><InlineMath>{String.raw`\theta = 45^{\circ}`}</InlineMath></h6>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col s12 m6 l6">{/* EX 10 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 10. Finding Two Possible Launch Angles, <InlineMath>\theta</InlineMath></span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>In a carnival game, Michelle throws her beanbag at 8 m/s. She hits a target positioned 5 meters away at the same height as it had when thrown.</p><br/>
                <p><b>A.</b> At what angle(s) did Michelle throw her beanbag?</p>
                <p className="center"><em>To find the angles, you may require trig identity: <InlineMath>{String.raw`sin(\theta)cos(\theta) = \frac{1}{2}sin(2\theta)`}</InlineMath></em></p>
                <br/>
                <p><b>B.</b> For each angle, how much time elapses between throwing and hitting the target?</p><br/>
                <p><b>C.</b> For every beanbag launched at speed <em>v</em> and angle θ that hits the target, is there <u>always</u> a second angle θ at which the beanbag will land in the same place?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                
              </div>
            </div>
          </div>

        </div>{/* 2D PROJECTILE EXAMPLES END */}

      </div>{/* Section 2 End*/}



      <div id="section4" className="blue lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 4 Problem-Solving Guide*/}
        <h4 className="blue-text text-darken-3">Problem-Solving Guide: 2D Kinematics</h4>
        <div className="row">{/*Problem-Solving Guide CONTENT*/}
          
        </div>
        <div className="amber darken-1 row">{/* PROBLEM-SOLVING GUIDE EXAMPLE PROBLEMS */}
          
        </div>
      </div>{/* Section 4 End*/}
    </>
  )
}

export default Lesson1_4