import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid "><div className="navbar-brand">{props.title}</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">{props.hometext}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">{props.abouttext}</Link>
          </li>
        </ul>
        <div className="form-check form-switch align-self-end">
        <input className="form-check-input " type="checkbox" style={{backgroundColor:'green'}} role="switch" onClick={props.toggleMode}/>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    hometext:PropTypes.string.isRequired,
    abouttext:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"Give_title",
    hometext:"Give_hometext",
    abouttext:"Give_abouttext"
}
