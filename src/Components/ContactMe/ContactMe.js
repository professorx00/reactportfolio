import React from 'react';
import "../ContactMe/style.css"
function ContactMe() {
  return (
    <div className="container-fluid text-left" name="ContactMe">
      <a id="ContactMe" />
      <div className="row bg-info Contact text-center">
        <div className="col-md-12">
          <h1 className="display-5">Contact Information</h1><a href="#AboutMe" className="back">back to top</a>
        </div>
      </div>
      <div className="row bg-secondary pt-2">
        <div className="col-md-6 offset-md-1">
            <ul>
              <li>Address: 1348 Long Plains Rd Buxton ME 04093</li>
              <li>Phone: <a href="tel:+12073910296">(207)-391-0296</a></li>
              <li>Email: <a href="mailto:programmingdad@gmail.com">programmingdad@gmail.com</a></li>
            </ul>
        </div>
        <div className="col-md-4">
            <p className="text-center">Social Media</p>
            <p className="lead text-center">
              <a className="btn btn-primary btn-lg" href="https://www.linkedin.com/in/programmingdad/" ><i className="fab fa-linkedin"></i></a>
              <a className="btn btn-primary btn-lg" href="https://github.com/professorx00" ><i class="fab fa-github"></i></a>
            </p>
          </div>
      </div>
    </div>
  )
}

export default ContactMe;