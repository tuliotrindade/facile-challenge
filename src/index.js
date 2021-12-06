const express = require('express');
const bodyParser = require('body-parser');
const cryptoRouter = require('./routes/cryptoRoutes');
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3333;

app.use('/encripts', cryptoRouter);

app.listen(PORT , () => {
  console.log(`Aplicação ouvindo na porta ${ PORT }`);
});

/* (async () => {
    const database = require('./db');
    const encryptedName = require('./models/encryptedName');
 
    try {
        const result = await database.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})(); */