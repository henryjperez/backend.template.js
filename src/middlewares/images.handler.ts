import multer from 'multer';
import sharp from "sharp";
import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";

const maxSize = 1000000;
const limitFileCount = 20;
const DESTINATION = "uploads/"

const storage = multer.diskStorage({
	destination: DESTINATION,
	filename: async (req, file, callback) => {
		try {
			const uuid = randomUUID();
			const fileExt = file.mimetype.split("/")[1];

			callback(null, `${uuid}.${fileExt}`);
		} catch (err) {
			callback(err, null);
		}
	},
});

const upload = multer({limits: {
	fieldNameSize: 300,
	fileSize: maxSize,
}, storage });

export function imageHandler(fieldName = "file", maxCount = 1) {
	if (maxCount <= 1) {
		return upload.single(fieldName);
	}
	let maxFiles = maxCount > limitFileCount ? limitFileCount : maxCount;
	return upload.array(fieldName, maxFiles);
}
interface HW { height: number; width: number }
export function imageResizer(input: HW | number) {
	return async function (req: Request, res: Response, next: NextFunction) {
		try {
			if (!req.file && !req.files) {
				next();
			}
			const files = req.file ?? req.files;
			const { height, width } = input as HW;
			const resizer = (file: Express.Multer.File) => {
				sharp(file.path)
					.resize({
						width: width ?? input as number,
						height: height ?? input as number,
					})
					.toFile(DESTINATION + "_" + file.filename);
			}

			if (Array.isArray(files)) {
				files.forEach(resizer);
			} else {
				resizer(req.file);
			}

			next();
		} catch (err) {
			next(err);
		}
	}
}

export function imagesMiddleware(fieldName = "file", maxCount = 1, resize: HW | number) {
	const handler = imageHandler(fieldName, maxCount);
	const parser = imageResizer(resize);

	return [handler, parser];
}