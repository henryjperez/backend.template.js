import { Services } from "@services";
import { verifyPassword } from "@utils";
import { User, PrismaClient } from "@prisma/client";

export interface Registry {
	email: string;
	password: string;
	name: string;
}
const prisma = new PrismaClient();
// @ts-ignore
const dummyUser: User = { email: "", id: 123123, name: "" };
type tFindKeys = "email" | "username" | "id";
export class UserServices extends Services {
	// Auth User
	async findById(id: number, selectPassword = false) {
		const user = await prisma.user.findUnique({ where: { id } });
		if (!selectPassword) {
			delete user.password;
		}
		return user;
	}
	async findByEmail(email: string, selectPassword = false) {
		const user = await prisma.user.findUnique({ where: { email } });
		if (!selectPassword) {
			delete user.password;
		}
		return user;
	}
	async findByUsername(username: string, selectPassword = false) {
		// TEST
		const user = dummyUser;
		// if (!selectPassword) {
		// 	delete user.password;
		// }
		return user;
	}

	async findMany(skip = 0, limit: number) {
		const users = await prisma.user.findMany({ skip, take: limit});
		users.forEach(user => delete user.password);
		return users;
	}

	async find(key: tFindKeys, value: string | number, selectPassword = false) {
		switch (key) {
			case "email":
				return await this.findByEmail(String(value), selectPassword);
			
			case "username":
				return await this.findByUsername(String(value), selectPassword);

			case "id":
				return await this.findById(Number(value), selectPassword);
		
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