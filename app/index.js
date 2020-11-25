const PORTA = 3500;
const express = require("express");
const app = express();
// View engine
app.set('view engine', 'ejs');
// Static
app.use(express.static('public'));


require("./routes/sexo.routes.js")(app);
require("./routes/etnia.routes.js")(app);
require("./routes/escola.routes.js")(app);
require("./routes/renda.routes.js")(app);
require("./routes/naturalidade.routes.js")(app);
require("./routes/etaria.routes.js")(app);
require("./routes/matricula.routes.js")(app);


app.get("/", (req, res) => {
    res.redirect("sexo");
});


//Rodando a APP
app.listen(PORTA, () => {

    console.log(`APP Rodando: http://localhost:${PORTA}/`);
});