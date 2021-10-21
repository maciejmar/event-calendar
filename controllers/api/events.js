
const Event = require('../../db/models/event');

module.exports = {

   saveEvent(req,res){
    const newEvent = new Event({
      eventName: 'Professional meeting',
      firstName: 'Lord',
      lastName: 'Valdemort',
      email: 'lord@val.net',
      eventDate: Date.now()
      });
     newEvent.save().then( ()=> {console.log('Event was recorded')
    
    });

    res.send('The homepage is working good!!');
  }
    
}