const server = require("../api/server.js");
const supertest = require("supertest");
const db = require("../database/dbConfig.js");

// let token;



it("should respond with api: 'up'", function () {
    return supertest(server)
        .get("/")
        .then(res => {
            expect(res.body.api).toBe("up");
        })

})

describe("GET /", function () {
    it("should respond with 200 OK", function () {
        return supertest(server)
            .get("/api/users")
            .then(res => {
                expect(res.status).toBe(200)
            })

        // return supertest(server).get("/").expect(500);
    })
    it("should respond with JSON users", function () {
        return supertest(server)
            .get("/api/users")
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })

    })

})

beforeAll((done) => {
    supertest(server)
        .post("/api/auth/register")
        .send({
            username: "test theory",
            password: "supertest"
        })
        .end((err, response) => {
            token = response.body.token;
            done();
        })
});


describe("GET /", function () {
    it("should respond with 401 not authorized ", function () {
        return supertest(server)
            .get("/api/posts")
            .then(res => {
                expect(res.status).toBe(401)
            })
    })
})

