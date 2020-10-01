const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

//Initialize app
const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => res.send('API is working'));
app.use('/api', routes);


//DB Conexion 
db.conectDB();

module.exports = app;
