import { Request, Response, NextFunction } from "express";
import { api_key } from "@config"; // tmp
import { ErrorResponse } from "@error";
import { Roles } from "@interfaces";

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

export function checkAdminRole(req: Request, res: Response, next: NextFunction) {
	const { user } = req;
	// @ts-ignore
	if (user?.role === "admin") {
		next();
	} else {
		throw new ErrorResponse("Unauthorized", 401);
	}
}

export function checkRoles(...roles: Roles[]) {
	return function checkAdminRole(req: Request, res: Response, next: NextFunction) {
		const { user } = req;
		// @ts-ignore
		if (roles.includes(user?.role)) {
			next();
		} else {
			throw new ErrorResponse("Unauthorized", 401);
		}
	}
}