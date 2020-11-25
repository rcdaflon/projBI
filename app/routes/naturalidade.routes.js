const dw_academico_vestibular = require("../database/database.js");

module.exports = app => {
    app.get("/naturalidade", (req, res) => {
        dw_academico_vestibular
            .select(dw_academico_vestibular.raw("COUNT(*) as value, cidade as name1, estado as name2 FROM alunos GROUP BY cidade, estado"))
            .then(response => {   
                console.log(response);
                var total = 0;
                response.forEach(res => {
                    total += parseInt(res.value);
                })            
                res.render("naturalidade", {
                    error: 0,
                    total_alunos: total,
                    content: {
                        name: "Naturalidade",
                        options: response
                    }
                });
            }).catch(err => {
                console.log(err);
            })
    });
}