import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
              <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>{/*part 1*/}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>{/*part 2 ,,,, In part 1 and 2 we can also use 
          a in place of Link and href in place of to, but it reloads ... other wise using link and to makes 
            spa without reloading*/}
        </li>
      </ul>
      {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>*/}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable ${props.mode==='light'?'dark':'light'} Mode</label>
          </div>
    </div>
  </div>
      </nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
    /*isRequired is optional ... it says that title must be given Without defaultprops it gives ana error when title is not given*/
}
Navbar.defaultProps = {
  title: 'Set title here'
};