import React, { useState } from 'react';

export default  function EditEvent(props) {

    const [eventName, setEventName] = useState(props.eventName);
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [email, setEmail] = useState(props.email);

    const changeEventNameHandler = event => {
        const value = event.target.value;
        setEventName(value);
    }
    const changeFirstNameHandler = event => {
        const value = event.target.value;
        setFirstName(value);
    }

    const changeLastNameHandler = event => {
        const value = event.target.value;
        setLastName(value);
    }
    const changeEmailHandler = event => {
        const value = event.target.value;
        setEmail(value);
    }

    const editEvent = () => {
        const event={
            eventName: eventName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            _id: props.id
        }
        props.onEdit(event);
    }

    return (
        <div className = "event">
            <label>EventName</label>
            <input type="text" value={eventName} onChange={changeEventNameHandler}/>
            <br/>

            <label>firstName</label>
            <input type="text" value={firstName} onChange={changeFirstNameHandler}/>
            <br/>

            <label>lastName</label>
            <input type="text" value = {lastName} onChange={changeLastNameHandler}/>
            <br/>

            <label>email</label>
            <input type="text" value={email} onChange={changeEmailHandler}/>
            <button onClick={() => editEvent() }> Edit the Event</button>

        </div>
    )
}