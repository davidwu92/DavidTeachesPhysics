//Pages/Lessons/Kinematics.js
import React from 'react'
// import { useHistory } from 'react-router-dom'
//https://github.com/talyssonoc/react-katex
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import joeDisplacement from './joeDisplacement.png'
import sueDisplacement from './sueDisplacement.png'
import annieVelocity from './annieVelocity.png'
import { useHistory } from 'react-router-dom'

const Lesson1_2 = () => {
  const history = useHistory()

  return (
    <>
      <button className="green btn left" onClick={()=>{history.push('/lesson1_1')}}>PREVIOUS LESSON: 1.1 Physics as a Lab Science</button>
      <button className="green btn right" onClick={()=>{history.push('/lesson1_3')}}>NEXT LESSON: 1.3 The Kinematics Equations</button>
      <br/>
      <div className="container">{/* INTRODUCING LESSON 1.2 */}
        <h3 className="center">Lesson 1.2: Intro to Kinematics</h3>
        <h6>
          In layman's terms, kinematics is the study of <em>how</em> stuff moves; for the most part, we'll be ignoring <em>why</em> stuff moves. The quantities, skills, and concepts we'll study in this lesson are listed below.
          <br/>
          <br/>
          <em>Keep in mind that full mastery of these concepts is an <b>absolute must</b> if you wish to have any hope of moving foward to the proceeding units!</em>
          <br/>
          <br/>
          <div className="purple-text grey lighten-4" style={{padding:"1px 2% 1px 2%"}}>
            <h5>Lesson Contents</h5>
            <div className="purple" style={{height: "1px"}}></div><br/>
            <li><span onClick={()=>{document.getElementById("section1").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Displacement</u></span></li><br/>
            <li><span onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Velocity</u></span></li><br/>
            <li><span onClick={()=>{document.getElementById("section3").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Acceleration</u></span></li><br/>
            <li><span onClick={()=>{document.getElementById("section4").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Freefall and Acceleration due to Gravity</u></span></li><br/>
            <li><span onClick={()=>{document.getElementById("section5").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Graphing Motion: <em>Δx</em>, <em>v</em>, and <em>a</em> as functions of time.</u></span></li><br/>
          </div>
        </h6>
      </div>

      <div id="section1" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 1 Δx*/}
        <h4 className="green-text text-darken-3">Displacement, the change in position</h4>
        <p style={{textIndent: "20px"}}><b>Displacement</b> is the vector equivalent of <b>distance</b>; both are measured in meters (m). While distance, <em>d</em>, represents how far meters an object has travelled (or how far apart two points are), displacement is defined as an object's <em>change in position</em>. If "x" represents where an object lies along a horizontal axis, we use Δx ("delta-x") to represent the <em>change in "x"</em> AKA the horizontal displacement. If an object's motion is two-dimensional, we need to use both horizontal and vertical displacements!</p>
        <p className="center"><em>We'll be describing displacement using symbols like Δx, Δy, r, and θ. Their explanations are color-coded to match the displacement simulator on the right, so make sure to try it out!</em></p>

        <div className="row">{/* DISPLACEMENT CONTENT */}
          <div className="col s12 m7 l7">
            <div className="row">
              <div className="divider green darken-4"></div>
              <div className="col s6 m6 l6">
                <h6 className="center red-text text-darken-1"><InlineMath>{String.raw`Δx=x_f - x_i`}</InlineMath></h6>
                <h6 className="center blue-text text-darken-1"><InlineMath>{String.raw`Δy=y_f - y_i`}</InlineMath></h6>
              </div>
              <div className="col s6 m6 l6">
                <p style={{textIndent: "20px"}}>Here, <em>x<sub>i</sub></em> and <em>x<sub>f</sub></em> represent the initial and final x-positions, measured from the origin (usually). Delta (Δ) is the "change in" some value, and that change is found by subtracting the final - initial.</p>
              </div>

              <div className="col s12 m12 l12 green darken-4"></div>
              
              <div className="col s6 m6 l6">
                <h6 className="center green-text text-darken-1"><InlineMath>{String.raw`θ=\arctan\frac{Δy}{Δx} = \tan^{-1}\frac{Δy}{Δx}`}</InlineMath></h6>
              </div>
              <div className="col s6 m6 l6">
                <p style={{textIndent: "20px"}}>We might also care about the displacement vector's angle above or below the horizontal, <em>θ</em> ("Theta").</p>
              </div>
              <div className="col s12 m12 l12">
                <h5>Describing position with <em>r</em></h5>
                <p style={{textIndent: "20px"}}>The rectangular coordinate system uses horizontal and vertical positions (along the x and y axes) to describe where points are in space. It is often more useful to use distance and direction to describe positions (since they're vectors, aren't they?). Hence, we use r and θ, where r is the distance from the origin and θ is the polar angle (angle above the horizontal).</p>
                <p style={{textIndent: "20px"}}><b>Position vector <InlineMath>{String.raw`\vec{r}`}</InlineMath> is drawn between starting and final positions of an object, and has a magnitude <em>r</em> equal to the distance <em>d</em> between the two points!</b></p>
                <div className="col s12 m6 l6">
                  <h6 className="center purple-text text-darken-1"><InlineMath>{String.raw`r = |\vec{r}| = d = \sqrt{(Δx)^2+(Δy)^2}`}</InlineMath></h6>
                </div>
                <div className="col s12 m6 l6">
                  <p>Here, <em>r</em> represents the object's displacement along the "r-axis" (drawn between starting and final positions).</p>
                </div>
                <div className="col s12 m12 l12 green darken-4"></div>
                <div className="col s12 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`\vec{r} = (Δx)\hat{x}+(Δy)\hat{y}`}</InlineMath></h6>
                </div>
                <div className="col s12 m6 l6">
                  <p>The position vector, <InlineMath>{String.raw`\vec{r}`}</InlineMath> can be expressed using x- and y- components.</p>
                </div>
                <div className="col s12 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`Δx = r\cos{\theta}`}</InlineMath></h6>
                  <h6 className="center"><InlineMath>{String.raw`Δy = r\sin{\theta}`}</InlineMath></h6>
                </div>
                <div className="col s12 m6 l6">
                  <p>Given distance from start (r) and angle above the horizontal (θ), we can find x- and y-displacements easily!</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col s12 m5 l5 center">
            <h6><em>Displacement Simulator</em></h6>
            <iframe src="https://scratch.mit.edu/projects/414214236/embed" allowtransparency="true" width="499" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            <p><a target="_blank" href="https://scratch.mit.edu/projects/414214236/">Direct Link to Scratch</a></p>
          </div>
        </div>
        <div className="amber darken-1 row">{/* DISPLACEMENT EXAMPLE PROBLEMS */}
          <h5 className="center white-text">Displacement: Example Problems and Solutions</h5>            
            <div className="col s12 m6 l6">{/* EX 1: SUE */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "50vh"}}>
                  <span className="card-title grey-text text-darken-4">Ex 1. Trig and Vector Components</span>
                  <p style={{textIndent: "20px", fontWeight: "500"}}>Sue uses a 2.30-meter wooden plank to play with her toy cars. The ramp descends with an angle of 25 degrees below the horizontal, and Sue happily rolls her cars down from the top of the ramp.</p><br/>
                  <p style={{fontWeight: "500"}}>A. Find Δx and Δy for the cars as they move down the ramp.</p> <br/>
                  <p style={{fontWeight: "500"}}>B. Sue moves her wooden plank to a new position, such that the top side of the ramp has a height of 0.45 meters. Find the new angle of descent, as well as Δx for cars moving down this ramp.</p><br/>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  <p>The first step to solving most physics problems is to draw a diagram (or two).</p>
                  <p><em>Note that θ, the angle of depression, is the same as the angle of elevation from the bottom right hand side of the ramp.</em></p>
                  <div className="col s6 m6 l6">
                    <p><b>A. Using SOHCAHTOA...</b></p>
                    <span className="blue-text left"><InlineMath>{String.raw`Δx=d\cos{\theta}`}</InlineMath></span>
                    <span className="red-text right"><InlineMath>{String.raw`Δy=d\sin{\theta}`}</InlineMath></span>  
                    <br/>
                    <br/>
                    <span className="blue-text left"><InlineMath>{String.raw`Δx=2.3\cos{25^{\circ}}`}</InlineMath></span>
                    <span className="red-text right"><InlineMath>{String.raw`Δy=2.3\sin{25^{\circ}}`}</InlineMath></span>  
                    <br/>
                    <br/>
                    <span className="blue-text left"><InlineMath>{String.raw`Δx=2.085 m`}</InlineMath></span>
                    <span className="red-text right"><InlineMath>{String.raw`Δy=0.972m`}</InlineMath></span>  
                    <br/>
                    <br/>
                    <p><b>B. Using arcsine for θ...</b></p>
                    <p style={{textIndent: "20px"}}><InlineMath>{String.raw`\sin{\theta}=\frac{Δy}{d}`}</InlineMath></p>
                    <p style={{textIndent: "20px"}}><InlineMath>{String.raw`\theta = \sin^{-1}{\frac{Δy}{d}}`}</InlineMath></p>
                    <p style={{textIndent: "20px"}}><InlineMath>{String.raw`\theta = \sin^{-1}{\frac{0.45}{2.3}}`}</InlineMath></p>
                    <p style={{textIndent: "20px"}}><InlineMath>{String.raw`\theta = 11.3^{\circ}`}</InlineMath></p>
                    <p><b>...and the Pythagorean Theorem...</b></p>
                    <p style={{textIndent: "20px"}}><InlineMath>{String.raw`(Δx)^2 + (Δy)^2 = d^2`}</InlineMath></p>
                    <p style={{textIndent: "20px"}}><InlineMath>{String.raw`Δx = \sqrt{d^2 - (Δy)^2}`}</InlineMath></p>
                    <p style={{textIndent: "20px"}}><InlineMath>{String.raw`Δx = \sqrt{(2.3)^2 - (0.45)^2}`}</InlineMath></p>
                    <p style={{textIndent: "20px"}}><InlineMath>{String.raw`Δx = 2.26m`}</InlineMath></p>
                  </div>
                  <div className="col s6 m6 l6">
                    <img src={sueDisplacement} width="100%"/>
                  </div>
                  <div className="col s12 m12 l12">
                    <p>It's not a terrible idea to use cosine or tangent functions to find Δx. However, I believe it is better to <em>use given values whenever possible</em>, since we could've mistakenly calculated θ. So let's just check and see if our values for θ and Δx make sense!</p>
                    <p style={{textIndent: "30px"}}><InlineMath>{String.raw`\tan{\theta} \stackrel{?}{=} \frac{Δy}{Δx}`}</InlineMath></p>
                    <p style={{textIndent: "30px"}}><InlineMath>{String.raw`\tan{11.3^{\circ}} \stackrel{?}{=} \frac{0.45}{2.26}`}</InlineMath></p>
                    <p style={{textIndent: "30px"}}><InlineMath>{String.raw`\tan{11.3^{\circ}} \stackrel{?}{=} \frac{0.45}{2.26}`}</InlineMath></p>
                    <p style={{textIndent: "30px"}}><InlineMath>{String.raw`0.20 = 0.20`}</InlineMath><i class="material-icons">check</i></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l6">{/* EX 2: JOE */}
              <div className="card">
                <div className="card-content" style={{minHeight: "50vh"}}>
                  <span className="card-title grey-text text-darken-4">Ex 2. Finding Total Displacement using Components</span>
                  <p style={{textIndent: "20px", fontWeight: "500"}}>Joe takes a walk from his house. He walks 20 meters North, then turns 30 degrees right and walks 40 more meters forward.</p>
                  <p><em>Note: That second bit of walking can be expressed using a <b>bearing</b>: N30<sup>o</sup>E, which reads "30 degrees East of North".</em></p><br/>
                  <p style={{fontWeight: "500"}}>A. Find the x- and y-components of Joe's displacement, Δx and Δy.</p> <br/>
                  <p style={{fontWeight: "500"}}>B. Find <InlineMath>{String.raw`|\vec{r}|`}</InlineMath>. In other words, how far is he from his house?</p><br/>
                  <p style={{fontWeight: "500"}}>C. How is that value different from the total amount he walked?</p><br/>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  <p className="left">With most physics problems, it helps to draw a quick diagram.</p>
                  <div className="col s6 m6 l6">
                    <p>Let's get the x- and y- components of each vector (in meters); then we can add them to find the total Δx and Δy.</p>
                    <span className="red-text left"><InlineMath>{String.raw`Δx=0`}</InlineMath></span>
                    <span className="red-text right"><InlineMath>{String.raw`Δy=20`}</InlineMath></span>  
                    <br/>
                    <br/>
                    <span className="blue-text left"><InlineMath>{String.raw`Δx=40\sin{30^{\circ}}`}</InlineMath></span>
                    <span className="blue-text right"><InlineMath>{String.raw`Δy=40\cos{30^{\circ}}`}</InlineMath></span>  
                    <br/>
                    <br/>
                    <span className="blue-text left"><InlineMath>{String.raw`Δx=20`}</InlineMath></span>
                    <span className="blue-text right"><InlineMath>{String.raw`Δy=34.64`}</InlineMath></span>  
                    <br/>
                    <br/>
                    <p>Notice that in this case, we used sine for x and cosine for y; this is because the angle provided isn't actually the angle above the horizontal: it's 30 degrees from the <em>vertical</em>!</p>
                    <p><b>A. Δx = 20m and Δy = 54.64m</b></p>
                  </div>
                  <div className="col s6 m6 l6">
                    <img src={joeDisplacement} width="100%"/>
                  </div>
                  <div className="col s12 m12 l12">
                    <p>Now the distance from the origin (Joe's house) can be found using the Pythagorean theorem...</p>
                    <p style={{textIndent: "8%"}}><InlineMath>{String.raw`d^2={(Δx)}^2+{(Δy)}^2`}</InlineMath></p>
                    <p style={{textIndent: "8%"}}><InlineMath>{String.raw`d=\sqrt{{(Δx)}^2+{(Δy)}^2}`}</InlineMath></p>
                    <p style={{textIndent: "8%"}}><InlineMath>{String.raw`d=\sqrt{{(20m)}^2+{(54.64m)}^2}`}</InlineMath></p>
                    <p><b>B. <InlineMath>{String.raw`d=58.19 m`}</InlineMath> away from his starting position.</b></p>
                  </div>
                  <div className="col s12 m12 l12">
                    <p><b>C. Joe walked 60 meters total (20m, then 40 m).</b> Turning doesn't change the fact that Joe's has 60 more meters' worth of walking today by the end of his journey; but turning will affect his final position (and, of course, his displacement!)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l12"></div>
            <div className="col s12 m6 l6">{/* EX 3 */}

            </div>
            <div className="col s12 m6 l6">{/* EX 4 */}

            </div>
        </div>

      </div>{/* Section 1 End*/}

      <div id="section2" className="blue lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 2 Velocity */}
        <h4 className="blue-text text-darken-3">Velocity, the rate of change in position</h4>
        <p><b>Velocity</b> is the vector equivalent of <b>speed</b>; both are measured in meters per second (<InlineMath>{String.raw`\frac{m}{s}`}</InlineMath>).</p>
        <div className="row">{/* VELOCITY CONTENT */}
          <div className="col s12 m7 l7">
            <div className="row">
              <div className="col s6 m6 l6" style={{borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "#0d47a1"}}>
                <h6 className="center purple-text text-darken-1"><BlockMath>{String.raw`\overrightarrow {v_{avg}}=\frac{displacement}{time}`}</BlockMath></h6>
                <p className="center"><em>Since velocity is a vector, we can break it into x- and y- components.</em></p>
                <div className="col s6 m6 l6">
                  <h6 className="center red-text text-darken-1"><BlockMath>{String.raw`\vec{v_x}=\frac{Δx}{t}`}</BlockMath></h6>
                </div>
                <div className="col s6 m6 l6">
                  <h6 className="center blue-text text-darken-1"><BlockMath>{String.raw`\vec{v_y}=\frac{Δy}{t}`}</BlockMath></h6>
                </div>
              </div>
              
              <div className="col s6 m6 l6">
                <br/>
                <h6 className="center"><InlineMath>{String.raw`speed = \frac{distance}{time}`}</InlineMath></h6>
                <p><em>As scalars, neither distance nor speed can be negative. The magnitude of velocity, <InlineMath>{String.raw`|\vec{v}|`}</InlineMath> is generally equal to the speed while the object travels in a straight line.</em></p>
                <h6 className="center"><InlineMath>{String.raw`s = \frac{d}{t}`}</InlineMath></h6>
              </div>
            </div>
            <div className="divider blue darken-4"></div>
            <div className="row">
                <p>Given a velocity vector in the form of speed + angle (i.e. 10 m/s, 40 degrees above the horizontal), we can calculate its components <InlineMath>{String.raw`v_x`}</InlineMath> and <InlineMath>{String.raw`v_y`}</InlineMath> pretty easily!</p>
              <div className="col s6 m6 l6">
                <h6 className="center red-text text-darken-1"><InlineMath>{String.raw`v_x=v\cos{\theta}`}</InlineMath></h6>
              </div>
              <div className="col s6 m6 l6">
                <h6 className="center blue-text text-darken-1"><InlineMath>{String.raw`v_y=v\sin{\theta}`}</InlineMath></h6>
              </div>
              <p className="center"><em>Writing or typing <InlineMath>{String.raw`|\vec{v}|`}</InlineMath> is the equivalent of saying "magnitude of the velocity vector". <br/>We'll use <InlineMath>{String.raw`v`}</InlineMath> to represent the magnitude of velocity (speed), and <InlineMath>{String.raw`\vec{v}`}</InlineMath> when we refer to a velocity vector.</em></p>
            </div>
          </div>
          <div className="col s12 m5 l5 center">
            <h6><em>Velocity Simulator</em></h6>
            <iframe src="https://scratch.mit.edu/projects/414268766/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            <p><a target="_blank" href="https://scratch.mit.edu/projects/414268766/">Direct Link to Scratch</a></p>
          </div>

          <div className="col s12 m12 l12 blue darken-4"></div>

          <div className="col s12 m12 l12">
            <h5>Average vs. Instantaneous Velocity</h5>
            <div className="row" style={{marginBottom:"0px"}}>
              <div className="col m1 l1"></div>
              <div className="col s6 m4 l4">
                <p><b>Average velocity</b> is calculated using the object's displacement between times <em>t<sub>i</sub></em> and <em>t<sub>f</sub></em> . Changes in speed/direction between those times are irrelevant in our calculation of v<sub>avg</sub>.</p>
              </div>
              <div className="col m1 l1"></div>
              <div className="col m1 l1" style={{borderLeftWidth: "1px", borderLeftStyle:"solid", borderLeftColor:"#0d47a1"}}></div>
              <div className="col s6 m4 l4">
                <p><b>Instantaneous velocity</b> is the speed and direction of an object at any instant in time. These two quantities can have the same values if the object's velocity remains constant!</p>
              </div>
              <div className="col m1 l1"></div>
            </div>
            <div className="row">
              <div className="col s1 m2 l2"></div>
              <div className="col s10 m8 l8">
                <p style={{textIndent: "20px"}}>Consider a 6-hour car trip from Los Angeles to San Francisco (about 400 miles). The average velocity of the car trip would be around 67 mph North, but the instantaneous velocity of the car at any given point would fluctuate depending on traffic, rest stops, etc. One would need access to the car's speedometer to know its instantaneous velocity at any particular point along the way!</p>
              </div>
              <div className="col s1 m2 l2"></div>
            </div>
          </div>
        </div>
        <div className="amber darken-1 row">{/* VELOCITY EXAMPLE PROBLEMS*/}
          <h5 className="center white-text">Velocity: Example Problems and Solutions</h5>
          <div className="col s12 m6 l6">{/* EX 3: avg vs instantaneous velocity */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 3. Average vs. Instantaneous Velocity</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>Tessa prepares to run around a circular track with a 500m radius. Starting at the Southmost point on the track, she runs counterclockwise at a constant speed around the track in 745 seconds, stopping in the same position where she started her run.</p><br/>
                <p style={{fontWeight: "500"}}>A. How much distance did Tessa cover? How fast was she running?</p> <br/>
                <p style={{fontWeight: "500"}}>B. What's Tessa's displacement? What's her average velocity?</p><br/>
                <p style={{fontWeight: "500"}}>C. Find Tessa's instantaneous velocities at t=0s and at t=478s. How are they different?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p>The distance around a circular track would be its circumference: <InlineMath>{String.raw`C=2πr`}</InlineMath></p>
                <p><b>A. Distance covered: <InlineMath>{String.raw`d=2πr=2π(500m)=3142m`}</InlineMath></b></p>
                <p><b>Tessa's speed: <InlineMath>{String.raw`s=\frac{d}{t}=\frac{3142m}{745s}=4.21m/s`}</InlineMath></b></p>

                <p><b>B. Since Tessa started and ended in the same position, her displacement and average velocity are both zero for this run!</b></p>
                <p>If her friend, Jim, started in the same position as Tessa but stood still for the entire 945 seconds, they'd both be in the same initial and final positions.</p>
                
                <p><b>C. Starting at the Southmost point @ t=0s, Tessa runs at a speed of 4.21m/s East.</b></p>
                <p><b> Halfway through her run @ t=478s, she's at the Northmost point in the track running at the same speed West!</b></p>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">{/* EX 4: Annie */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 4. Calculating Average Velocity</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>Annie hops in her car and drives 1.8 km due East in 1 minute, then turns left and goes 3.5 km due North in 2 minutes.</p><br/>
                <p style={{fontWeight: "500"}}>A. Find the magnitude of her average velocity in meters per second.</p> <br/>
                <p style={{fontWeight: "500"}}>B. Find the angle above the horizontal, θ, of her velocity vector.</p><br/>
                <p style={{fontWeight: "500"}}>C. Tom asks you to look over his solution. What's wrong with it?</p><br/>
                <div style={{width: "80%", marginLeft: "25px"}}>
                  <span className="left"><InlineMath>{String.raw`v_x = \frac{1.8km}{1min} = 30m/s`}</InlineMath></span>
                  <span  className="right"><InlineMath>{String.raw`v_y = \frac{3.5km}{2min} = 29.2m/s`}</InlineMath></span>
                  <br/>
                  <br/>
                  <span className="left"><InlineMath>{String.raw`v = \sqrt{30^2+29.2^2} = 41.9m/s`}</InlineMath></span>
                  <span className="right"><InlineMath>{String.raw`\theta = tan^{-1}(\frac{29.2}{30}) = 44.2^{\circ}`}</InlineMath></span>
                </div>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  <p>For parts A and B, we can find Annie's avg velocity with one of two ways: 1. displacement over time, or 2. find the components of her velocity (v<sub>x</sub> and v<sub>y</sub>) and plug into the Pythagorean Theorem.</p>
                  <div className="col s6 m6 l6">
                    <p>Annie's displacement can be expressed with displacement vector, <InlineMath>{String.raw`\vec{Δr}`}</InlineMath>, where <em>r</em> represents her position along the imaginary line from start to finish of her journey. Think of Δr as analogous to "distance from her initial position in the r-direction".</p>
                    <p><InlineMath>{String.raw`Δr = \sqrt{(Δx)^2+(Δy)^2}`}</InlineMath></p>
                    <p><InlineMath>{String.raw`Δr = \sqrt{(1800m)^2+(3500m)^2}`}</InlineMath></p>
                    <p><InlineMath>{String.raw`Δr = 3936m`}</InlineMath></p>
                    <p>Annie's final position is 3936 meters away from where she started in the <em>r-</em>direction! Since it took her 3 minutes to get there...</p>
                    <p><InlineMath>{String.raw`v_{avg} = \frac{Δr}{t} = \frac{3936m}{180s}`}</InlineMath></p>
                    <p><b>A. <InlineMath>{String.raw`v_{avg} = 21.86m/s`}</InlineMath></b></p>
                  </div>
                  <div className="col s6 m6 l6">
                    <img src={annieVelocity} width="100%"/>
                  </div>
                  <div className="col s12 m12 l12">
                    <p>As promised, there's a second way to find v<sub>avg</sub> using velocity components.</p>
                    <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_{x} = \frac{Δx}{t} = \frac{1800m}{180s} = 10m/s`}</InlineMath></p>
                    <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_{y} = \frac{Δy}{t} = \frac{3500m}{180s} = 19.4m/s`}</InlineMath></p>
                    <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_{avg} = \sqrt{v_x^2 + v_y^2} = \sqrt{(10m/s)^2 + (19.4m/s)^2} = 21.86m/s`}</InlineMath></p>
                    <p>For the angle above the horizontal, θ, we can use components of either the position vector <InlineMath>{String.raw`\vec{r}`}</InlineMath> or velocity <InlineMath>{String.raw`\vec{v}`}</InlineMath>.</p>
                    <p><b>B. </b><InlineMath>{String.raw`θ=tan^{-1}\frac{Δy}{Δx}=tan^{-1}\frac{3500m}{1800m}=62.78^{\circ}`}</InlineMath></p>
                    <p><b>B. </b><InlineMath>{String.raw`θ=tan^{-1}\frac{v_y}{v_x}=tan^{-1}\frac{10m/s}{19.4m/s}=62.78^{\circ}`}</InlineMath></p>
                    <br/>
                    <p><b>C. The major issue with Tom's solution is that he used Annie's <u>instantaneous</u> velocities. True, for the first minute Annie moves at 30m/s East, then she spends two minutes travelling at 29.2m/s North; but average velocity takes into account the displacement and time for the <em>entire trip</em>.</b></p>
                    <p>Tom probably could've avoided these issues if he had drawn a diagram of Annie's motion. The diagram we drew clearly shows that Annie's motion doesn't resemble the 45-45-90 triangle that Tom suggests!</p>
                    <p>Tom's solution also implies that Annie's average velocity is higher than her speed at any point in her drive... which clearly can't be right!</p>
                  </div>
                </div>
              </div>
            </div>
          <div className="col s12 m12 l12"></div>
          <div className="col s12 m6 l6">{/* EX 5 More Velocity Vector Practice */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "50vh"}}>
                  <span className="card-title grey-text text-darken-4">Ex 5. More Velocity Vector Practice</span>
                  <p style={{textIndent: "20px", fontWeight: "500"}}></p><br/>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  {/* EX5 SOLUTION */}
                </div>
              </div>
            </div>
          <div className="col s12 m6 l6">{/* EX 6 More Velocity Vector Practice */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "50vh"}}>
                  <span className="card-title grey-text text-darken-4">Ex 6. Graphing Displacement and Velocity</span>
                  <p style={{textIndent: "20px", fontWeight: "500"}}></p><br/>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  {/* EX6 SOLUTION */}
                </div>
              </div>
            </div>
        </div>
      </div>{/* End of Velocity */}

      <div id="section3" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 3 Acceleration */}
        <h4 className="green-text text-darken-3">Acceleration, the rate of change in velocity</h4>
        <p>Whenever an object experiences a change in speed or direction, it is accelerating! <b>Acceleration</b> is measured in meters per second-squared (<InlineMath>{String.raw`\frac{m}{s^2}`}</InlineMath>), and is zero whenever the object's velocity is <em>constant</em>. Like velocity and displacement, an object's acceleration is a vector that can be broken into x and y components.</p>
        <div className="row">{/* ACCELERATION CONTENT */}
          <div className="col s12 m7 l7">
            <div className="row">
              <div className="col s6 m6 l6">
                <h6 className="center"><InlineMath>{String.raw`\vec{a} = \frac{Δ\vec{v}}{t}=\frac{\vec{v_f} - \vec{v_i}}{t}`}</InlineMath></h6>
              </div>
              <div className="col s6 m6 l6">
                <p>The definition of acceleration; isn't this similar to the definition of velocity? Acceleration vectors can also be broken into x- and y-components using <em>v<sub>x</sub></em> and <em>v<sub>y</sub></em>.</p>
              </div>
              <div className="col s12 m12 l12 green darken-4"></div>
              <div className="col s12 m12 l12">
                <p>Here, like in most introductory physics courses, we'll be working mostly with constant accelerations.</p>
                <div className="col s6 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`v_f= v_i + at`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6">
                  <p className="center"><em>During times of constant acceleration, velocity will change linearly over time!</em></p>
                </div>
                <div className="col s12 m12 l12 green darken-4"></div>
                <div className="col s6 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`v_{avg}= (v_i + v_f)/2`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6">
                  <p className="center"><em>For time intervals where acceleration is constant, the average velocity is equivalent to the average of initial and final velocities.</em></p>
                </div>
              </div>

            </div>
          </div>
          <div className="col s12 m5 l5 center">
            <h5>1<em>D Acceleration</em> Simulator</h5>
            <iframe src="https://scratch.mit.edu/projects/415806627/embed" allowtransparency="true" width="499" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            <p><a target="_blank" href="https://scratch.mit.edu/projects/415806627">Direct Link to Scratch</a></p>
          </div>
        </div>
        <div className="amber darken-1 row"> {/* ACCERLATION EXAMPLES */}
          <h5 className="center white-text">Acceleration: Example Problems and Solutions</h5>
          <div className="col s12 m6 l6">{/* EX 7 Calculating a from vi and vf */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 7. Calculating Acceleration with v<sub>i</sub> and v<sub>f</sub></span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>At t=0s, a car moving at 20m/s speeds up uniformly and reaches a speed of 35m/s after 4 seconds. After cruising at 35m/s for 5 seconds, the driver applies on the brakes, causing the car to come to a stop over 2 seconds.</p><br/>
                <p style={{fontWeight: "500"}}>A. When is the car's acceleration positive? Negative? Zero?</p><br/>
                <p style={{fontWeight: "500"}}>B. Find the car's acceleration and average velocity between t=0s and t=4s.</p><br/>
                <p style={{fontWeight: "500"}}>C. Find the car's acceleration and average velocity between t=9s and t=11s.</p><br/>
                <p style={{fontWeight: "500"}}>C. Find the car's acceleration between t=0s and t=11s.</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                {/* EX6 SOLUTION */}
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">{/* EX 8 Finding v_f given a and t */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 8. Finding <em>v<sub>f</sub></em> given acceleration and time</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A space ship is travelling forward in the x-direction at <InlineMath>{String.raw`\vec{v_i} = 200m/s`}</InlineMath>. Starting at time t=0 seconds, its thrusters are applied for 30 seconds, giving it an acceleration of 10m/s<sup>2</sup>. Find its velocity at t=30s if...</p><br/>
                <p style={{fontWeight: "500"}}>A. ...the thrusters pushed the ship in the same direction as <InlineMath>{String.raw`\vec{v_i}`}</InlineMath> (positive-x direction).</p><br/>
                <p style={{fontWeight: "500"}}>B. ...the thrusters pushed in the opposite direction of <InlineMath>{String.raw`\vec{v_i}`}</InlineMath> (negative-x direction).</p><br/>
                <p style={{fontWeight: "500"}}>C. ...the thrusters pushed in the positive-y direction, perpendicular to <InlineMath>{String.raw`\vec{v_i}`}</InlineMath>.</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p>For each part of this problem, all the initial conditions are identical (except for the direction of <InlineMath>{String.raw`\vec{a}`}</InlineMath>).</p>
                <p><InlineMath>{String.raw`\vec{v_i} = 200m/s`}</InlineMath> in the x-direction </p>
                <p><InlineMath>{String.raw`a = 10m/s^2`}</InlineMath> in different directions between parts A, B, and C.</p>
                <p><InlineMath>{String.raw`t = 30s`}</InlineMath> worth of thrusting time.</p>
                <div className="row">
                  <div className="col s12 m12 l12 amber darken-4"></div>
                  <div className="col s12 m6 l6">
                    <h6 className="center">Part A: <InlineMath>{String.raw`\vec{a}`}</InlineMath> pushes forward</h6>
                    <p>Since <InlineMath>{String.raw`\vec{a}`}</InlineMath> points in the same direction as <InlineMath>{String.raw`\vec{v_i}`}</InlineMath>, the ship will spend 30 seconds building forward speed. Its v<sub>f</sub> will certainly continue pointing forward.</p>
                    <p><InlineMath>{String.raw`\vec{v_{fx}} = \vec{v_{ix}} + a_xt`}</InlineMath></p>
                    <p><InlineMath>{String.raw`\vec{v_{fx}} = 200m/s + (10m/s^2)(30s)`}</InlineMath></p>
                    <p><b>A. <InlineMath>{String.raw`\vec{v_{fx}} = 500m/s`}</InlineMath></b></p>
                  </div>
                  <div className="col s12 m6 l6" style={{borderLeftStyle: "solid", borderLeftWidth: "1px", borderLeftColor: "#ff6f00"}}>
                    <h6 className="center">Part B: <InlineMath>{String.raw`\vec{a}`}</InlineMath> pushes backward</h6>
                    <p>Since <InlineMath>{String.raw`\vec{a}`}</InlineMath> points opposite of <InlineMath>{String.raw`\vec{v_i}`}</InlineMath>, it'll definitely start slowing down; perhaps it'll slow to a stop, or end up moving backwards!</p>
                    <p><InlineMath>{String.raw`\vec{v_{fx}} = \vec{v_{ix}} + a_xt`}</InlineMath></p>
                    <p><InlineMath>{String.raw`\vec{v_{fx}} = 200m/s + (-10m/s^2)(30s)`}</InlineMath></p>
                    <p><b>B. <InlineMath>{String.raw`\vec{v_{fx}} = -100m/s`}</InlineMath></b></p>
                  </div>
                </div>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <div className="col s12 m12 l12">
                  <h6 className="center">Part C: <InlineMath>{String.raw`\vec{a}`}</InlineMath> perpendicular to <InlineMath>{String.raw`\vec{v_i}`}</InlineMath></h6>
                  <p>In parts A and B, the ship was confined to one-dimensional motion along the x-axis. Now that the ship has <InlineMath>{String.raw`\vec{a}`}</InlineMath> pointing in the y-direction, we must break down its motion into x- and y-components.</p>
                  <div className="col s12 m6 l6">
                    {/* <p className="center">The x-direction</p> */}
                    <p><InlineMath>{String.raw`\vec{v_{fx}} = \vec{v_{ix}} + a_xt`}</InlineMath></p>
                    <p><InlineMath>{String.raw`\vec{v_{fx}} = 200m/s + (0m/s^2)(30s)`}</InlineMath></p>
                    <p><InlineMath>{String.raw`\vec{v_{fx}} = 200m/s`}</InlineMath></p>
                    <p><em>There's no acceleration in the x-direction (<InlineMath>{String.raw`a_x = 0m/s^2`}</InlineMath>). The ship's being pushed in the y direction!</em></p>
                  </div>
                  <div className="col s12 m6 l6">
                    {/* <p className="center">The y-direction</p> */}
                    <p><InlineMath>{String.raw`\vec{v_{fy}} = \vec{v_{iy}} + a_yt`}</InlineMath></p>
                    <p><InlineMath>{String.raw`\vec{v_{fy}} = 0m/s + (10m/s^2)(30s)`}</InlineMath></p>
                    <p><InlineMath>{String.raw`\vec{v_{fy}} = 300m/s`}</InlineMath></p>
                    <p><em>Notice that the ship's initial velocity is purely in the x-direction, so <InlineMath>{String.raw`v_{iy} = 0m/s`}</InlineMath></em></p>
                  </div>
                  <div className="col s12 m12 l12">
                    <p>The ship's x-velocity remains a constant 200m/s, while its y-velocity was increased to 300m/s.</p>
                    <div className="col s12 m6 l6">
                      <p><InlineMath>{String.raw`v_{f} = \sqrt{(v_{fx})^2 + (v_{fy})^2}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`v_{f} = \sqrt{(200m/s)^2 + (300m/s)^2}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`v_{f} = 360.6 m/s`}</InlineMath></p>
                    </div>
                    <div className="col s12 m6 l6">
                      <p><InlineMath>{String.raw`\theta = \tan^{-1}\frac{v_{fy}}{v_{fx}}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`\theta = \tan^{-1}\frac{300m/s}{200m/s}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`\theta = 56.3^{\circ}`}</InlineMath></p>
                    </div>
                    <p><b>C. The ship ends up with <em>v<sub>f</sub></em> = 360m/s, 56.3<sup>o</sup> above the horizontal.</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m12 l12"></div>
          <div className="col s12 m6 l6">{/* EX 9 1D Uniform Acc*/}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 9. 1D Uniform Acceleration</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>Jill starts at the top of a long, straight slide with initial speed of 0.56 m/s. She accelerates uniformly down the slide at 2.7 m/s<sup>2</sup>, and reaches the end of the slide in 3.2 seconds.</p><br/>
                <p style={{fontWeight: "500"}}>A. What's Jill's velocity at the end of the slide? What's her velocity halfway through her ride?</p><br/>
                <p style={{fontWeight: "500"}}>B. What's Jill's average velocity on the slide?</p><br/>
                <p style={{fontWeight: "500"}}>C. How long is the slide?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p>Let's use the definition of acceleration to solve part A.</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`\vec{a}=\frac{Δv}{t} = \frac{v_f-v_i}{t}`}</InlineMath></p>
                <p>First, rearrange this equation to find v<sub>f</sub>. Then plug in given values a=2.7m/s<sup>2</sup>, v<sub>i</sub>=0.56m/s, and t=3.2s.</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_f=at+v_i`}</InlineMath></p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_f=(2.7\frac{m}{s})(3.2s)+0.56\frac{m}{s}`}</InlineMath></p>
                <p><b>A1. Jill's final velocity is 9.2m/s (down the slide).</b></p>
                <p>Part A also asks for her velocity halfway through her ride; this must be at the t = 1.6s mark.</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_f=at+v_i`}</InlineMath></p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_f=(2.7\frac{m}{s})(1.6s)+0.56\frac{m}{s}`}</InlineMath></p>
                <p><b>A2. Jill's velocity halfway through the ride is 4.88m/s (still down the slide).</b></p>
                <p>Since acceleration is constant, her average velocity is the average of initial and final velocities:</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_{avg}=\frac{v_i + v_f}{2}=\frac{0.56m/s + 9.2m/s}{2}`}</InlineMath></p>
                <p><b>B. Jill's average velocity if 4.88m/s.</b> Note that it's the same as her velocity at the halftime mark!</p>
                <p>The length of the slide can now be calculated using the definition of velocity. With the x-axis pointing in the same direction as the slide...</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_{avg}=\frac{Δx}{t}`}</InlineMath></p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`Δx=v_{avg}t = (4.88\frac{m}{s})(3.2s)`}</InlineMath></p>
                <p><b>C. The slide is 15.7 meters long.</b></p>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">{/* EX 10 Finding t given a, vi and vf */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 10. Finding <em>t</em> given acceleration and <em>Δv</em></span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A particular train has emergency brakes that cause the train to decelerate at 10 m/s<sup>2</sup>.</p><br/>
                <p style={{fontWeight: "500"}}>A. If the train is travelling at 50 m/s, how long does it take to stop?</p><br/>
                <p style={{fontWeight: "500"}}>B. If its initial velocity is 100 m/s, how long does it take to stop?</p><br/>
                <p style={{fontWeight: "500"}}>C. For A and B, find the average velocity of the train for the duration of its braking. Then find the braking distance (distance travelled in that time).</p><br/>
                <em>Note: "Decelerate", in English, is the opposite of accelerate. We don't love this word in physics; it's more appropriate to say the train accelerates at 10m/s<sup>2</sup> in the negative direction.</em>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p>Parts A and B are simple enough, using the definition of acceleration: <InlineMath>{String.raw`\vec{a} = \frac{Δ\vec{v}}{t}`}</InlineMath></p>
                <p>Let's point v<sub>i</sub> in the positive-x direction. Doing so means that <InlineMath>{String.raw`\vec{a_x} = -10m/s^2`}</InlineMath> and <em>Δv</em> will end up being negative (as v<sub>f</sub>=0).</p>
                <p style={{textIndent: "8%"}}><b>A. <InlineMath>{String.raw`t = \frac{Δv}{a} = \frac{-50m/s}{-10m/s^2} = 5s`}</InlineMath></b></p>
                <p style={{textIndent: "8%"}}><b>B. <InlineMath>{String.raw`t = \frac{Δv}{a} = \frac{-100m/s}{-10m/s^2} = 10s`}</InlineMath></b></p>
                <p><em>As you'd expect, having twice the initial velocity will mean it takes twice as long to stop.</em></p>
                <div className="col s12 m12 l12 amber darken-4"></div>
                <p>For part C, let's find <em>v<sub>avg</sub></em> and braking distance <em>Δx</em> for the 50m/s train from part A first.</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_{avg} = \frac{v_i + v_f}{2} = \frac{50m/s}{2} = 25m/s`}</InlineMath></p>
                <p>Since the 50m/s train spends 5 seconds steadily decreasing speed, its average speed in that time is 25 m/s.</p>
                <p><b>C1. Part A's train has braking distance</b> <InlineMath>{String.raw`Δx = v_{avg}t = (25m/s)(5s) = 125m`}</InlineMath></p>

                <p>What if we found a way to calculate average velocity in terms of a and t? Let's do that for Train B!</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_f = v_i + at`}</InlineMath></p>
                <p>Since the velocity changes linearly (as long as acceleration is constant), doesn't that mean that the average velocity is reached halfway through (at t/2)?</p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_{avg} = v_{halftime} = v_i + a(\frac{t}{2})`}</InlineMath></p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`v_{avg} = 100m/s + (-10m/s^2)\frac{10s}{2} = 50m/s`}</InlineMath></p>
                <p>So again the average speed during the braking is half the initial speed.</p>
                <p>But the exciting part is that we can come up with a new formula for <em>Δx</em> by cutting out the middleman: v<sub>avg</sub></p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`Δx = v_{avg}t`}</InlineMath></p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`Δx = (v_i + a(\frac{t}{2}))t`}</InlineMath></p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`Δx = v_it + \frac{1}{2}at^2`}</InlineMath></p>
                <p className="center"><em> This formula works for finding the displacement of an object with constant acceleration <em>a</em>!</em></p>
                <p style={{textIndent: "8%"}}><InlineMath>{String.raw`Δx = (100m/s)(10s) + \frac{1}{2}(-10m/s^2)(10s)^2`}</InlineMath></p>
                <p><b>C2. Part B's train has braking distance </b><InlineMath>{String.raw`Δx = 500m`}</InlineMath></p>
                <p>So twice the initial velocity means twice the braking time, but the braking distance is quadrupled. Remember that the next time you get into a car!</p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End of Acceleration */}

      <div id="section4" className="blue lighten-5" style={{padding:"1vh 6vw"}}>
        <h4 className="blue-text text-darken-3">Freefall and Acceleration due to Gravity</h4>
        <p style={{textIndent: "30px"}}>Like all massive celestial objects, the Earth has a significant gravitational field that pulls in objects that have mass. On Earth's surface, this pull causes falling objects to accelerate toward the center of Earth at a rate of 9.8 m/s<sup>2</sup> (ignoring air resistance); this number decreases the futher we get from Earth's pull. We call this value the <b>acceleration due to gravity, g</b>. While g = 9.8 m/s<sup>2</sup> on the surface of Earth, g may be different on other planets and at different altitudes (but you'd have to be really, really high up for g to be significantly less than 9.8m/s<sup>2</sup>!)</p>
        <div className="row"> {/* FREEFALL CONTENT */}
          <div className="col s12 m7 l7">
            <p style={{textIndent: "30px"}}>Consider a ball thrown directly upward. Ignoring air resistance, the ball will have a constant acceleration of g = 9.8m/s<sup>2</sup> downward from the moment it leaves your hand to the moment it is caught or lands on the ground. If we use the y-direction to track vertical motion, this means that gravity will have no effect on the x-velocities of projectiles.</p>
          </div>
          <div className="col s12 m5 l5 center">
            {/* FREEFALL SIM */}
            <iframe src="https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html" width="500vw" height="375vw" scrolling="no" allowfullscreen></iframe>
            <p>Direct link <a target="_blank" href="https://phet.colorado.edu/en/simulation/projectile-motion">Phet Simulation: Projectile Motion</a></p>
          </div>
        </div>
        
        <h1 className="grey-text center grey lighten-2">diagrams and practice</h1>
      </div>{/* END OF ACCURACY/PRECISION */}        
        
    </>
  )
}

export default Lesson1_2