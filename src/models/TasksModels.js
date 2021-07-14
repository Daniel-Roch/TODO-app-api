let idTasks = 0
class Tarefas{
    constructor(titulo,descricao,status){
        this.id = idTasks++;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.dataCriacao = new Date();
    }
}

module.exports = Tarefas;