module.exports = function(app, db) {
    app.get('/testing', (req, resp) => {
        resp.send('Hey, this is just a test.');
    });
    app.post('/testing2', (req, resp) => {
        console.log(req.body);
        resp.send('Another test.');
        // See response in Postman at localhost:3000/testing2
    });
};
