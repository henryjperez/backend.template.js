import { Router, Response, Request, NextFunction } from "express";
import passport from "passport";
import { UserServices } from "@services/user.services";
import { validatorMiddleware } from "@middlewares/validator.handler";
import { postUserRegisterSchema, postUserLoginSchema } from "@dto";
import { RequestBody, UserLogin, UserRegistry } from "@interfaces";
import { ErrorResponse } from "@error";
// import { RequestBody, RequestParams, ParamsDictionary } from "@interfaces";

const controllers = getHandlers();
const router = Router();
const service = new UserServices();


router.route("/ping").get(controllers.ping);
router.route("/error").get(controllers.error);


function getHandlers() {
	return {
		ping: async (req: Request, res: Response, next: NextFunction) => {
			try {
				res.json({
					message: "pong",
				});
			} catch (err) {
				next(err);
			}
		},
		error: async (req: Request, res: Response, next: NextFunction) => {
			try {
				throw new ErrorResponse("This is an error that I created to test the error handler", 501);

				res.json({
					message: "You shouldn't see this message",
				});
			} catch (err) {
				next(err);
			}
		}
	};
}


export { router };