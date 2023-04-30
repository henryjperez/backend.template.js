import { Application, Router } from "express";
import { router as articlesRouter } from "./articles";
import { router as testsRouter } from "./tests";

function routerApi(app: Application) {
	const router = Router();
	app.use("/v1", router);

	router.use("/articles", articlesRouter);
	router.use("/tests", testsRouter);
}

export { routerApi };