import express from "express";
import { routerApi } from "@routes";
import { errorMiddleware } from "@middlewares/error.handler";
import { corsMiddleware } from "@middlewares/cors.handler";
import { loggerMiddleware } from "@middlewares/logger.handler";

export function getApp() {
	const app = express();

	app.use(loggerMiddleware());
	app.use(express.json());
	app.use(corsMiddleware());

	routerApi(app);
	app.use(errorMiddleware);

	return app;
}