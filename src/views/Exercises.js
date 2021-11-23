import React, { useEffect, useState } from 'react';
import '../App.css';
import Exercise from '../components/Exercise';

function Exercises() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [exercises, setExercises] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('/api/v1/exercises');
    const exercises = await data.json();
    console.log(exercises);
    setExercises(exercises);
  }

  const allExercises = exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}/>);

  return (
    <div className="App">
      <h1>Exercises</h1>
      {/* {exercises.map(exercise => <Exercise exercise={exercise}/>)} */}
      {allExercises}
    </div>
  );
}

export default Exercises;