# SEMANA FRONT-END INTER 

Em parceria com o banco Inter a Digital Inovation One (DIO) lançou a SEMANA FRONT-END INTER (entre os dias 06/12 a 09/12), onde o objetivo era criar um clone da interface do banco Inter, com a possibilidade de cadastrar usuários, realizar login e fazer e receber pagamentos via PIX. 

## ℹ️ Como executar o backend 

```bash
  # Acessar a pasta dio-inter-clone-backend
  # Rodar npm install ou yarn
  # Rodar o comando para subir a base de dados para o seu docker -> docker-compose up 
  # Rodar yarn start:dev
```

## ℹ️ Como executar o frontend

```bash
  # Acessar a pasta dio-inter-clone-frontend
  # Acessar a pasta do projeto
  # Rodar npm install ou yarn
  # Rodar npm run start ou yarn start
```

## ℹ️ Informações das rotas

  # Rota padrão - http://localhost:3333
  
  A collection para uso no Insomnia está disponível no diretorio raiz do projeto.

  # User
    * /user/signup -> Cria um usuário no banco de dados
    * /user/signin -> Exibe o token para esse usuário ao logar
    * /user/me -> Exige usuário logado passando o token

  # Pix
    * /pix/transactions -> Mostra as transações
    * /pix/request -> Mostra a chave pix para transferência
    * /pix/pay/:id     ==> :id -> É a chave pix para realizar uma transferência

## 🛠 Tecnologias e Ferramentas

As seguintes ferramentas estão sendo usadas na construção da projeto:

- [Node.js][nodejs]
- [Express][express]
- [TypeScript][typescript]
- [Docker][docker]
- [TypeOrm][typeorm]
- [JsonWebToken][jsonwebtoken]
- [Nodemon][nodemon]
- [Crypto-JS][cryptojs]
- [express-async-erros][expresserrors]
- [Vscode][vscode]
- [React][react]
- [Styled-Components][styledcomponents]
- [React-Router-Dom][reactrouter]
- [Vscode][vscode]

## 👨‍💻 Desenvolvedor

Feito por [Lucas Luan de Melo](https://www.linkedin.com/in/lucas-luan-de-melo-pereira-68311473/)

[react]: https://pt-br.reactjs.org/
[styledcomponents]: https://styled-components.com/
[reactrouter]: https://v5.reactrouter.com/web/guides/quick-start
[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/pt-br/
[typescript]: https://www.typescriptlang.org/
[typeorm]: https://typeorm.io/#/
[Joi]: https://joi.dev/api/?v=17.4.2
[docker]: https://docs.docker.com/
[bcrypt]: https://www.npmjs.com/package/bcryptjs
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken
[multer]: https://www.npmjs.com/package/multer
[datefns]: https://date-fns.org/
[ethereal]: https://ethereal.email/
[handlebars]: https://handlebarsjs.com/
[Vscode]: https://code.visualstudio.com/
[nodemon]: https://www.npmjs.com/package/nodemon
[cryptojs]: https://www.npmjs.com/package/crypto-js
[expresserrors]: https://www.npmjs.com/package/express-async-errors
