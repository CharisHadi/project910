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
  console.log(created);
  res.send("created");
  });
});

//API Route to find all events having to do with user
app.get('/api/getEvents', (req, res) => {
  db.Event.findAll().then(eventList => {
    res.send(eventList);
})
})

// API route to add new event to DB
app.post('/api/addEvent', (req, res) => {
  console.log(req.body);
  db.Event.findOrCreate({ where: {
    event: req.body.event, 
    time: req.body.time, 
    location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    userId: req.body.userId
  }})
  .then(([event, created]) => {
    console.log(event.get({
      plain: true
  }))
  console.log(created);
  res.send("created");
  });
});


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