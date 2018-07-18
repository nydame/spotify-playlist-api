const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
    db.url,
    (err, database) => {
        if (err) {
            console.error(err);
            return console.log(err);
        }
        appDatabase = database.db('spoplay');
        require('./app/app')(app, appDatabase);

        app.get('/', (req, resp) => {
            resp.send("Hey, I'm a Node.js app");
        });

        app.listen(3000, () => {
            console.log('Server is up on port 3000');
        });
    }
);

// require('./app/app')(app, {});
//
// app.get('/', (req, resp) => {
//     resp.send("Hey, I'm a Node.js app");
// });
//
// app.listen(3000, () => {
//     console.log('Server is up on port 3000');
// });
