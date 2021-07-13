module.exports = (app,db,Tarefas) => {
    app.get('/tarefas', (req, res) => {
        res.send(`Rota ativada com GET e recurso tarefas:
        valores de tarefas devem ser retornados`)
    })
    app.post('/tarefas',(req,res)=>{
        const {titulo,descricao,status} = req.body
        db.tasks.push(new Tarefas(titulo,descricao,status))
        res.status(201).json(db.tasks)

        //Quero mostrar uma mensagem de estar ok
        //res.send(`Rota POST de terefas ativada: tarefas adicionado ao banco de dados`)
    })
}