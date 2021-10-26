import React from 'react';
import './Events.css';
import Event from './Event/Event';
import NewEvent from './NewEvent/NewEvent';
import EditEvent from './EditEvent/EditEvent'
import Modal from 'react-modal';
import axios from '../../axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            events : [],
            showEditModal: false,
            editEvent: {}
        }
        
    }

    componentDidMount(){
        this.fetchEvents();
    }

    async fetchEvents(){
       const res = await axios.get('/events');
       const events = res.data;
       console.log('res = ',res);
       this.setState({ events });
    }

    async deleteEvent(id) {
        console.log('deleting event ',id);
        const events = [...this.state.events].filter(event => event._id !== id);
        await axios.delete("/event/"+ id);
        this.setState({ events });

    }

    async addEvent(event){
        const events =[...this.state.events];
        try{
            const res = await axios.post ('/event',event);
            const newEvent = res.data;
            events.push(newEvent);
            this.setState({ events });
        }
        catch(err){
           NotificationManager.error( err.response.data.message ); 
        } 
    }


    async editEvent(event){
        await axios.put ('/event/' + event._id,event);
        const events = [...this.state.events];
        const index = events.findIndex( x  => x._id === event._id);

        if(index >=0) {
            events[index] = event;
            this.setState({ events });
        }
        this.toggleModal();
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
                <NotificationContainer />
                <h1>These are my Events</h1>
                <NewEvent 
                onAdd={ (event) => this.addEvent(event) }/>

                <Modal 
                 isOpen ={this.state.showEditModal}
                 contentLabel = "Edit Event">
                     <EditEvent 
                        eventName={this.state.editEvent.eventName}
                        firstName={this.state.editEvent.firstName}
                        lastName= {this.state.editEvent.lastName}
                        email=    {this.state.editEvent.email}
                        id=       {this.state.editEvent._id}
                        onEdit={ event => this.editEvent(event)} />
                    <button onClick={  ()=> this.toggleModal()} >Cancel</button>
                </Modal>

                {this.state.events.map( event =>  (
                        <Event 
                          key={event._id}
                          eventName={event.eventName}
                          firstName={event.firstName}
                          lastName ={event.lastName}
                          email = {event.email}
                          id = {event._id}
                          onEdit={(event) => this.editEventHandler (event)}
                          onDelete={ (id) => this.deleteEvent(id) }  />
                    ))}
                    </div>
                    );
       }
  }
            


export default Events;