import React from 'react';
import '../../essential/css/Nav.min.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Nav(props){

  const logout = (e) =>{
    axios.post('http://localhost:5000/user/logout');
    console.log("logged out");
  }

  return(
    <div>
      <nav className="navBar">
        <div className="logo"> Home icon </div>
          <div className="navLinks">
            {props.paths.map(function(path){
              if(path.value == 'Log Out'){
                return <Link key={path.value} className ="links" to={path.path} onClick = {logout}> {path.value} </Link>
              }else{
                return <Link key={path.value} className ="links" to={path.path}> {path.value} </Link>
              }

            })}
          </div>
      </nav>
    </div>
  )
}

export default Nav;


// <Link className ="links" to="/">{props.paths[0]}</Link>
// <Link className ="links" to="/signin"> Sign In</Link>
