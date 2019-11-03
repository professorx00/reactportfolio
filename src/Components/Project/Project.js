import React from 'react';


function Project({id,name,demo,code,tech,img,imgstatic,description,ImageMouseOver,ImageMouseExit}) {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <h3 className="card-header m-0 p-1">{name}</h3>
        <div className="card-body m-0 p-1">
          <h5 className="card-title m-0 p-1">Technology Used:</h5>
          <h6 className="card-subtitle text-muted m-0 p-1">
            {tech.map((element,i)=>(
              
              <span>{element}, </span>
              ))}
          </h6>
        </div>
        
          <div className="card-body m-0 p-1">
            <img className="card-Img-Size" src={imgstatic} onMouseEnter={ImageMouseOver}  onMouseLeave={ImageMouseExit}alt={name} />
            <p className="card-text m-0 p-1">{description}</p>
          </div>
          <div className="card-body m-0 p-1">
            <a href={demo} className="card-link m-0 p-1">Demo</a>
            <a href={code} className="card-link m-0 p-1">Code</a>
          </div>
      </div>
    </div>
      )
}
 
export default Project;