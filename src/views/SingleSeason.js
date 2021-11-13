import React, { useEffect, useState } from 'react';
// import Week from '../components/Week';
import Season from '../components/Season'
import './SingleSeason.css';

function SingleSeason({ match }) {

    useEffect(() => {
        fetchItems();
    }, []);
    
    const [item, setItem] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(`/api/v1/training-seasons/${match.params.id}`);
        const item = await data.json();
        console.log(item);
        setItem(item);
    }

    return (
        <div className="App">
            <h1>Single Season</h1>
            {/* <span className="weekHeader">Week</span>
            <span className="weekHeader">M</span>
            <span className="weekHeader">T</span>
            <span className="weekHeader">W</span>
            <span className="weekHeader">T</span>
            <span className="weekHeader">F</span>
            <span className="weekHeader">S</span>
            <span className="weekHeader">S</span> */}
            {/* <Week weekNumber={1}/>
            <Week weekNumber={2}/> */}
            <Season season={item}/>
        </div>
    );
}

export default SingleSeason;