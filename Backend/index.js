const express = require('express')
const request = require('request')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/search', (req, res) => {
    request (
        "http://api.weatherstack.com/current?access_key=47ec0f905ee514b756eae4cdbca5803d&query=Philadelphia",
        function(error, response, body) {
            if(!error && response.statusCode == 200) {
                const parsedReq = JSON.parse(body);
                const results = parsedReq['current']
                res.send({results})
            } 
        }
    )
});




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))