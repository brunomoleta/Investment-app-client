# Frontend de um projeto Fullstack

## Descrição

Front-end em React para vínculo de investidores e assessores de investimento.

## Autor

Bruno Moleta Santos

## Versopm

1.0.0

## Tech Stack

<div style="display: flex; align-items: center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1920px-Nextjs-logo.svg.png" height="40" alt="Next.js" style="margin-right: 10px;">
  <img src="https://cdn-icons-png.flaticon.com/512/919/919832.png" height="50" alt="Typescript" style="margin-right: 10px;">
  <img src="https://seeklogo.com/images/Z/zod-logo-B57E684330-seeklogo.com.png" height="50" alt="Zod" style="margin-right: 10px;">
  <img src="https://user-images.githubusercontent.com/43313420/105893220-1bae8780-6013-11eb-87be-eeac845ecc6f.png" height="50" alt="Axios" style="margin-right: 10px;">
</div>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `dev`: Inicia o ambiente de desenvolvimento usando o Vite.
- `build`: Usado para construir o aplicativo para produção.
- `lint`: Executa o ESLint para linting e correção automática.

Execute os scripts utilizando `npm run` ou `yarn run`.

## Dependencies

- @hookform/resolvers: ^3.3.4,
- @radix-ui/react-dialog: ^1.0.5,
- @radix-ui/react-dropdown-menu: ^2.0.6,
- @radix-ui/react-icons: ^1.3.0,
- axios: ^1.6.7,
- babel-plugin-styled-components: ^2.1.4,
- nanoid: ^5.0.5,
- next: 14.1.0,
- react: ^18,
- react-dom: ^18,
- react-feather: ^2.0.10,
- react-hook-form: ^7.50.1,
- react-toastify: ^10.0.4,
- styled-components: ^6.1.8,
- yarn: ^1.22.21,
- zod: ^3.22.4

## Devdependencies

- @swc/plugin-styled-components: ^1.5.116,
- @testing-library/jest-dom: ^6.4.0,
- @testing-library/react: ^14.1.2,
- @types/node: ^20,
- @types/react: ^18,
- @types/react-dom: ^18,
- autoprefixer: ^10.0.1,
- eslint: ^8,
- eslint-config-next: 14.1.0,
- jest: ^29.7.0,
- jest-environment-jsdom: ^29.7.0,
- new-component: ^5.0.2,
- postcss: ^8,
- tailwindcss: ^3.3.0,
- typescript: ^5"

## Installation

1. Clone the frontend repo:

```bash
git clone git@github.com:brunomoleta/Investment-app-client.git
```

2. Clone o backend repo:

```bash
git clone git@github.com:brunomoleta/Investment-app-client.git
```

3. Install the dependencies:

```bash
npm install 

# ou 

yarn install
```

## Estrutura do Projeto

```
investing-app-client/
│
├── node_modules/         Dependencies installed in your local environment.
│
├── public/               Public files.
│
├── lib/                  Includes a file to set up Styled-components.
│
├── src/                  Source code
│   ├── app/              Routes;
│   ├── assets/           Static resources such as images, logos and illustrations;
│   ├── components/       React components;
│   ├── providers/        Componentes de gerenciamento de estado global;
│   ├── schemas/          Data validation context;
│   ├── services/         API communication service, data and helper functions.
│   ├── styled-components/Styled-components components;
│   ├── types/            Component types;
│   └── ...
```

## Endpoints

| `Método`   | `Endpoint`                            | `Responsabilidade`                                   | `Autenticação`        |
|------------|---------------------------------------|------------------------------------------------------|-----------------------|
| POST       | /session/advisor                      | Gera o token de autenticação de assessor             | Acesso universal      |
| POST       | /session/investor                     | Gera o token de autenticação de investidor           | Acesso universal      |
| ---------- | -------------------------------       | --------------------------------------------         | --------------------- |
| POST       | /investor                             | Cadastro de investidor                               | Acesso universal      |
| GET        | /investor                             | Lista todos os investidores                          | Usuário autenticado   |
| GET        | /investor/id                          | Lista investidor por Token                           | Usuário autenticado   |
| GET        | /investor/advisor/:advisor_id         | Filtra investidores por assessor                     | Usuário autenticado   |
| PATCH      | /investor                             | Altera dados do investidor pelo Token                | Usuário autenticado   |
| DELETE     | /investor                             | Exclui investidor pelo Token                         | Usuário autenticado   |
| ---------- | -------------------------------       | --------------------------------------------         | --------------------- |
| POST       | /advisor                              | Cria um assessor                                     | Acesso universal      |
| GET        | /advisor                              | Lista assessores                                     | Acesso universal      |
| GET        | /advisor/id                           | Lista assessor através do token                      | Usuário autenticado   |
| PATCH      | /advisor                              | Atualiza assessor através do token                   | Usuário autenticado   |
| ---------- | -------------------------------       | --------------------------------------------         | --------------------- |
| POST       | /investment_type                      | Cria categoria de investimento                       | Usuário autenticado   |
| GET        | /investment_type/all                  | Lista categorias de investimento com info completa   | Usuário autenticado   |
| GET        | /investment_type                      | Lista categorias de investimento                     | Acesso universal      |
| PATCH      | /investment_type                      | Altera categoria de investimento                     | Usuário autenticado   |


For more detailed information, please check the documentation at [https://investment-fullstack.onrender.com/doc](http://localhost:3000/doc).

Or [http://localhost:3001/doc](http://localhost:3001/doc). Available when the server is running locally.


## Deploy

If you'd like to test it in production, it's available at [https://nome-do-deploy.vercel.app](https://link-do-deploy.vercel.app).

## Contato

It will be a delight to hear advice from you about how to make the project better.
You can find me at: brunomoleta@pm.me

