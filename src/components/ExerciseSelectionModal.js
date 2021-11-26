import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Status from './Status';
import './ExerciseSelectionModal.css';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
};

function ExerciseSelectionModal(props) {
    const { handleSelect, handleClose, open, sessionExerciseId } = props;
    
    useEffect(() => {
        fetchItems();
    }, [sessionExerciseId]);

    const [exercises, setExercises] = useState([]);
    const [filterExercises, setFilterExercises] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/api/v1/exercises');
        const exercises = await data.json();
        console.log(exercises);
        setExercises(exercises);
    }

    const getExercises = () => {
        // setFilterExercises(exercises)
        return exercises.map(exercise => (
            <div key={exercise.id} className="App">
                <hr/>
                <h2 className="test">{exercise.name}</h2>
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
        ))
        // let exercise = exercises[0]
        // return <div key={exercise.id} className="App">
        //     <hr/>
        //     <h2>{exercise.name}</h2>
        //     {exercise.beginner && <span> Beginner </span>}
        //     {exercise.intermediate && <span> intermediate </span>}
        //     {exercise.advanced && <span> advanced </span>}
        //     <h4>Duration: {exercise.time}</h4>
        //     <h4>{exercise.description}</h4>
        //     <p>type: {exercise.type} || Subtype: {exercise.subtype}</p>
        //     <p>Reps and sets info: {exercise.repsSetsInfo}</p>
        //     <p>Sets: {exercise.sets} || Reps: {exercise.reps}</p>

        //     <h4>Purpose:</h4>
        //     <p>{exercise.purpose}</p>
        //     <hr/>
        // </div>
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        Select Exercise 
                    </Typography> */}
                    {/* <div className="test">{getExercises()}</div> */}
                    <div className="fixed"><h1>TESTINGG</h1></div>
                    {/* <div className="absolute">TESTINGG</div>
                    <div className="overflow">
                        what happens to this text
                        {getExercises()}
                    </div> */}
                    {getExercises()}
                </Box>
            </Modal>
        </div>
    );
}

export default ExerciseSelectionModal;