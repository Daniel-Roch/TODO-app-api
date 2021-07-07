module.exports = app => {
    app.get('/tarefas', (req, res) => {
        res.send(`Rota ativada com GET e recurso tarefas:
        valores de tarefas devem ser retornados`)
    })
}