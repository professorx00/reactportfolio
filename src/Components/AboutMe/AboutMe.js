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
              <div className="card-header text-white">
                <a id="AboutMe" className="text-white" href="#AboutMe">
                  Dave Ward
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">React Developer</h4>
                <p className="card-text">
                  React JS, React Native, Node JS, Express JS, Passport JS,HTML
                  5, Handlebars, Firebase
                </p>
                <a href="#Portfolio" className="btn btn-warning">
                  See Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 mb-2">
          <div
            className="progress mt-2 "
            name="Javascript"
            style={{ height: "2rem" }}
          >
            <div
              className="progress-bar bg-success BarText"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Javascript
            </div>
          </div>
          <div
            className="progress mt-2 "
            name="Express JS"
            style={{ height: "2rem" }}
          >
            <div
              className="progress-bar bg-info BarText"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Express JS
            </div>
          </div>
          <div
            className="progress mt-2 "
            name="NodeJS"
            style={{ height: "2rem" }}
          >
            <div
              className="progress-bar bg-danger BarText"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Node JS
            </div>
          </div>
          <div
            className="progress mt-2 "
            name="Python"
            style={{ height: "2rem" }}
          >
            <div
              className="progress-bar bg-warning BarText"
              role="progressbar"
              style={{ width: "55%" }}
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Python
            </div>
          </div>
          <div className="progress mt-2 " name="C#" style={{ height: "2rem" }}>
            <div
              className="progress-bar bg-success BarText"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              React Native
            </div>
          </div>
          <div className="progress mt-2 " name="GIT" style={{ height: "2rem" }}>
            <div
              className="progress-bar bg-info BarText"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Microsoft SQL
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div
            className="progress mt-2 "
            name="MySql"
            style={{ height: "2rem" }}
          >
            <div
              className="progress-bar bg-danger BarText"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              MySQL
            </div>
          </div>
          <div
            className="progress mt-2 "
            name="Blender"
            style={{ height: "2rem" }}
          >
            <div
              className="progress-bar bg-warning BarText"
              role="progressbar"
              style={{ width: "55%" }}
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Vue 2/3
            </div>
          </div>

          <div
            className="progress mt-2 "
            name="Photoshop"
            style={{ height: "2rem" }}
          >
            <div
              className="progress-bar bg-success BarText"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Photoshop
            </div>
          </div>
          <div
            className="progress mt-2 "
            name="Illustrator"
            style={{ height: "2rem" }}
          >
            <div
              className="progress-bar bg-info BarText"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Illustrator
            </div>
          </div>
          <div className="progress mt-2 " name="GIT" style={{ height: "2rem" }}>
            <div
              className="progress-bar bg-danger BarText"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              GIT
            </div>
          </div>

          <div className="progress mt-2 " name="GIT" style={{ height: "2rem" }}>
            <div
              className="progress-bar bg-warning BarText"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              React
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4">
          <div className="card border-warning mb-3 cardWidth">
            <div className="card-header">The Start</div>
            <div className="card-body">
              <p className="card-text">
                {" "}
                <p className="card-text">
                I started my journey in California, where I pursued a degree in animation. I quickly fell in love with the creativity and problem-solving aspects of animating, particularly the physics of animation. As I advanced my education into the 3D realm, I discovered Python as a scripting language and took to it as a bug to a flame.
                </p><p>After graduation, I worked as an Implementor for a local time and attendance reseller, where I frequently used Python to write calls to the Time and Attendance software. As I delved deeper into the software's API, I realized that our clients needed a more accessible front-end to access data outside of the software.
                This realization motivated me to seek more education and I enrolled in UNH Coding Bootcamp for Full Stack Development. There, I learned how to develop robust and user-friendly web applications.
              </p>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-info mb-3 cardWidth">
            <div className="card-header">Currently</div>
            <div className="card-body">
              <p className="card-text">
              After completing the bootcamp, I joined Farmhand Automation, where I created a React application to manage fleets and remotely connect to robotic farm bots. I also developed a React Native app to help clients manage their farms and robots more efficiently.
                <br/>Currently, I am working as a contract worker at Apple, focusing on backend development and Vue frontends for internal applications. My experience in developing full-stack applications and my expertise in Python and React have helped me excel in my current role.
                </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-success mb-3 cardWidth">
            <div className="card-header">Hopeful</div>
            <div className="card-body">
              <p className="card-text">
              Throughout my journey as a developer, I have found that constant growth and learning are essential to achieving success. As I reflect on my experiences so far, I am excited to continue pushing myself to learn more and take on new challenges.
              <br/>In particular, I am eager to advance my knowledge and experience in the Vue workflow. As I have recently worked on Vue applications, I have come to appreciate the framework's flexibility and efficiency. I am excited to learn more about Vue's latest features and best practices to create even more robust and user-friendly applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;