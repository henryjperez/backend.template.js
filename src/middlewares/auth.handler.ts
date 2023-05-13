import { Request, Response, NextFunction } from "express";
import { api_key } from "@config"; // tmp

export function checkApiKey(req: Request, res: Response, next: NextFunction) {
	const apiKey = req.headers["api"];
	if (apiKey === api_key) {
		next();
	} else {
		res.statusCode = 401;
		const err = new Error("Unauthenticated api key");
		err.name = "Unauthenticated error";
		throw err;
	}
}