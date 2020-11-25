const dw_academico_vestibular = require("../database/database.js");

module.exports = app => {
    app.get("/renda", (req, res) => {
        dw_academico_vestibular
            .select(dw_academico_vestibular.raw("COUNT(*) as value, renda_familiar as name FROM alunos GROUP BY renda_familiar"))
            .then(response => {   
                var total = 0;
                response.forEach(res => {
                    total += parseInt(res.value);
                })            
                res.render("renda", {
                    error: 0,
                    total_alunos: total,
                    content: {
                        name: "Renda Familiar",
                        options: response
                    }
                });
            }).catch(err => {
                console.log(err);
            })
    });
}