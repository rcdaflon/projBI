
module.exports = class Aluno {

    id = null;
    cpf = null;
    sexo = null;
    data_nascimento = null;
    estado = null;
    cidade = null;
    situacao_matricula = null;
    escola_origem = null;
    renda_familiar = null;
    etnia = null;

    constructor(aluno) {
        //efetuar validação de atributos aqui!!!
        if(aluno != undefined){
            this.id = aluno.id;
            this.cpf = aluno.cpf;
            this.sexo = aluno.sexo;
            this.data_nascimento = aluno.data_nascimento;
            this.estado = aluno.estado;
            this.cidade = aluno.cidade;
            this.situacao_matricula = aluno.situacao_matricula;
            this.escola_origem = aluno.escola_origem;
            this.renda_familiar = aluno.renda_familiar;
            this.etnia = aluno.etnia;
        }
    }
}