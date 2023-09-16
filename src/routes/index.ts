import { Application, Router } from "express";

import { v1Routes } from "./v1";


function routerApi(app: Application) {
	const router = Router();

	v1Routes(app, router);
}

export { routerApi };
