import { Application, Router } from "express";
import { router as testsRouter } from "./tests.route";
import { router as authRouter } from "./auth.route";

function routerApi(app: Application) {
	const router = Router();
	app.use("/v1", router);

	router.use("/tests", testsRouter);
	router.use("/auth", authRouter);
}

export { routerApi };