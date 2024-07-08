<h1>💻 Website - LABEDIT - BACK END</h1>

<h2>📝 Descrição do Projeto</h2>

Este é o projeto final do meu curso de Desenvolvimento Web FullStack, em que foram aplicados os conhecimentos adquiridos em back-end e front-end. O design do aplicativo segue o conceito Mobile First, priorizando o desenvolvimento para dispositivos móveis e adaptando-o para telas maiores, como tablets ou desktops.

O projeto consiste em criar uma aplicação web, utilizando ReactJS no front-end e uma API no back-end. No front, as funcionalidades devem respeitar o layout definido no Figma e consumir a API criada no back, como requisito de projeto, garantindo uma experiência consistente para o usuário. No back, as requisições devem se conectar com o banco de dados para realizar essas funcionalidades, fazendo verificações e validações, além de testes unitários. O objetivo final é criar uma aplicação FullStack deployável e em funcionamento.

<h3>Repositórios</h3>

Para facilitar o processo de deploy, os códigos foram divididos em repositórios separados para o front-end e back-end. Certifique-se de clonar ambos os repositórios para ter o projeto completo.

<h3>Informação Geral</h3>

Este projeto foi criado utilizando as seguintes tecnologias:

API Rest e Requisições HTTP
Express.Js
TypeScript
Banco de dados SQLite
POO (Programação Orientada a Objetos) e Arquitetura em camadas (business, controller, database, router)
Verificações com Zod e tratamento de erros
Testes unitários em Jest
Deploy da API utilizando Postman
Deploy utilzando Render

Este projeto possui as seguintes camadas de interação:

Business

Para todas as funções CRUD do projeto (criar, ler, editar e deletar) passarem por validações relacionadas aos requisitos de negócios, recebidas através da controller, antes de enviar a informação para a database para ser computada no banco de dados.

Controller

Para fazer o intermédio entre a requisição que chega do front-end e a API do back-end, passando por validações utilizando Zod na chegada de informações dos formulários dos usuários antes de enviá-la para a camada business.

Database

Para receber os dados já validados e com tratamento de erros da requisição da controller e dos requisitos de negócio da business, para então realizar as query SQL para computar esses dados no banco de dados SQLite.

Router

Para relacionar as camadas anteriores e suas funções ao endpoint da requisição que será fornecido à API para consumo.

Dtos

Para criação dos esquemas que padronizam os inputs e outputs de dados utilizando o Zod.

Errors

Para criação de erros customizados não contemplados pelo Zod e utilização na camada business, como erros de persmissão, de requisição, página não encontrada, etc.

Models

Contendo as classes a serem instanciadas em objetos na POO (Programação Orientada a Objetos), bem como suas tipagens em TypeScript (interfaces) e seus construtores (métodos Get e Set).

Services

Funções auxiliares de segurança, como criação e manuseio de token de autenticação, gerador de identificadores únicos automáticos para as instâncias e criptografia de senhas para segurança do usuário no armazenamento do banco de dados.

Tests

Testes unitários modulares realizados com Jest, cobrindo mais de 70% das funções da aplicação criando mocks para os objetos e database, simulando atividade do usuário sem testes de integração.
