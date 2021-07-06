require('dotenv').config();
const Axios = require('axios');
const Express = require('express');
const App = Express();
const Port = 8080;


App.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

App.listen(Port, () => {
    console.log(`App listening at http://localhost:${Port}`)
})