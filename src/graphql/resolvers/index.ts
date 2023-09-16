import { buildContext } from "graphql-passport";

import { checkJwtGql, checkRolesGql } from "@middlewares/auth.handler";
import { JWTPayload, Resolvers } from "@interfaces";
import { getTestSchema, validateSchema } from "@dto";


export type GqlContext = ReturnType<typeof buildContext<JWTPayload>>
export const resolvers: Resolvers = {
	Query: {
		user: () => ({ email: "developer@360integrations.io", id: 1, name: "Developer Name"}),
		documents: () => ({ date: new Date().toDateString(), id: 1, name: "Top Secret" }),
	},
	Mutation: {
		setTest: () => "Set test string",
	}
};
