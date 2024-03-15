const { app, server } = require("./server")
const request = require("supertest")

test("test request with valid payload", async function() {
    const testPayload = {
        name: "test name",
        email: "test.email",
        interests: "testing"
    }
    const response = await request(app) // You can put methods on a new line
        .post("/update-profile-data")
        .send(testPayload)

    expect(response.status).toBe(200)
    expect(response.body).toBe("Success")

    server.close() // Stops the app after test
})
