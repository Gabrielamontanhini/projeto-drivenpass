import supertest from "supertest"
import app from "../../src/app"

const server = supertest(app)


describe("api ", ()=>{
    it("create at /user", async() => {
      const {statusCode} = await server.post("/user").send({
        email: "gato@gato.com",
        password: "1234567891011"
      })
    
      expect(statusCode).toBe(201)
    })


    it("create at /sign-in", async() => {
        const {statusCode} = await server.post("/sign-in").send({
          email: "gato@gato.com",
          password: "1234567891011"
        })
      
        expect(statusCode).toBe(201)
      })
   
})

