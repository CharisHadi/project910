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
app.post('/api/login', (req, res) => {
  console.log(req.body);
  res.send("whazzzuppp");
})

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