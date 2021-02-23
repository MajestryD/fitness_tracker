import React, {Component} from 'react';
import axios from 'axios';

export default class AddUserWorkout extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      userId: this.props.userId,
      theme: '',
      exerciseSet: []
    }
  }

  addSet = (e) =>{
      e.preventDefault();
      this.setState({
        exerciseSet: [...this.state.exerciseSet, { exerciseName: '', numberOfReps:'',totalCalorie:''}]
      })
  }

  submitAddWorkout = (e) =>{
    e.preventDefault();
    const workout = {
      userId: this.state.userId,
      theme: this.state.theme,
      exerciseSet: this.state.exerciseSet
    }
    axios.post('http://localhost:5000/workout/add', workout)
    .then(res => console.log(res))
    .catch(error => console.error(error))
  }

  onChangeTheme = (e) =>{
    this.setState({
      theme: e.target.value
    })
  }
  render(){
    return(

      <div>
      <form onSubmit = {this.submitAddWorkout}>
      <label htmlFor="exerciseName"> Workout theme: </label>
      <input value = {this.state.theme} onChange={this.onChangeTheme}/>

      <button type="button" onClick={this.addSet}> Add new set </button>
        {this.state.exerciseSet.map((s,index) =>{
          return(
            <div>
              <label htmlFor=""> Exercise name: </label>
              <input value = {s.exerciseName} onChange ={(e) =>{
                  let items = [...this.state.exerciseSet];
                  let item = {...items[index]};
                  item.exerciseName = e.target.value;
                  items[index] = item;
                  this.setState({
                    exerciseSet: items
                  })
              }}/>
              <label htmlFor="" > Number of Reps: </label>
              <input value = {s.numberOfReps} onChange = {(e) =>{
                let items = [...this.state.exerciseSet];
                let item = {...items[index]};
                item.numberOfReps = e.target.value;
                items[index] = item;
                this.setState({
                  exerciseSet: items
                })
              }}/>
              <label htmlFor=""> Total Calorie: </label>
              <input value = {s.totalCalorie} onChange = {(e) =>{
                let items = [...this.state.exerciseSet];
                let item = {...items[index]};
                item.totalCalorie = e.target.value;
                items[index] = item;
                this.setState({
                  exerciseSet: items
                })
              }}/>


            </div>
          )
        })}
        <input type="submit" value="Add Workout"/>
        </form>
      </div>
    )
  }


}
