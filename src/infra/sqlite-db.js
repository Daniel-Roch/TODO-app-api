const sqlite3 = require('sqlite3').verbose();

/* const path = require('path')
const caminhoArq = path.resolve(__dirname, '../', '../', 'database.db') */
const bd = new sqlite3.Database('database.db'); // acabei de testar sem o caminhoArq aqui dentro e foi....


//Processamento de sinal - quando eu reinincio o processo ele fala, e quando eu fecho ele também fala
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;