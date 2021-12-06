# Facile challenge

## Sobre o projeto

Desafio Técnico e Criativo para processo seletivo.

### Tecnologias Utilizadas

#### :link: [Node.js](https://nodejs.org/en/)
#### :link: [Express](https://expressjs.com/pt-br/)
#### :link: [PostgreSQL](https://www.postgresql.org/)

## Endpoints

### POST - http://localhost:3333/encripts ou https://facile-challenge-1000.herokuapp.com/encripts

Este endpoint recebe um parametro "name" no body da requisição, realiza a encriptação do nome recebido, cadastra no banco de dados um novo elemento composto pelo nome encriptado e um id unico, retorna para o usuário um objeto com o nome encriptado e o id.

Requisição exemplo:<br/>
<img src="/images/createRequisition.png" alt="Create Requisition"/>

Retorno:<br/>
<img src="/images/createResponse.png" alt="Create Response"/>

### GET - http://localhost:3333/encripts/id ou https://facile-challenge-1000.herokuapp.com/encripts/id

Este endpoint recebe um id como parametro da requisição, realizara a busca no bando de dados por um elemento com o id correspondente ao da requisição, caso encontre, retornará um objeto contendo o id e o nome encriptado.

Requisição exemplo:<br/>
<img src="/images/findRequest.png" alt="find Requisition"/>

Retorno:<br/>
<img src="/images/findResponse.png" alt="find Response"/>

Retorno em caso de não haver um id correspondente ao da requisição:<br/>
<img src="/images/findNotFound.png" alt="id not found"/>

## Contato 

Túlio Trindade - tuliotrindade99@gmail.com
