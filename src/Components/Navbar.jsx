import React from 'react';
import '../Assets/css/styles.css';


function Navbar(){
    return(
        <nav className="navbar navbar-default" id="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">PIZZAMANIA</a>
          </div>
      
          
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Pizza</a></li>
              <li><a href="#">Pizza Types</a></li>
              </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;