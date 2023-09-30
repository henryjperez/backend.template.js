import { Application, Router } from "express";

import { router as authRouter } from "./auth.route";
import { router as testRouter } from "./test.route";

export function v1Routes(app: Application, router: Router) {
	app.use("/v1", router);

	router.use("/auth", authRouter);
	router.use("/test", testRouter);
}
