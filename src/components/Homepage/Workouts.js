import React from 'react';
import ExerciseSet from './ExerciseSet';

function workouts(props){
  return (
    <div>
      <div> {props.theme} </div>
      <ExerciseSet es = {props.exerciseSet}/>
    </div>
  )
};

export default workouts;
