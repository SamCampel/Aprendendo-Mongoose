require('dotenv').config();
const mongoose = require('mongoose');
const articlemodel = require('./article.js');

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wmbwyh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
  .then(() => console.log('Conexão com o MongoDB bem sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

const Article = mongoose.model("Article", articlemodel);

const artigo = new Article({
    title: "Meu primeiro artigo",
    author: "Samuel",
    body: "Esse é o meu primeiro artigo no MongoDB"});
    
    artigo.save()
        .then(() => {
            console.log("Artigo salvo com sucesso!")
        }).catch((err) => {
            console.error("Erro ao salvar o artigo:", err);
        });