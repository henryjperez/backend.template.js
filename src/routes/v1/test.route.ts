import { Router, Response, Request, NextFunction } from "express";
import { validatorMiddleware } from "@middlewares/validator.handler";
import { imagesMiddleware, imageResizeMiddleware } from "@middlewares/images.handler";
import { getTestDTOQuerySchema, postTestDTOBodySchema, getTestDTOParamsSchema, postImageWithTextBodySchema } from "@dto";
import { TestDTOQuery, TestDTOBody, RequestParams, RequestBody, RequestQuery, TestDTOParams } from "@interfaces";
import { ErrorResponse } from "@error";


const controllers = getHandlers();
const router = Router();

/* -------------------------------------------- */
/*                    Routes                    */
/* -------------------------------------------- */
router.route("/ping").get(controllers.ping);
router.route("/error").get(controllers.error);

router.route("/test-dto")
	.get(validatorMiddleware(getTestDTOQuerySchema, "query"), controllers.testDTOGetQuery)
	.post(validatorMiddleware(postTestDTOBodySchema, "body"), controllers.testDTOPostBody);

router.route("/test-dto/:firstName/:lastName").get(validatorMiddleware(getTestDTOParamsSchema, "params"), controllers.testDTOGetParam);

/* -------------------------------------------- */
/*                Images Handling               */
/* -------------------------------------------- */
router.route("/single-image").post(imagesMiddleware("imgField", 1), controllers.singleImage);
router.route("/single-image-resize").post(imagesMiddleware("imgField", 1), imageResizeMiddleware(600), controllers.singleImage);
router.route("/multi-image").post(imagesMiddleware("imgsField", 4), controllers.multiImage);
router.route("/multi-image-resize").post(imagesMiddleware("imgsField", 4), imageResizeMiddleware({ height: 354, width: 511 }), controllers.multiImage);
router.route("/text-plus-image").post(imagesMiddleware("img", 1) , validatorMiddleware(postImageWithTextBodySchema, "body"), controllers.textPlusImage);
router.route("/text-plus-images").post(imagesMiddleware("imgs", 4), controllers.textPlusImages);


function getHandlers() {
	return {
		ping: async (req: Request, res: Response, next: NextFunction) => {
			try {
				res.json({
					message: "pong",
				});
			} catch (err) {
				next(err);
			}
		},
		error: async (req: Request<any, null, any>, res: Response, next: NextFunction) => {
			try {
				throw new ErrorResponse("This is an error that I created to test the error handler", 501);

				res.json({
					message: "You shouldn't see this message",
				});
			} catch (err) {
				next(err);
			}
		},

		testDTOGetQuery: async (req: RequestQuery<TestDTOQuery>, res: Response, next: NextFunction) => {
			try {
				const { name, minimumSevenTeen } = req.query;

				res.json({
					message: "You did it, here are your values",
					data: {
						name,
						minimumSevenTeen,
					}
				});
			} catch (err) {
				next(err);
			}
		},
		testDTOPostBody: async (req: RequestBody<TestDTOBody>, res: Response, next: NextFunction) => {
			try {
				const { name, greaterThanSevenTeen } = req.body;

				res.json({
					message: "You did it, here are your values",
					data: {
						name,
						greaterThanSevenTeen,
					}
				});
			} catch (err) {
				next(err);
			}
		},
		testDTOGetParam: async (req: RequestParams<TestDTOParams>, res: Response, next: NextFunction) => {
			try {
				const { firstName, lastName } = req.params;

				res.json({
					message: "You did it, here are your values",
					data: {
						firstName,
						lastName,
					}
				});
			} catch (err) {
				next(err);
			}
		},


		singleImage: async (req: Request, res: Response, next: NextFunction) => {
			try {
				console.log("_____________image_", req.file);

				res.json({
					message: "testing for the single image",
					data: {
						filename: req.file.filename,
					}
				})

			} catch (err) {
				next(err);
			}
		},
		multiImage: async (req: Request, res: Response, next: NextFunction) => {
			try {
				console.log("_____________images_", req.files);
				let filenames: Express.Multer.File["filename"][];
				if (Array.isArray(req.files)) {
					filenames = req.files.map(file => file.filename);
				}

				res.json({
					message: "testing for multiple images",
					data: {
						filename: filenames,
					}
				})

			} catch (err) {
				next(err);
			}
		},

		textPlusImage: async (req: Request, res: Response, next: NextFunction) => {
			try {
				console.log("_____________image_", req.file, req.body);

				res.json({
					message: "testing for the image plus text",
					data: {
						filename: req.file.filename,
						text: req.body.text,
					}
				})

			} catch (err) {
				next(err);
			}
		},

		textPlusImages: async (req: Request, res: Response, next: NextFunction) => {
			try {
				console.log("_____________images_", req.files, req.body);
				let filenames: Express.Multer.File["filename"][];
				if (Array.isArray(req.files)) {
					filenames = req.files.map(file => file.filename);
				}

				res.json({
					message: "testing for images plus text",
					data: {
						filename: filenames,
						text: req.body.text,
					}
				})

			} catch (err) {
				next(err);
			}
		},
	};
}


export { router };
