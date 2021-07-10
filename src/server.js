const express = require('express')
const app = express()
//não preciso mais do body-parser.. bodyParser.json()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Se quiser pode comentar esta parte, é para validar os dados que vão entrar!
//Esta parte ele Valida que somente se a pessoa colocar {"nome" : "Daniel"} irá ser válido
/* app.use((req,res,next)=>{
  if(req.body.nome == 'Daniel'){
    console.log('Usuário válido')
    next()
  }else{
    console.log('Dados Inválidos!')
    res.send('Dados Inválidos')
  }
}) */

//Chamando a rota com meu usuario e tarefa..
const rotaUsuario = require('./controllers/usuario-controller')
rotaUsuario(app)

const rotaTarefa = require('./controllers/tarefa-controller')
rotaTarefa(app)

//Abrindo o servidor com a port = 3000
const port = 3020
app.listen(port, () => {
  console.log(`Porta que está sendo executada: http://localhost:${port}`)
})