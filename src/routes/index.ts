import { Application, Router } from "express";
import { router as articlesRouter } from "./articles";

function routerApi(app: Application) {
	const router = Router();
	app.use("/v1", router);

	router.use("/articles", articlesRouter);
}

export { routerApi };