const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.postgres_dev.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist`));
//app.use('/restaurants/:id', express.static('client/dist/'));
app.use(cors());

//get all photos associated with that restaurant
app.get(`/api/restaurants/:id/photos`, (req, res) => {
  db.getRestaurantInfo(req.params.restaurantID, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      console.log("route", typeof results[0].phototags[0].photoURL)
      res.status(200);
      res.send(results);
    }
  });
  
});

//add photo to a restaurant's entry
app.post(`/api/restaurants/:id/submit`, (req, res) => {
  
});

//delete a photo from a restaurant's entry
app.delete(`/api/restaurants/photoID=:photoID&date=:date`, (req, res) => {
	
});

//update a partcular photo in the database
app.put(`/api/restaurants/photoID=:photoID&date=:date`, (req, res) => {
	
});

const port = 3003;
app.listen(port, () => {
  console.log(`listening on port ${port}, SDC project`);
});