import React, {Component} from 'react';
import axios from 'axios';

export default class AddExercise extends Component{

  constructor(props){
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTheme = this.onChangeTheme.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onClickClear = this.onClickClear.bind(this);
    this.submitAddExercise = this.submitAddExercise.bind(this);


    this.state = {
      name:'name',
      description: 'description',
      theme:'theme'
    }
  }

  onChangeName = (e) =>{
    this.setState({
      name: e.target.value
    })
  }

  onChangeDescription = (e) =>{
    this.setState({
      description: e.target.value
    })
  }

  onChangeTheme = (e) =>{
    this.setState({
      theme: e.target.value
    })
  }

  onClickClear = (e) =>{
    e.target.value = '';
  }

  submitAddExercise = (e) =>{
    e.preventDefault();
    const exercise = {
      name: this.state.name,
      description: this.state.description,
      theme: this.state.theme
    }
    axios.post('http://localhost:5000/exercise/add', exercise)
    .then(res => console.log("The exercise has been added" + res))
    .catch(error => console.error(error));

    this.setState({
      name:'',
      description:'',
      theme:''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit = {this.submitAddExercise}>
          <label htmlFor="exerciseName"> Exercise name: </label>
          <input value = {this.state.name} onChange={this.onChangeName} onClick = {this.onClickClear}/>

          <label htmlFor="exerciseName"> Theme: </label>
          <input value = {this.state.theme} onChange={this.onChangeTheme} onClick = {this.onClickClear}/>

          <label htmlFor="exerciseName"> Exercise Description: </label>
          <input value = {this.state.description} onChange={this.onChangeDescription} onClick = {this.onClickClear}/>

          <input type="submit" value="Add exercise"/>
        </form>
      </div>
    )
  }

}
