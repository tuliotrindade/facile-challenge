require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cryptoRouter = require('./routes/cryptoRoutes');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3333;

app.use('/encripts', cryptoRouter);

app.listen(PORT , () => {
  console.log(`Aplicação ouvindo na porta ${ PORT }`);
});