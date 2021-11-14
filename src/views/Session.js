import React, { useEffect, useState } from 'react';
import './SingleSeason.css';

function Session({ match }) {

    useEffect(() => {
        fetchItems();
    }, []);
    
    const [item, setItem] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(`/api/v1/sessions/${match.params.id}`);
        const item = await data.json();
        console.log(item);
        setItem(item);
    }

    return (
        <div className="App">
            <h1>Session</h1>
        </div>
    );
}

export default Session;