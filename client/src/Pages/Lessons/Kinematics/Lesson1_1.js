//Pages/Lessons/Kinematics.js
import React from 'react'
// import { useHistory } from 'react-router-dom'

const Lesson1_1 = () => {
  return (
    <>
      <div className="container">
        <h3 className="center">Lesson 1.1: Intro to Kinematics</h3>
        <h6>
          Kinematics: the branch of mechanics concerned with the motion of objects without reference to the forces which cause the motion.
          <br/>
          <br/>
          I just grabbed that definition from Google. In layman's terms, kinematics is the study of <em>how</em> stuff moves; for the most part, we'll be ignoring <em>why</em> stuff moves. 
          In this introduction, we'll look at...
          <br/>
          <br/>
            <li>Accuracy vs. Precision and the S.I. System</li><br/>
            <li>Vectors and Scalars</li><br/>
            <li>Displacement, Velocity, Acceleration</li><br/>
            <li>Freefall and Acceleration due to Gravity</li><br/>
        </h6>

        {/* ACC/PRECISION, SI SYSTEM */}
        <div>
          <h4>Accuracy, Precision, and the S.I. System</h4>
          <p>
            Physics is a lab science. In any lab experiment, just about any data we acquire and analyze has some degree of error involved. For a super-quick debrief about all the relevant lab science vocab, consider Bob's attempt to calculate the value of π:
          </p>
          <div className="container">
            <em>
              <p>Hypothetical Bob grabs a string, a ruler, and his mother's set of differently-sized circular dinner plates.</p>
              <p>He measures the circumferences (C) and diameters (D) of each plate, and uses a pocket calculator to find π.</p>
              <p>After three plates of data collection, he finds the average of his 3 π values, and approximates that π is about 3.22.</p>
            </em>
          </div>

          <p>Bob has three different calculations of π, so he's completed 3 <b>trials</b>.</p>
          <p>His <b>experimental (or observed) value</b>, <em>E</em> for π was 3.22; the average of those 3 trials' π calculations.</p>
          <p>The <b>theoretical (or expected) value</b>, <em>T</em> for π is the current accepted value: 3.14159265... rounded to the whateverth place.</p>
          <p>The <b>percent error</b> is the ratio of "how far off Bob was" to "theoretical π". The formula for percent error is then |<em>E</em>-<em>T</em>|/<em>T</em>.</p>
          <p><b>Accuracy</b> represents how closely our data matches the expected result. The lower the percent error, the greater the accuracy.</p>
          <p><b>Precision</b> represents how consistent our data is, regardless of how far off the theoretical value may be. This could be represented with some statistical measurement of dispersion in data (usually Standard Deviation).</p>

          <h6>Let's examine some data sets from Hypothetical Bob's hypothetical friends, just to see how accuracy and precision might vary.</h6>
          <table>
            <th>
              <td>Experimenter</td>
              <td>Plate 1 π</td>
              <td>Plate 2 π</td>
              <td>Plate 3 π</td>
              <td>Experimental Value (average π)</td>
              <td>ACCURACY</td>
              <td>PRECISION</td>
            </th>
            <tr>
              <td>Sue</td>
              <td>3.91</td>
              <td>3.96</td>
              <td>4.01</td>
              <td>3.96</td>
              <td>low</td>
              <td>high</td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Lesson1_1