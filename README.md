<p align="center">
   <img src=".github/logo.svg"/>
</p>

# Proffy

> Conectando alunos a professores

## :computer: Sobre o Projeto

Proffy foi desenvolvido durante a #nlw2, e é uma aplicação que visa conectar alunos que estão procurando por aulas online a professores que querem dar essas aulas.

<p align="center">
   <img src=".github/proffy.svg"/>
</p>

## :construction_worker: Instalação

**Você vai precisar ter o [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/) instalados no seu computador. Feito isso, você pode clonar o projeto via HTTPS, rodando este comando:** 

```
git clone https://github.com/cunhaedu/proffy.git
```

## :runner: Como usar

### Backend

```
# Entre na pasta server
$ cd server

# Instale as dependências
$ yarn install

# Rode as migrations
$ yarn knex:migrate

# Inicie o servidor
$ yarn dev

# Feito isso, a aplicação deverá rodar na porta 3333
```

### Web

```
# Entre na pasta web
$ cd web

# Instale as dependências
$ yarn install

# Rode 
$ yarn start

# Feito isso a versão web estará rodando na porta 3000
```



### Mobile

```
# Entre na pasta mobile
$ cd mobile

# Instale as dependências
$ yarn install

# Rode 
$ yarn start

# Feito isso, o Expo vai abrir na porta 19000
# Escaneie o código QR através do aplicativo expo no celular ou se preferir use o emulador
```

## :rocket:  Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

* [Node.js](https://nodejs.org/en/download/)

* [React](https://pt-br.reactjs.org/)

* [ReactNative](https://reactnative.dev/)

* [Expo](https://expo.io/)
* [Typescript](https://www.typescriptlang.org/)


## :postbox: Faq


**Questão:** O que fazer caso tenha problemas com as fontes no mobile?

**Resposta:** Tente executar o seguinte comando:

```
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
```

## :rocket: Desafios

No final do evento, a Rocketseat propôs uma série de desafios que poderão ser incrementados ao longo das 
próximas semanas. Você pode conferir a lista dos desafios detalhadamente [nesta anotação do notion](https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970), e acompanhar os desafios já concluídos [aqui](https://github.com/cunhaedu/ecoleta/challenges.md).

## :closed_book: Licença

Released in 2020.

Este projeto está sobre a [Licença MIT](https://github.com/cunhaedu/nlw/tree/master/LICENSE).

Made by [Eduardo Assunção](https://github.com/cunhaedu)
