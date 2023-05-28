import { buildContext } from "graphql-passport";

import { checkJwtGql, checkRolesGql } from "@middlewares/auth.handler";
import { JWTPayload, Resolvers } from "@interfaces";
import { getTestSchema, validateSchema } from "@dto";


export type GqlContext = ReturnType<typeof buildContext<JWTPayload>>
export const resolvers: Resolvers = {
	Query: {
		test: () => "test string",
	},
	Mutation: {
		setTest: () => "Set test string",
	}
};