import { buildContext } from "graphql-passport";
import { checkJwtGql, checkRolesGql } from "@middlewares/auth.handler";
import { JWTPayload } from "@interfaces";

export type GqlContext = ReturnType<typeof buildContext<JWTPayload>>
export const resolvers = {
	Query: {
		perro: async (a, b, c: GqlContext, d) => {
			const user = await checkJwtGql(c);
			console.log(user);
			checkRolesGql(user, "user");
			return "Perrito";
		},
		getDog: (_, args) => `Perri llamado: ${args.name}`,
		perriError: () => { throw new Error("Perrito Error") },
	},
	Mutation: {
		addPerro: (_, { dog }) => {
			return {
				name: dog.name,
				id: dog.name + " " + dog.power,
			}
		}
	}
};