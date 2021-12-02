const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${ PORT }`);
});