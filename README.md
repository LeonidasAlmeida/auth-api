Instalar dependências

npm i express
npm i nodemon
npm i colors
npm i morgan
npm i dotenv
npm i cors
npm i mongoose
npm i bcryptjs
npm i jsonwebtoken

Arquitetura do Projeto

O projeto segue uma estrutura modular e escalável, separando responsabilidades

 ├── config/         # Configurações (DB, env)
 ├── models/         # Models do MongoDB
 ├── controllers/    # Controllers (camada HTTP)
 ├── services/       # Regras de negócio
 ├── routes/         # Rotas da API
 ├── middlewares/    # Middlewares (auth, erros, roles)
 ├── validations/    # Validação de dados (Joi/Zod)
 ├── utils/          # Funções utilitárias
 ├── app.js          # Configuração do Express
 └── server.js       # Inicialização do servidor

//-----------------------------------------------------------------------------

  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,