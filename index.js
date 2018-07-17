const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send('Hey, I\'m a Node.js app')
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
