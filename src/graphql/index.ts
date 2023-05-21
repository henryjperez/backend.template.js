import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";
import { buildContext } from "graphql-passport";
import { JWTPayload } from "@interfaces";
import { checkJwtGql, checkRolesGql } from "@middlewares/auth.handler";

export type GqlContext = ReturnType<typeof buildContext<JWTPayload>>

const typeDefs = `#graphql
	type Query {
		perro: String
		getDog(name: String): String
		perriError: Int
		
		getString: String
		getInt: Int
		getBool: Boolean
		getFloat: Float
		getId: ID

		getNotNull: String!

		getList: [Int]
		getNotNullInstead: [Int]!
		getNotNullInList: [Float!]
		getNotNullsAtAll: [String!]!

		custom(name: String): Custom
	}

	type Custom {
		id: ID
		name: String
	}

	type Mutation {
		addPerro(dog: DePerroDto): Custom
	}
	input DePerroDto {
		name: String
		power: String
	}
`;

const resolvers = {
	Query: {
		perro: async (a, b, c: GqlContext, d) => {
			const user = await checkJwtGql(c);
			console.log(user);
			checkRolesGql(user, "user");
			return "Perrito";
		},
		getDog: (_, args) => `Perri llamado: ${args.name}`,
		perriError: () => {throw new Error("Perrito Error")},
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

export const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [
		ApolloServerPluginLandingPageGraphQLPlayground(),
	],
});