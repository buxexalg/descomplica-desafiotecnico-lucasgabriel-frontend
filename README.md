# Desafio Técnico Descomplica - Lucas Gabriel

## Consulta de Alunos Descomplica

Repositório referente a uma aplicação utilizando React + Typescript que tem como função gerar um template de uma página de consulta de alunos através do GraphQL disponível em [Desafio de Back-end](https://github.com/buxexalg/descomplica-desafiotecnico-lucasgabriel-backend).

Foi feito deploy do projeto, cujo link é: https://descomplica-lg-frontend.herokuapp.com/
## Instruções de Uso

Caso queira rodar o projeto localmente, você precisará ter o Docker instalado na sua máquina.

### Inicialização da aplicação

Após clonar o repositório, utilize o comando `docker-compose up` na pasta raiz da aplicação para inicializar a aplicação. A mesma será servida através da porta 3000.


### Yarn

Caso queira rodar sua aplicação localmente através do YARN, basta utilizar o comando `yarn start`.

## Variáveis de ambiente

### API_URL

A única variável de ambiente implementada no projeto é a `API_URL`. Recomendo que configure o `.env` com a url da API já disponível, [API URL](https://descomplica-lg-backend.herokuapp.com).