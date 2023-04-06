// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];


// Mount routes
app.get('/', function(req, res) {
  	res.send(plants);
});

app.get("/awesome", (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >`);
});

app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    const {firstname, lastname} = req.params
    res.send(`Hello ${firstname.toUpperCase()}!`)
})

app.get('/:indexOfPlantsArray',(req, res) => {
    console.log(req.params)
    if(plants[req.params.indexOfPlantsArray]){
    res.send(plants[req.params.indexOfPlantsArray])
    } else {
        res.send("No plants at index: " + req.params.indexOfPlantsArray);
    }
})


// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});