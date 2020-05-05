import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './navbar.css'
import M from 'materialize-css';

const Navbar = () => {
  useEffect(() => {
    let dropdowns = document.querySelectorAll(".dropdown-trigger");
    let options = {
      inDuration: 300,
      outDuration: 225,
      belowOrigin: true
    };
    M.Dropdown.init(dropdowns, options);

    // eslint-disable-next-line
  }, []);

  return (
    <nav className="nav-extended black">
      <div className="nav-wrapper" id="navWrapper">
        <div className="brand-logo" id="navTitle"><Link to="/">David Teaches Physics</Link></div>
        <div className="right">
          <ul>
            <li style={{height: "20px"}}><h5><a className="dropdown-trigger" href="#!"
                data-target="lessonDropdown" onMouseEnter={e => {
                  const inst = M.Dropdown.getInstance(e.target);
                  inst && inst.open();
                }}
              >
                LESSONS <i class="material-icons right"
                  style={{position: "relative", padding:"0px",top: "-18px",margin: 0}}>arrow_drop_down</i>
              </a></h5>
              <ul id="lessonDropdown" className="dropdown-content">
                <li><Link to="/kinematics">1. Kinematics</Link></li>
                <li><Link to="/forces">2. Forces</Link></li>
                <li><Link to="/impulse-momentum">3. Impulse and Momentum</Link></li>
                <li><Link to="/work-energy">4. Work and Energy</Link></li>
                <li><Link to="/circular-motion">5. Circular Motion</Link></li>
                <li><Link to="/review-classical-mech">6. Classical Mechanics Review</Link></li>
              </ul>
            </li>
            <li><h5><Link to="/lessons">LESSON LIST</Link></h5></li>
            <li><h5><Link to="/vocabulary">VOCABULARY</Link></h5></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar