import { Services } from "@services";
import { verifyPassword } from "@utils";
import { User } from "@db";
import { UserRegistry } from "@dto";

type tFindKeys = "email" | "username" | "id";
export class UserServices extends Services {
	// Auth User
	async findById(id: number, selectPassword = false) {
		const user = await User.findOneBy({id});
		if (!selectPassword) {
			delete user.password;
		}
		return user;
	}
	async findByEmail(email: string, selectPassword = false) {
		const user = await User.findOneBy({ email });
		if (!selectPassword) {
			delete user.password;
		}
		return user;
	}
	async findByUsername(username: string, selectPassword = false) {
		const user = await User.findOneBy({ username });
		if (!selectPassword) {
			delete user.password;
		}
		return user;
	}

	async findMany(skip = 0, limit: number) {
		const users = await User.find({skip, take: limit, select: {password: false}})
		// users.forEach(user => delete user.password);
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

	async register(user: UserRegistry) {
		const newUser = new User();
		newUser.email = user.email;
		newUser.name = user.name;
		newUser.password = user.password;
		newUser.username = user.username;
		return await newUser.save();
	}

}
