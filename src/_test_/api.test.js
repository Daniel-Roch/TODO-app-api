const request = require('supertest')
const app = require('../app')
const User = require('../models/UserModels')

/* describe('Testando rotas de usuários',()=>{
    it('POST /usuario certo', async ()=>{
        const response = await request(app)
            .post('/usuario')
            .send({
                nome: "Fulano",
                email: "blabla@hotmail.com",
                senha: "*******"
            })
            expect(response.body)
    })
}) */

describe('Test Create User',()=>{
    it('Create User',()=>{
        const newUser = new User("batata","abul@hotmail.com",'1234567')
        expect(newUser).toBeTruthy()
    })
})
