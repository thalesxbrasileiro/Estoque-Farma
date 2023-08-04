# Cadastro de Remédios em Estoque de Farmácia

Este é um projeto desenvolvido na faculdade utilizando React, Node.js e MongoDB para criar um sistema de cadastro de remédios em estoque de farmácia. O objetivo é permitir que uma farmácia possa gerenciar seu estoque de medicamentos de forma eficiente, realizando operações de cadastro, atualização, remoção e consulta dos medicamentos disponíveis.

### Funcionalidades
- Cadastro de remédios: Permite adicionar novos medicamentos ao estoque informando o nome, quantidade disponível, data de validade e outros detalhes relevantes.

- Atualização de informações: Possibilita alterar os dados dos remédios cadastrados, como quantidade, preço, etc.

- Remoção de remédios: Permite remover medicamentos do estoque que não estão mais disponíveis ou não são comercializados pela farmácia.

- Consulta de medicamentos: Permite pesquisar e visualizar informações detalhadas sobre os medicamentos cadastrados.

### Tecnologias Utilizadas
- React: Biblioteca JavaScript para construção da interface do usuário interativa e responsiva.

- Node.js: Ambiente de tempo de execução JavaScript utilizado para criar o backend do projeto.

- MongoDB: Banco de dados NoSQL utilizado para armazenar os dados dos medicamentos em estoque.

### Pré-requisitos
Antes de executar o projeto, certifique-se de ter instalado as seguintes ferramentas:

- Node.js: https://nodejs.org (v14 ou superior)

- MongoDB: https://www.mongodb.com/try/download/community

- Docker: https://www.docker.com/

### Comandos do Docker a serem utilizados

```
docker build . -t app-mongo-frontend
docker run -it -p 3000:3000 app-mongo-frontend

docker build . -t app-mongo-backend
docker run -it -p 5000:5000 app-mongo-backend 

docker system prune
docker compose up
```
