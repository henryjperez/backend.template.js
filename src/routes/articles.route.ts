import { Router, Response, Request, NextFunction } from "express";
import { validatorMiddleware } from "@middlewares/validator.handler";
import { getOneArticleSchema } from "@schemas/article.schema";
import { ArticlesController } from "@controllers/articles.controller";

const controllers = getHandlers();
const router = Router();

router.route("/")
	.get(controllers.get_articles)

router.route("/:slug")
	.get(validatorMiddleware(getOneArticleSchema, "params"), controllers.getOneArticle);



function getHandlers() {
	return {
		get_articles: async (req: Request, res: Response, next: NextFunction) => {
			try {
				const articles = await ArticlesController.getArticles();
				res.json({
					message: "Articles found ✌",
					data: { articles },
				});
			} catch (err) {
				next(err);
			}
		},
		getOneArticle: async (req: Request, res: Response, next: NextFunction) => {
			try {
				const { slug } = req.params;
				const article = await ArticlesController.getOneArticle(slug);

				res.json({
					message: "Article found",
					statusCode: res.statusCode,
					data: {
						slug,
						article,
					},
				});
			} catch (err) {
				next(err);
			}
		}
	};
}


export { router };