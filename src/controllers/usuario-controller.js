module.exports = (app,db,User) =>{
    app.get('/usuario', (req, res, next) => {
        let objTotal = db.users
        if(db.users.length > 0){
            res.json({objTotal,"count" : objTotal.length})
            next()
        }else{
            res.json({'usuarios' : 0})
        }
    })
    app.post('/usuario',(req,res)=>{
        let count = db.users.length + 1
        const {nome,email,senha} = req.body
        db.users.push(new User(nome,email,senha))
        res.status(201).json({'criacao':true, 'qtd': count})
        //Quero mostrar uma mensagem de estar ok
        //res.send(`Rota POST de usuario ativada: usuário adicionado ao banco de dados`)
    })
    //Procurando
    app.get('/usuario/:email',(req,res)=>{
        let filter = db.users.filter(users => req.params.email == users.email)
        if(filter.length){
            res.json({email : true, filter})
        }else{
            res.json({email : false})
        }
    })
    //Deletando - ele cria um novo array e substituir o existente
    app.delete('/usuario/:email',(req,res)=>{
        db.users = db.users.filter(users => req.params.email != users.email)
        res.json({'delete': true})
    })
}