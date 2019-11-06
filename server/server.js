const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

var db = require("./Models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.post('/api/editAccount', (req, res) => {
  console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOO: " , req.body);
  db.User.update(
    { 
    nickname: req.body.nickname,
    location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude
    }, 
    {returning: true, where: {fbid: req.body.userId} }
  )
  res.send("Updated");
}); 

// API route to find or add user to DB
app.post('/api/login', (req, res) => {
  console.log(req.body);
    db.User.findOrCreate({where: {
    name: req.body.name, 
    email: req.body.name, 
    fbid: req.body.fbid
  }})
  .then(([user, created]) => {
    console.log(user.get({
      plain: true
  }))
  res.send(user);
  });
});

//API Route to find all events 
app.get('/api/getEvents', (req, res) => {
  db.Event.findAll().then(eventList => {
    res.send(eventList);
  })
})

//API Route to find all events having to do with user
app.get('/api/getEvents/:id', (req, res) => {

  let arrayOfIds = [];
  //search through associations for events that the user corresponds to
  db.UserEvent.findAll({
    where: {
      userId: req.params.id
    }
  }).then(results => {
    //parse through data to get an array of Ids to search through
     for (var i = 0; i < results.length; i++) {
      arrayOfIds.push(results[i].eventId);
    }
    //grab the events corresponding to user and send them
    db.Event.findAll({
      where: {
        id: arrayOfIds
      }
    }).then(eventList => {
      res.send(eventList);
    })
  });

})

// API route to add new event to DB
app.post('/api/addEvent', (req, res) => {
  console.log(req.body);
  db.Event.create({ //create events
    event: req.body.event, 
    time: req.body.time, 
    location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
  }).then(function(res) {  
    //console.log("id: ",  res.dataValues.id); 
    createAssociation(req.body.userId, res.dataValues.id, true, true)    // This is generate primary key.
  })
  res.send("created");
});

// create association
function createAssociation(userId, eventId, attending, creator) {
    db.UserEvent.findOrCreate({where: {
    userId: userId,
    eventId: eventId, 
    attending: true,
    creator: true
  }})
  .then(([user, created]) => {
    console.log(user.get({
      plain: true
  }))
  console.log(created);
  });

}


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));

});


//endpoints
//app.post('api/login')


//check if user exists if not put in database
//send confirm
db.sequelize.sync({force : false}).then(()=>{
  app.listen(PORT, () => {
      console.log(   "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});