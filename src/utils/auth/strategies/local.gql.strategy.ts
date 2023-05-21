import { GraphQLLocalStrategy } from "graphql-passport";
import { AuthController } from "@controllers/auth.controller";

export const gqlLocalStrategy = new GraphQLLocalStrategy(async (username, password, done) => {
	try {
		const user = AuthController.login(String(username), password);
		done(null, user);
	} catch (err) {
		done(err, false);
	}
});