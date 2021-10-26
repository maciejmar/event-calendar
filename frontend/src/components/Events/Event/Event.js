import React, { useState } from 'react';

function Event(props) {
    const [showDesc, setShowDesc] = useState(false);
    const toggleDesc = () => {
        setShowDesc(!showDesc);
    }

    const editHandler = () => {
        props.onEdit({
            eventName:props.eventName,
             firstName: props.firstName, 
             _id:props.id
        })
    }

    return(
        <div className = "event">
                        <p onClick ={toggleDesc}>{props.eventName}</p>
                        { showDesc && (
                            <div className = "firstName">{props.firstName}</div>
                            )}
                            <button onClick={ editHandler  }>edit</button>
                            <button className = "delete" onClick={() => props.onDelete(props.id)}>delete it</button>
                        </div>

    );
}

export default Event;