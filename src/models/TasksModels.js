const moment = require('moment')

class Tarefas{
    constructor(titulo,descricao,status,DATACRIACAO,){
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.dataCriacao = moment().format('DD/MM/YYYY');
    }
}

module.exports = Tarefas;