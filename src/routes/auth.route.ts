import { Router, Response, Request, NextFunction } from "express";
import passport from "passport";

const controllers = getHandlers();
const router = Router();

router.route("/login")
	.post(passport.authenticate("local", { session: false }), controllers.login);


function getHandlers() {
	return {
		login: async (req: Request, res: Response, next: NextFunction) => {
			try {
				res.json({
					message: "User Login",
					data: { user: req.user },
				});
			} catch (err) {
				next(err);
			}
		},
	};
}


export { router };