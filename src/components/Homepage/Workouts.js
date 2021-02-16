import React from 'react';

function ExerciseSet(props){
  return <h1> props.ExerciseName </h1>
}

export default function Workouts(props){
  return (
    <div>
      <div> props.theme </div>
      props.ExerciseSet.map(set => <ExerciseSet ExerciseName = {set}.ExerciseName/>)
    </div>
  )
};
