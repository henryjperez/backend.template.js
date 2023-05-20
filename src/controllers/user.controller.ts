import { emailChecker } from "@utils";
import { UserServices } from "@services/user.services";
// import { User } from "@prisma/client";

const service = new UserServices();

export class UserController {

	static async login(userIdentifier: string, password, errorCallback?: (status?: number) => void) {
		const isEmail = emailChecker(userIdentifier);
		const findBy = isEmail ? "email" : "username";
		const user = await service.find(findBy, userIdentifier);

		if (!user) {
			errorCallback?.();
			throw new Error("Unauthorized");
		}

		const isMatchPassword = await service.verifyPassword(password, user.email);
		if (!isMatchPassword) {
			errorCallback?.();
			throw new Error("Unauthorized");
		}

		return user;
	}

}