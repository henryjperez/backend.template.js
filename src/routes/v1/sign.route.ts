import { Router, Response, Request, NextFunction } from "express";
import passport from "passport";
import fs from "fs";
import path from 'path';

import { SignController } from "@/src/controllers/sign.controller";
import { uploadToS3 } from "@utils/s3";


const controllers = getHandlers();
const router = Router();

router.route("/test")
	.get(controllers.test);

router.route("/digital")
	.get(controllers.digital_sign);

function getHandlers() {
	return {
		test: async (req: Request, res: Response, next: NextFunction) => {
			try {
				// const prisma = new PrismaClient();
				// const u = await prisma.user.create({
				// 	data: {
				// 		"email": "asd@gmail.com",
				// 	}
				// })
				// ESignController.signTest();
				// console.log("______________DB____", u)
				// const file = fs.readFileSync(path.join(__dirname, "01.png"), "utf-8");
				// console.log("_________________FILE__", file);
				const result = await uploadToS3(path.join(__dirname, "01.png"), "test.png");

				res.json({
					message: "Tested",
				});
			} catch (err) {
				next(err);
			}
		},

		digital_sign: async (req: Request, res: Response, next: NextFunction) => {
			SignController.signTest();
			res.json({
				message: "Signed",
			});
		},
	};
}


export { router };