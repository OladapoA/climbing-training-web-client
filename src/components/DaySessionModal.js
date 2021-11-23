import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Status from './Status';
import './Week.css';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function DaySessionModal(props) {
  const { handleClose, open, daySessionId } = props;
  
  useEffect(() => {
    fetchItems();
  }, [daySessionId]);

  const [daySession, setDaySession] = useState([]);

  const fetchItems = async () => {
    // console.log()
    if (daySessionId !== undefined) {
      const data = await fetch(`/api/v1/day-sessions/${daySessionId}`);
      const daySession = await data.json();
      console.log(daySession);
      setDaySession(daySession);
    }
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {daySession.date !== undefined && daySession.date.split(" ")[0]} Sessions 
          </Typography>
          {daySession.sessions !== undefined && 
            daySession.sessions.map(session =>
              <div key={session[0]}>
                <Link to={`/sessions/${session[0]}`}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {session[1]}
                  </Typography>
                </Link>
                <Status status={session[2]} />
              </div>
            )
          }
        </Box>
      </Modal>
    </div>
  );
}

export default DaySessionModal;