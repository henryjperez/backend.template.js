import { Application } from "express";
import { expressMiddleware } from '@apollo/server/express4';
import { server as gql_server } from "@graphql";
import { buildContext } from "graphql-passport";

export function gqlRouter(app: Application) {
	app.use("/graphql", expressMiddleware(gql_server, {
		// @ts-ignore
		context: ({ req, res }) => buildContext({req, res}),
	}));
}