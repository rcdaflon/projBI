CREATE DATABASE dw_academico_vestibular WITH ENCODING 'utf8';

CREATE TABLE alunos (
    id serial primary key,
    cpf character varying (20),
    sexo character varying (1),
    data_nascimento date,
    estado character varying(255),
    cidade character varying(255),
    situacao_matricula character varying(255),
    escola_origem character varying(195),
    renda_familiar character varying(195),
    etnia character varying(195)
);