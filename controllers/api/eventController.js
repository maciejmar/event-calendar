
const Event = require('../../db/models/event');



  class EventController { 

   saveEvent(req,res){
    //const newEvent = new Event({
      // eventName: 'Professional meeting',
      // firstName: 'Lord',
      // lastName: 'Valdemort',
      // email: 'lord@val.net',
      // eventDate: Date.now()
      // });
     // newEvent.save().then( ()=> {console.log('Event was recorded') 
    //});
      const eventName = req.body.eventName;
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const email = req.body.email; 

    res.send('Event ', title, ' ', body);
  }

  getAllEvents(req,res){
    res.send("Api works");
  }
  getEvent(req,res){
    res.send("all about the event");
  }
  updateEvent(req,res){
    res.send("update event");
  }
  saveEvent(req,res){
    res.send("save event");
  }
  deleteEvent(req,res){
    res.send("delete event");
  }

  
}
    
module.exports = new EventController(); 