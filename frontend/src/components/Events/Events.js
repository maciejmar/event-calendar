import React from 'react';
import Event from './Event/Event';
import './Events.css'

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            events : [
                {
                    id: '212',
                    eventName: 'contest',
                    firstName: 'moi',
                    lastName: 'mua',
                    email: 'm@m',
                    eventDate: '12'
                },
                {
                    id: '21266',
                    eventName: 'rubicon',
                    firstName: 'doi',
                    lastName: 'dua',
                    email: 'd@d',
                    eventDate: '127'
                }
    
            ]
        }
        
    }

    deleteEvent(id) {
        console.log('deleting event ',id);
        const events = [...this.state.events].filter(event => event.id !== id);
        this.setState=({events});
    }

    render() {

        
        return(
            <div>
                <h1>These are my Events</h1>
                {this.state.events.map( event =>  (
                        <Event 
                          key={event.id}
                          eventName={event.eventName}
                          firstName={event.firstName}
                          lastName ={event.lastName}
                          email = {event.email}
                          eventDate = {event.eventDate}  
                          id = {event.id}
                          onDelete={ (id)=> this.deleteEvent(id) }  />
                    ))}
                    </div>
                    );
       }
  }
              

           

            
        
    


export default Events