# Facile challenge

## Sobre o projeto

Desafio Técnico e Criativo para processo seletivo, este projeto consiste na implementação de 3 endpoints, um endpoint tipo POST para inserir um novo nome criptografado junto a um id no banco de dados e 2 endpoints do tipo GET para buscar um elemento no banco de dados via um id ou buscar todos elementos.

## Tecnologias Utilizadas

#### :link: [Node.js](https://nodejs.org/en/)
#### :link: [Express](https://expressjs.com/pt-br/)
#### :link: [PostgreSQL](https://www.postgresql.org/)

## Pré-Requisitos

Este projeto Utiliza o banco de dados PostgreSQL, para o perfeito funcionamento é necessário ter o banco de dados em sua máquina. Para instruções sobre a instalação do banco de dados acesse https://www.postgresql.org/download/.

## Instalação

-Clone o repositório através da seguinte chave https: `https://github.com/tuliotrindade/facile-challenge.git`

-Instale as dependências através do `npm install`.

-Para iniciar a aplicação rode o comando `npm start` em seu terminal.


## Endpoints

### POST:<br/> http://localhost:3333/encripts ou https://facile-challenge-1000.herokuapp.com/encripts

Este endpoint recebe um parâmetro "name" no body da requisição, realiza a encriptação do nome recebido, cadastra no banco de dados um novo elemento composto pelo nome encriptado e um id unico, retorna para o usuário um objeto com o nome encriptado e o id.

Requisição exemplo:<br/>
<img src="/images/createRequisition.png" alt="Create Requisition"/>

Retorno:<br/>
<img src="/images/createResponse.png" alt="Create Response"/>

### GET:<br/> http://localhost:3333/encripts/id ou https://facile-challenge-1000.herokuapp.com/encripts/id

Este endpoint recebe um id como parâmetro da requisição, realizara a busca no bando de dados por um elemento com o id correspondente ao da requisição, caso encontre, retornará um objeto contendo o id e o nome encriptado.

Requisição exemplo:<br/>
<img src="/images/findRequest.png" alt="find Requisition"/>

Retorno:<br/>
<img src="/images/findResponse.png" alt="find Response"/>

Retorno em caso de não haver um id correspondente ao da requisição:<br/>
<img src="/images/findNotFound.png" alt="id not found"/>

### GET:<br/> http://localhost:3333/encripts/all ou https://facile-challenge-1000.herokuapp.com/encripts/all

Este endpoint não recebe parâmetros, realiza uma busca no banco de dados buscando todos elementos da tabela, caso encontre retorna um array de objetos com todos elementos cadastrados.

Requisição exemplo:<br/>
<img src="/images/findAllRequest.png" alt="find Requisition"/>

Retorno:<br/>
<img src="/images/findAllResponse.png" alt="find Response"/>

## Contato 

Túlio Trindade - tuliotrindade99@gmail.com
