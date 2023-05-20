import { Request, Response, NextFunction } from "express";
import { ErrorService } from "@services/error.services";

function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
	ErrorService.handler(err, res);
}

export { errorMiddleware }; 