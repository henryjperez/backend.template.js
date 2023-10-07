import express from "express";
import { routerApi } from "@routes";
import { gqlRouter } from "@routes/graphql.route";
import { server as gql_server } from "@graphql";

import "@auth";
import { errorMiddleware } from "@middlewares/error.handler";
import { corsMiddleware } from "@middlewares/cors.handler";
import { loggerMiddleware } from "@middlewares/logger.handler";

export async function getApp() {
	const app = express();
	await gql_server.start();

	app.use(loggerMiddleware());
	app.use(express.json());
	// app.use(express.urlencoded({ extended: true }));
	app.use(corsMiddleware());
	
	gqlRouter(app);
	routerApi(app);
	app.use(errorMiddleware);

	return app;
}
