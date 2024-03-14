const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})

app.use(require("body-parser").json()) // needed to parse the JSON to JS first.
app.use('/', express.static(__dirname + '/'));

// POST method endpoint + RequestHandler function to handle requests and responses (req, res).
app.post('/save-task', function(req, res) {
    const payload = req.body
    console.log("Saved task: ", payload.task)
    res.send({savedTask: payload.task})
})

// GET method
// app.get('/', function (req, res) { res.send('Hello World') });
app.get('/get-task', function(req, res) {
    const someTasks = [
        "Write code",
        "be happy",
        "yolo"
    ]
    res.send({tasks: someTasks})
})
