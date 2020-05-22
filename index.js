const express = require('express')
const request = require('request')
const cors = require("cors");
const app = express()
const port = process.env.PORT || 5000
const path = require('path')

app.use(express.urlencoded());
app.use(express.json())

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin",  process.env.PORT || "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/search', function (req, res, next) {
    const query = req.body.query
    request(
        `http://api.weatherstack.com/current?access_key=47ec0f905ee514b756eae4cdbca5803d&query=${query}`,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const parsedReq = JSON.parse(body);
                const weather = parsedReq['current']
                const location = parsedReq['location']
                res.send({ weather, location })
            }
        }
    )
});

if ( process.env.NODE_ENV === 'production') {
    app.use(express.static('../Frontend/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'Frontend', 'build', 'index.html'));
    })
}

app.get('/search', (req, res) => {
    res.send('running')
});




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))