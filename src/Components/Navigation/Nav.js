import React from 'react';


function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" Name="Top" href="#AboutMe">Dave Ward </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#AboutMe">About Me <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ContactMe">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;