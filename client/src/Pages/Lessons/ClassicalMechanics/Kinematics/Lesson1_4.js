import React from 'react'
//https://github.com/talyssonoc/react-katex
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { useHistory } from 'react-router-dom';

import cliffBoat from './1-4-Ex1.png'
import golfBall from './1-4-golfBall.png'
import velocityComponents from './1-4-velocityComponents.png'
const Lesson1_3 = () => {
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
        <div className="container">{/* INTRODUCING LESSON 1.4 */}
          <h3 className="center indigo-text text-darken-4">Lesson 1.4 Kinematics Equations in 2 Dimensions</h3>
          <h6>
            In 1D kinematics, we analyzed motion over time with displacement, velocity, and acceleration in one direction. We learned to relate these quantities with two kinematics formulas (the Displacement and V-Squared Equations), plus an additional 2-3 useful mathematical definitions.
            <br/>
            <br/>
            If you know your trigonometry, analyzing motion in <em>two</em> dimensions isn't actually much more difficult!
            <br/>
            <br/>
            <div className="indigo-text text-darken-4 grey lighten-3" style={{padding:"1px 2% 1px 2%"}}>
              <h5>Lesson Contents</h5>
              <div className="indigo darken-4" style={{height: "1px"}}></div><br/>
              <li><span onClick={()=>{document.getElementById("section1").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Vectors and Vector Components</u></span> reviews all prerequisite trigonometry and vector analysis skills.</li><br/>
              <li><span onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>2D Projectile Motion</u></span> the paragon of kinematics problems, ubiquitous to every introductory physics course.</li><br/>
              <li><span onClick={()=>{document.getElementById("section3").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Relative Motion</u></span> studies the behaviors of moving objects from different reference frames.</li><br/>
              <li><span onClick={()=>{document.getElementById("section4").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Problem-Solving Guide: 2D Kinematics</u></span></li><br/>
            </div>
          </h6>
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
          <div className="col s6 m6 l6 blue lighten-4">
            <h5>Consider the following situation:</h5>
            <p><b><span className="red-text text-darken-1">Patricia</span>, <span className="green-text text-darken-2">Xena</span>, and <span className="blue-text text-darken-3">Yolanda</span> stand together at the edge of a field.</b></p>
            <p className="red-text text-darken-1">Patricia punts a ball with an initial speed of <InlineMath>v</InlineMath>, at some angle above the horizontal <InlineMath>\theta</InlineMath>.</p>
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
          <div className="col s6 m6 l6 blue darken-3" style={{minWidth: "500px", minHeight: "400px"}}>
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
              <div className="col s12 m12 l12 blue"></div>
              <div className="container">
                <br/>
                <h6>
                  <h6 className="center">To analyze any 2D projectile motion, keep these pointers in mind:</h6>
                  <br/>
                  <li>Any relevant vectors and the equations containing them <u>must be analyzed using x- and y-component vectors</u>.</li>
                  <p className="center"><em>Given some angled launch velocity <InlineMath>v_o</InlineMath> pointed <InlineMath>\theta^\circ</InlineMath> above the horizontal, you'll need to find <InlineMath>{`v_{ox}`}</InlineMath> and <InlineMath>{`v_{oy}`}</InlineMath>.</em></p>
                  <br/>
                  <li>The two sets of kinematics equations (one for each direction) are generally united by the time parameter.</li>
                  <p className="center"><em>If you can find the time when the object reaches a particular <em>x</em>-position...</em></p>
                  <p className="center"><em>...it should help you find its y-position at that time. And vice versa!</em></p>
                  <br/>
                  <li>Acceleration due to gravity almost always points in the negative-y direction: <InlineMath>a_x = 0m/s^2</InlineMath>.</li>
                  <br/>
                  <li>Without air resistance, projectiles follow a parabolic path. Using symmetry...</li>
                  <p className="center"><em>If a projectile's starting and final positions have the same height (<InlineMath>{String.raw`y_o = y_f`}</InlineMath>)...</em></p>
                  <p style={{textIndent: "10%"}}><InlineMath>{String.raw`v_{oy} = -v_{fy}`}</InlineMath> ... initial and final y-speeds are equal and opposite.</p>
                  <p style={{textIndent: "10%"}}><InlineMath>{String.raw`\theta_o = -\theta_f`}</InlineMath> ... v<sub>o</sub>'s angle above horizontal is the opposite of v<sub>f</sub>'s angle.</p>
                  <p style={{textIndent: "10%"}}><InlineMath>{String.raw`t_{apex} = \frac{1}{2}t_{land}`}</InlineMath> ...the time taken to reach the top of its trajectory is half the time it takes to hit the floor.</p>
                  <p style={{textIndent: "10%"}}><InlineMath>{String.raw`x_{apex} = \frac{1}{2}x_f`}</InlineMath> ...same with x-displacement; half the max distance is where the ball's at its apex.</p>
                </h6>
            </div>
          </div>
        </div>
        <div className="amber darken-1 row">{/* 2D PROJECTILE EXAMPLES */}
          <div className="col s12 m6 l6">{/* EX 5 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 5. Horizontal Launches: <em>v<sub>oy</sub></em> is zero</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A marble rolls off the top of a desk 1.25 meters above the floor.</p><br/>
                <p><b>A.</b> How long does the marble take to hit the floor?</p><br/>
                <p><b>B.</b> If the marble was rolling at 2.6 m/s, how far away from the foot of the desk does the marble land?</p><br/>
                <p><b>C.</b> If the marble landed 6 meters away from the foot of the desk, how fast was it rolling before it fell?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                
              </div>
            </div>
          </div>

          <div className="col s12 m6 l6">{/* EX 6 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 6. Finding Positions given <InlineMath>{String.raw`\vec{v}`}</InlineMath> and <InlineMath>{String.raw`\theta`}</InlineMath></span>
                <p style={{textIndent: "20px", fontWeight: "500"}}></p><br/>
                <p><b>A.</b> </p><br/>
                <p><b>B.</b> </p><br/>
                <p><b>C.</b> </p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">{/* EX 7 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 7. Shortcuts in Analyzing Parabolic Trajectories</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A football is kicked from the end of a flat football field. It reaches a maximum height of 25 meters, and hits the field 68 meters away from where it was kicked.</p><br/>
                <p><b>A.</b> </p><br/>
                <p><b>B.</b> </p><br/>
                <p><b>C.</b> </p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">{/* EX 8 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 8. Concept Name</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>Problem</p><br/>
                <p><b>A.</b> </p><br/>
                <p><b>B.</b> </p><br/>
                <p><b>C.</b> </p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                
              </div>
            </div>
          </div>


        </div>

      </div>{/* Section 2 End*/}

      <div id="section3" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 3 2D Projectile Motion*/}
        <h4 className="green-text text-darken-3">Relative Motion</h4>
        
        <div className="row">{/* V-Squared EQ CONTENT */}
        
        </div>
        <div className="amber darken-1 row">{/* V-Squared EXAMPLE PROBLEMS */}

        </div>

      </div>{/* Section 3 End*/}

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

export default Lesson1_3