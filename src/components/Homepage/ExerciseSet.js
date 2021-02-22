import React from 'react';

function exerciseSet(props){
  const set = props.es;
  const exercise = set.map((i) =>{
    return (
      <div key={i.exerciseName}>
        <h1 >{i.exerciseName}</h1>
        <h1 >{i.numberOfReps}</h1>
        <h1 >{i.totalCalorie}</h1>
      </div>

      )
 });

  return(
    exercise
  )
};

export default exerciseSet;
