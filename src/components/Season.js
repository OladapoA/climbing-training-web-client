import React, { useState } from 'react';
import Week from './Week';
import DaySessionModal from './DaySessionModal';
import Button from '@mui/material/Button';

function Season(props) {
    const [open, setOpen] = useState(false);
    const [daySessionId, setdaySessionId] = useState();
    const handleOpen = (id) => {
        setOpen(true);
        setdaySessionId(id);
    }
    const handleClose = () => setOpen(false);
    const daySessions = props.season.daySessions
    var weeks = [];

    console.log(daySessionId)

    if (daySessions !== undefined) {
        for (let i = 0; i < daySessions.length; i+=7) {
            var weekDaySessions = daySessions.slice(i, i+7);
            var weekNumber = (i+7)/7;
            weeks.push(
                <Week 
                    key={weekNumber} 
                    weekNumber={weekNumber} 
                    weekDaySessions={weekDaySessions}
                    handleOpen={handleOpen}
                />
            );
        }
    }

    return (
        <div>
            {/* <Week weekNumber={1}/> */}
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <DaySessionModal 
                handleOpen={handleOpen}
                handleClose={handleClose}
                open={open}
                daySessionId={daySessionId}
            />
            {weeks}
        </div>
    );
}

export default Season;