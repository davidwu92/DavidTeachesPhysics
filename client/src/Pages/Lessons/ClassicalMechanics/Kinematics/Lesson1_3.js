import React from 'react'
//https://github.com/talyssonoc/react-katex
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { useHistory } from 'react-router-dom';
import kinematicsEquations from './kinematicsEquations.png'


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
            For now, and object's displacement, velocity, and acceleration are all we really need to describe its motion. We can use their definitions to solve plenty of kinematics problems, but there are complex kinematics problems that require bigger guns to solve for unknown values x, v, a, and t.
            <br/>
            <br/>
            <em>Many introductory physics instructors insist that there are somewhere between 3-6 different kinematics equations to practice and master. In my opinion, they're wrong--there really only two kinematics equations to learn and practice.</em>
            <br/>
            <br/>
            <div className="indigo-text text-darken-4 grey lighten-3" style={{padding:"1px 2% 1px 2%"}}>
              <h5>Lesson Contents</h5>
              <div className="indigo darken-4" style={{height: "1px"}}></div><br/>
              <li><span onClick={()=>{document.getElementById("section1").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Intro: Two Kinematics Equations</u></span></li><br/>
              <li><span onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>The Displacement Equation</u></span></li><br/>
              <li><span onClick={()=>{document.getElementById("section3").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>The V-Squared Equation</u></span></li><br/>
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
              <h5 className="center"><InlineMath>{String.raw`\vec{v} = \frac{Δx}{t}`}</InlineMath></h5>
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
                <li>EQ 5 is just <InlineMath>{String.raw`Δx = v_{avg}t`}</InlineMath></li><br/>
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
        <p style={{textIndent: "1.2em"}}>This equation comes from integrating the definition of acceleration (using Calculus). Regardless of your experience in Calculus, we can visualize where this equation comes from using motion graphs and area-under-the-curve problems. Let's break it down with two scenarios.</p>
        <div className="row">{/* Two Kinematics Equations CONTENT */}
          <div className="col s12 m6 l6">
            <h5>1. Constant Velocity (no acceleration)</h5>
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

          </div>
          <div className="col s12 m6 l6">
            <h5>2. Initial Velocity 0, but constant acceleration</h5>
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

        </div>
        <div className="amber darken-1 row">{/* Two Kinematics Equations EXAMPLE PROBLEMS */}
        </div>

      </div>{/* Section 2 End*/}

      <div id="section3" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 3 V-Squared EQ*/}
        <h4 className="green-text text-darken-3">The V-Squared Equation</h4>
        <p style={{textIndent: "1.2em"}}></p>
        <p className="center"><em></em></p>

        <div className="row">{/* Two Kinematics Equations CONTENT */}
        </div>
        <div className="amber darken-1 row">{/* Two Kinematics Equations EXAMPLE PROBLEMS */}
        </div>

      </div>{/* Section 3 End*/}

    </>
  )
}

export default Lesson1_3