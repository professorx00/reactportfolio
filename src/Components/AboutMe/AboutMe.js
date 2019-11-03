import React from 'react';
import "../AboutMe/style.css"
function AboutMe() {

  return (
    <div className="container mt-5">
      <a id="AboutMe" />
      <div className="row align-items-center border-me">
        <div className="col-md-6">
          <img src="/me.png" alt={"Dave"} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <div className="row justify-content-center">
            <div className="card text-white bg-success cardWidth">
              <div className="card-header">Dave Ward</div>
              <div className="card-body">
                <h4 className="card-title">Full Stack Developer</h4>
                <p className="card-text">Node JS, Express JS, Passport JS,HTML 5, Handlebars</p>
                <a href="#Portfolio" className="btn btn-warning">See Portfolio</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-md-12">
          Javascript:
        <div className="progress mt-2">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          Express JS:
        <div className="progress mt-2">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
          Node JS:
        <div className="progress mt-2">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          Python:
        <div className="progress mt-2">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          Microsoft SQL:
        <div className="progress mt-2">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          GIT:
        <div className="progress mt-2">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          Visual Code:
        <div className="progress mt-2">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow="90"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          MySQL:
        <div className="progress mt-2 mb-3">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          Blender:
            <div className="progress mt-2">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          Photoshop:
            <div className="progress mt-2">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          Illustrator:
            <div className="progress mt-2">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '60%' }} aria-valuenow="80"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4">
          <div className="card border-warning mb-3 cardWidth">
            <div className="card-header">The Start</div>
            <div className="card-body">
              <p className="card-text"> I started this journey in California. I went to school for animation. I feel in love
                with the creativity and
                problem solving of the physics of animation. As my education moved into the 3d realm, I discovered python
                as a
              scripting language. I took to it as a bug to a flame.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-info mb-3 cardWidth">
            <div className="card-header">Currently</div>
            <div className="card-body">
              <p className="card-text">This helped with my current job as a Implementor for a local time and attendance
                reseller. As I got use to writing calls in python to the Time and Attendance software, I discovered as I
                dived deeper into the API that I really need to build a front end for our clients to access data outside
                of the software on occasion. I decided to seek more. I joined UNH Coding Boot Camp for Full Stack
              Development.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-success mb-3 cardWidth">
            <div className="card-header">Hopeful</div>
            <div className="card-body">
              <p className="card-text">After 9 weeks into the program, I realized this is what I love to do. I am looking forward to the new opportunities that this education will open for me. Until then it will be great to use the extra knowledge to make my current situation better.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;