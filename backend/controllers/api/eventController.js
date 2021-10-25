
const Event = require('../../db/models/event');



  class EventController { 

   async saveEvent(req,res){

    const eventName = req.body.eventName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const eventDate = req.body.eventDate;
    const newEvent = new Event({ eventName, firstName, lastName, email, eventDate });
    await newEvent.save();
    res.status(201).send(newEvent);
    }

  async getAllEvents(req,res){
    let doc;
    try {
      doc = await Event.find({});
    }catch (err){
      return res.status(500).json({message: err.message});
    }
      res.status(200).json(doc);
  }
  
  async getEvent(req,res){
    const id = req.params.id;
    const event = await Event.findOne({ _id: id});
    
    res.status(200).json(event);
  }
  async updateEvent(req,res){
    const id = req.params.id;
    const eventName = req.body.eventName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const eventDate = req.body.eventDate;
    const event = await Event.findOne({ _id: id});
    event.eventName = eventName;
    event.firstName = firstName;
    event.lastName = lastName;
    event.email = email;
    event.eventDate = eventDate;
    await event.save();
    res.status(201).json(event);
  }
  
  async deleteEvent(req,res){
    const id = req.params.id;
    await Event.deleteOne({ _id: id});
    res.sendstatus(204);
  }

  
}
    
module.exports = new EventController(); 