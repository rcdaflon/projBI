
const dw_academico_vestibular = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123',
        database: 'dw_academico_vestibular'
    }
});

qtd = function() {
    dw_academico_vestibular.table('alunos').count('*', {as: 'M'}).where({'sexo': 'M'})
    .then(response => {
        return response[0].M;
    }).catch(err => {
        console.log(err);
        return err;
    });
    response[0].M;
}; 