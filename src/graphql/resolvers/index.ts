import { buildContext } from "graphql-passport";

import { checkJwtGql, checkRolesGql } from "@middlewares/auth.handler";
import { JWTPayload, Resolvers } from "@interfaces";
import { validateSchema } from "@dto";

const db = {
	users: [
		{ email: "henryjosiasperezrangel@gmail.com", id: 0, name: "Henry J. Perez" },
		{ email: "me@henryjperez.com", id: 1, name: "Henry J. Perez" },
	]
}
export type GqlContext = ReturnType<typeof buildContext<JWTPayload>>
export const resolvers: Resolvers = {
	Query: {
		user: (obj, args, context, info) => db.users[args.id],
		users: () => db.users,
		test: () => "This is a String to test the GQL Query",
		moreTests: () => ({ name: "Another test", value: 800 }),
	},
	Mutation: {
		setTest: (obj, args, context, info) => "Set test string " + String(args.value),
		setMoreTests: (obj, args, context, info) => "More testing strings " + args?.value,
	},
};
