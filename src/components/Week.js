import React from 'react';
import './Week.css';

function Week(props) {
  const { weekNumber, weekDaySessions, handleOpen } = props;
  const today = new Date();
  today.setHours(0)
  today.setMinutes(0)
  today.setSeconds(0)

  var dayColours = []
  // console.log(weekDaySessions)

  for (let daySession of weekDaySessions) {
    const sessionDate = Date.parse(daySession[1])
    // console.log(typeof Date.parse(daySession[1]))
    if (sessionDate < today.getTime()) {
      // console.log(daySession)
      const status = daySession[2]
      // console.log(status)
      if (status === null) {
        dayColours.push("pastIncomplete")
      } else {
        dayColours.push(status === "true" ? "pastComplete" : "pastStarted")
      }
    }
  }

  // console.log(today.getTime())

  return (
    <div className="week">
        {/* <div className="title"><h2>Week {weekNumber}</h2></div>
        <div className="day future">M</div>
        <div className="day pastIncomplete">T</div>
        <div className="day pastFinished">W</div>
        <div className="day todayStarted">T</div>
        <div className="day todayFinished">F</div>
        <div className="day today">S</div>
        <div className="day future">S</div> */}
        <div className="title"><h2>Week {weekNumber}</h2></div>
        <div onClick={() => handleOpen(weekDaySessions[0][0])} className={`day ${dayColours[0]}`}>M</div>
        <div onClick={() => handleOpen(weekDaySessions[1][0])} className={`day ${dayColours[1]}`}>T</div>
        <div onClick={() => handleOpen(weekDaySessions[2][0])} className={`day ${dayColours[2]}`}>W</div>
        <div onClick={() => handleOpen(weekDaySessions[3][0])} className={`day ${dayColours[3]}`}>T</div>
        <div onClick={() => handleOpen(weekDaySessions[4][0])} className={`day ${dayColours[4]}`}>F</div>
        <div onClick={() => handleOpen(weekDaySessions[5][0])} className={`day ${dayColours[5]}`}>S</div>
        <div onClick={() => handleOpen(weekDaySessions[6][0])} className={`day ${dayColours[6]}`}>S</div>
    </div>
  );
}

export default Week;