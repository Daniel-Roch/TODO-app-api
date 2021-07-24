class Tarefas{
    constructor(titulo,descricao,status){
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.dataCriacao = new Date();
    }
}

module.exports = Tarefas;