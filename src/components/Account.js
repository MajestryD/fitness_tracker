import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import '../essential/css/Account.min.css';
import Nav from './NavBar/Nav';
import AddExercise from './Homepage/AddExercise';
import DeleteExercise from './Homepage/DeleteExercise';
import Workouts from './Homepage/DisplayWorkOut';
import AddUserWorkout from './Homepage/AddUserWorkout';

export default class Account extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.location.state.currentUser,
      userId:  this.props.location.state.userId,
    }
  }

  componentDidMount = () =>{
    if(cookie.load('connect.sid')){
      axios.get('http://localhost:5000/se')
      .then(res=> console.log(res))
      .catch(error=> console.error(error));
    }
  }



  render(){
    return(

      <div>
        <Nav paths = {[{value:"Home", path:"/"} , {value:"Log Out", path:"/"} ]}/>
        <div className="accountContainer">
          <h1> {this.state.currentUser}</h1>
          <Workouts userId={this.state.userId}/>
          <AddExercise/>
          <DeleteExercise/>
          <AddUserWorkout currentUser = {this.state.currentUser} userId ={this.state.userId}/>
        </div>
      </div>
    )
  }

}
