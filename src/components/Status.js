import React from 'react';

function Status(props) {
    const status = props.status;

    const getStatus = status => {
        if (status === null) {
            return "Not Started"
        } else if (status === "false") {
            return "In Progress"
        } else if (status === "true") {
            return "Completed"
        }
    };

    return (
        <div className="status">
            {(status !== undefined) && getStatus(status)}
        </div>
    );
}

export default Status;