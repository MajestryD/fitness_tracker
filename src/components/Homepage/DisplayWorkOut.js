import React, {Component} from 'react';
import axios from 'axios';
import Workouts from './Workouts'

export default class DisplayWorkOut extends Component {

  constructor(props){
    super(props);
    this.state ={
      workout:[]
    }
  }
  componentDidMount = () =>{
     axios.get('http://localhost:5000/workout/'+ this.props.userId)
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
        {
          this.state.workout.map(function(workout){
            return <Workouts key={workout._id} theme={workout.theme} exerciseSet ={workout.exerciseSet}/>;
          })
        }
      </div>
    );
  }

}
