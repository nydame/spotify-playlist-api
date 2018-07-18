const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/app')(app, {});

app.get('/', (req, resp) => {
    resp.send("Hey, I'm a Node.js app");
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
