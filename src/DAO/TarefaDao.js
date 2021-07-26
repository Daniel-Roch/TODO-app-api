class TasksDao{
    constructor(db){
        this.db = db
    }
    tasksAll(){
        return new Promise((resolve,reject)=>{
            this.db.all(`SELECT * FROM Tarefas`,(erro,rows)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    tasksGet(titulo){
        return new Promise((resolve,reject)=>{
            this.db.get(`SELECT * FROM tarefas where titulo = ?`,titulo,(erro,row)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(row)
                }
            })
        })
    }
    tasksPost(){
        
    }
}
module.exports = TasksDao