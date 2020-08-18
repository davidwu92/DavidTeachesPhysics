import React from 'react'
//https://github.com/talyssonoc/react-katex
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { useHistory } from 'react-router-dom';
import kinematicsEquations from './kinematicsEquations.png'
import rampBall from './1-3-Ex8.png'
import ex9Ball from './1-3-Ex9.png'
import janeRock from './1-3-Ex10.png'
import cannonCliff from './cannonCliff.png'

const Lesson1_3 = () => {
  const history = useHistory()

  return (
    <>
      <div className="indigo lighten-4" style={{marginBottom: "-7px", paddingBottom: "10px"}}>
        <p className="black blue-text" style={{textIndent: "1.2em", margin: "0"}}>
          <button className="btn-small btn-flat black blue-text" onClick={()=>{history.push('/classical-mechanics')}}>Unit 1: Classical Mechanics</button>
          {`>`}<button className="btn-small btn-flat black blue-text" onClick={()=>{history.push('/kinematics')}}>1. Kinematics</button>
          {`>`}<button className="btn-small btn-flat black blue-text">1.3 The Kinematics Equations in One Dimension</button>
        </p>
        <button className="green btn left" onClick={()=>{history.push('/lesson1_2')}}>PREVIOUS LESSON: 1.2 Intro To Kinematics</button>
        <button className="green btn right" onClick={()=>{history.push('/lesson1_4')}}>NEXT LESSON: 1.4 The Kinematics Equations in Two Dimensions</button>
        <br/>
        <div className="container">{/* INTRODUCING LESSON 1.3 */}
          <h3 className="center indigo-text text-darken-4">Lesson 1.3 The Kinematics Equations in One Dimension</h3>
          <h6>
            For now, an object's displacement, velocity, and acceleration are all we really need to describe its motion. We can use their definitions to solve plenty of kinematics problems, but there are many more-complex problems that require bigger guns to solve for unknown values x, v, a, and t.
            <br/>
            <br/>
            {/* <em>Many introductory physics instructors insist that there are somewhere between 3-6 different kinematics equations to practice and master. In my opinion, there are really only two new kinematics equations to learn and practice.</em>
            <br/>
            <br/> */}
            <div className="indigo-text text-darken-4 grey lighten-3" style={{padding:"1px 2% 1px 2%"}}>
              <h5>Lesson Contents</h5>
              <p><em>Disclaimer: the first three sections are wordy (and mathy) explanations of equations. If your goal here is to practice kinematics problems using the already-familiar equations, go straight to each section's example problems and see if you're able to figure them out!</em></p>
              <div className="indigo darken-4" style={{height: "1px"}}></div><br/>
              <li><span onClick={()=>{document.getElementById("section1").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Intro: Two Kinematics Equations</u></span> discusses common kinematics equation sheets (and my disdain for them).</li><br/>
              <li><span onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>The Displacement Equation</u></span> a breakdown of the displacement equation with motion graphs.</li><br/>
              <li><span onClick={()=>{document.getElementById("section3").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>The V-Squared Equation</u></span> a discussion about the v-squared equation and its place in our vector-based mathematics.</li><br/>
              <li><span onClick={()=>{document.getElementById("section4").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>The 1D-Kinematics Problem-Solving Guide</u></span> your infallible guide to solving problems.</li><br/>
            </div>
          </h6>
        </div>
      </div>

      <div id="section1" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 1 Two Equations*/}
        <h4 className="green-text text-darken-3">Intro: Two Kinematics Equations</h4>
        <p><em>From here on out, Initial Velocity will often be represented as <InlineMath>{String.raw`v_o`}</InlineMath> ("v-naught") rather than <InlineMath>{String.raw`v_i`}</InlineMath>.</em></p>
        <h5>The Five Kinematics Equations and Why I Despise Them</h5>
        <p style={{textIndent: "1.2em"}}>
          The Kinematics Equations are useful relationships between the variables we introduced last lesson: displacement, velocity (final and initial), acceleration, and time. 
          Most kinematics problems will present some number of givens, and ask for you to solve for some unknown variable(s).
          Because of this, many instructors compile a comprehensive list of equations that act as your toolbox.
        </p>
        <div className="row" style={{display: "flex", flexWrap: "wrap"}}>
          <div className="col s7 m8 l8 green lighten-4" style={{borderStyle:"double", borderColor:"green"}}>
            <h5 className="center">Using the List of Kinematics Equations</h5>
            <h6 style={{textIndent: "1.2em"}}>1. Write down given variables and unknowns to solve for.</h6>
            <h6 style={{textIndent: "1.2em"}}>2. Go through your list of equations and select the one that has all but one missing variable.</h6>
            <h6 style={{textIndent: "1.2em"}}>3. Plug-N-Chug (sub in given values, solve for the unknown)</h6>
            <p className="center"><em>The idea here is that every unknown variable in a kinematics problem has at least <b>one hyper-efficient equation</b> into which given values can be plugged, and one unknown pops out after some algebra.</em></p>
            <div className="amber lighten-4" style={{padding:"1% 1% 0% 1%", borderStyle:"solid", borderColor:"#ff6f00"}}>
                <h5 className="amber-text text-darken-4 center">Example: Choosing the Right Equation of the Five</h5>
                <h6>A rock is thrown from the edge of a cliff. 3 seconds after it's thrown, its y-velocity is measured to be 35.6 m/s downward. Find its initial velocity.</h6>
                <p><b>Step 1.</b> Given variables are <InlineMath>{String.raw`t=3s`}</InlineMath>, <InlineMath>{String.raw`a=-9.8m/s^2`}</InlineMath>, and <InlineMath>{String.raw`v_f = -35.6m/s`}</InlineMath>.</p>
                <p className="center"><em>Find <InlineMath>{String.raw`v_o`}</InlineMath></em></p>
                <p><b>Step 2.</b> The equation that contains variables t, a, v<sub>f</sub>, and v<sub>o</sub> is the Equation 1 from the list on the right. Since the problem doesn't give or ask for position, y, so we ignore equations 2-5.</p>
                <p className="center"><em><InlineMath>{String.raw`v_f=v_o + at`}</InlineMath></em></p>
                <p><b>Step 3.</b> Plug N Chug</p>
                <p className="center"><em><InlineMath>{String.raw`-35.6m/s = v_o + (-9.8m/s^2)(3s)`}</InlineMath></em></p>
                <p className="center"><em><InlineMath>{String.raw`-35.6m/s = v_o - 29.6 m/s`}</InlineMath></em></p>
                <h6 className="center">So the ball was thrown downward, with <InlineMath>{String.raw`v_o = -6 m/s`}</InlineMath></h6>
            </div>
          </div>
          <div className="col s5 m4 l4 grey lighten-3 center">
            <h6><em>The "5 Kinematics Equations" according to the first Google search result</em></h6>
            <img src={kinematicsEquations} width="80%"/>
            <p><em>These equations set up almost all the possible relations between 5 variables: v<sub>i</sub>, v<sub>f</sub>, a, position, and t.</em></p>
            <p style={{textAlign: "left", textIndent:"1.2em"}}>Each equation is missing one or more of these five variables, so students choose the most-efficient equation to apply to each problem.</p>
          </div>
        </div>
        <div className="row">{/* Two Kinematics Equations CONTENT */}
          <div className="col s12 m12 l12">
            <h6>So if that's how everybody else teaches kinematics, why am I pretending there are only two equations?</h6>
            <p style={{textIndent: "1.2em"}}>I'm not saying that your professors, teachers, and textbooks are wrong; there are at least four or five equations to master. But let's look at my proposed two-equation format.</p>
            <div className="col s6 m6 l6">
              <h6 className="center"><em>The Displacement Equation</em></h6>
              <h5 className="center"><InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></h5>
            </div>
            <div className="col s6 m6 l6">
              <h6 className="center"><em>The V-Squared Equation</em></h6>
              <h5 className="center"><InlineMath>{String.raw`v_f^2 = v_o^2 + 2aΔx`}</InlineMath></h5>
            </div>
            <div className="col s12 m12 l12">
              <p>Both of the above equations hold true <em>as long as acceleration is constant</em>; I insist that these are the only two that are truly new. As for the others, well, you learned them already...</p>
            </div>
            <div className="col s4 m4 l4">
              <h6 className="center"><em>Definition of Velocity</em></h6>
              <h5 className="center"><InlineMath>{String.raw`\vec{v_{avg}} = \frac{Δx}{t}`}</InlineMath></h5>
            </div>
            <div className="col s4 m4 l4">
              <h6 className="center"><em>Definition of Acceleration</em></h6>
              <h5 className="center"><InlineMath>{String.raw`\vec{a} = \frac{Δv}{t}`}</InlineMath></h5>
            </div>
            <div className="col s4 m4 l4">
              <h6 className="center"><em>Calculating Average Velocity</em></h6>
              <h5 className="center"><InlineMath>{String.raw`v_{avg} = \frac{v_o+v_f}{2}`}</InlineMath></h5>
            </div>
            <div className="col s12 m12 l12">
              <p>The first two are true no matter what (that's why they're definitions). The third is quite literally the definition of the "average value" of two numbers... which works as long as acceleration is constant. So if you really scrutinize the list of five kinematics equations, you may notice that...</p>
              <div className="container">
                <li>EQ 1 is just the definition of acceleration, rearranged to isolate v<sub>f</sub>.</li><br/>
                <li>EQ 5 is just <InlineMath>{String.raw`Δx = v_{avg}t`}</InlineMath>; it's quite literally the definition of velocity for objects with constant acceleration.</li><br/>
                <li>EQ 3 just combines EQs 1 and 2 with substition: <InlineMath>{String.raw`v_i = v_f - at`}</InlineMath></li>
              </div>
              <h5>I'm proposing a different strategy for your study of kinematics:</h5>
              <h6><b>~Master the mathematical definitions of your variables, as well as the two kinematics equations</b> (rather than memorize five different equations)</h6>
              <h6><b>~Practice solving problems using critical thinking and analysis</b> as opposed to digging through a list for the most-suitable equation.</h6>
              <p>You'll find success if you train yourself to visualize each situation, analyze variables in relation to other variables, and build big-picture understanding through concept mastery rather than algebra-drilling.</p>
            </div>
          </div>
        </div>
        <div className="amber darken-1 row">{/* Two Kinematics Equations EXAMPLE PROBLEMS */}

        </div>

      </div>{/* Section 1 End*/}

      <div id="section2" className="blue lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 2 Displacement EQ*/}
        <h4 className="blue-text text-darken-3">The Displacement Equation: <InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></h4>
        <p style={{textIndent: "1.2em"}}>Note that this equation uses displacement in the x-direction; this means that v<sub>o</sub> and acceleration should both point purely in the x-direction (or we need to use the x-components of those vectors). There's a separate, equivalent equation for Δy that of course uses the y-components of velocity and acceleration.</p>
        <p style={{textIndent: "1.2em"}}>This equation comes from integrating the definition of acceleration (using Calculus). Regardless of your experience in Calculus, we can visualize where this equation comes from using motion graphs and area-under-the-curve problems. Let's break it down with a few scenarios.</p>
        <div className="row">{/* Two Kinematics Equations CONTENT */}
          <h5>Analyzing the Displacement Equation with Velocity Graphs</h5>
          <div className="col s12 m6 l6">
            <h6>1. Constant Velocity (no acceleration)</h6>
            <p>
              Consider an object with initial velocity 2m/s and <b>no acceleration</b>. Its displacement, then, is a linear function of time: 
            </p>
            <div className="col s6 m6 l6">
              <h6 className="center blue-text">Δx as a function of time</h6>
              <iframe src="https://www.desmos.com/calculator/smgyic8m3e?embed"></iframe>
              <p><em>Displacement increases steadily over time, as the velocity is constant.</em></p>
            </div>
            <div className="col s6 m6 l6">
              <h6 className="center red-text"><em>v</em> as a function of time</h6>
              <iframe src="https://www.desmos.com/calculator/hw8qhbp3wd?embed"></iframe>
              <p><em>With a=0, the velocity stays at 2 m/s. The area under this line tells us the displacement after <em>t</em> seconds.</em></p>
            </div>
            <div className="col s12 m12 l12">
              <h6>The total displacement of an object is <InlineMath>Δx = v_ot</InlineMath> when the velocity is constant.</h6>
            </div>
          </div>
          <div className="col s12 m6 l6" style={{borderStyle: "none none none solid", borderColor:"#1565C0"}}>
            <h6>2. Initial Velocity 0, but constant acceleration</h6>
            <p>
              This object starts from rest, but has constant acceleration <InlineMath>{String.raw`a = 2m/s^2`}</InlineMath>. We can determine its velocity as a function of time using the definition of acceleration.
            </p>
            <div className="col s6 m6 l6">
              <h6 className="center red-text"><em>v</em> as a function of time</h6>
              <iframe src="https://www.desmos.com/calculator/flzkb8sx5e?embed"></iframe>
              <p><em>For time "t", v<sub>avg</sub> is the average of v<sub>o</sub> and v<sub>f</sub>(t). Note that Δx is still the area under this curve, and it's... triangular!</em></p>
            </div>
            <div className="col s6 m6 l6">
              <h6 className="center green-text"><em>a</em> as a function of time</h6>
              <iframe src="https://www.desmos.com/calculator/1zt8xs3khi?embed"></iframe>
              <p><em>Acceleration is, of course, constant. The area under the curve tells us what the change in velocity is after time "t".</em></p>
            </div>
            <h6><InlineMath>{String.raw`v_f = at`}</InlineMath></h6>
            <h6><InlineMath>{String.raw`v_{avg} = \frac{1}{2}v_f = \frac{1}{2}at`}</InlineMath> (with no initial velocity).</h6>
            <p className="center"><InlineMath>{String.raw`Δx = v_{avg}t =(\frac{1}{2}at)t`}</InlineMath></p>
            <p className="center"><InlineMath>{String.raw`Δx = \frac{1}{2}at^2 `}</InlineMath></p>
          </div>
          <div className="col s12 m12 l12" style={{borderStyle: "solid none none none", borderColor:"#1565C0"}}>
            <h6>The displacement equation is a simple, elegant quadratic that, when utilized correctly, can solve many kinematics problems by itself.</h6>
          </div>
        </div>
        <div className="amber darken-1 row">{/* Displacement EQ EXAMPLE PROBLEMS */}
          <h5 className="center white-text">The Displacement EQ: Example Problems and Solutions</h5> 
          <div className="col s12 m6 l6">{/* EX 1 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 1. Finding Displacement Given v<sub>o</sub> and a</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A space ship cruising at 100m/s turns on its thrusters, giving it an acceleration of 10m/s<sup>2</sup> forward.</p><br/>
                <p><b>A.</b> Find the ship's displacement in the first 20 seconds after turning on the thrusters.</p><br/>
                <p><b>B.</b> What's the ship's final velocity after 20 seconds? What is its average velocity in those 20 seconds?</p><br/>
                <p><b>C.</b> Write and sketch graphs of its position and velocity functions, x(t) and v(t).</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p><b>A.</b> Start with the displacement EQ, with acceleration of 10 m/s<sup>2</sup> pointing in the positive-x direction.</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = 100(20) + \frac{1}{2}10(20)^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = 2000 + \frac{1}{2}(4000)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = 4000m`}</InlineMath></p>
                <p><b>B. </b>We'll use the definition of acceleration, <InlineMath>{String.raw`a = \frac{Δv}{t} = \frac{v_f-v_o}{t}`}</InlineMath>.</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f = v_o + at`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f = 100m/s + (10m/s^2)(20s)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f = 300m/s`}</InlineMath></p>
                <p>Meanwhile, the average velocity is the mean of v<sub>o</sub> and v<sub>f</sub>.</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{avg} = \frac{1}{2}(v_o + v_f) = \frac{1}{2}(100 + 300) = 200m/s`}</InlineMath></p>
                <p>Notice that the ship's displacement, 4000m, would've been the same value if the ship had been travelling at a constant 200m/s for 20 seconds!</p>
                <p><b>C. </b>The displacement equation <em>is</em> the position function, x(t).</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = 100t + \frac{1}{2}(10)t^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`x(t) = 100t + 5t^2`}</InlineMath></p>
                <p>The definition of acceleration (with v<sub>f</sub> isolated) <em>is</em> the velocity function, v(t).</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f = v_o + at`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v(t) = v_o + at`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v(t) = 100 + 10t`}</InlineMath></p>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">{/* EX 2 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 2. More Displacement EQ: Finding Acceleration</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>Starting at rest, a marble is rolled down a long, straight ramp. After 10 seconds, the marble rolls 40 meters; assume the acceleration down the ramp is constant.</p><br/>
                <p><b>A.</b> Find its acceleration using the displacement equation: <InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></p><br/>
                <p><b>B.</b> Find its acceleration using the definition of acceleration: <InlineMath>{String.raw`a = \frac{Δv}{t} = \frac{v_f - v_o}{t}`}</InlineMath></p>
                <p className="center"><em>Hint: Use its average and initial velocities to calculate final velocity after 10 seconds</em></p><br/>
                <p><b>C.</b> What's the marble's displacement and final velocity 20 seconds after the start of its roll?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p><b>A. </b> We can just plug and chug here.</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`40 = (0)(10) + \frac{1}{2}a(10)^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`40 = 50a`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`a = 0.8m/s^2`}</InlineMath></p>
                <p><b>B. </b> We know the average velocity is...</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{avg} = Δx/t = 40m/10s = 4m/s`}</InlineMath></p>
                <p>Since the marble started at rest, its velocity starts from 0, increases steadily to 4m/s in five seconds, then to its "final" velocity of 8m/s in the next 5 seconds.</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`a = \frac{v_f - v_o}{t} = \frac{8m/s - 0m/s}{10s}`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`a = 0.8m/s^2`}</InlineMath></p>
                <p><b>C. </b>With twice as much time to accelerate down the ramp...</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f = v_o + at`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f = 0.8(20) = 18m/s`}</InlineMath></p>
                <p>The final velocity is twice as great (compared to its velocity at t=10s).</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = (0)t + \frac{1}{2}(0.8)(20)^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δx = 160m`}</InlineMath></p>
                <p>The ball rolls four times as far when it has twice the time to roll!</p>
              </div>
            </div>
          </div>
          <div className="col s12 m12 l12"></div>
          <div className="col s12 m6 l6">{/* EX 3 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 3. The <em>v<sub>f</sub></em> Displacement Equation: <InlineMath>{String.raw`Δx = v_ft - \frac{1}{2}at^2`}</InlineMath></span>
                <p className="center"><em>What if final velocity is given instead of initial velocity?</em></p>
                <p style={{textIndent: "20px", fontWeight: "500"}}>After being hit, a hockey puck slides forward on some not-very-smooth ice. Friction causes the puck to slow down at a rate of 0.25 m/s, and its velocity is measured to be 4.6 m/s after 3 seconds.</p><br/>
                <p><b>A.</b> Rearrange the definition of acceleration to isolate v<sub>o</sub>, then find v<sub>o</sub>.</p><br/>
                <p><b>B.</b> What's the puck's average velocity in those three seconds after being hit?</p><br/>
                <p><b>C.</b> Starting with <InlineMath>{`Δx = v_{avg}t`}</InlineMath>, show that Δx can be found with either v<sub>o</sub> or v<sub>f</sub>.</p><br/>
                <p className="center"><InlineMath>{String.raw`Δx = v_{avg}t = v_ot + \frac{1}{2}at^2 = v_ft - \frac{1}{2}at^2`}</InlineMath></p>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">{/* EX 4 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 4. Finding Time(s) with the Displacement Equation</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>An object is thrown directly upward with initial velocity of 20m/s. Use the estimate g = 10m/s<sup>2</sup> for this problem.</p><br/>
                <p><b>A.</b> Write and graph the equation for the object's vertical displacement, Δy, after <em>t</em> seconds.</p><br/>
                <p><b>B.</b> At what time(s) is the object's height equal to its starting position?</p><br/>
                <p><b>C.</b> At what time(s) is the object's height 5 meters above its starting position?</p><br/>
                <p><b>D.</b> At what time(s) is the object's height 20 meters above its starting position?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                
              </div>
            </div>
          </div>
        </div>

      </div>{/* Section 2 End*/}

      <div id="section3" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 3 V-Squared EQ*/}
        <h4 className="green-text text-darken-3">The V-Squared Equation: <InlineMath>{String.raw`v_f^2 = v_o^2 + 2aΔx`}</InlineMath></h4>
        <p style={{textIndent: "1.2em"}}>I'd say that the v-squared and displacement equations are your "bread and butter" for kinematics problems, but that might imply that every problem requires both of them (which is not the case). You'll find that just about every kinematics problem can be solved by applying one or both of these two equations--provided you've fully mastered the definitions of acceleration and velocity.</p>
        <div className="row">{/* V-Squared EQ CONTENT */}
          <p style={{textIndent: "1.2em"}}>
            The most important thing to note here is that the v-squared equation has no regard for <em>time</em>, as <em>t</em> is nowhere to be found in the equation. It instead relates velocities (initial and final) with acceleration and <em>displacement</em>.
            If you're curious how it came to be, the v-squared equation is derived from conservation of energy principles. You probably haven't been exposed to this quite yet, so don't worry about it.
          </p>
          <p style={{textIndent: "1.2em"}}>
            Since the velocities in this equation are squared, these terms become positive regardless of the two velocities' directions; this means that positive and negative velocities can become mathematically amgibuous.
            <b> But this doesn't mean that direction is irrelevant</b>. The v-squared equation, like the displacement equation above, works separately for <em>each</em> direction, using only that direction's velocity, acceleration, and displacement components...
          </p>
        
          <div className="col s6 m6 l6 center">
            <h5><InlineMath>{String.raw`v_{fx}^2 = v_{ox}^2 + 2a_x(Δx)`}</InlineMath></h5>
            <br/>
          </div>
          <div className="col s6 m6 l6 center">
            <h5><InlineMath>{String.raw`v_{fy}^2 = v_{oy}^2 + 2a_y(Δy)`}</InlineMath></h5>
            <br/>
          </div>
          <div className="col s12 m12 l12 center">
            <h6 className="green-text text-darken-3">Keep in mind that there's no magical shortcut to uniting the two directions, <em>x</em> and <em>y</em>. This is actually true for <em>every</em> equation we've worked with so far!</h6>
          </div>
          <div className="col s4 m4 l4">
            <h6 className="center"><em>Definition of Velocity</em></h6>
            <h5 className="center"><InlineMath>{String.raw`\vec{v_x} = \frac{Δx}{t}`}</InlineMath></h5>
            <h5 className="center"><InlineMath>{String.raw`\vec{v_y} = \frac{Δy}{t}`}</InlineMath></h5>
          </div>
          <div className="col s4 m4 l4">
            <h6 className="center"><em>Definition of Acceleration</em></h6>
            <h5 className="center"><InlineMath>{String.raw`\vec{a_x} = \frac{Δv_x}{t}`}</InlineMath></h5>
            <h5 className="center"><InlineMath>{String.raw`\vec{a_y} = \frac{Δv_y}{t}`}</InlineMath></h5>
          </div>
          <div className="col s4 m4 l4">
            <h6 className="center"><em>Calculating Average Velocity</em></h6>
            <h5 className="center"><InlineMath>{String.raw`v_{avg-x} = \frac{v_{ox}+v_{fx}}{2}`}</InlineMath></h5>
            <h5 className="center"><InlineMath>{String.raw`v_{avg-y} = \frac{v_{oy}+v_{fy}}{2}`}</InlineMath></h5>
          </div>
          <div className="col s12 m12 l12">
            <p>...but let's worry about separating out directions and finding vector components next lesson. They in the music world say that practice is the best teacher, so let's see some examples of the v-squared equation in action!</p>
          </div>
        </div>
        <div className="amber darken-1 row">{/* V-Squared EXAMPLE PROBLEMS */}
          <h5 className="center white-text">The V-Squared EQ: Example Problems and Solutions</h5>            
          <div className="col s12 m6 l6">{/* EX 5 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 5. Finding <em>Δx</em></span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A hockey puck slides along smooth ice with initial velocity of 10 m/s before it encounters a small, rough patch of dirt. Sliding on the dirt causes the puck to slow with acceleration of 1.8m/s<sup>2</sup>, and it exits the rough patch with a velocity of 6.8 m/s.</p><br/>
                <p><b>A.</b> How much distance did the puck cover between entering and exiting the dirt patch?</p><br/>
                <p><b>B.</b> Using the definition of acceleration, find how much time was spent on the dirt patch.</p><br/>
                <p><b>C.</b> Show that the displacement equation holds true: <InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></p><br/>
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
                <span className="card-title grey-text text-darken-4">Ex 6. Vertical Tosses Revisited: Analyzing Parabolic Motion</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>Bill the Incredible tosses a coin upward from a height of 1.2 meters above the floor with initial speed of 15 m/s. It hits the ground some time later.</p><br/>
                <p><b>A.</b> Find possible velocities of the coin when it is 1.2 meters above the floor.</p><br/>
                <p><b>B.</b> Find the possible velocities of the coin when it hits the floor.</p><br/>
                <p><b>C.</b> Find the possible velocities of the coint at heights of 8m and 16m above the floor.</p><br/>
                <p><b>D.</b> Find the maximum height the coin can achieve using the v-squared equation. <em>Hint: the coin's y-velocity must be zero when it reaches the top of its flight!</em></p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <p><b>A. </b>The coin started its flight at 1.2 meters above the floor... so logically its velocity at that height y=1.2m (above floor) is equal to its initial speed: 15m/s (pointing upward).</p>
                <p>We argued last lesson that the coin's trajectory follows a symmetrical parabola (for the most part... obviously it falls to a lower position than Bill's hand), so the other velocity must be -15m/s.</p>
                <p>Proving this mathematically...</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = v_o^2 + 2aΔy`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = (15m/s)^2 + 2(-9.8m/s^2)(0)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = (15m/s)^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`\sqrt{v_f^2} = \sqrt{(15m/s)^2}`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = {\displaystyle \pm }15m/s`}</InlineMath></p>

                <p><b>B. </b>Knowing that the coin hits the floor when its displacement is Δy = -1.2 meters...</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = v_o^2 + 2aΔy`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = (15m/s)^2 + 2(-9.8m/s^2)(-1.2m)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = 225m^2/s^2 + 23.52m^2/s^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = 248.52m^2/s^2`}</InlineMath></p>
                <p className="center"><em>Typically, we don't write out equations with the units, as it gets messy to read. <br/>If you've plugged the right values in, the units should all work out in the end.</em></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f = {\displaystyle \pm }15.76m/s`}</InlineMath></p>
                <p>Well in this case, there's no way the coin would actually hit the floor with a positive y-velocity, so <InlineMath>{String.raw`v_f = -15.76m/s`}</InlineMath>.</p>

                <p><b>C. </b> Same process as A and B. Let's start with the 8m height; at this height, Δy = 6.8m (above Bill's throwing height).</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = v_o^2 + 2aΔy`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = (15m/s)^2 + 2(-9.8m/s^2)(6.8m)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = 225 - 133.28`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = -91.72`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f = {\displaystyle \pm }9.58m/s`}</InlineMath></p>
                <p>The coin reaches this height (8m above the floor) twice: on the way up with <em>v</em> = 9.58m/s and on the way down with the opposite velocity.</p>
                <p>As for the 16-meter height (14.8 meters above Bill's throwing height)...</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = v_o^2 + 2aΔy`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = (15m/s)^2 + 2(-9.8m/s^2)(14.8m)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = 225 - 290.08`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = -65.08`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f =`}</InlineMath> <em>undefined</em></p>
                <p>There's nothing wrong with the v-squared equation; it's just doomed to fail if you're looking for the coin's velocity at a height the coin never actually reaches.</p>

                <p><b>D. </b>Finding the maximum height can be done a number of different ways, but using the V-Squared equation is my favorite. Why? It simply sets v<sub>fy</sub> to zero, eliminating a good chunk of calculations!</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f^2 = v_o^2 + 2aΔy`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`0 = 15^2 + 2(-9.8)Δy`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`0 = 225 - 19.6(Δy)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`Δy = 11.48 m`}</InlineMath> is the maximum displacement above Bill's throwing height.</p>
                <p>Adding 1.2 meters of initial height will tell us how high the coin is above the ground.</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`y_{max} = 12.68 m`}</InlineMath> is the maximum height above the ground.</p>
              </div>
            </div>
          </div>
          <div className="col s12 m12 l12"></div>
          <div className="col s12 m6 l6">{/* EX 7 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>{/* EX 7 PROBLEM */}
                <span className="card-title grey-text text-darken-4">Ex 7. Finding <em>v<sub>f</sub></em></span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A cannonball is launched from the side of a 100-meter cliff into a canyon with initial speed 40 m/s, and it lands on the canyon floor some time later.</p><br/>
                <p><b>A. </b>If the cannonball was launched upward (with just enough x-velocity to still land in the canyon below), find the ball's velocity when it hits the floor at the foot of the cliff.</p><br/>
                <p><b>B.</b> If the cannonball was launched downward (pointing right at the foot of the cliff), find the velocity of the ball as it hits the canyon floor below.</p><br/>
                <p><b>C.</b> If the cannonball was launched horizontally, find the two components of the ball's final velocity when it hits the canyon floor below. What's the ball's impact speed?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal"> {/* EX 7 SOLUTION */}
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <div className="row">
                  <div className="col s12 m7 l7">
                    <p>Parts A and B have initial velocities pointed (almost) purely in the y-direction, so they'll be analyzed with no regard for the x-direction!</p>
                    <p>Part C, however, will require a <em>bit</em> of 2-dimensional kinematics. While I'd prefer not to explore 2D-kinematics problems at length here (since 2D Kinematics Equations is covered in our next lesson), it will help visualize and prepare us for the process of isolating the x- and y-direction calculations!</p>
                  </div>
                  <div className="col s12 m5 l5">
                    <img src={cannonCliff} width="100%"/>
                  </div>
                </div>
                <p><b>A. </b>With initial velocity pointing in the y-direction, v<sub>oy</sub> = 40m/s. Be careful that, since ball starts at height 100m, its y-displacement will be -100m once it hits the canyon floor below.</p>
                <p className="center"><em> Since Part C cares about x- and y- components, let's consciously use the v-squared equation in the y-direction.</em></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy}^2 = v_{oy}^2 + 2aΔy`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy}^2 = (40m/s)^2 + 2(-9.8m/s^2)(-100m)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy}^2 = 3560m^2/s^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy} = {\displaystyle \pm }60m/s`}</InlineMath> at the canyon floor.</p>
                <p>Of course the ball is travelling downward when it hits the canyon floor below, so <InlineMath>{String.raw`v_{fy} = -60m/s`}</InlineMath>.</p>
                <p><b>B. </b>With initial velocity v<sub>oy</sub> = -40m/s, the v-squared equation will show that the ball will have the same impact speed!</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy}^2 = v_{oy}^2 + 2aΔy`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy}^2 = (-40m/s)^2 + 2(-9.8m/s^2)(-100m)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy}^2 = 3560m^2/s^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy} = -60m/s`}</InlineMath> again.</p>
                <p>The ball's trajectory in Part A is the exactly the same as this one--at least after A's ball falls back down to its initial height.</p>
                <p><b>C. </b>This one is tricky, as the initial velocity is purely in the x-direction: v<sub>oy</sub> = 0m/s and v<sub>ox</sub> = 40m/s.</p>
                <p>The x-velocity remains constant, as the ball isn't accelerating horizontally during its flight.</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fx} = v_{ox} = 40m/s`}</InlineMath></p>
                <p>You could even use the v-squared equation, in the x-direction, to prove this truth:</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fx}^2 = v_{ox}^2 + 2aΔx`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fx}^2 = (40m/s)^2 + 2(0)(Δx)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fx}^2 = (40m/s)^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fx} = 40m/s`}</InlineMath> regardless of its horizontal displacement, Δx.</p>
                <p>Meanwhile in the y-direction, the y-velocity changes as the ball falls at a rate of 9.8m/s<sup>2</sup>.</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy}^2 = v_{oy}^2 + 2aΔy`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy}^2 = (0m/s)^2 + 2(-9.8m/s^2)(-100m)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy}^2 = 1960m^2/s^2`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fy} = 44.27m/s`}</InlineMath></p>
                <p>This final y-velocity is the same as it would've been if the ball was just dropped off the side of the cliff.</p>
                <p>To find the impact speed, we just use the Pythagorean Theorem with the x- and y-components of v<sub>f</sub>:</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_f = \sqrt{v_{fx}^2 + v_{fy}^2}`}</InlineMath></p>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">{/* EX 8 */}
            <div className="card"> 
              <div className="card-content" style={{minHeight: "50vh"}}>
                <span className="card-title grey-text text-darken-4">Ex 8. Choosing Equations</span>
                <p style={{textIndent: "20px", fontWeight: "500"}}>A ball is rolled up a frictionless, 1-meter-long ramp with initial velocity of 2m/s. Apparently the ball wasn't rolled fast enough, as it reaches a maximum distance of 0.8 meters up the ramp before coming right back down to the bottom.</p><br/>
                <p><b>A.</b> Find the acceleration of the ball during its time on the ramp.</p><br/>
                <p><b>B.</b> How much time does it take to reach its maximum distance of 0.8 meters? How long does it take to come back to the bottom?</p><br/>
                <p><b>C.</b> If the goal is to reach the top of the ramp, how fast does the ball need to be rolled?</p><br/>
                <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                <img src={rampBall} width="100%"></img>
                <p>The first thing to note is that I've modified our x- and y-axes, such that x is parallel to the ramp surface (rather than parallel to the ground). Think about the vectors in play here: <InlineMath>{String.raw`\vec{v_o}, \vec{Δx}, \vec{a}`}</InlineMath> all point <em>parallel</em> to the ramp surface!</p>
                <p>For ramp-related problems, we typically rotate our axes such that the motion up and down the ramp is along our x-axis; this is to save ourselves the headache of 3-4 vectors' worth of x- and y-components.</p>
                <p>In this problem, the ball travels with constant, negative-x-ward acceleration along the ramp: before and after reaching its max "x"-displacement of 0.8 meters. It slows on the way up until it has no velocity at the 0.8 meter mark, then comes back down the ramp and (presumably) reaches the bottom with a velocity of -2 m/s.</p>
                <p><b>A. </b>To find the acceleration of the ball, use the v-squared equation.</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fx}^2 = v_{ox}^2 + 2aΔx`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`(0)^2 = (2)^2 + 2a(0.8)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`-4 =  1.6a`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`a = -2.5m/s^2`}</InlineMath></p>
                <p>What if you tried to find the acceleration using the "wrong" equation(s)?</p>
                <div className="row">
                  <div className="col s12 m6 l6">
                    <p style={{textAlign: "center"}}>Definition of Acceleration</p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`a = Δv/t`}</InlineMath></p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`a = -2/t`}</InlineMath></p>
                  </div>
                  <div className="col s12 m6 l6">
                    <p style={{textAlign: "center"}}>Displacement Equation</p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`0.8 = 2t + \frac{1}{2}at^2`}</InlineMath></p>
                  </div>
                </div>
                <p>Without knowledge of how long it takes the ball to reach the 0.8-meter mark, the other equations end up simplifying down to 2-variable relations between a and t. Can we solve these two equations algebraically? Yes, but it would be tedious (and a huge waste of time).</p>
                <p><b>B. </b>Now that we're asked to find how long it takes to reach the top (x=0.8m) and bottom (x=0m the second time), it's worth exploring the other time-relevant equations.</p>
                <p>"Which equation: definition of acceleration, velocity, or the Displacement EQ?"</p>
                <p><b>All of them!</b> Pick an equation that has "t" in it, solve for "t", and check with the other equations. The path of least resistance is in the Definition of Acceleration:</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`a = Δv/t`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`-2.5 = -2/t_{0.8m}`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`t=0.8s`}</InlineMath> to reach x=0.8m.</p>
                <p>The time it takes to reach the bottom, then, is twice that: t=1.6s. Don't believe me? Use the definition of acceleration again, with v<sub>o</sub>=2m/s and v<sub>f</sub>=-2m/s.</p>

                <p>I said that <em>all</em> of the t-relevant equations are viable for finding "t" at this point, didn't I?</p>
                <div className="row">
                  <div className="col s12 m6 l6">
                    <p style={{textAlign: "center"}}>Definition of Velocity</p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`v_{avg} = Δx/t`}</InlineMath></p>
                    <p style={{textAlignt: "center"}}>With v<sub>o</sub>=2m/s and v<sub>f</sub>=0 m/s (at the top of its roll), the average velocity is 1m/s.</p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`1 = 0.8/t`}</InlineMath></p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`t= 0.8s`}</InlineMath></p>
                  </div>
                  <div className="col s12 m6 l6">
                    <p style={{textAlign: "center"}}>Displacement Equation</p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`0.8 = 2t + \frac{1}{2}(-2.5)t^2`}</InlineMath></p>
                    <p style={{textIndent: "2em"}}><InlineMath>{String.raw`0.8 = 2t - 1.25t^2`}</InlineMath></p>
                    <p style={{textAlign: "center"}}>Apply the quadratic formula for t = 0.8s.</p>
                  </div>
                </div>
                <p><b>C. </b>The problem has changed: find v<sub>o</sub>, given Δx=1m and acceleration = -2.5m/s<sup>2</sup> (if you solved part A correctly). Time to reach the top is, again, unknown (and it has nothing to do with the <em>t</em> values from parts A or B).</p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{fx}^2 = v_{ox}^2 + 2aΔx`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`0^2 = v_{ox}^2 + 2(-2.5)(1)`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{ox}^2 = 5`}</InlineMath></p>
                <p style={{textIndent: "4em"}}><InlineMath>{String.raw`v_{ox} = 2.24 m/s`}</InlineMath></p>
                <p>Does this make sense? Well, launching the ball with 2 m/s got us <em>almost</em> to the top of the ramp, so 2.24m/s is a reasonable initial velocity. It wouldn't make sense to calculate something below 2m/s, or (heaven forbid) a <em>negative</em> v<sub>o</sub>.</p>
              </div>
            </div>
          </div>

        </div>

      </div>{/* Section 3 End*/}
      <div id="section4" className="blue lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 4 Problem-Solving Guide*/}
        <h4 className="blue-text text-darken-3">Problem-Solving Guide: 1D Kinematics</h4>
        <p>If you're using this site as a supplement to your physics course, this may be the single most-useful bit of content in the entire site.</p>
        <p style={{textAlign: "center"}}><em>This is the magical, consistent problem-solving guide I pushed on my physics students for years.</em></p>
        <div className="row">{/*Problem-Solving Guide CONTENT*/}
          <div className="col s12 m8 l8">
            <h5>How to Solve Problems in Physics</h5>
            <ol>
              <h6><li><b>Draw a diagram</b> outlining x-y-axes, givens, and unknowns.</li></h6>
              <p style={{textIndent:"4em"}}>I encourage you to read your problem through once for context, then again to draw and label your diagram.</p>
              <h6><li><b>Choose the equation(s)</b> that relate givens with unknowns.</li></h6>
              <p style={{textIndent:"4em"}}>Don't be afraid of choosing the "wrong" equation: all the equations work for <em>something</em> when utilized correctly.</p>
              <h6><li><b>Solve and check your solution</b> using other equations, the plausibility check, and/or dimensional analysis.</li></h6>
              <p style={{textIndent:"4em"}}>Does your solution hold true when other laws and equations are applied using it?</p>
              <p style={{textIndent:"4em"}}>Does it <em>make sense</em> in the context of the problem? Does it have the right units? </p>
            </ol>
            <h6>This 3-Step problem-solving strategy applies to the rest of Kinematics, as well as most of the rest of your physics course.</h6>
          </div>
          <div className="col s12 m4 l4" style={{borderStyle: "none none none solid", borderColor:"#1565C0"}}>
            <h5 className="center">The 1D Kinematics Equations</h5>
            <div className="col s6 m6 l6">
              <p className="center"><em>Definition of Velocity</em></p>
              <h6 className="center"><InlineMath>{String.raw`\vec{v_{avg}} = \frac{Δx}{t}`}</InlineMath></h6>
            </div>
            <div className="col s6 m6 l6">
              <p className="center"><em>Definition of Acceleration</em></p>
              <h6 className="center"><InlineMath>{String.raw`\vec{a} = \frac{Δv}{t}`}</InlineMath></h6>
            </div>
            <div className="col s12 m12 l12"></div>
            <div className="col s6 m6 l6">
              <p className="center"><em>Displacement Equation</em></p>
              <h6 className="center"><InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></h6>
            </div>
            <div className="col s6 m6 l6">
              <p className="center"><em>The V-Squared Equation</em></p>
              <h6 className="center"><InlineMath>{String.raw`v_f^2 = v_o^2 + 2aΔx`}</InlineMath></h6>
            </div>
            <div className="col s12 m12 l12 blue darken-2"></div>
            <div className="col s12 m12 l12">
              <h5 className="center">Remember...</h5>
              <li>Delta-<em>N</em> is the "change in <em>N</em>", or final-<em>N</em> minus initial-<em>N</em>.</li>
              <h6 className="center"><InlineMath>{String.raw`Δx = x_f - x_o`}</InlineMath></h6>
              <li>Formulas apply for objects with constant acceleration</li>
              <li>Each equation analyzes motion variables in one direction</li>
            </div>
          </div>
          <div className="col s12 m12 l12" style={{borderStyle: "solid none none none", borderColor:"#1565C0"}}>
          <h5>Extra Tips</h5>
            
            <p className="center"><em>"Visualize. Then execute."</em></p>
            <h6><li>Check that your diagram and equations truly model the problem, and make sure you can really visualize the situation. Do not proceed past Step 1 until you can.</li></h6>
            <h6><li>Know which variables should be positive, negative, or zero. Know how a variable's +/- sign might change over time (i.e. v<sub>y</sub> is positive for a tossed coin on the way up, 0 at its highest point, and negative as it falls back down).</li></h6>
            <p className="center"><em>"Measure twice, cut once."</em></p>
            <h6><li>Every number in a problem is a "given" with some variable and unit attached to it. Don't plug in "t = 10m/s" or "v = 50m/s<sup>2</sup>".</li></h6>
            <h6><li>Look for key words/phrases: "constant velocity" implies zero acceleration. "Falling" or "thrown" implies acceleration of a<sub>y</sub> = -9.8m/s<sup>2</sup>.</li></h6>
            <p className="center"><em>"Double, triple, quadriple-check your math!"</em></p>
            <h6><li></li></h6>
          </div>
        </div>
        <div className="amber darken-1 row">{/* PROBLEM-SOLVING GUIDE EXAMPLE PROBLEMS */}
          <h5 className="center white-text">The Problem-Solving Guide: Examples and Solutions</h5>
          <div className="row">{/* EX 9: SIMPLER */}
            <div className="white card" style={{margin:"0 10%", padding:"1%"}}>
              <span className="card-title grey-text text-darken-4">EX 9: Simpler 1D Kinematics Problems</span>
              <p><b>A ball is rolled upward from the middle of a 10-meter ramp with initial speed 1.2 m/s.
                  If its acceleration on the ramp is a constant 3.5 m/s<sup>2</sup> (down the ramp)...</b></p>
              <p><b>A. </b>How far along the ramp does the ball reach before rolling back down?</p>
              <p><b>B. </b>How long does it take to reach the bottom?</p>
              <p><b>C. </b>What's its speed at the bottom of the ramp?</p>
            </div>
            <div className="col s12 m4 l4">{/* EX 9.1 */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "60vh"}}>
                  <span className="card-title grey-text text-darken-4">EX 9.1: Reading and Diagramming</span>
                  <p>Read through the problem carefully and come up with a diagram of the situation.</p><br/>
                  <p>Make sure your diagram...</p>
                  <li>defines the x- and y-axes.</li>
                  <li>shows all the given information.</li>
                  <li>lists unknown variables to find.</li>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  <p>Physics problems are often tests of reading comprehension before they are tests of physics/math skill.</p>
                  <p><b>A ball is rolled <span className="green lighten-2">upward</span> from the <span className="blue lighten-2">middle of a 10-meter ramp</span> with <span className="green lighten-2">initial speed 1.2 m/s</span>.
                  If its acceleration on the ramp is a <span className="red lighten-2">constant 3.5 m/s<sup>2</sup> (down the ramp)</span>...</b></p>
                  <p className="blue-text"><b>A. </b>How far along the ramp does the ball reach before rolling back down?</p>
                  <p className="purple-text text-accent-2"><b>B. </b>How long does it take to reach the bottom?</p>
                  <p className="green-text"><b>C. </b>What's its speed at the bottom of the ramp?</p>
                  <p>Here's my diagram.</p>
                  <img src={ex9Ball} width="100%"></img>
                  <p>Notice that, using a well-drawn diagram, someone could understand and solve the whole problem without having to read it.</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">{/* EX 9.2 */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "60vh"}}>
                  <span className="card-title grey-text text-darken-4">EX 9.2: Choosing Equations</span>
                  <p>Analyze your variables: what are the givens? What are the unknowns? Any other useful information you can extrapolate?</p><br/>
                  <p>Choose the most-appropriate equation(s) for each part of the problem.</p><br/>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  <img src={ex9Ball} width="100%"></img>
                  <p>We already listed out the givens in our diagram (Step 1); given initial velocity, starting position, and acceleration, we're asked to find the maximum x-displacement and the time/velocity for the ball as it rolls down to the bottom of the ramp.</p>
                  <p><b>A. Finding x-max</b> requires we understand that the ball's velocity at its highest point is zero (because it's turning around to start rolling back down).</p>
                  <p>The most efficient equation for this is the v-squared equation, since it relates v<sub>o</sub>, v<sub>f</sub>, a, and x.</p>
                  {/* <p>VSQUARED EQUATION SOLUTION</p> */}
                  <p><b>B. Finding t<sub>bottom</sub></b> is quickest using the displacement equation.</p>
                  {/* DISPLACEMENT EQUATION SOLUTION */}
                  <p><b>C. Finding v<sub>bottom</sub></b> is quickest using the v-squared equation.</p>
                  {/* <p>VSQUARED EQUATION SOLUTION</p> */}
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">{/* EX 9.3 */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "60vh"}}>
                  <span className="card-title grey-text text-darken-4">EX 9.3: Solving and Checking</span>
                  <p>Solve for unknowns.</p><br/>
                  <p>Physically plug in your found values to other equations, ensuring that the values are correct.</p><br/>
                  <p>Do your solutions have the correct units? Are they plausible?</p>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  
                </div>
              </div>
            </div>

          </div>

          <div className="row">{/* EX 10: COMPLEX */}
            <div className="white card" style={{margin:"0 10%", padding:"1%"}}>
              <span className="card-title grey-text text-darken-4">EX 10: Complex 1D Kinematics Problems</span>
              <p><b>Fellow student Jane drops a rock down the side of a building from some unknown height, and the rock eventually speeds past your window. You observe that it takes 0.052 seconds to fall from the top to bottom of your window. If your window has a height of 0.85 meters...</b></p>
              <p><b>A. </b>What's the speed of the rock when it passes the bottom of your window?</p>
              <p><b>B. </b>From what height (above the bottom of your window) did Jane drop the rock?</p>
              <p><b>C. </b>EXTRA: Suppose Jane <em>throws</em> her rocks from the same height (vertically). Find the initial velocity of the rock as a function of t<sub>window</sub>, the time spent going across your 0.85-meter-tall window.</p>
            </div>
            <div className="col s12 m4 l4">{/* EX 10.1 */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "60vh"}}>
                  <span className="card-title grey-text text-darken-4">EX 10.1: Reading and Diagramming</span>
                  <p>Read through the problem carefully and come up with a diagram of the situation.</p><br/>
                  <p>Make sure your diagram...</p>
                  <li>defines the x- and y-axes.</li>
                  <li>shows all the given information.</li>
                  <li>lists unknown variables to find.</li>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  <p>The amount of time (t) or fallen distance (Δy) since the start of the rock-drop isn't provided, and instead you're given a small window of information (hah!) about how long and how far the rock drops only as it falls by your window.</p>
                  <p>Still it is possible for us to construct a useful diagram. Let's assume that the rock starts at height y<sub>o</sub> above the bottom of your window, and it starts falling at t<sub>drop</sub> = 0.</p>
                  <p><InlineMath>{String.raw`t_{bottom} = t_{top} + 0.052s`}</InlineMath></p>
                  <img src={janeRock} width="100%"></img>
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">{/* EX 10.2 */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "60vh"}}>
                  <span className="card-title grey-text text-darken-4">EX 10.2: Choosing Equations</span>
                  <p>Analyze your variables: what are the givens? What are the unknowns? Any other useful information you can extrapolate?</p><br/>
                  <p>Choose the most-appropriate equation(s) for each part of the problem.</p><br/>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <p>The givens we're certain about are:</p>
                      <p>1. Jane dropped the rock...</p>
                      <p style={{textIndent:"4em"}}><InlineMath>{String.raw`v_o = 0m/s`}</InlineMath></p>
                      <p>2. The <em>differences</em> in displacement and time for the rock falling by the top and bottom of the window.</p>
                      <p style={{textIndent:"4em"}}><InlineMath>{String.raw`t_{top} = t_{bottom} - 0.052s`}</InlineMath></p>
                      <p style={{textIndent:"4em"}}><InlineMath>{String.raw`Δy_{top} = Δy_{bottom} + 0.85m`}</InlineMath></p>
                      <p><em>Note: When the rock's falling by the bottom of the window, it has a more-negative Δy.</em></p>
                      <div className="col s12 m12 l12 amber darken-3"></div>
                      <p>This problem has six-odd unknown values: velocities, displacements, and times for the rock as it falls by the y<sub>top</sub> and y<sub>bottom</sub> of the window. 
                        Keep in mind: our goals are to find <span className="red-text text-darken-1">A. velocity @ the bottom</span> and <span className="blue-text text-darken-1">B. Δy from Jane to the bottom of the window.</span></p>
                      <p>Let's list out the three acceleration-relevant equations for each position (top and bottom). After simplifying the displacement, v-squared, and definition of acceleration (with v<sub>f</sub> isolated), we get these six:</p>
                    </div>
                    <div className="col s6 m6 l6">
                      <h6>Top of Window</h6>
                      <p><InlineMath>{String.raw`Δy_{top} = -\frac{1}{2}gt_{top}^2`}</InlineMath></p>
                      <p><InlineMath>{String.raw`v_{top}^2 = -2gΔy_{top}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`v_{top} = -gt_{top}`}</InlineMath></p>
                    </div>
                    <div className="col s6 m6 l6">
                      <h6>Bottom of Window</h6>
                      <p><span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span><InlineMath>{String.raw`= -\frac{1}{2}gt_{bottom}^2`}</InlineMath></p>
                      <p><span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}^2`}</InlineMath></span><InlineMath>{String.raw`= -2g`}</InlineMath><span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span></p>
                      <p><span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}`}</InlineMath></span><InlineMath>{String.raw`= -gt_{bottom}`}</InlineMath></p>
                    </div>
                    <div className="col s12 m12 l12">
                      <p><em>I'm excluding the average velocity equations for now; we don't want to be inundated with more variables and equations, especially since nobody is asking for the rock's average velocity.</em></p>
                      <p>Using our given information, let's eliminate as many top-of-window variables as possible.</p>
                    </div>
                    <div className="col s12 m12 l12">
                      <h6>Top of Window</h6>
                      <p><em>I. <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span><InlineMath>{String.raw`+ 0.85 = -\frac{1}{2}g(t_{bottom} - 0.052)^2`}</InlineMath></em></p>
                      <p><em>II. <InlineMath>{String.raw`v_{top}^2 = -2g(`}</InlineMath><span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span><InlineMath>{String.raw`+ 0.85)`}</InlineMath></em></p>
                      <p><em>III.<InlineMath>{String.raw`v_{top} = -g(t_{bottom} - 0.052)`}</InlineMath></em></p>
                    </div>
                    <div className="col s12 m12 l12">
                      <h6>Bottom of Window</h6>
                      <p><em>IV. <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span><InlineMath>{String.raw`= -\frac{1}{2}gt_{bottom}^2`}</InlineMath></em></p>
                      <p><em>V. <span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}^2`}</InlineMath></span><InlineMath>{String.raw`= -2g`}</InlineMath><span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span></em></p>
                      <p><em>VI. <span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}`}</InlineMath></span><InlineMath>{String.raw`= -gt_{bottom}`}</InlineMath></em></p>
                    </div>
                    <div className="col s12 m12 l12">
                      <p>From here on out, finding <span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}`}</InlineMath></span> and <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span> are an exercise in using algebraic substitution to solve for unknowns...</p>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">{/* EX 10.3 */}
              <div className="card"> 
                <div className="card-content" style={{minHeight: "60vh"}}>
                  <span className="card-title grey-text text-darken-4">EX 10.3: Solving and Checking</span>
                  <p>Solve for unknowns.</p><br/>
                  <p>Physically plug in your found values to other equations, ensuring that the values are correct.</p><br/>
                  <p>Do your solutions have the correct units? Are they plausible?</p>
                  <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                  <div className="row">
                    <p>In step 2, we came up with this system of six equations.</p>
                    <div className="col s12 m12 l12">
                      <h6 className="center">Top of Window</h6>
                      <p><em>I. <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span><InlineMath>{String.raw`+ 0.85 = -\frac{1}{2}g(t_{bottom} - 0.052)^2`}</InlineMath></em></p>
                      <p><em>II. <InlineMath>{String.raw`v_{top}^2 = -2g(`}</InlineMath><span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span><InlineMath>{String.raw`+ 0.85)`}</InlineMath></em></p>
                      <p><em>III.<InlineMath>{String.raw`v_{top} = -g(t_{bottom} - 0.052)`}</InlineMath></em></p>
                    </div>
                    <div className="col s12 m12 l12">
                      <h6 className="center">Bottom of Window</h6>
                      <p><em>IV. <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span><InlineMath>{String.raw`= -\frac{1}{2}gt_{bottom}^2`}</InlineMath></em></p>
                      <p><em>V. <span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}^2`}</InlineMath></span><InlineMath>{String.raw`= -2g`}</InlineMath><span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span></em></p>
                      <p><em>VI. <span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}`}</InlineMath></span><InlineMath>{String.raw`= -gt_{bottom}`}</InlineMath></em></p>
                    </div>                  
                    <div className="col s12 m12 l12">
                      <p>There are many different ways to solve for our unknowns at this point. The game plan I've formulated looks like this:</p>
                      <ol>
                        <li>Combine <em>I</em> and <em>IV</em> to find <em>t<sub>bottom</sub></em>.</li>
                        <li>Plug <em>t<sub>bottom</sub></em> into <em>I</em> or <em>IV</em> to find <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span>.</li>
                        <li>Plug <em>t<sub>bottom</sub></em> into <em>VI</em> to find <span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}`}</InlineMath></span>.</li>
                      </ol>
                      <p className="center">Let's do it.</p>
                      <hr></hr>
                      <p><b>1. Subbing <em>IV</em> into <em>I</em>...</b></p>
                      <p><InlineMath>{String.raw`-\frac{1}{2}gt_{bottom}^2 + 0.85 = -\frac{1}{2}g(t_{bottom} - 0.052)^2`}</InlineMath></p>
                      <p><InlineMath>{String.raw`t_{bottom}^2 - 1.7/g = (t_{bottom} - 0.052)^2`}</InlineMath></p>
                      <p><InlineMath>{String.raw`t_{bottom}^2 - 1.7/g = t_{bottom}^2 - 0.104t_{bottom} + 0.002704`}</InlineMath></p>
                      <p><InlineMath>{String.raw`-0.1762 = - 0.104t_{bottom}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`t_{bottom} = 1.694s`}</InlineMath></p>
                      <hr></hr>
                      <p><b>2. Find <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span> by plugging into <em>I</em> and/or <em>IV</em>...</b></p>
                      <p><em>I. <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span><InlineMath>{String.raw`+ 0.85 = -\frac{1}{2}g(1.694 - 0.052)^2`}</InlineMath></em></p>
                      <p><em>IV. <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom}`}</InlineMath></span><InlineMath>{String.raw`= -\frac{1}{2}g(1.694)^2`}</InlineMath></em></p>
                      <p>After some plug, chug, and simplifying, you should come up with <span className="blue-text text-darken-1"><InlineMath>{String.raw`Δy_{bottom} = -14.601m`}</InlineMath></span></p>
                      <hr></hr>
                      <p><b>3. Find <span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}`}</InlineMath></span> by plugging into <em>VI</em>...</b></p>
                      <p><em>VI. <span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom}`}</InlineMath></span><InlineMath>{String.raw`= -g(1.694)`}</InlineMath></em></p>
                      <p><em><span className="red-text text-darken-1"><InlineMath>{String.raw`v_{bottom} = -16.6m/s`}</InlineMath></span></em></p>
                      <hr></hr>
                      <p className="center"><em>Voilà.</em></p>
                      <hr></hr>
                      <p>Even with no clear path forward, the kinematics equations are a magical set of tools that model motion. As long as we set up our equations correctly, we can solve for any one unknown, and watch the rest of the information come to light!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>{/* Section 4 End*/}
    </>
  )
}

export default Lesson1_3