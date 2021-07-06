require('dotenv').config();
const Axios = require('axios');
const Express = require('express');
const App = Express();
const Port = 8080;

const bet = process.env.POINTS_BET;
const channel_id = process.env.OWNER_CHANNEL_SE_ID;
const SE_token = process.env.SE_TOKEN;


App.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

App.get('/flip', (req, res) => {
    let random = Math.floor(Math.random() * 2);

    if (random) {
        Axios({
            "method": "put",
            "url": "https://api.streamelements.com/kappa/v2/points/" + channel_id + "/" + req.query.username + "/" + bet,
            "headers": {
                "Accept": "",
                "authorization": "Bearer " + SE_token
            }
        }).then(resAxios => {
            res.json({
                'answer': 'win',
                'user': resAxios.data.username,
                'message': resAxios.data.message,
                'points': resAxios.data.newAmount
            });
            res.end();
        }).catch(err => {
            console.log("Remove comment to get error!");
            //console.log(err);
        });
    } else {
        Axios({
            "method": "put",
            "url": "https://api.streamelements.com/kappa/v2/points/" + channel_id + "/" + req.query.username + "/" + -bet,
            "headers": {
                "Accept": "",
                "authorization": "Bearer " + SE_token
            }
        }).then(resAxios => {
            res.json({
                'answer': 'loose',
                'user': resAxios.data.username,
                'message': resAxios.data.message,
                'points': resAxios.data.newAmount
            });
            res.end();
        }).catch(err => {
            console.log(err);
        });
    }
})

App.listen(Port, () => {
    console.log(`App listening at http://localhost:${Port}`)
})