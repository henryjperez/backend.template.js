import { Router, Response, Request, NextFunction } from "express";
import { ArticlesServices } from "@services/articles.services";
import { validatorMiddleware } from "@middlewares/validator.handler";
import { getOneArticleSchema } from "@schemas/article.schema";

const service = new ArticlesServices();
const controllers = getControllers();
const router = Router();

router.route("/")
	.get(controllers.get_articles)

router.route("/:slug")
	.get(validatorMiddleware(getOneArticleSchema, "params"), controllers.getOneArticle);



function getControllers() {
	return {
		get_articles: async (req: Request, res: Response, next: NextFunction) => {
			try {
				const arts = await service.find();
				res.json({
					message: "Getted",
					data: arts,
				});
			} catch (err) {
				next(err);
			}
		},
		getOneArticle: async (req: Request, res: Response, next: NextFunction) => {
			try {
				const { slug } = req.params;
				const article = await service.findOne(slug);

				res.json({
					message: "Article found",
					statusCode: res.statusCode,
					data: {
						slug,
					},
				});
			} catch (err) {
				next(err);
			}
		}
	};
}


export { router };