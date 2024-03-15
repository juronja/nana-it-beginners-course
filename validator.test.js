const { isInvalidEmail, isEmptyObject } = require("./validator")

// This is a Unit test. Checks if email is valid.
test("valid email", function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interests: "testing"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(false) // Jest test functions and methods
})

// This is a Unit test. Checks if email is not valid.
test("invalid email", function() {
    const testPayload = {
        name: "test name",
        email: "test.email",
        interests: "testing"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(true)
})


test("empty payload", function() {
    const testPayload = {}
    const result = isEmptyObject(testPayload)
    expect(result).toBe(true)
})


test("non-empty payload", function() {
    const testPayload = {
        name: "test name",
        email: "test.email",
        interests: "testing"
    }
    const result = isEmptyObject(testPayload)
    expect(result).toBe(false)
})