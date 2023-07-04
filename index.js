const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json()) 

// Configuring the database
// const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,useUnifiedTopology: true 
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
   res.send("Hello from prod v1...;)")
});


require('./routes/video_route')(app)
require('./routes/category_routes')(app)
require('./routes/login_route')(app)
require('./routes/playlist_routes')(app)

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port ",port);
});





