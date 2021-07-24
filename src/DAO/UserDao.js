class UserDao{
    constructor(db){
        this.db = db
    }
    //Mostrar todos.
    getAllUser(){
        return new Promise((resolve,reject)=>{
            this.db.all('select * from usuarios',(err,rows)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
                   
            })
        })
    }
    //enviar dados - POST
    setUser(newUser){
        return new Promise((resolve, reject)=>{
            this.db.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?, ?, ?)',
            [newUser.nome, newUser.email, newUser.senha],(erro)=>{ // VALUES('fulano','a@hotmail.com','123')
                if(erro){
                    reject(erro)
                }else{
                    resolve(true)
                }
            })
        })
    }
    //Pegar somente 1
    getUserEmail(email){
        return new Promise((resolve,reject)=>{
            this.db.get(`SELECT * FROM usuarios WHERE email = ?`,email,(err,row)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(row)
                }
            })
        })
    }
    setUserDelete(email){
        return new Promise((resolve,reject)=>{
            this.db.run(`DELETE FROM usuarios WHERE email = ?`,email,(erro)=>{
                if(erro){
                    reject({"Delete":false, erro})
                }else{
                    resolve({"Delete":true, "Email":email})
                }
            })
        })
    }
    setUserPut( envUser,email){
        return new Promise((resolve,reject)=>{
            this.db.run(`UPDATE usuarios SET nome = ?,email = ?, senha = ? WHERE email = ?`,[envUser.nome,envUser.email,envUser.senha, email],
            (erro)=>{
                if(erro){
                    reject({"Dados Alterados":false, erro})
                }else{
                    resolve({"Dados Alterados" : true})
                }
            })
        })
    }
}
module.exports = UserDao