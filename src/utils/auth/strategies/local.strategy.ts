import { Strategy } from "passport-local";
import { AuthController } from "@controllers/auth.controller";

export const localStrategy = new Strategy(
	{
		usernameField: "username",
		passwordField: "password",
	},
	async (username, password, done) => {
		try {
			const user = await AuthController.login(username, password);
			done(null, user);
		} catch (err) {
			done(err, false);
		}
	}
);