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
        <p className="center"><em>From here on out, Initial Velocity will often be represented as <InlineMath>{String.raw`v_o`}</InlineMath> ("v-naught") rather than <InlineMath>{String.raw`v_i`}</InlineMath>.</em></p>
        <p style={{textIndent: "1.2em"}}>I'm probably under fire for insisting that there are only two kinematics equations. But here they are!</p>
        <div className="row">{/* Two Kinematics Equations CONTENT */}
          <div className="col s7 m7 l7">
            <div className="col s6 m6 l6">
              <h6 className="center"><em>The Displacement Equation</em></h6>
              <h5 className="center"><InlineMath>{String.raw`Δx = v_ot + \frac{1}{2}at^2`}</InlineMath></h5>
            </div>
            <div className="col s6 m6 l6">
              <h6 className="center"><em>The V-Squared Equation</em></h6>
              <h5 className="center"><InlineMath>{String.raw`v_f^2 = v_o^2 + 2aΔx`}</InlineMath></h5>
            </div>
            <div className="col s12 m12 l12">
              <p>Both of the above equations hold true <em>as long as acceleration is constant</em>. But where are all the other ones, one might ask? Well you learned a few of them already, but I think of them less as "formulas" and more as definitions.</p>
            </div>
            <div className="col s6 m6 l6">
              <h6 className="center"><em>Definition of Velocity</em></h6>
              <h5 className="center"><InlineMath>{String.raw`\vec{v} = \frac{Δx}{t}`}</InlineMath></h5>
            </div>
            <div className="col s6 m6 l6">
              <h6 className="center"><em>Definition of Acceleration</em></h6>
              <h5 className="center"><InlineMath>{String.raw`\vec{a} = \frac{Δv}{t}`}</InlineMath></h5>
            </div>
            <div className="col s12 m12 l12">
              <p>These two are true no matter what (that's why they're definitions). There's also one more equation some people suggest: finding the average velocity of an object undergoing constant acceleration from v<sub>o</sub> to v<sub>f</sub>.</p>
              <h6 className="center"><em>Calculating Average Velocity</em></h6>
              <h5 className="center"><InlineMath>{String.raw`v_{avg} = \frac{v_o+v_f}{2}`}</InlineMath></h5>
              <p>...but I sincerely hope we don't need sit down and memorize the formula for arithmetic mean (average) of two numbers.</p>
            </div>
          </div>
          <div className="col s5 m5 l5 center">
            <img src={kinematicsEquations} width="80%"/>
            <p><em></em></p>
          </div>
        </div>
        <div className="amber darken-1 row">{/* Two Kinematics Equations EXAMPLE PROBLEMS */}

        </div>

      </div>{/* Section 1 End*/}

      <div id="section2" className="blue lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 2 Displacement EQ*/}
        <h4 className="blue-text text-darken-3">The Displacement Equation</h4>
        <p style={{textIndent: "1.2em"}}></p>
        <p className="center"><em></em></p>

        <div className="row">{/* Two Kinematics Equations CONTENT */}
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