import sharp from "sharp";

import { DESTINATION, IMG_PREFIX } from "./constants";

export function emailChecker(email: string) {
	const isEmail = email.includes("@");
	return isEmail;
}

export function resizeImage(file: Express.Multer.File, width: number, height: number) {
	return sharp(file.path)
		.resize({
			width,
			height,
		})
		.toFile(DESTINATION + IMG_PREFIX + file.filename);
}
