import React from 'react';
import Event from './Event/Event';
import './Events.css';
import NewEvent from './NewEvent/NewEvent';
import Modal from 'react-modal';
import EditEvent from './EditEvent/EditEvent'

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
    
            ],
            showEditModal: false,
            editEvent: {}
        }
        
    }

    deleteEvent(id) {
        console.log('deleting event ',id);
        const events = [...this.state.events].filter(event => event.id !== id);
        this.setState({events});
    }

    addEvent(event){
        const events =[...this.state.events];
        events.push(event);
        this.setState({ events });
    }

    editEvent(event){
        const events = [...this.state.events];
        const index = events.findIndex( x  => x.id === event.id);
        if(index >=0) {
            events[index] = event;
        }
        this.setState({ events });
    }

    toggleModal() {
        this.setState({ showEditModal: !this.state.showEditModal})
    }

    editEventHandler(event) {
        this.toggleModal();
        this.setState({ editevent: event });
        
      }

   
    render() {

        
        return(
            <div>
                <h1>These are my Events</h1>
                <NewEvent 
                onAdd={ (event) => this.addEvent(event) }/>
                <Modal 
                 isOpen ={this.state.showEditModal}
                 contentLabel = "Edit Event">
                     <EditEvent 
                        eventName={this.state.editEvent.eventName}
                        firstName={this.state.editEvent.firstName}
                        lastName={this.state.editEvent.lastName}
                        email={this.state.editEvent.email}
                        id={this.state.editEvent.id}
                         onAdd={(event) => this.addEvent(event)} />
                    <button onClick={  ()=> this.toggleModal()} >Cancel</button>
                </Modal>

                {this.state.events.map( event =>  (
                        <Event 
                          key={event.id}
                          eventName={event.eventName}
                          firstName={event.firstName}
                          lastName ={event.lastName}
                          email = {event.email}
                          eventDate = {event.eventDate}  
                          id = {event.id}
                          onEdit={(event) => this.editEventHandler (event)}
                          onDelete={ (id) => this.deleteEvent(id) }  />
                    ))}
                    </div>
                    );
       }
  }
            


export default Events