const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();

//Bodyparsse Middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;
//Connect to MOngoDB
mongoose.connect(db)
    .then(() => {
        console.log("mondoDB connected")
    })
    .catch(err => console.log(err))

// wszystko co z ta sciezka ma isc do api
app.use('/api/items', items)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server started at port: ', port))