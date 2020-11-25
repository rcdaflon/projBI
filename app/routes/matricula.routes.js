const dw_academico_vestibular = require("../database/database.js");

module.exports = app => {
    app.get("/matricula", (req, res) => {
        dw_academico_vestibular
            .select(dw_academico_vestibular.raw("COUNT(*) as value, situacao_matricula as name FROM alunos GROUP BY situacao_matricula"))
            .then(response => {   
                var total = 0;
                response.forEach(res => {
                    total += parseInt(res.value);
                })            
                res.render("matricula", {
                    error: 0,
                    total_alunos: total,
                    content: {
                        name: "Situação Matrícula",
                        options: response
                    }
                });
            }).catch(err => {
                console.log(err);
            })
    });
}