const dw_academico_vestibular = require("../database/database.js");

module.exports = app => {
    app.get("/etaria", (req, res) => {
        dw_academico_vestibular
            .select(dw_academico_vestibular.raw("(select count(*) as jovem from alunos where data_nascimento between '2001-11-25' and '2020-11-25' ),(select count(*) as adulto from alunos where data_nascimento between '1961-11-25' and '2001-11-24'),(select count(*) as idoso from alunos where data_nascimento between '1900-11-25' and '1961-11-24')"))
            .then(response => {   
                var total = parseInt(response[0].jovem) + parseInt(response[0].adulto) + parseInt(response[0].idoso);
                res.render("etaria", {
                    error: 0,
                    total_alunos: total,
                    content: {
                        name: "Faixa Etária",
                        options: [
                            {
                                name: "Jovem",
                                value: response[0].jovem
                            },
                            {
                                name: "Adulto",
                                value: response[0].adulto
                            },
                            {
                                name: "Idoso",
                                value: response[0].idoso
                            }
                        ]
                    }
                });
            }).catch(err => {
                console.log(err);
            })
    });
}