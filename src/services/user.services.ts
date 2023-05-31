import { Services } from "@services";
import { verifyPassword } from "@utils";
import { User } from "@prisma/client";

const dummyUser: User = { email: "", id: 123123, name: "" };
type tFindKeys = "email" | "username" | "id";
export class UserServices extends Services {
	// Auth User
	async findById(id: string) {
		const user = dummyUser;
		return user;
	}
	async findByEmail(email: string) {
		const user = dummyUser;
		return user;
	}
	async findByUsername(username: string) {
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

}