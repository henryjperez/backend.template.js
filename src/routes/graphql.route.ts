import { Application } from "express";
import { expressMiddleware } from '@apollo/server/express4';
import passport from "passport";

import { server as gql_server } from "@graphql";
import { isDevMode } from "@config";

export function gqlRouter(app: Application) {
	if (isDevMode) {
		// app.use("/graphql", expressMiddleware(gql_server)); // use this one instead to activate apollo playground
		app.use("/graphql", passport.authenticate("jwt", { session: false }), expressMiddleware(gql_server)); // comment this one and uncomment the one above to use the apollo playground
	}
	if (!isDevMode) {
		app.use("/graphql", passport.authenticate("jwt", { session: false }), expressMiddleware(gql_server));
	}
}