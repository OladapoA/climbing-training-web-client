import React, { useState } from 'react';
import Status from '../components/Status';
import Exercise from './Exercise';
import Button from '@mui/material/Button';

function SessionExercise(props) {
    const { sessionExercise, handleOpen,  } = props

    const [visible, setVisible] = useState(false);

    const handleClick = () => setVisible(!visible)

    return (
        <div className="App">
            <h2>{sessionExercise.name}</h2>
            { sessionExercise.exercise !== null &&
                <Button color={visible ? "error" : "success"} onClick={handleClick}>{ visible ? "Hide" : "Show" } exercise</Button>
            }
            { sessionExercise.exercise !== null && visible &&
                <Exercise exercise={sessionExercise.exercise} />
            }
            { sessionExercise.exercise === null &&
                <Button onClick={() => handleOpen(sessionExercise.id)}>Select Exercise</Button>
            }
            <h4>Duration: {sessionExercise.time}</h4>
            <h4>Status: <Status status={sessionExercise.status} /></h4>
        </div>
    );
}

export default SessionExercise;