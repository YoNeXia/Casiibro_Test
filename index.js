/*
* Copyright MIT
* Author: YoNeXia <yohann.neraud@viacesi.fr>
* Projects: https://gitlab.com/YoNeXia or https://github.com/YoNeXia
* Git: https://github.com/YoNeXia/Casiibro_Test
*/

// Call packages installed with npm
require('dotenv').config();
const Axios = require('axios');
const Express = require('express');
const App = Express();

// Declare constant variables
const Port = 8080;
const bet = process.env.POINTS_BET;
const channel_id = process.env.OWNER_CHANNEL_SE_ID;
const SE_token = process.env.SE_TOKEN;

// Load home.html file as default web server page
App.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

// Create /flip link to get back data
App.get('/flip', (req, res) => {
    // Get random value between 0 and 1
    let random = Math.floor(Math.random() * 2);

    // Check random value
    if (random) {
        return requestStreamElementsData(req, res, bet, 'win');
    } else {
        return requestStreamElementsData(req, res, -bet, 'loose');
    }
})

requestStreamElementsData = (request, response, bet_value, flip_result) => {
    // Make call on StreamElements API
    Axios({
        // Method parameter
        "method": "put",
        // URL parameter
        "url": "https://api.streamelements.com/kappa/v2/points/" + channel_id + "/" + request.query.username + "/" + bet_value,
        // Headers parameters
        "headers": {
            "Accept": "",
            "authorization": "Bearer " + SE_token
        }
    })
        // Get results of request
        .then(resAxios => {
            // Setup and answer at html page
            return response.json({
                'answer': flip_result,
                'user': resAxios.data.username,
                'message': resAxios.data.message,
                'points': resAxios.data.newAmount
            });

            // Close answer
            return response.end();
        })
        // Get error in console if exist
        .catch(err => {
            console.log("Remove comment to get error!");
            console.log(err);
        });
}

// Open server port 8080 to listen this server
App.listen(Port, () => {
    console.log(`App listening at http://localhost:${Port}`)
})