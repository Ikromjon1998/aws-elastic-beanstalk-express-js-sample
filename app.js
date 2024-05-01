const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello from Ikrom to everyone!'));

// some other route to test with some dinamic content
app.get('/test', (req, res) => {
    // get the query parameter from the request
    let name = req.query.name;
    // send the response with the name
    res.send(`Hello ${name}!`);
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
