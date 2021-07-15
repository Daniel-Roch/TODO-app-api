module.exports = (app,db,Tarefas) => {
    app.get('/tarefas', (req, res) => {
        let tasksAll = db.tasks
        if(tasksAll.length > 0){
            res.json({tasksAll,"count": tasksAll.length})
        }else{
            res.json({"tasks" : 0})
        }
    })
    //Adicionar
    app.post('/tarefas',(req,res)=>{
        let count = db.tasks.length + 1
        const {titulo,descricao,status} = req.body
        db.tasks.push(new Tarefas(titulo,descricao,status))
        res.status(201).json({'criacao':true, 'qtd': count})
    })
    //Procurando
    app.get('/tarefas/:titulo',(req,res)=>{
        let filter = db.tasks.filter(tasks => req.params.titulo == tasks.titulo)
        if(filter.length){
            res.json({titulo : true, filter})
        }else{
            res.json({titulo : false})
        }
    })
    //Deletando - ele cria um novo array e substituir o existente
    app.delete('/tarefas/:titulo',(req,res)=>{
        db.tasks = db.tasks.filter(tasks => req.params.titulo != tasks.titulo)
        res.json({'delete': true})
    })

     //alterar
     app.put('/tarefas/:titulo',(req,res)=>{
        db.tasks = db.tasks.map(tasks =>{
            if(req.params.titulo == tasks.titulo){
                if(req.body.titulo){
                    res.json({'Alteração' : true})
                    tasks.titulo = req.body.titulo
                    return tasks
                }else if(req.body.descricao){
                    res.json({'Alteração' : true})
                    tasks.descricao = req.body.descricao
                    return tasks
                }else if(req.body.status){
                    res.json({'Alteração' : true})
                    tasks.status = req.body.status
                    return tasks
                }
                res.json({'Alteração' : false})
                return tasks
            }else{
                return tasks
            }
        })
    })
}