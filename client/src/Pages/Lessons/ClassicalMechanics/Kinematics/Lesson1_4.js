import React from 'react'
//https://github.com/talyssonoc/react-katex
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { useHistory } from 'react-router-dom';

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
              <li><span onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Displacement as Functions of Time</u></span> will discuss how angled velocities and accelerations affect x- and y-displacements.</li><br/>
              <li><span onClick={()=>{document.getElementById("section3").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>2D Projectile Motion</u></span> the paragon of kinematics problems, ubiquitous to every physics course.</li><br/>
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
                  <span className="card-title grey-text text-darken-4">Ex 1. Finding Vector Components</span>
                  <p style={{textIndent: "20px", fontWeight: "500"}}>A bowler rolls his ball from the middle of the foul line toward the pins positioned about 18 meters away. His ball has an initial velocity of 3 m/s, angled 5 degrees away from the lane lines.</p><br/>
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
                  <p style={{textIndent: "20px", fontWeight: "500"}}>A cue ball is positioned in the bottom left hand corner of a pool table (with dimensions of 1.42m x 2.84m). The ball is hit with a speed of 1 m/s, <InlineMath>\theta</InlineMath> degrees from the horizontal.</p><br/>
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
            <p></p>
        </div>

      </div>{/* Section 1 End*/}

      <div id="section2" className="blue lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 2 Displacements as Functions of Time*/}
        <h4 className="blue-text text-darken-3">Displacements as Functions of Time</h4>
        
        <div className="row">{/* Two Kinematics Equations CONTENT */}
          <div className="col s7 m8 l8 blue lighten-4">
            <h6>Consider the following situation:</h6>
            <p>Patricia, Xena, and Yolanda stand together at the edge of a field.</p>
            <p>Patricia punts a ball with an initial speed of <InlineMath>v</InlineMath>, at some angle above the horizontal <InlineMath>\theta</InlineMath>.</p>
            <p>As soon as Patricia kicks her ball, Xena runs forward such that she is always directly under the ball.</p>
            <p>Meanwhile, Yolanda throws her ball upward, such that her ball constantly has the same height as Patricia's punted ball.</p>
            <p className="center"><em>How fast must Xena be running? What initial speed does Yolanda need to throw her ball?</em></p>
          </div>

        </div>
        <div className="amber darken-1 row">{/* Displacement EQ EXAMPLE PROBLEMS */}
        
        </div>

      </div>{/* Section 2 End*/}

      <div id="section3" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 3 2D Projectile Motion*/}
        <h4 className="green-text text-darken-3">2D Projectile Motion</h4>
        
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