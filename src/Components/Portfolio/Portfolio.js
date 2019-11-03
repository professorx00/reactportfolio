import React from 'react';
import projectArray from "./projects.json";
import Project from "../Project/Project";

function ImageMouseOver(event,gif){
  event.target.src=gif
}
function ImageMouseExit(event,jpg){
  event.target.src=jpg
}

function Portfolio() {
  return (
    <div className="container">
      <a name="Portfolio" />
      <div className="row">
        <div className="col-md-12 bg-info Contact">
          <h1>Portfolio</h1><a href="#AboutMe" className="back">back to top</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-4">
        <div className="row">
        {
          projectArray.map((project) => {
            return(<Project 
              id={project.id} 
              name={project.name}
              demo={project.demo}
              code={project.code}
              tech={project.tech}
              img={project.img}
              imgstatic={project.imgstatic}
              description={project.description}
              ImageMouseOver={(event)=>ImageMouseOver(event,project.img)}
              ImageMouseExit={(event)=>ImageMouseExit(event,project.imgstatic)}
               />)
          })
        }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Portfolio;