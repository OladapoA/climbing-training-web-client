import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
    // overflow: 'scroll',
};

function ExerciseSelectionModal(props) {
    const { handleSelect, handleClose, open, sessionExerciseId } = props;
    
    useEffect(() => {
        fetchItems();
    }, [sessionExerciseId]);

    const [exercises, setExercises] = useState([]);
    const [filterExercises, setFilterExercises] = useState([]);
    
    const [beginner, setBeginner] = useState(false);
    const [intermediate, setIntermediate] = useState(false);
    const [advanced, setAdvanced] = useState(false);

    const [type, setType] = useState("");

    const filter = (beginner, intermediate, advanced, type) => {
        console.log("filtering now")
        setFilterExercises(exercises)

        if (beginner || intermediate || advanced) {
            setFilterExercises(filterExercises.filter(exercise => {
                if (beginner) {
                    return exercise.beginner;
                } else if (intermediate) {
                    return exercise.intermediate;
                } else if (advanced) {
                    return exercise.advanced;
                } else {
                    return false;
                }
            }))
        }

        if (type !== "") {
            setFilterExercises(filterExercises.filter(exercise => exercise.type === type));
        }
    }

    const handleLevel = (action) => {
        console.log("button pressed")
        console.log("before")
        console.log(beginner, intermediate, advanced)
        switch(action) {
            case "beginner":
                setBeginner(!beginner);
                filter(!beginner, intermediate, advanced, type);
                break;
            case "intermediate":
                setIntermediate(!intermediate);
                filter(beginner, !intermediate, advanced, type);
                break;
            case "advanced":
                setAdvanced(!advanced);
                filter(beginner, intermediate, !advanced, type);
                break;
            default:
                break;
        }
        // filter();
        console.log("after")
        console.log(beginner, intermediate, advanced)
    }

    const fetchItems = async () => {
        const data = await fetch('/api/v1/exercises');
        const exercises = await data.json();
        console.log(exercises);
        setExercises(exercises);
        setFilterExercises(exercises);
    }

    const handleTypeChange = (event) => {
        const type = event.target.value;
        console.log(type);
        setType(type);
        filter(beginner, intermediate, advanced, type);
    }

    const getExercises = () => {
        // setFilterExercises(exercises)
        // return exercises.map(exercise => (
        return filterExercises.map(exercise => (
            <div key={exercise.id}>
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
        ))
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
                    <div>
                        <input type="checkbox" id="beginner" name="beginner" checked={beginner} onChange={() => handleLevel("beginner")} />
                        <label>beginner</label>
                        <input type="checkbox" id="intermediate" name="intermediate" checked={intermediate} onChange={() => handleLevel("intermediate")} />
                        <label>intermediate</label>
                        <input type="checkbox" id="advanced" name="advanced" checked={advanced} onChange={() => handleLevel("advanced")} />
                        <label>advanced</label>
                    </div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            onChange={handleTypeChange}
                        >
                            <MenuItem value={""}>Select</MenuItem>
                            <MenuItem value={"Warm up / cool down"}>Warm up / cool down</MenuItem>
                            <MenuItem value={"Strength"}>Strength</MenuItem>
                            <MenuItem value={"Power"}>Power</MenuItem>
                            <MenuItem value={"Power Endurance"}>Power Endurance</MenuItem>
                            <MenuItem value={"Technique"}>Technique</MenuItem>
                            <MenuItem value={"Core"}>Core</MenuItem>
                            <MenuItem value={"Fitness"}>Fitness</MenuItem>
                        </Select>
                    </FormControl>
                    <div><h1>TESTINGG</h1></div>
                    <div className="absolute">TESTINGG</div>
                    <div className="overflow">
                        what happens to this text
                        {/* {getExercises()} */}
                        {filterExercises.map(exercise => (
                            <div key={exercise.id}>
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
                            </div>))
                        }
                    </div>
                    {/* {getExercises()} */}
                </Box>
            </Modal>
        </div>
    );
}

export default ExerciseSelectionModal;