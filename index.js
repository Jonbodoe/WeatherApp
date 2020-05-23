const express = require('express')
// const request = require('request')
const fetch = require('node-fetch');
const cors = require("cors");
const app = express()
// const async  = require('express-async-await')
const port = process.env.PORT || 5000
const path = require('path')

app.use(express.urlencoded());
app.use(express.json())

app.use(cors());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin",  process.env.PORT || "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.post('/search', function (req, res, next) {
    const query = req.body.query
    fetch(
        `http://api.weatherstack.com/current?access_key=47ec0f905ee514b756eae4cdbca5803d&query=${query}`
    )
    .then(res => res.json())
    .then(data => {
        // const parsedReq = JSON.parse(data);
        const weather = data['current']
        const location = data['location']
        res.send({ weather, location })
        // res.send({ data });
    })
    .catch(err => {
        res.redirect('/error');
    });
});

if ( process.env.NODE_ENV === 'production') {
    app.use(express.static('./Frontend/build'))

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'Frontend', 'build', 'index.html'));
    })
}

app.get('/search', (req, res) => {
    res.send('running')
});




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))