require('dotenv').config();

const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wmbwyh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
  .then(() => console.log('Conexão com o MongoDB bem sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

