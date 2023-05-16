import express from "express";
import { expressMiddleware } from '@apollo/server/express4';

import { routerApi } from "@routes";
import { server as gql_server } from "@graphql";
import { errorMiddleware } from "@middlewares/error.handler";
import { corsMiddleware } from "@middlewares/cors.handler";
import { loggerMiddleware } from "@middlewares/logger.handler";

export async function getApp() {
	const app = express();
	await gql_server.start();

	app.use(loggerMiddleware());
	app.use(express.json());
	app.use(corsMiddleware());
	app.use("/graphql", expressMiddleware(gql_server));

	routerApi(app);
	app.use(errorMiddleware);

	return app;
}