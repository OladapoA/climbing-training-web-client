import React from 'react';
import Week from './Week';

function Season(props) {

    const daySessions = props.season.daySessions
    var weeks = [];
    if (daySessions !== undefined) {
        for (let i = 0; i < daySessions.length; i+=7) {
            var weekDaySessions = daySessions.slice(i, i+7);
            var weekNumber = (i+7)/7;
            weeks.push(
                <Week 
                    key={weekNumber} 
                    weekNumber={weekNumber} 
                    weekDaySessions={weekDaySessions}
                />
            );
        }
    }

    return (
        <div>
            {/* <Week weekNumber={1}/> */}
            {weeks}
        </div>
    );
}

export default Season;