const express = require('express')
const request = require('request')
const cors = require("cors");
const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded());
app.use(express.json())

app.use(cors());

// const getDate = (offset) => {
//   	let date = new Date(1589101260 * 1000);
//     let utc = date.getTime() + (date.getTimezoneOffset() * 60000);  
//     let newDate = new Date(utc + (3600000*offset));
//     let hours = newDate.getHours()
//     let minutes = newDate.getMinutes()
//     return hours
//       //return this ^^^^
// }

// console.log(getDate(parseInt("9.0")))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
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

// var options = {
//     method: 'POST',
//     url: 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/searchLocations',
//     headers: {
//       'x-rapidapi-host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com',
//       'x-rapidapi-key': '698f0dd1ffmsh6212ffd6aac4608p139b3ejsn4ec7a2f982ee',
//       'content-type': 'application/x-www-form-urlencoded'
//     },
//     form: {query: 'hello'}
//   };

//   request(options, function (error, response, body) {
//       if (error) throw new Error(error);

//       console.log(body);
//   });



app.get('/search', (req, res) => {

    // const parsedReq = JSON.parse(apiURL);
    // const weather = parsedReq['current']
    // const location = parsedReq['location']
    res.send('running')

    // console.log('get')
    // console.log(req.body.query)

    // console.log('Got getttit:');
    // res.header("Access-Control-Allow-Origin", "*");
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next();
    // request (
    //     "http://api.weatherstack.com/current?access_key=47ec0f905ee514b756eae4cdbca5803d&query=Philadelphia",
    //     function(error, response, body) {
    //         if(!error && response.statusCode == 200) {
    //             const parsedReq = JSON.parse(body);
    //             const weather = parsedReq['current']
    //             const location = parsedReq['location']
    //             res.send({weather, location})
    //         } 
    //     }
    // )
});




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))