const express = require('express');
const bodyParser = require('body-parser');

const cryptor = require('./middlewares/cryptor')
const cryptorController = require('./controllers/cryptorController')
const validateName = require('./middlewares/validateName')

const app = express();
app.use(bodyParser.json());
const PORT = 3333;

app.get('/encripts/:id', cryptorController.findById)

app.post('/encripts', validateName, cryptor, cryptorController.newEncriptedName);

app.listen(PORT, () => {
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