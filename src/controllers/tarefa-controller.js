//Import Models-User e Tasks(tarefas)
const Tasks = require('../models/TasksModels')

module.exports = (app,db) => {
    app.get('/tarefas', (req, res) => {
        
    })
    //Procurando
    app.get('/tarefas/:titulo',(req,res)=>{
    })
    //Adicionar
    app.post('/tarefas',(req,res)=>{

    })
    //Deletando - ele cria um novo array e substituir o existente
    app.delete('/tarefas/:titulo',(req,res)=>{

    })
    //alterar
    app.put('/tarefas/:titulo',(req,res)=>{
    })
}