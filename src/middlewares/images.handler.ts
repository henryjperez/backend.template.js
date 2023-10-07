import multer from 'multer';

import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";

import { DESTINATION, IMG_PREFIX } from "@constants";
import { resizeImage } from "@utils/helpers";

const maxSize = 1000000;
const limitFileCount = 20;

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
export function imageResizeMiddleware(input: HW | number) {
	return async function (req: Request, res: Response, next: NextFunction) {
		try {
			if (!req.file && !req.files) {
				next();
			}
			const files = req.file ?? req.files;
			const { height, width } = input as HW;
			
			if (Array.isArray(files)) {
				files.forEach(async (file) => {
					const newImg = await resizeImage(file, width ?? input as number, height ?? input as number);
					file.filename = IMG_PREFIX + file.filename;
					file.path = DESTINATION + file.filename;
					file.size = newImg.size;
				});
			} else {
				const newImg = await resizeImage(req.file, width ?? input as number, height ?? input as number);
				req.file.filename = IMG_PREFIX + req.file.filename;
				req.file.path = DESTINATION + req.file.filename;
				req.file.size = newImg.size;
			}

			next();
		} catch (err) {
			next(err);
		}
	}
}

export function imagesMiddleware(fieldName = "file", maxCount = 1) {
	const handler = imageHandler(fieldName, maxCount);
	return handler;
}
