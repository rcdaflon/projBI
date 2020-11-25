const dw_academico_vestibular = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123',
        database: 'dw_academico_vestibular'
    }
  });
  
  module.exports = dw_academico_vestibular;