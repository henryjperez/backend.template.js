import { emailChecker, signToken } from "@utils";
import { UserServices } from "@services/user.services";
import { ErrorResponse } from "@error";
import { JWTPayload, UserRegistry, UserLogin } from "@interfaces";
import { hashPassword } from "@utils";

const service = new UserServices();

export class AuthController {
	static async login(userIdentifier: UserLogin["username"], password: UserLogin["password"]) {
		const isEmail = emailChecker(userIdentifier);
		const findBy = isEmail ? "email" : "username";
		const user = await service.find(findBy, userIdentifier, true);

		if (!user) {
			const err = new ErrorResponse("User not found", 404);
			throw err;
		}

		const isMatchPassword = await service.verifyPassword(password, user.password);
		if (!isMatchPassword) {
			const err = new ErrorResponse("Unauthorized", 401);
			throw err;
		}

		return user;
	}

	static async register(user: UserRegistry) {
		const hashPass = await hashPassword(user.password);
		const response = await service.register({ ...user, password: hashPass });
		return response;
	}

	// static signToken(user: User) {
	static signToken(user: any) {
		const payload: JWTPayload = {
			sub: user.id,
			role: "user",
		};
		const token = signToken(payload);
		return token;
	}

}