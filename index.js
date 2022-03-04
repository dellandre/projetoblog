const express = require("express");

const app = express();
const bodyParser = require("body-parser");


///View engine
app.set('view engine', 'ejs');


//Static

app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Rotas

app.get("/",(req,res) => {
    //res.send("Bem Vindo ao meu Site");
    res.render("index");

})

//Porta Que vai rodar o projeto

app.listen(8080,() =>{
    console.log("Servidor Ligado...!");
})