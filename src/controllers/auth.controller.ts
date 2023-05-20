import { emailChecker } from "@utils";
import { UserServices } from "@services/user.services";
import { ErrorResponse } from "@error";
// import { User } from "@prisma/client";

const service = new UserServices();

export class AuthController {

	static async login(userIdentifier: string, password) {
		const isEmail = emailChecker(userIdentifier);
		const findBy = isEmail ? "email" : "username";
		const user = await service.find(findBy, userIdentifier);

		if (!user) {
			const err = new ErrorResponse("User not found", 404);
			throw err;
		}

		const isMatchPassword = await service.verifyPassword(password, user.email);
		if (!isMatchPassword) {
			const err = new ErrorResponse("Unauthorized", 401);
			throw err;
		}

		return user;
	}

}