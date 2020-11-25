const dw_academico_vestibular = require("../database/database.js");

module.exports = app => {
    app.get("/escola", (req, res) => {
        dw_academico_vestibular
            .select(dw_academico_vestibular.raw("COUNT(*) as value, escola_origem as name FROM alunos GROUP BY escola_origem"))
            .then(response => {   
                var total = 0;
                response.forEach(res => {
                    total += parseInt(res.value);
                })            
                res.render("escola", {
                    error: 0,
                    total_alunos: total,
                    content: {
                        name: "Escola",
                        options: response
                    }
                });
            }).catch(err => {
                console.log(err);
            })
    });
}