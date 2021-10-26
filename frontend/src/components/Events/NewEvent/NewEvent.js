import React, { useState } from 'react';

function NewEvent(props) {
    const [showForm, setShowForm] = useState('false');
    
    const [eventName, setEventName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

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
    const addEvent = () => {
        const event = {
           eventName: eventName,
           firstName: firstName,
           lastName: lastName,
           email: email 
        }
        props.onAdd(event);
        setEventName('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setShowForm('false');
    }

return (
    showForm ? (
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
    <button onClick={() => addEvent() }> Add the Event</button>
    </div>
    ) : ( 
        <button onClick = { () => setShowForm(true)} >New Event</button>
    )
)
}

export default NewEvent;