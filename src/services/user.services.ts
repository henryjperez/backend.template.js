import { Services } from "@services";
import { verifyPassword } from "@utils";
import { User, PrismaClient } from "@prisma/client";

export interface Registry {
	email: string;
	password: string;
	name: string;
	access_token: string;
}
const prisma = new PrismaClient();
// @ts-ignore
const dummyUser: User = { email: "", id: 123123, name: "" };
type tFindKeys = "email" | "username" | "id";
export class UserServices extends Services {
	// Auth User
	async findById(id: string) {
		// TEST
		const user = dummyUser;
		return user;
	}
	async findByEmail(email: string) {
		// TEST
		const user = await prisma.user.findUnique({ where: { email }});
		return user;
	}
	async findByUsername(username: string) {
		// TEST
		const user = dummyUser;
		return user;
	}

	async find(key: tFindKeys, value: string) {
		switch (key) {
			case "email":
				return await this.findByEmail(value);
			
			case "username":
				return await this.findByUsername(value);

			case "id":
				return await this.findById(value);
		
			default:
				return null;
		}
	}

	async verifyPassword(password: string, hash: string) {
		return await verifyPassword(password, hash);
	}

	async register(user: Registry) {
		return await prisma.user.create({data: user});
	}

}