const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

//get all photos associated with that restaurant
app.get(`/api/restaurants/:wid`, (req, res) => {
  
});

//add photo to a restaurant's entry
app.post(`/api/restaurants/:wid/submit`, (req, res) => {
  
});

//delete a photo from a restaurant's entry
app.delete(`/api/restaurants/photoID=:photoID&date=:date`, (req, res) => {
	
});

//update a partcular photo in the database
app.put(`/api/restaurants/photoID=:photoID&date=:date`, (req, res) => {
	
});

const port = 3003;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});