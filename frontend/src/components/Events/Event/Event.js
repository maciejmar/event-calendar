import React from 'react';

function Event(props) {
    return(
        <div className = 'event'>
                        <p>{props.eventName}</p>
                            <div className = 'firstName'>{props.firstName}</div>
                            <button>edit</button>
                            <button className = 'delete'>
                                delete it
                            </button>
                        </div>

    );
}

export default Event;