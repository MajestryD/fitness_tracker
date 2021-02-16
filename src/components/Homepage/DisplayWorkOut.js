import React, {Component} from 'react';
import axios from 'axios';

export default class DisplayWorkOut extends Component {

  constructor(props){
    super(props);
    this.state ={
      workout:[]
    }
  }
  componentDidMount = () =>{
    axios.get('http://localhost:5000/workout/')
    .then(res =>{
      if(res.data.length > 0){
        this.setState({
          workout: res.data
        })
      }
      console.log(this.state.workout);
    })
  }

  render(){
    return(
      <div>
        this.state.workout.map(function(workout) =>{
          <div> {workout._idS}</div>
        })
      </div>
    );
  }

}
