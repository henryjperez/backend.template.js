import { buildContext } from "graphql-passport";
import { checkJwtGql, checkRolesGql } from "@middlewares/auth.handler";
import { JWTPayload } from "@interfaces";
import { Resolvers } from "./types";

export type GqlContext = ReturnType<typeof buildContext<JWTPayload>>
export const resolvers: Resolvers = {
	Query: {
		perro: async (a, b, c: GqlContext, d) => {
			const user = await checkJwtGql(c);
			console.log(user);
			checkRolesGql(user, "user");
			return "Perrito";
		},
		getDog: (_, args) => `Perri llamado: ${args.name}`,
		perriError: () => { throw new Error("Perrito Error") },
		gato: () => ({name: "gato"})
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