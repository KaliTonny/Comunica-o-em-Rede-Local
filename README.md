# sistema corporativo em rede local

## integrantes

- etony guedes
- geovanna almeida

## funções

- etony → back-end
- geovanna → front-end

## tecnologias utilizadas

- node.js
- express
- mysql
- html
- javascript
- fetch API

## explicação do sistema

O sistema permite cadastrar solicitações técnicas de colaboradores através de uma interface web. Os dados são enviados para uma API Node.js utilizando fetch API e armazenados no banco de dados MySQL. O sistema funciona em rede local utilizando IPv4.

## como executar

### backend

Instalar dependências:

npm install

Iniciar servidor:

node server.js

### frontend

Abrir o arquivo:

index.html

## banco de dados

Executar no MySQL:

create database sistema_chamados;

use sistema_chamados;

create table chamados (
    id int auto_increment primary key,
    nome varchar(100),
    setor varchar(100),
    solicitacao text
);

## IPv4 utilizado

172.26.88.37

## resultado

Sistema funcionando em rede local com comunicação cliente-servidor.
