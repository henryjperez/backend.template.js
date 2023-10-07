# Node.js Backend Template

I always find difficult to set a **Node.js** project from the ground. Specially when you want to use **Typescript** in it.

> There is so much boilerplate to deal with

So, I decided to create this template to help deal with that boilerplate.

## Before you run
Copy the content of the `.env.example`, create a file called `.env` and paste it in there. This are test environment variables, so you can change them to whatever you want.

## How to Run

I'll be using `yarn` for the these code snippets but you can use `npm` if you want.

```sh
yarn install
```

Run the database (make sure to have docker and docker compose installed)

```sh
yarn db
```

```sh
yarn dev
```

Or, to initialize the **database** and the **app server**

```sh
yarn dev:docker
```

## Tech Stack
Here's a list of dependencies that I added to work with it. You don't have to use them all and you can always remove them.

- Typescript
	- Paths aliases
	- Build for production
	- `import` & `export` modules
	- Babel configuration for Jest
- Express.js
	- Logs
		- `morgan`
		- `winston`
	- Nodemon configuration
		- `tsconfig-paths`
		- `tsc-alias`
	- Project Organization
	- Passport.js
- Graphql
	- Apollo server
	- Schemas Code Generator (from `.gql` files to `types.d.ts`)
	- Schemas validation (Joi)
- REST API
	- Auth Protection
	- Middlewares
	- Data Validation (Joi)
	- Routes Organization
- JWT
	- Graphql
	- REST API
- Database
	- Postgres
	- Prisma (ORM)
- Docker
	- Database
	- Admin (Postgres)
	- Node.js app (optional)
	- Docker Compose
- Testing
	- Jest
	- SuperTest
	- e2e testing
	- Typescript configuration
- ESLint (Just a little bit)
- Image handling
	- Multer
	- Sharp


## Graphql
Use the `schema` folder (located at `src/graphql/schemas`) to create **graphql** schemas. Then use this command to generate the **types** for the code intellisense on the `queries` and `mutation` **resolvers**.

```sh
yarn generate:codegen
```

For now it only supports `.gql` files. To modify this use the `codegen.ts` and `copy_files.js` at the root of the project.

## Prisma
```
prisma migrate dev --name name_of_the_migration
```
