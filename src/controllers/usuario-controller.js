const UserDao = require('../DAO/UserDao')
const User = require('../models/UserModels')

//peguei o cors - liberr para acesso ser consumido.
const cors = require('cors')

/* //ativando o cors sem parametros para todos usarem:
app.use(cors()) */

module.exports = (app,db) =>{
    //passei para o userBanco o db ^
    let userBanco = new UserDao(db)
//---------------------------------------------
    //Mostrar usuarios.
    app.get('/usuario',cors(),async (req, res) => {
        await userBanco.getAllUser()
        .then((linhas)=>{
            res.json({linhas,"count":linhas.length})
        }).catch(err =>{
            res.status(400).json({err})
        })
    })
//------------------------------------------
    //adiciona
    app.post('/usuario',async (req,res)=>{
        const {nome,email,senha} = req.body
        //Passei para um Try Catch para saber se tem algum erro e vou tratar
        try{
            const newUser = new User(nome,email,senha)
            await userBanco.setUser(newUser)
                .then(ok=>{res.status(201).json({'Dados enviados': ok})})
                .catch(err =>{res.status(400).json({err})
            })
        }catch(erro){
            res.status(400).json(erro.message)
        }
    })
//------------------------------------------------ 
    //Procurando
    app.get('/usuario/:email',(req,res)=>{
        userBanco.getUserEmail(req.params.email)
            .then(row => res.status(200).json(row))
            .catch(err => res.status(400).json(err))
    })
    //Deletando - ele cria um novo array e substituir o existente
    app.delete('/usuario/:email',(req,res)=>{
        userBanco.setUserDelete(req.params.email)
            .then(resul => res.status(200).json(resul))
            .catch(erro => res.status(500).json(erro))
    })
    //alterar - Tudo!
    app.put('/usuario/:email',async (req,res)=>{
    try{
        const {nome, email,senha } = req.body
        const envUser = new User(nome,email,senha)

        const resul = await userBanco.setUserPut(envUser,req.params.email)
        res.status(200).json(resul)
    }catch(erro){
        res.status(400).json(erro.message)
    }
    })
}