module.exports = (app,db,User) =>{
    app.get('/usuario', (req, res) => {
        let objTotal = db.users
        if(db.users.length > 0){
            res.json({objTotal,"count" : objTotal.length})
        }else{
            res.json({'users' : 0})
        }
    })
    //adiciona
    app.post('/usuario',(req,res)=>{
        let count = db.users.length + 1
        const {nome,email,senha} = req.body
        db.users.push(new User(nome,email,senha))
        res.status(201).json({'criacao':true, 'qtd': count})
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

    //alterar
    app.put('/usuario/:email',(req,res)=>{
        //Vou verificar se o email existe!
        let filter = db.users.filter(users => req.params.email == users.email)
        if(filter.length){
            db.users = db.users.map(users =>{
                if(req.params.email == users.email){
                    if(req.body.email){
                        res.json({'Alteração' : true})
                        users.email = req.body.email
                        return users
                    }else if(req.body.nome){
                        res.json({'Alteração' : true})
                        users.nome = req.body.nome
                        return users
                    }else if(req.body.senha){
                        res.json({'Alteração' : true})
                        users.senha = req.body.senha
                        return users
                    }
                    res.json({'Alteração' : false})
                    return users
                }else{
                    return users
                }
            })
        }else{
            res.json({email : false})
        }
    })
}