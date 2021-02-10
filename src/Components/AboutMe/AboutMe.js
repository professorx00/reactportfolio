import React from 'react';
import "../AboutMe/style.css"
function AboutMe() {

  return (
    <div className="container mt-5">
      
      <div className="row align-items-center border-me">
        <div className="col-md-6">
          <img src="/me.png" alt={"Dave"} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <div className="row justify-content-center">
            <div className="card text-white bg-success cardWidth">
              <div className="card-header text-white"><a id="AboutMe" className="text-white" href="#AboutMe">Dave Ward</a></div>
              <div className="card-body">
                <h4 className="card-title">Full Stack Developer</h4>
                <p className="card-text">Node JS, Express JS, Passport JS,HTML 5, Handlebars</p>
                <a href="#Portfolio" className="btn btn-warning">See Portfolio</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="row ">
        <div className="col-md-6 mb-2">
          <div className="progress mt-2 " name="Javascript" style={{height: '2rem'}}>
            <div className="progress-bar bg-success BarText" role="progressbar" style={{ width: '80%' }} aria-valuenow="25"
              aria-valuemin="0" aria-valuemax="100">Javascript</div>
          </div>
          <div className="progress mt-2 " name="Express JS" style={{height: '2rem'}}>
            <div className="progress-bar bg-info BarText" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
              aria-valuemax="100">Express JS</div>
          </div>
          <div className="progress mt-2 " name="NodeJS" style={{height: '2rem'}}>
            <div className="progress-bar bg-danger BarText" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
              aria-valuemin="0" aria-valuemax="100">Node JS</div>
          </div>
          <div className="progress mt-2 " name="Python" style={{height: '2rem'}}>
            <div className="progress-bar bg-warning BarText" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
              aria-valuemin="0" aria-valuemax="100">Python</div>
          </div>
          <div className="progress mt-2 " name="C#" style={{height: '2rem'}}>
            <div className="progress-bar bg-success BarText" role="progressbar" style={{ width: '70%' }} aria-valuenow="80"
              aria-valuemin="0" aria-valuemax="100">C#</div>
          </div>
          <div className="progress mt-2 " name="GIT" style={{height: '2rem'}}>
            <div className="progress-bar bg-info BarText" role="progressbar" style={{ width: '70%' }} aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100">Microsoft SQL</div>
          </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="progress mt-2 " name="MySql" style={{height: '2rem'}}>
                <div className="progress-bar bg-danger BarText" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">MySQL</div>
            </div>
            <div className="progress mt-2 " name="Blender" style={{height: '2rem'}}>
              <div className="progress-bar bg-warning BarText" role="progressbar" style={{ width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">Blender</div>
            </div>
          
            <div className="progress mt-2 " name="Photoshop" style={{height: '2rem'}}>
              <div className="progress-bar bg-success BarText" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">Photoshop</div>
            </div>
            <div className="progress mt-2 " name="Illustrator" style={{height: '2rem'}}>
              <div className="progress-bar bg-info BarText" role="progressbar" style={{ width: '60%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Illustrator</div>
            </div>
            <div className="progress mt-2 " name="GIT" style={{height: '2rem'}}>
              <div className="progress-bar bg-danger BarText" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">GIT</div>
            </div>
            
            <div className="progress mt-2 " name="GIT" style={{height: '2rem'}}>
              <div className="progress-bar bg-warning BarText" role="progressbar" style={{ width: '90%' }} aria-valuenow="90"
                aria-valuemin="0" aria-valuemax="100">Visual Code</div>
            </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4">
          <div className="card border-warning mb-3 cardWidth">
            <div className="card-header">The Start</div>
            <div className="card-body">
              <p className="card-text"> I started this journey in California. I went to school for animation. I fell in love with the creativity and problem solving of the physics of animation. As my education moved into the 3d realm, I discovered python as a scripting language. I took to it as a bug to a flame. This helped with my previous job as a Implementor for a local time and attendance reseller. As I got use to writing calls in python to the Time and Attendance software, I discovered as I dived deeper into the API that I really need to build a front end for our clients to access data outside of the software on occasion. I decided to seek more education. I joined UNH Coding Boot Camp for Full Stack Development.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-info mb-3 cardWidth">
            <div className="card-header">Currently</div>
            <div className="card-body">
              <p className="card-text">Currently I am working for Tyler Technologies doing C# programming for their DevOps team. I am not sure the C# is my language. There are things about it I love such as the great SQL integration and PowerShell integration. I enjoy my work more in JavaScript and Python. C# seem antiquated by the standards of Node JS, Next JS, Python, That being said I only maintain 4.6 framework. I am sure .net core and new .net 5 sound more of what I want but I don’t foresee my current job leading into those version of C#</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-success mb-3 cardWidth">
            <div className="card-header">Hopeful</div>
            <div className="card-body">
              <p className="card-text">I want to get back to UX programming and web based programming. So I am looking at finding new opportunities that will keep up with modern trends such Next JS and Angular. Things change in technology and I am not sure my current job is moving with the tide. Being government based they tend to stick to older technologies. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;