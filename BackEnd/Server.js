const express = require('express');
const app = express();
const port = 4000;

// CORS middleware to allow cross-origin requests from the frontend
const cors = require('cors');
app.use(cors());


// Middleware to set headers for CORS and other allowed HTTP methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware for parsing incoming request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));// For parsing form data
app.use(bodyParser.json());



// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.pbw30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


//define the schema for myshows
const showSchema = new mongoose.Schema({
  title:String,
  year:String,
  poster:String,
  desc:String
});

// Create a model
const showModel = new mongoose.model('myShows',showSchema);

app.get('/api/shows', async (req, res) => {
    const shows = await showModel.find({});
    res.status(200).json({shows})
});

// route fetches a specific movie by its ID
app.get('/api/show/:id', async (req, res) => {
  let shows = await showModel.findById({ _id: req.params.id });
  res.send(shows);
});

//This route updates a specific movie’s information
app.put('/api/show/:id', async (req, res) => {
  let show = await showModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(show);
});

app.delete('/api/show/:id', async(req, res)=>{
    const show = await showModel.findByIdAndDelete(req.params.id);
    res.send(show);
  })

app.get('/api/show/:id', async (req ,res)=>{
  const show = await showModel.findById(req.params.id);
  res.json(show);
})


// Route to add a new show to the database
app.post('/api/shows',async (req, res)=>{
    console.log(req.body.title);
    const {title, year, poster,desc} = req.body;

    const newShow = new showModel({title, year, poster,desc});
    await newShow.save();

    res.status(201).json({"message":"Show Added!",Show:newShow});
})

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
