import { Response, } from "express";
import { errorMessages } from "@constants";
import { ErrorResponse } from "@error";

export class ErrorService {
	static handler(err: ErrorResponse | Error, res: Response,) {
		this.logError(err);
		// @ts-ignore
		if (err?.statusCode) {
			// @ts-ignore
			res.statusCode = err?.statusCode;
		}
		if (res.statusCode < 400) {
			res.statusCode = 500;
		}
		const errorInfo = null; //err.name;
		const statusCode = res.statusCode ?? 500;
		const message = this.getErrorMessage(res.statusCode, errorInfo);
		const error = {
			name: err.name,
			message: err.message,
		};
		res.json({ message, error, statusCode, });
	}

	static getErrorMessage(status: number, errInfo?: string) {
		let message = errorMessages[status] ?? errorMessages["500"];
		if (errInfo) {
			message = `${message}: ${errInfo}`;
		}
		return message;
	}

	static logError(err: Error) {
		console.error("An error ocurred ==>>\n", err);
	}
}