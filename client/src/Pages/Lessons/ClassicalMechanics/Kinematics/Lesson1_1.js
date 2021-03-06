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

const Lesson1_1 = () => {

  const history = useHistory()

  return (
    <>
      <div className="indigo lighten-4" style={{marginBottom: "-7px", paddingBottom: "10px"}}>
        <p className="black blue-text" style={{textIndent: "20px", margin: "0"}}>
          <button className="btn-small btn-flat black blue-text" onClick={()=>{history.push('/classical-mechanics')}}>Unit 1: Classical Mechanics</button>
          {`>`} <button className="btn-small btn-flat black blue-text" onClick={()=>{history.push('/kinematics')}}>1. Kinematics</button>
          {`>`} <button className="btn-small btn-flat black blue-text">1.1 Physics as a Lab Science </button>
        </p>
        <button className="green btn right" onClick={()=>{history.push('/lesson1_2')}}>NEXT LESSON: 1.2 Intro to Kinematics</button>
        <br/>
        <div className="container">
          <h3 className="center indigo-text text-darken-4">Lesson 1.1: Physics as a Lab Science</h3>
          <h6 style={{textIndent: "30px"}}>
            Before studying E = mc<sup>2</sup> or even F = ma, we should probably talk about how the laws and constants used by physicists have developed over years of experimentation, hypothesis-testing, and lab work.
          </h6>
          <h6>
            <div className="indigo-text text-darken-4 grey lighten-3" style={{padding:"1px 2% 1px 2%"}}>
              <h5>Lesson Contents</h5>
              <div className="indigo darken-4" style={{height: "1px"}}></div><br/>
              <li><span onClick={()=>{document.getElementById("section1").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Accuracy vs. Precision</u></span></li><br/>
              <li><span onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Vectors vs. Scalars</u></span></li><br/>
            </div>
          </h6>
        </div>
      </div>
      <div className="row">
        <div id="section1" className="green lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 1 ACCURACY VS. PRECISION */}
          <h4 className="green-text text-darken-3">Accuracy vs. Precision</h4>
          <p>Physics is a lab science; any data we acquire and analyze should have some degree of error involved. For a super-quick debrief about all the relevant lab science vocab, consider Bob's attempt to calculate the value of π:</p>
          <div className="green lighten-4" style={{padding: "1% 3%", margin:"0 6vw"}}>
              <h5 class="right"><InlineMath>{"π=\\frac{\\text{C}}{\\text{D}}"}</InlineMath></h5>
              <p><em>Hypothetical Bob grabs a string, a ruler, and his mother's set of differently-sized circular dinner plates.</em></p>
              <p><em>He measures the circumferences (C) and diameters (D) of each plate, and uses a pocket calculator to find π.</em></p>
              <p><em>After three plates of data collection, he finds the average of his 3 π values, and approximates that π is about 3.22.</em></p>
          </div>

          <p>Bob has three different calculations of π, so he's completed 3 <b>trials</b>.</p>
          <p>His <b>experimental (or observed) value, <em>E</em> </b>for π was 3.22; the average of those 3 trials' π calculations.</p>
          <p>The <b>theoretical (or expected) value, <em>T</em> </b> is the accepted value of π: ~3.1416 (rounded to the whateverth place).</p>
          <p>The <b>percent error</b> is the ratio of "how far off Bob was" to "theoretical π". The formula for percent error is then |<em>E</em>-<em>T</em>|/<em>T</em>.</p>
          <p><b>Accuracy</b> represents how closely our data matches the expected result. The lower the percent error, the greater the accuracy.</p>
          <p><b>Precision</b> represents how consistent our data is, regardless of how far off the theoretical value may be. This could be represented with some statistical measurement of dispersion in data (usually Standard Deviation).</p>
          <p className="center">Let's examine some mock data sets, just to see how accuracy and precision might vary for different experiments.</p>
          <table className="green lighten-4 centered">
            <thead className="green lighten-3">
              <tr>
                <th>Experimenter</th>
                <th>Plate 1 π</th>
                <th>Plate 2 π</th>
                <th>Plate 3 π</th>
                <th>Experimental Value</th>
                <th>ACCURACY</th>
                <th>PRECISION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="green lighten-5">
                <td>Blossom</td>
                <td>3.10</td>
                <td>3.22</td>
                <td>3.12</td>
                <td>3.15</td>
                <td>high</td>
                <td>high</td>
              </tr>
              <tr className="green lighten-4">
                <td>Bubbles</td>
                <td>3.91</td>
                <td>3.96</td>
                <td>4.01</td>
                <td>3.96</td>
                <td>low</td>
                <td>high</td>
              </tr>
              <tr className="green lighten-5">
                <td>Buttercup</td>
                <td>2.91</td>
                <td>3.60</td>
                <td>2.78</td>
                <td>3.10</td>
                <td>high</td>
                <td>low</td>
              </tr>
              <tr className="green lighten-4">
                <td>Professor X</td>
                <td>2.12</td>
                <td>2.60</td>
                <td>2.93</td>
                <td>2.54</td>
                <td>low</td>
                <td>low</td>
              </tr>
            </tbody>
          </table>
          <p><em>Buttercup has the most interesting set of data; while her accuracy is relatively high, note that data from each of her trials were highly dispersed.</em></p>
          <h1 className="grey-text center grey lighten-2">diagrams and practice</h1>
        </div> {/* END OF ACCURACY/PRECISION */}

        <div id="section2" className="blue lighten-5" style={{padding:"1vh 6vw"}}>{/* SECTION 2 VECTORS VS. SCALARS */}
          <h4 className="blue-text text-darken-3">Vectors vs. Scalars</h4>
          <div className="row">
            <div className="col s12 m6 l6">
              <h6 className="center">A <b>scalar</b> is any mathematical quantity that has magnitude only.</h6>
              <div style={{padding:"0 5vw"}}>
                <p style={{textIndent: "30px"}}>Scalars only care about a numerical value and unit of measure. Mass is one of those quantities, as it just measures how much matter is present in an object. Time is also considered a scalar quantity, as it flows in one direction. Other examples include distance (<em>d</em>), area, volume, temperature, and density.</p>
                <p style={{textIndent: "30px"}}>Most of the values you'd care to measure in your life are scalars. 5,000 steps taken today. 6 classes in my schedule. 1,600 square feet of living space. $10 in your wallet.</p>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <h6  className="center">A <b>vector</b> is any mathematical quantity that has magnitude and direction.</h6>
                <div style={{padding:"0 5vw"}}>
                  <p style={{textIndent: "30px"}}>Vectors care about a number, unit, and direction. The most common examples of vectors are velocity (<em>v</em>) and acceleration (<em>a</em>), both of which we'll be discussing at length in the next section.</p>
                  <p style={{textIndent: "30px"}}>Note that <em>changes in scalars</em> are mathematically considered vectors! If <em>d</em> represents the amount of money in your wallet, any amount of spent or incoming cash is, respectively, a negative or positive change in <em>d</em>. If the temperature of your oven, <em>T</em>, changes from 300<sup>o</sup>F to 340<sup>o</sup>F, that change in <em>T</em> is indeed a vector: positive 40 degrees.</p>
                </div>
            </div>
          </div>

          <h5>Analyzing 2D Vectors</h5>
          <p style={{textIndent: "30px"}}>Mathematical operations with scalars generally aren't any more complicated than basic arithmetic. Add 50 grams of sugar to 500 grams of water, and you get an unsurprising 550 grams' worth of sugary solution. A 4-foot x 5-foot rectangular space has an area of 20 ft<sup>2</sup>. When adding, subtracting, or multiplying vectors, however... we'll need to pull in bigger math guns, and use trigonometry to our advantage.</p>
          <p>We generally represent 2-dimensional vectors in one of two ways: either with a magnitude and angle above the horizontal (the positive x-axis), or with two component vectors.</p>
          <h5><InlineMath>{String.raw`\vec{v}=\vec{v_x} + \vec{v_y} = v_x\hat{i} + v_y\hat{j}`}</InlineMath></h5>
          <h6><InlineMath>{String.raw`v_x=|v|\cos{\theta}`}</InlineMath></h6>
          <h6><InlineMath>{String.raw`v_y=|v|\sin{\theta}`}</InlineMath></h6>
          <h1 className="grey-text center grey lighten-2">diagrams and practice</h1>
        </div>{/* END OF VECTORS/SCALARS */}

        
      </div>

      <button className="green btn right" onClick={()=>{history.push('/lesson1_2')}}>NEXT LESSON: 1.2 Intro to Kinematics</button>
    </>
  )
}

export default Lesson1_1