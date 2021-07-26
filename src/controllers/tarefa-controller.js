//Import Models-User e Tasks(tarefas)
const Tasks = require('../models/TasksModels')
const TasksDao = require('../DAO/TarefaDao')

//peguei o cors - liberr para acesso ser consumido.
const cors = require('cors')

/* //ativando o cors sem parametros para todos usarem:
app.use(cors()) */
module.exports = (app,db) => {
    //passei para o userBanco o db ^
    const tasksBanco = new TasksDao(db)
    //Procurando Todos
    app.get('/tarefas',cors(), async (req, res) => {
        try{
            const rows = await tasksBanco.tasksAll()
            res.status(200).json(rows)
        }catch(erro){
            res.status(500).json(erro)
        }
    })
    //Procurando um
    app.get('/tarefas/:titulo', async (req,res)=>{
        try{
            const row = await tasksBanco.tasksGet(req.params.titulo)
            res.status(200).json(row)
        }catch(erro){
            res.status(500).json(erro)
        }
    })
    //Adicionar - FAZER
    app.post('/tarefas',(req,res)=>{

    })
    //Deletando - ele cria um novo array e substituir o existente - FAZER
    app.delete('/tarefas/:titulo',(req,res)=>{

    })
    //alterar - FAZER
    app.put('/tarefas/:titulo',(req,res)=>{
    })
}