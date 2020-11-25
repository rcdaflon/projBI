const dw_academico_vestibular = require("../database/database.js");

module.exports = app => {


    app.get("/etnia", (req, res) => {
        dw_academico_vestibular
            .select(dw_academico_vestibular.raw("COUNT(*) as value, etnia as name FROM alunos GROUP BY etnia"))
            .then(response => {   
                var total = 0;
                response.forEach(res => {
                    total += parseInt(res.value);
                })            
                res.render("etnia", {
                    error: 0,
                    total_alunos: total,
                    content: {
                        name: "Etnia",
                        options: response
                    }
                });
            }).catch(err => {
                console.log(err);
            })
    });

}