const express = require('express')
const app = express()
const port = 3000

// Destructured import of custom functions
const { isEmptyObject, isInvalidEmail } = require('./validator') // ./ tells that the validator is in root not in node_modules

// MongoDB
const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
// Database Name
const dbName = 'company_db'


const server = app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
}) // define listnening port

app.use(require("body-parser").json()) // needed to parse the JSON to JS first.
app.use('/', static(__dirname + '/dist')); // serves the index.html file on load


// GET method
app.get('/get-profile-data', async function(req, res) {
    await client.connect();
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const collection = db.collection('employees')

    // get data from db
    const profileData = await collection.findOne({ id: 1 })
    client.close()

    // IF loop for empty database case
    if (profileData === null) {
        res.send({}) // sends an empty object, so the app does not crash
    } else {
        res.send(profileData)
    }
})


// POST method endpoint + RequestHandler function to handle requests and responses (req, res).
app.post('/update-profile-data', async function(req, res) {
    const payload = req.body
    console.log("Saved task: ", payload)

    if (isEmptyObject(payload) || isInvalidEmail(payload)) {
        res.status(400).send("Object is empty or the email is not a valid format.") // you can send HTTP header status codes back
    } else {
        // Connect to db
        await client.connect()
        console.log('Connected successfully to server')
        const db = client.db(dbName)
        const collection = db.collection('employees')
        
        // Save payload to db
        payload["id"] = 1
        await collection.updateOne( {id: 1}, {$set: payload}, {upsert: true} )
        client.close()

        res.send("Success")    
    }
    
})

module.export = {
    app,
    server
}
