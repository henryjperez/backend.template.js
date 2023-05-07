import cors from 'cors';
import { env } from "@config";

export function corsMiddleware() {
	if (env === "DEVELOPMENT") {
		return cors();
	}

	const whiteList = ["https://henryjperez.com", "http:localhost:3000"];
	const options = {
		origin: (origin: string, callBack: any) => {
			if (whiteList.includes(origin)) {
				callBack(null, true);
			} else {
				const err = new Error(`"${origin}" Origin Not Allowed`);
				callBack(err, false);
			}
		}
	};

	return cors(options);
}