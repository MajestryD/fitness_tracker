import React, {Component} from 'react';
import axios from 'axios';

export default class DeleteExercise extends Component{

  constructor(props){
    super(props);
    this.onSelectChange = this.onSelectChange.bind(this);

    this.state = {
      exercise: [],
      currentExercise:'',
      currentExerciseId:''
    }
  }

  componentDidMount = async () =>{
    await axios.get('http://localhost:5000/exercise')
    .then(exercises => this.setState({exercise: exercises.data, currentExerciseId: exercises.data[0]._id}))
    .catch(error => console.error(error))
    console.log(this.state.currentExerciseId);
  }

  onSelectChange = (e) =>{
    this.setState({
      currentExerciseId: e.target.value
    })
  }

  submitDeleteExercise = async (e) =>{
    e.preventDefault();
    await axios.delete('http://localhost:5000/exercise/delete/id/'+this.state.currentExerciseId)
    .then(res => console.log(res))
    .catch(error => console.error(error));

    await axios.get('http://localhost:5000/exercise')
    .then(exercises => this.setState({exercise: exercises.data}))
    .catch(error => console.error(error))

  }



  render(){
    return(
      <div>
        <form onSubmit = {this.submitDeleteExercise}>

          <label htmlFor="deleteExercise">Delete Exercise Component: </label>
          <select id = "deleteExercise" onChange = {this.onSelectChange}>
          {
            this.state.exercise.map((exercise) =>{return (<option key = {exercise._id} value ={exercise._id}> {exercise.name} </option>)})
          }
          </select>
          <input type="submit" value="Delete Exercise"/>
        </form>
      </div>
    )
  }
}
