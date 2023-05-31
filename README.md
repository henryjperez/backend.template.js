# Node.js Backend Template

I always find difficult to set a **Node.js** project from the ground. Specially when you want to use **Typescript** in it.

> There is so much boilerplate to deal with

So, I decided to create this template to help deal with that boilerplate.

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