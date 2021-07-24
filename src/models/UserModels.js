class User{
    constructor(nome,email,senha){
        if(nome.length >= 4){
            this.nome = nome;
        }else{
            throw new Error(`Nome inválida`)
        }
        if(email.indexOf('@') > 0){
            this.email = email
        }else{
            throw new Error(`Email inválida`)
        }
        if(senha.length >= 6){
            this.senha = senha;
        }else{
            throw new Error(`Senha inválida`)
        }
    }
}

module.exports = User