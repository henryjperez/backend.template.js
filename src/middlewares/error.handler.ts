import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "@services/error.services";

function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
	ErrorResponse.handler(err, res);
}

export { errorMiddleware }; 