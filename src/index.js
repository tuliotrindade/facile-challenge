const express = require('express');
const bodyParser = require('body-parser');
const cryptoRouter = require('./routes/cryptoRoutes');

const app = express();
app.use(bodyParser.json());

const PORT = 3333;

app.use('/encripts', cryptoRouter);

app.listen(PORT || process.env.PORT, () => {
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