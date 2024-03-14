const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
}) // define listnening port

app.use(require("body-parser").json()) // needed to parse the JSON to JS first.
app.use('/', express.static(__dirname + '/dist')); // serves the index.html file on load


// GET method
app.get('/get-profile-data', function(req, res) {
    const profileData = {
        userName: "Potička SI TI",
        userEmail: "potat@pot.tozri",
        userInterests: "mlekoc"
    }
    res.send(profileData)
})


// POST method endpoint + RequestHandler function to handle requests and responses (req, res).
app.post('/update-profile-data', function(req, res) {
    const payload = req.body
    console.log("Saved task: ", payload)
    if (Object.keys(payload).length === 0) {
        res.status(400).send("Object is empty") // you can send HTTP header status codes back
    } else {
        res.send("Success")    
    }
    
})
