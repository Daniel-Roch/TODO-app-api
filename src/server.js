const express = require('express')
const app = express()
//não preciso mais do body-parser.. bodyParser.json() // middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Chamando a rota: usuario e tarefa.
const rotaUsuario = require('./controllers/usuario-controller')
const rotaTarefa = require('./controllers/tarefa-controller')

//Import Models-User e Tasks(tarefas)
const User = require('./models/UserModels')
const Tasks = require('./models/TasksModels')

//banco temporario - joguei ele lá na usuario-controller e tarefa-controller
const db = require('./infra/bd')
rotaUsuario(app,db,User)
rotaTarefa(app,db,Tasks)

//Abrindo o servidor com a port = 3000
const port = 3020
app.listen(port, () => {
  console.log(`Porta que está sendo executada: http://localhost:${port}`)
})