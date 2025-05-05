require('dotenv').config();
const mongoose = require('mongoose');
const articlemodel = require('./article.js');

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wmbwyh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
  .then(() => console.log('Conexão com o MongoDB bem sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

const Article = mongoose.model("Article", articlemodel);

/* Busca todos os artigos
Article.find({})
    .then((articles) => {
        console.log("Artigos encontrados:", articles);
    })
    .catch((err) => {
        console.error("Erro ao encontrar artigos:", err);
    });
*/

/*Busca um artigo específico pelo ID
Article.find({'author':'Samuel'})
    .then((article) => {
        console.log("Artigos encontrados:", article);
    })
    .catch((err) => {
        console.error("Erro ao encontrar artigos:", err);
    });
*/

/*
// Exemplo de como criar um novo artigo

const artigo = new Article({
    title: "Qualquer coisa",
    author: "Samuel",
    body: "Qualquer coisa",
    special: true,
    resume: {
        content: "Qualquer coisa",
        author: "Samuel"
    }
});
    
    artigo.save()
        .then(() => {
            console.log("Artigo salvo com sucesso!")
        }).catch((err) => {
            console.error("Erro ao salvar o artigo:", err);
        });
*/

/*Deletar um dado
Article.findByIdAndDelete("68190944592d6e51776bb239").then(() => {
    console.log("Artigo deletado com sucesso!");
}).catch((err) => {
    console.error("Erro ao deletar o artigo:", err);
});*/

/*Atualizar um dado*/
Article.findByIdAndUpdate("68190b00560b1cc87cb0c8b9", { title: "Qualquer coisa Novo título", body: "Atualizando o body" })
    .then(() => {
        console.log("Artigo atualizado");
    }).catch((err) => {
        console.error("Erro ao atualizar o artigo:", err);
    });