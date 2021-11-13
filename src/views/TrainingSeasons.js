import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function TrainingSeason() {
    // show a training week view which can be changed to a calendar view, stats?

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/api/v1/training-seasons/');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div className="App">
            <h1>Training Seasons</h1>
            {items.map(item => 
                <h2 key={item.id}>
                    <Link to={`/training-seasons/${item.id}`}>Training Season {item.id}</Link>
                </h2>
            )}
        </div>
    );
}

export default TrainingSeason;