import { Router, Response, Request } from "express";
import { ArticlesServices } from "@services/articles.services";

const service = new ArticlesServices();

const controllers = {
	get_articles: async (req: Request, res: Response) => {
		try {
			const arts = await service.find();
			res.json({
				message: "Getted",
				data: arts,
			});
		} catch (err) {
			
		}
	},
};

const router = Router();

router.route("/")
	.get(controllers.get_articles)


export { router };