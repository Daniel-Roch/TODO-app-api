const express = require('express')
const app = express()
const port = 3000

app.get('/usuario', (req, res) => {
  res.send(`Rota ativada com GET e recurso usuario:
   valores de tarefas devem ser retornados`)
})

app.get('/tarefas', (req, res) => {
  res.send(`Rota ativada com GET e recurso tarefas:
  valores de tarefas devem ser retornados`)
})

app.listen(port, () => {
  console.log(`Porta que está sendo executada: http://localhost:${port}`)
})