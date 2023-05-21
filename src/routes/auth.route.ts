import { Router, Response, Request, NextFunction } from "express";
import passport from "passport";
import { AuthController } from "@controllers/auth.controller";

const controllers = getHandlers();
const router = Router();

router.route("/login")
	.post(passport.authenticate("local", { session: false }), controllers.login);


function getHandlers() {
	return {
		login: async (req: Request, res: Response, next: NextFunction) => {
			try {
				const { user } = req;
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
	};
}


export { router };