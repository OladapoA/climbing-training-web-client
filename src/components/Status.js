import React from 'react';

function Status(props) {
    const status = props.status;

    const getStatus = status => {
        if (status === null) {
            return "Not Started"
        } else if (status === false || status === "false") {
            return "In Progress"
        } else if (status === true || status === "true") {
            return "Completed"
        } else {
            return "Unknown"
        }
    };

    return (
        <div className="status">
            {(status !== undefined) && getStatus(status)}
        </div>
    );
}

export default Status;