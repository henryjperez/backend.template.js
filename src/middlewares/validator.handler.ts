import { Request, Response, NextFunction } from "express";
import { ObjectSchema as JoiObjectSchema } from "joi";

export type TReqProperties = "params" | "body" | "query";

export function validatorMiddleware(schema: JoiObjectSchema, property: TReqProperties) {
	return (req: Request, res: Response, next: NextFunction) => {
		const data = req[property];

		const { error } = schema.validate(data, {abortEarly: false});
		if (error) {
			const err = new Error(error.message);
			err.name = error.name;
			res.statusCode = 400;
			next(err);
		}
		next();
	};
}