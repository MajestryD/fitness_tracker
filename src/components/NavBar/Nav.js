import React from 'react';
import '../../essential/css/Nav.min.css';
import {Link} from 'react-router-dom';

function Nav(props){
  return(
    <div>
      <nav className="navBar">
        <div className="logo"> Home icon </div>
          <div className="navLinks">
            {props.paths.map(function(path){
              return <Link key={path.value} className ="links" to={path.path}> {path.value}</Link>
            })}
          </div>
      </nav>
    </div>
  )
}

export default Nav;


// <Link className ="links" to="/">{props.paths[0]}</Link>
// <Link className ="links" to="/signin"> Sign In</Link>
