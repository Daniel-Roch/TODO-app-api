/* const User = require('./models/UserModels')
const Tasks = require('./models/TasksModels')


const testeUser = new User('Joao','blabla@hotmail.com','123456')
const testeTasks = new Tasks('FazerAlgo', 'Começando um teste',true)

console.log(testeUser,testeTasks) */

//Coloquei no server.js:
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