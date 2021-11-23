import React from 'react';

function Exercise(props) {
    const exercise = props.exercise

    return (
        <div className="App">
            <hr/>
            <h2>{exercise.name}</h2>
            {exercise.beginner && <span> Beginner </span>}
            {exercise.intermediate && <span> intermediate </span>}
            {exercise.advanced && <span> advanced </span>}
            <h4>Duration: {exercise.time}</h4>
            <h4>{exercise.description}</h4>
            <p>type: {exercise.type} || Subtype: {exercise.subtype}</p>
            <p>Reps and sets info: {exercise.repsSetsInfo}</p>
            <p>Sets: {exercise.sets} || Reps: {exercise.reps}</p>

            <h4>Purpose:</h4>
            <p>{exercise.purpose}</p>
            <hr/>
        </div>
    );
}

export default Exercise;