import React, { useState } from 'react';
import Status from '../components/Status';
import Exercise from './Exercise';
import Button from '@mui/material/Button';

function SessionExercise(props) {
    const { sessionExercise, handleOpen,  } = props

    const [visible, setVisible] = useState(false);

    const handleClick = () => setVisible(!visible);

    const handleAction = (action) => {
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`/api/v1/session-exercises/${sessionExercise.id}/status/?status=${action}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

        // window.location.reload(false);
    };

    const ActionButton = () => {
        const status = sessionExercise.status;
        var buttonText = "";
        if (status === null) {
            buttonText = "Start";
        } else if (status === false) {
            buttonText = "Finish";
        }
        return <Button>{buttonText}</Button>
    }

    return (
        <div className="App">
            <hr />
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
            { sessionExercise.exercise !== null &&
                // <Button>{sessionExercise.status === null ? "Start" : "Finish" }</Button>
                <ActionButton />
            }
            <hr />
        </div>
    );
}

export default SessionExercise;