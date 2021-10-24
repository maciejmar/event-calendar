import React from 'react';
import Event from './Event/Event';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.events = [
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

        ];
    }

    render() {

        
        return(
            <div>
                <h1>These are my Events</h1>
                {this.events.map( event =>  (
                        <Event 
                          eventName={event.eventName}
                          firstName={event.firstName}
                          lastName ={event.lastName}
                          email = {event.email}
                          eventDate = {event.eventDate}                              />
                    ))}
                    </div>
                    );
       }
  }
              

           

            
        
    


export default Events