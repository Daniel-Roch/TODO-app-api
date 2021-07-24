const express = require('express')
const app = express()

//não preciso mais do body-parser.. bodyParser.json() // middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Chamando a rota: usuario e tarefa.
const rotaUsuario = require('./controllers/usuario-controller')
const rotaTarefa = require('./controllers/tarefa-controller')

//Data Base - SQLite ( Antes era o banco de dados fake (bd.js))
const db = require('./infra/sqlite-db')
rotaUsuario(app,db)
rotaTarefa(app,db)

module.exports = app