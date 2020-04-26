const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/search', (req, res) => {
    request (
        "http://api.weatherstack.com/current?access_key=47ec0f905ee514b756eae4cdbca5803d&query=Philadelphia",
        function(error, repsonse, body) {
            if(!error && Response.statusCode == 200) {
                res.send(body)
            }
        }
    )
});




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))