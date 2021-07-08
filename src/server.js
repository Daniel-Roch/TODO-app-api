const express = require('express')
const app = express()


//Chamando a rota com meu usuario e tarefa..
const rotaUsuario = require('./controllers/usuario-controller')
rotaUsuario(app)

const rotaTarefa = require('./controllers/tarefa-controller')
rotaTarefa(app)

//Abrindo o servidor com a port = 3000
const port = 3000
app.listen(port, () => {
  console.log(`Porta que está sendo executada: http://localhost:${port}`)
})