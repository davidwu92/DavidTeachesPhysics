//Pages/Lessons/Kinematics.js
import React from 'react'
// import { useHistory } from 'react-router-dom'
//https://github.com/talyssonoc/react-katex
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import joeDisplacement from './joeDisplacement.png'
import sueDisplacement from './sueDisplacement.png'


const Lesson1_1 = () => {
  return (
    <>
      <div className="container">
        <h3 className="center">Lesson 1.1: Intro to Kinematics</h3>
        <h6>
          Kinematics: the branch of mechanics concerned with the motion of objects without reference to the forces which cause the motion.
          <br/>
          <br/>
          In layman's terms, kinematics is the study of <em>how</em> stuff moves; for the most part, we'll be ignoring <em>why</em> stuff moves.
          <br/>
          <br/>
          <div className="purple-text grey lighten-4" style={{padding:"1px 2% 1px 2%"}}>
            <h5>Lesson Contents</h5>
            <div className="purple" style={{height: "1px"}}></div><br/>
            <li><span onClick={()=>{document.getElementById("section1").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Accuracy vs. Precision</u></span></li><br/>
            <li><span onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Vectors vs. Scalars</u></span></li><br/>
            <li><span onClick={()=>{document.getElementById("section3").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Displacement, Velocity, Acceleration</u></span></li><br/>
            <li><span onClick={()=>{document.getElementById("section4").scrollIntoView({behavior: "smooth"})}} className="blue-text text-darken-1"><u>Freefall and Acceleration due to Gravity</u></span></li><br/>
          </div>
        </h6>
      </div>


      <div className="row">
        <div id="section1" className="green lighten-5" style={{padding:"1vh 6vw"}}>
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

        <div id="section2" className="blue lighten-5" style={{padding:"1vh 6vw"}}>
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

        {/* displacement, v, a */}
        <div id="section3" className="green lighten-5" style={{padding:"1vh 6vw"}}>
          <h4 className="green-text text-darken-3">Displacement, Velocity, and Acceleration</h4>
          <p style={{textIndent: "30px"}}><b>These fundamental kinematics quantities are absolutely essential to your success as a physics student.</b> I'm not exaggerating when I say that almost all of the new ideas you'll study in physics will rely on one or more of these quantities! Mastering these equations, definitions, and problem-solving techniques early on will save you many days' worth of headaches.</p>

          <div className="row">
            <div className="col s12 m7 l7">
              <h5>Displacement, the change in position</h5>
              <p><b>Displacement</b> is the vector equivalent of <b>distance</b>; both are measured in meters (m). While distance, <em>d</em>, represents how far meters an object has travelled (or how far apart two points are), displacement is defined as an object's <em>change in position</em>. If "x" represents where an object lies along a horizontal axis, we use Δx ("delta-x") to represent the <em>change in "x"</em> AKA the horizontal displacement.</p>
              <div className="row">
                <div className="col s6 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`Δx=x_f - x_i`}</InlineMath></h6>
                  <h6 className="center"><InlineMath>{String.raw`Δy=y_f - y_i`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6">
                  <p style={{textIndent: "20px"}}>Here, <em>x<sub>i</sub></em> and <em>x<sub>f</sub></em> represent the initial and final x-positions, measured from the origin (usually). Delta (Δ) is the "change in" some value, and that change is found by subtracting the final - initial.</p>
                </div>
                <div className="col s6 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`θ=\arctan\frac{Δy}{Δx} = \tan^{-1}\frac{Δy}{Δx}`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6">
                  <p style={{textIndent: "20px"}}>We might also care about the displacement vector's angle above or below the horizontal, <em>θ</em> ("Theta").</p>
                </div>
              </div>
              
            </div>
            <div className="col s12 m5 l5">
              <iframe src="https://scratch.mit.edu/projects/414214236/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
          </div>
          {/* DISPLACEMENT EXAMPLE PROBLEMS */}
          <div className="yellow lighten-4 row">
            <h6 className="center">Example Problems on Displacement</h6>
              <div className="col s12 m6 l6">
                <div className="card"> 
                  <div className="card-content" style={{minHeight: "50vh"}}>
                    <span className="card-title activator grey-text text-darken-4">Ex 1. Trigonometry and Displacement Vector Components<i className="material-icons right">more_vert</i></span>
                    <p style={{textIndent: "20px", fontWeight: "500"}}>Sue uses a 2.30-meter wooden plank to play with her toy cars. The ramp descends with an angle of 25 degrees below the horizontal, and Sue happily rolls her cars down from the top of the ramp.</p><br/>
                    <p style={{fontWeight: "500"}}>A. Find Δx and Δy for the cars as they move down the ramp.</p> <br/>
                    <p style={{fontWeight: "500"}}>B. Sue moves her wooden plank to a new position, such that the top side of the ramp has a height of 0.45 meters. Find the new Δx for cars moving down this ramp, and find the new angle of descent.</p><br/>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
                    <p>The first step to solving most physics problems is to draw a diagram (or two).</p>
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
                      <span className="red-text right"><InlineMath>{String.raw`Δy=0.972m m`}</InlineMath></span>  
                      <br/>
                      <br/>
                      <p><b>B. Notice that θ, the angle of depression, is the same as the angle of elevation from the bottom right hand side of the ramp (between the blue and brown lines). Given length of the hypotenuse (rather, I should say magnitude of the displacement vector) of 2.3 meters and the "opposite side" Δy...</b></p>
                      <p><InlineMath>{String.raw`\sin{\theta}=\frac{Δy}{d}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`\theta = \sin^{-1}{\frac{Δy}{d}}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`\theta = \sin^{-1}{\frac{0.45}{2.3}}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`\theta = 11.3^{\circ}`}</InlineMath></p>
                      <p>It's not a terrible idea to use cosine or tangent functions to find Δx. However, my recommendation is to use the Pythagorean Theorem to find </p>
                    </div>
                    <div className="col s6 m6 l6">
                      <img src={sueDisplacement} width="100%"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l6">
                <div className="card">
                  <div className="card-content" style={{minHeight: "50vh"}}>
                    <span className="card-title activator grey-text text-darken-4">Ex 2. Finding Total Displacement using Components<i className="material-icons right">more_vert</i></span>
                    <p style={{textIndent: "20px", fontWeight: "500"}}>Joe takes a walk from his house. He walks 20 meters North, then turns 30 degrees right and walks 40 more meters forward.</p>
                    <p><em>Note: That second bit of walking can be expressed using a <b>bearing</b>: N30<sup>o</sup>E, which reads "30 degrees East of North".</em></p><br/>
                    <p style={{fontWeight: "500"}}>A. Find Joe's x- and y-displacements: Δx and Δy.</p> <br/>
                    <p style={{fontWeight: "500"}}>B. How far is he from his house?</p><br/>
                    <p style={{fontWeight: "500"}}>C. How is that different from the total amount he walked?</p><br/>
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
                      <p><InlineMath>{String.raw`d^2={(Δx)}^2+{(Δy)}^2`}</InlineMath></p>
                      <p><InlineMath>{String.raw`d=\sqrt{{(Δx)}^2+{(Δy)}^2}`}</InlineMath></p>
                      <p><InlineMath>{String.raw`d=\sqrt{{(20m)}^2+{(54.64m)}^2}`}</InlineMath></p>
                      <p><b>B. <InlineMath>{String.raw`d=58.19 m`}</InlineMath> away from his starting position.</b></p>
                    </div>
                    <div className="col s12 m12 l12">
                      <p><b>C. Joe walked 60 meters total (20m, then 40 m).</b> Turning doesn't change the fact that Joe's has 60 more meters' worth of walking today by the end of his journey; but turning will affect his final position (and, of course, his displacement!)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l6">

              </div>
              <div className="col s12 m6 l6">

              </div>
          </div>

          <div className="row">
            <div className="col s12 m7 l7">
              <h5>Velocity, the rate of change in position</h5>
              <p><b>Velocity</b> is the vector equivalent of <b>speed</b>; both are measured in meters per second (<InlineMath>{String.raw`\frac{m}{s}`}</InlineMath>).</p>
              <div className="row">
                <div className="col s6 m6 l6">
                  <h6 className="center"><BlockMath>{String.raw`\overrightarrow {v_{avg}}=\frac{displacement}{time}`}</BlockMath></h6>
                  <p className="center"><em>Since velocity is a vector, we can break it into x- and y- components.</em></p>
                  <div className="col s6 m6 l6">
                    <h6 className="center"><BlockMath>{String.raw`\vec{v_x}=\frac{Δx}{t}`}</BlockMath></h6>
                  </div>
                  <div className="col s6 m6 l6">
                    <h6 className="center"><BlockMath>{String.raw`\vec{v_y}=\frac{Δy}{t}`}</BlockMath></h6>
                  </div>
                </div>
                <div className="col s6 m6 l6">
                  <br/>
                  <h6 className="center"><InlineMath>{String.raw`speed = \frac{distance}{time}`}</InlineMath></h6>
                  <p><em>As scalars, neither distance nor speed can be negative. The magnitude of velocity, <InlineMath>{String.raw`|\vec{v}|`}</InlineMath> is generally equal to the speed while the object travels in a straight line.</em></p>
                  <h6 className="center"><InlineMath>{String.raw`s = \frac{d}{t}`}</InlineMath></h6>
                </div>
              </div>
              <div className="row">
                  <p>Given a velocity vector in the form of speed + angle (i.e. 10 m/s, 40 degrees above the horizontal), we can calculate its components <InlineMath>{String.raw`v_x`}</InlineMath> and <InlineMath>{String.raw`v_y`}</InlineMath> pretty easily!</p>
                <div className="col s6 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`v_x=v\cos{\theta}`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`v_y=v\sin{\theta}`}</InlineMath></h6>
                </div>
                <p>Writing or typing <InlineMath>{String.raw`|\vec{v}|`}</InlineMath> is the equivalent of saying "magnitude of the velocity vector". We'll use <InlineMath>{String.raw`v`}</InlineMath> to represent the magnitude of velocity (speed), and <InlineMath>{String.raw`\vec{v}`}</InlineMath> when we refer to a velocity vector.</p>
              </div>
            </div>
            <div className="col s12 m5 l5">
            <iframe src="https://scratch.mit.edu/projects/414268766/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
          </div>
          
          <div className="row">
            <div className="col s12 m7 l7">
              <h5>Acceleration, the rate of change in velocity</h5>
              <p><b>Acceleration</b> is measured in meters per second-squared (<InlineMath>{String.raw`\frac{m}{s^2}`}</InlineMath>).</p>
              <div className="row">
                <div className="col s6 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`a = \frac{Δ\vec{v}}{t}=\frac{\vec{v_f} - \vec{v_i}}{t}`}</InlineMath></h6>
                </div>
                <div className="col s6 m6 l6">
                  <h6 className="center"><InlineMath>{String.raw`Δ\vec{v_x}=\vec{v_{xf}} - \vec{v_{xi}}`}</InlineMath></h6>
                  <h6 className="center"><InlineMath>{String.raw`Δ\vec{v_y}=\vec{v_{yf}} - \vec{v_{yi}}`}</InlineMath></h6>
                </div>
              </div>
              
            </div>
            <div className="col s12 m5 l5">
              <h1 className="grey-text">Acceleration sim</h1>
            </div>
          </div>


          <h1 className="grey-text center grey lighten-2">diagrams and practice</h1>
        </div>{/* END OF x, v, a */}

        <div id="section4" className="blue lighten-5" style={{padding:"1vh 6vw"}}>
          <h4 className="blue-text text-darken-3">Freefall and Acceleration due to Gravity</h4>


          <h1 className="grey-text center grey lighten-2">diagrams and practice</h1>
        </div>{/* END OF ACCURACY/PRECISION */}        
        
      </div>
    </>
  )
}

export default Lesson1_1