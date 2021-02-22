import React , {Component} from 'react';
import '../essential/css/Homepage.min.css';
import Nav from './NavBar/Nav';

export default class Homepage extends Component {

  render(){
    return(
      <div>
        <Nav paths = {[{value:"Home", path:"/"} , {value:"SignIn", path:"/signin"} ]}/>
        <div className="homeContainer">
          <PagePart content ="Contents goes here"/>
          <PagePart content ="Contents goes here"/>
          <PagePart content ="Contents goes here"/>
        </div>
      </div>

    );
  }
}

function PagePart(props){
  return(
    <div className="pageSection">
      {props.content}
    </div>
  )
}
