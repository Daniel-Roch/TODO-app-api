module.exports = app =>{
    app.get('/usuario', (req, res) => {
        res.send(`Rota ativada com GET e recurso usuario:
         valores de tarefas devem ser retornados`)
    })
    app.post('/usuario',(req,res)=>{
        console.log(req.body)
        //Quero mostrar uma mensagem de estar ok
        res.send(`Rota POST de usuario ativada: usuário adicionado ao banco de dados`)
    })
}