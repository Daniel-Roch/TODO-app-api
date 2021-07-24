const app = require('./app')

//Abrindo o servidor com a port = 3020
//process.env.Port - facilita o deploy - se não houver nenhum porta 3020.
app.listen(process.env.PORT || 3020, () => {
  console.log(`Porta que está sendo executada: http://localhost:3020`)
})