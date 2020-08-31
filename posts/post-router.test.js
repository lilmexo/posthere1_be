const server = require("../api/server.js");
const supertest = require("supertest");
const db = require("../database/dbConfig.js");

let token;

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

describe("POST /", () => {
    it("should return JSON and require auth", () => {
        return supertest(server)
            .post("/api/posts")
            .set("Auth", `${token}`)
            .send({
                title: "Testing Title 1",
                text: "Lets see who the real hero is",
            })
            .expect("content-type", (/json/i))
            .expect("content-type", /json/i)
            .expect(201)

        // return supertest(server).get("/").expect(500);
    })
    // it("should respond with JSON users", function () {
    //     return supertest(server)
    //         .get("/api/users")
    //         .then(res => {
    //             expect(res.type).toMatch(/json/i);
    //         })

    // })

})




// describe("GET /", function () {
//     it("should respond with 401 not authorized ", function () {
//         return supertest(server)
//             .get("/api/posts")
//             .then(res => {
//                 expect(res.status).toBe(401)
//             })
//     })
// })

