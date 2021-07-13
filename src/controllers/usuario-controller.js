module.exports = (app,db,User) =>{
    app.get('/usuario', (req, res) => {
        res.send(`Rota ativada com GET e recurso usuario:
         valores de tarefas devem ser retornados`)
    })
    app.post('/usuario',(req,res)=>{
        const {nome,email,senha} = req.body
        if(nome.length > 4 && email.includes('@') && senha.length > 4){
            db.users.push(new User(nome,email,senha))
            res.status(201).json(db.users)
        }else{
            res.status(400).send('[Erro] - Dados Inválidos')
        }
        //Quero mostrar uma mensagem de estar ok
        //res.send(`Rota POST de usuario ativada: usuário adicionado ao banco de dados`)
    })
}