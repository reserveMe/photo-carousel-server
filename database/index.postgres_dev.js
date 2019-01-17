const { Pool, Client } = require('pg');
const client = new Client();
const config = require('./config.js');

const pool = new Pool(config);

//await client.connect();


//get all route 
const getRestaurantInfo = (restaurantID, callback) => {
  pool.query(`SELECT * FROM restaurants WHERE ID = ${restaurantID}`)
    .then(results => callback(null, results.rows))
    .catch(err => callback(err));
}

//update restaurant photos route 

//add restaurant(s) route

//remove restaurant(s) route