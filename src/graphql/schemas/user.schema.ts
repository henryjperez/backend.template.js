import { ObjectType, Field } from "type-graphql";
import { User as UserInterface } from "@prisma/client";

@ObjectType()
export class User implements UserInterface {
	@Field()
	email: string;

	@Field()
	id: number;

	@Field()
	name: string;
}