const dw_academico_vestibular = require("../database/database.js");

module.exports = app => {

    app.get("/sexo", (req, res) => {
        dw_academico_vestibular
            .select(dw_academico_vestibular.raw("COUNT(*) as value, sexo as name FROM alunos GROUP BY sexo"))
            .then(response => {   
                var total = 0;
                response.forEach(res => {
                    total += parseInt(res.value);
                })            
                res.render("sexo", {
                    error: 0,
                    total_alunos: total,
                    content: {
                        name: "Sexo",
                        options: response
                    }
                });
            }).catch(err => {
                console.log(err);
            })
    });

}