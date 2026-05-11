const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "sistema_chamados"
});

app.post("/chamados", (req, res) => {

    const { nome, setor, solicitacao } = req.body;

    const sql = `
        insert into chamados(nome, setor, solicitacao)
        values (?, ?, ?)
    `;

    conexao.query(
        sql,
        [nome, setor, solicitacao],
        () => {
            res.json({
                mensagem: "chamado cadastrado"
            });
        }
    );
});

app.get("/chamados", (req, res) => {

    conexao.query(
        "select * from chamados",
        (erro, resultado) => {
            res.json(resultado);
        }
    );
});

app.listen(3000, "0.0.0.0", () => {
    console.log("servidor rodando");
});