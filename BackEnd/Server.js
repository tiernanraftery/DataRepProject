const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@martinscluster.w5rtkz0.mongodb.net/DB14');

const showSchema = new mongoose.Schema({
  title:String,
  year:String,
  poster:String
});

const showModel = new mongoose.model('myShows',showSchema);

app.get('/api/shows', async (req, res) => {
    const shows = await showModel.find({});
    res.status(200).json({shows})
});

// route fetches a specific movie by its ID
app.get('/api/show/:id', async (req, res) => {
  let shows = await showModel.findById({ _id: req.params.id });
  res.send(show);
});

//This route updates a specific movie’s information
app.put('/api/show/:id', async (req, res) => {
  let show = await showModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(show);
});

app.get('/api/show/:id', async (req ,res)=>{
  const show = await showModel.findById(req.params.id);
  res.json(show);
})

app.post('/api/shows',async (req, res)=>{
    console.log(req.body.title);
    const {title, year, poster} = req.body;

    const newShow = new showModel({title, year, poster});
    await newShow.save();

    res.status(201).json({"message":"Show Added!",Show:newShow});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
