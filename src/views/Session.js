import React, { useEffect, useState } from 'react';
import ExerciseSelectionModal from '../components/ExerciseSelectionModal';
import SessionExercise from '../components/SessionExercise';
import Status from '../components/Status';

function Session({ match }) {

    useEffect(() => {
        fetchItems();
    }, []);
    
    const [item, setItem] = useState([]);
    const [visible, setVisible] = useState(false);
    const [sessionExerciseId, setSessionExerciseId] = useState();

    const handleOpen = (id) => {
        console.log(id)
        setSessionExerciseId(id);
        setVisible(true);
    }
    const handleClose = () => setVisible(false)
    const handleSelect = (action) => {
        console.log(action.target.value)
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ title: 'React PUT Request Example' })
        };
        fetch(`/api/v1/session-exercises/${sessionExerciseId}/exercise/${action.target.value}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        
        handleClose(false);
        window.location.reload(false);
    };

    const fetchItems = async () => {
        const data = await fetch(`/api/v1/sessions/${match.params.id}`);
        const item = await data.json();
        console.log(item);
        setItem(item);
    };

    return (
        <div className="App">
            {item.id !== undefined &&
                <div>
                    <h1>Session</h1>
                    <h2>{item.name}</h2>
                    <h4>{item.description}</h4>
                    <h4>Duration: {item.time}</h4>
                    <h4>Status: <Status status={item.status} /></h4>
                    <h1>Session Exercices</h1>
                    {item.sessionExercises !== undefined && 
                        item.sessionExercises.map(sessionExercise => 
                            <SessionExercise 
                                key={sessionExercise.id}
                                sessionExercise={sessionExercise}
                                handleOpen={handleOpen}
                                // setSessionExerciseId={setSessionExerciseId}
                            />
                        )
                    }
                    <ExerciseSelectionModal 
                        handleSelect={handleSelect}
                        handleClose={handleClose}
                        open={visible}
                        sessionExerciseId={sessionExerciseId}
                    />
                </div>
            }
        </div>
    );
}

export default Session;