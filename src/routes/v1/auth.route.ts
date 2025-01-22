import { Router, Response, Request, NextFunction } from "express";
import passport from "passport";
import { AuthController } from "@controllers/auth.controller";
import { validatorMiddleware } from "@middlewares/validator.handler";
import { postUserRegisterSchema, postUserLoginSchema } from "@dto";
import { RequestBody, UserLogin, UserRegistry } from "@interfaces";
// import { RequestBody, RequestParams, ParamsDictionary } from "@interfaces";

const controllers = getHandlers();
const router = Router();


router.route("/login")
	.post(validatorMiddleware(postUserLoginSchema, "body"), passport.authenticate("local", { session: false }), controllers.login);

router.route("/register")
	.post(validatorMiddleware(postUserRegisterSchema, "body"), controllers.register);


function getHandlers() {
	return {
		login: async (req: RequestBody<UserLogin>, res: Response, next: NextFunction) => {
			try {
				const { user } = req;

				// @ts-ignore
				delete user.password;
				// @ts-ignore
				const token = AuthController.signToken(user);
				res.json({
					message: "User Login",
					data: { user, token },
				});
			} catch (err) {
				next(err);
			}
		},

		register: async (req: RequestBody<UserRegistry>, res: Response, next: NextFunction) => {
			try {
				const user = req.body;

				const userCreated = await AuthController.register(user);
				const token = AuthController.signToken(userCreated);

				delete userCreated.password;

				const response = {
					message: "User Created",
					data: {
						user: userCreated,
						token,
					}
				};

				res.json(response);
			} catch (err) {
				next(err);
			}
		},
	};
}


export { router };